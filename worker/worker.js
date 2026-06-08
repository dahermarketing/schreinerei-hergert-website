/**
 * Schreinerei Hergert — Contact Form Worker
 * Receives JSON POST from the Kontakt page, sends email via Resend.
 *
 * NOTE: The `from` address domain must be verified in the Resend dashboard.
 * If you move to a custom domain (e.g. schreinereihergert.de), update FROM
 * below and verify the domain under resend.com → Domains.
 */

const RESEND_API_KEY = 're_8jXGtUPj_7hmhQwXtDotpVg8fLtovP13b';
const FROM = 'Schreinerei Hergert <noreply@schreinerei-hergert-website.philip-61a.workers.dev>';
const TO   = 'philip@dahermarketing.de';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default {
  async fetch(request) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ ok: false, error: 'Method not allowed' }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ ok: false, error: 'Ungültige Anfrage' }, 400);
    }

    const { name, email, phone, anliegen, message } = body;

    if (!name?.trim() || !email?.trim() || !anliegen || !message?.trim()) {
      return jsonResponse({ ok: false, error: 'Pflichtfelder fehlen' }, 400);
    }

    const html = `
<!DOCTYPE html>
<html lang="de">
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1C1C1C">
  <h2 style="margin:0 0 20px;font-size:20px">Neue Anfrage über das Kontaktformular</h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;width:120px;color:#666;font-size:14px">Name</td>
        <td style="padding:8px 0;border-bottom:1px solid #eee">${esc(name)}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">E-Mail</td>
        <td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
    ${phone?.trim() ? `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Telefon</td>
        <td style="padding:8px 0;border-bottom:1px solid #eee">${esc(phone)}</td></tr>` : ''}
    <tr><td style="padding:8px 0;color:#666;font-size:14px">Anliegen</td>
        <td style="padding:8px 0">${esc(anliegen)}</td></tr>
  </table>
  <h3 style="margin:0 0 10px;font-size:16px">Nachricht</h3>
  <p style="margin:0;line-height:1.6;white-space:pre-wrap">${esc(message)}</p>
</body>
</html>`;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Anfrage von ${name} – ${anliegen}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend error:', resendRes.status, err);
      return jsonResponse({ ok: false, error: 'E-Mail konnte nicht gesendet werden. Bitte rufen Sie uns an.' }, 502);
    }

    return jsonResponse({ ok: true });
  },
};
