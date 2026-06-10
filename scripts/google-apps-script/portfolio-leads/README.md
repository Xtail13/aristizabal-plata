# AP Asociados - captura de contactos y leads

Este script registra en Google Sheets los correos ingresados antes de abrir el
portafolio institucional y los mensajes enviados desde el formulario de
contacto. Los contactos generan una notificación por correo al propietario de
la implementación.

## Hoja vinculada

- Archivo: `AP Asociados - Leads descarga portafolio`
- Spreadsheet ID: `1FCJeKQRIeZquDDoa_yueYkn2jvrOwO-wB41nbFkIdUc`
- Pestaña: `AP Asociados - Leads descarga portafolio`
- Pestaña de contactos: `Contactos sitio web`

## Despliegue inicial

1. Abra la hoja en Google Sheets.
2. Ingrese a `Extensiones > Apps Script`.
3. Reemplace el contenido de `Code.gs` por el contenido de este archivo.
4. Guarde el proyecto como `AP Asociados - Captura contactos y leads`.
5. Seleccione `Implementar > Nueva implementación`.
6. Elija `Aplicación web`.
7. Configure `Ejecutar como: Yo` y permita el acceso a cualquier usuario.
8. Autorice el script y copie la URL terminada en `/exec`.
9. Configure esa URL como `GOOGLE_APPS_SCRIPT_ENDPOINT` en Vercel.

## Transferencia futura

1. Transfiera la hoja y comparta el proyecto de Apps Script con la cuenta
   institucional.
2. Inicie sesión con la cuenta propietaria definitiva.
3. Cree una nueva implementación web desde esa cuenta.
4. Actualice `GOOGLE_APPS_SCRIPT_ENDPOINT` en Vercel con la nueva URL.
5. Compruebe una descarga de prueba y retire el acceso de la cuenta temporal.

Google conserva la identidad de quien publica cada implementación. Por eso el
nuevo propietario debe crear una implementación web nueva durante la entrega.
