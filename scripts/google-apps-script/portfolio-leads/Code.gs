const SPREADSHEET_ID = "1FCJeKQRIeZquDDoa_yueYkn2jvrOwO-wB41nbFkIdUc";
const SHEET_NAME = "AP Asociados - Leads descarga portafolio";

function doGet() {
  return jsonResponse({ ok: true, service: "ap-portfolio-leads" });
}

function doPost(event) {
  const params = event && event.parameter ? event.parameter : {};
  const email = String(params.email || "").trim().toLowerCase();
  const consent = String(params.data_consent || "") === "accepted";
  const honeypot = String(params.website || "").trim();

  if (honeypot) {
    return jsonResponse({ ok: true });
  }

  if (!isValidEmail(email) || !consent) {
    return jsonResponse({ ok: false, error: "invalid_request" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error("Sheet not found: " + SHEET_NAME);
    }

    sheet.appendRow([
      new Date(),
      email,
      String(params.origin || "Sitio web - descarga de portafolio"),
      "Aceptado",
      "Nuevo",
      "",
      "",
    ]);
  } finally {
    lock.releaseLock();
  }

  return jsonResponse({ ok: true });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
