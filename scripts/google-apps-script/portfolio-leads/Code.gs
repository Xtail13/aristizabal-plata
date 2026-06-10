const SPREADSHEET_ID = "1FCJeKQRIeZquDDoa_yueYkn2jvrOwO-wB41nbFkIdUc";
const PORTFOLIO_SHEET_NAME = "AP Asociados - Leads descarga portafolio";
const CONTACT_SHEET_NAME = "Contactos sitio web";

function doGet() {
  return jsonResponse({ ok: true, service: "ap-website-leads" });
}

function doPost(event) {
  const params = event && event.parameter ? event.parameter : {};
  const formType = String(params.form_type || "portfolio").trim();
  const email = String(params.email || "").trim().toLowerCase();
  const consent = String(params.data_consent || "") === "accepted";
  const honeypot = String(params.website || "").trim();

  if (honeypot) {
    return jsonResponse({ ok: true });
  }

  if (
    ["contact", "portfolio"].indexOf(formType) === -1 ||
    !isValidEmail(email) ||
    !consent
  ) {
    return jsonResponse({ ok: false, error: "invalid_request" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    if (formType === "contact") {
      appendContact(params, email);
    } else {
      appendPortfolioLead(params, email);
    }
  } finally {
    lock.releaseLock();
  }

  if (formType === "contact") {
    sendContactNotification(params, email);
  }

  return jsonResponse({ ok: true });
}

function appendPortfolioLead(params, email) {
  getSheet(PORTFOLIO_SHEET_NAME).appendRow([
    new Date(),
    email,
    String(params.origin || "Sitio web - descarga de portafolio"),
    "Aceptado",
    "Nuevo",
    "",
    "",
  ]);
}

function appendContact(params, email) {
  const name = String(params.name || "").trim();
  const phone = String(params.phone || "").trim();
  const message = String(params.message || "").trim();

  if (!name || !phone || !message) {
    throw new Error("Missing required contact fields");
  }

  getSheet(CONTACT_SHEET_NAME).appendRow([
    new Date(),
    name,
    email,
    phone,
    String(params.company || "").trim(),
    message,
    String(params.origin || "Sitio web - formulario de contacto"),
    "Aceptado",
    "Nuevo",
    "",
  ]);
}

function getSheet(sheetName) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(sheetName);

  if (!sheet) {
    throw new Error("Sheet not found: " + sheetName);
  }

  return sheet;
}

function sendContactNotification(params, email) {
  const recipient = "contacto@apasociados.co";

  try {
    MailApp.sendEmail({
      to: recipient,
      replyTo: email,
      subject: "Nuevo contacto desde apasociados.co",
      name: "AP Asociados - Sitio web",
      htmlBody:
        "<p>Se recibio un nuevo contacto desde la pagina web.</p>" +
        "<p><strong>Nombre:</strong> " +
        escapeHtml(params.name) +
        "<br><strong>Correo:</strong> " +
        escapeHtml(email) +
        "<br><strong>Telefono:</strong> " +
        escapeHtml(params.phone) +
        "<br><strong>Empresa:</strong> " +
        escapeHtml(params.company) +
        "</p><p><strong>Mensaje:</strong><br>" +
        escapeHtml(params.message) +
        "</p>",
    });
  } catch (error) {
    console.error("No se pudo enviar la notificacion", error);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\r?\n/g, "<br>");
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
