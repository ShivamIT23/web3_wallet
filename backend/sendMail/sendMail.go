package sendMail

import (
	"fmt"
	"os"
	"strings"
	"github.com/resend/resend-go/v3"
)

func SendMailFunc(to, subject, html string) {
	apiKey := os.Getenv("RESEND_API_KEY")

	client := resend.NewClient(apiKey)

	params := &resend.SendEmailRequest{
		From:    "Wallet Guardian <noreply@wallet.shivam23.me>",
		To:      []string{to},
		Html:    html,
		Subject: subject,
	}

	sent, err := client.Emails.Send(params)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println(sent.Id)
}

func SendOTPFunc(to, otp string) {
	apiKey := os.Getenv("RESEND_API_KEY")

	client := resend.NewClient(apiKey)
	htmlTemplate := `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wallet Guardian Verification</title>
  
  <style>
    /* Importing Space Grotesk (Brand), Inter (Body), and JetBrains Mono (Code) */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@700&family=Space+Grotesk:wght@500;700&display=swap');
    
    body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #050505; color: #ffffff; }
    table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    
    .otp-box:hover { border-color: #22d3ee !important; box-shadow: 0 0 20px rgba(34, 211, 238, 0.4) !important; }
    .footer-link:hover { color: #ffffff !important; text-decoration: underline !important; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: 'Inter', Helvetica, Arial, sans-serif;">

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #050505; background-image: radial-gradient(circle at 50% 0%, #1e1e24 0%, #050505 100%);">
    <tr>
      <td align="center" style="padding: 40px 15px;">

        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #111111; border: 1px solid #333333; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);">
          
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #6366f1 0%, #22d3ee 50%, #6366f1 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <tr>
            <td style="padding: 40px 30px;">
              
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 32px;">
                    <div style="font-family: 'Space Grotesk', Helvetica, Arial, sans-serif; font-weight: 700; color: #ffffff; font-size: 22px; letter-spacing: -0.5px; display: inline-block; border-bottom: 1px solid #333333; padding-bottom: 10px;">
                      Wallet <span style="color: #22d3ee;">Guardian</span>
                    </div>
                  </td>
                </tr>
              </table>

              <h1 style="margin: 0 0 16px 0; font-family: 'Space Grotesk', Helvetica, Arial, sans-serif; font-size: 26px; font-weight: 700; color: #ffffff; text-align: center; letter-spacing: -1px;">
                Verify Your Identity
              </h1>

              <p style="margin: 0 0 32px 0; font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #a1a1aa; text-align: center;">
                Enter the following code to authorize this transaction. For your security, this code expires in <span style="color: #ffffff; font-weight: 600;">5 minutes</span>.
              </p>

              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <div class="otp-box" style="background-color: #0a0a0a; border: 1px dashed #444444; border-radius: 12px; padding: 24px; max-width: 260px; text-align: center; transition: all 0.3s ease;">
                      <span style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 32px; font-weight: 700; color: #22d3ee; letter-spacing: 4px; display: block; text-shadow: 0 0 15px rgba(34, 211, 238, 0.2);">
                        {{otp}}
                      </span>
                    </div>
                  </td>
                </tr>
              </table>

              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 32px;">
                <tr>
                  <td style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 16px; border: 1px solid rgba(34, 211, 238, 0.1);">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="24" valign="top" style="padding-right: 12px;">
                          <span style="font-size: 18px;">🛡️</span>
                        </td>
                        <td style="font-family: 'Inter', sans-serif; font-size: 13px; color: #d4d4d8; line-height: 1.5;">
                          <strong style="color: #22d3ee;">Wallet Guardian Security:</strong><br>
                          Never share this code. Our support team will never ask for your OTP or private keys.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
          
          <tr>
            <td style="background-color: #0c0c0c; padding: 24px; border-top: 1px solid #27272a; text-align: center;">
               <p style="margin: 0; font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 12px; color: #52525b; line-height: 1.6;">
                 <a href="https://wallet.shivam23.me" class="footer-link" style="color: #71717a; text-decoration: none; font-weight: 500;">Wallet Guardian</a>
                 <br>
                 Secure Web3 Infrastructure
               </p>
            </td>
          </tr>
        </table>
        
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; margin-top: 20px;">
          <tr>
            <td align="center">
              <p style="margin: 0; font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 11px; color: #404040;">
                <a href="#" style="color: #404040; text-decoration: none;">Unsubscribe</a> • <a href="#" style="color: #404040; text-decoration: none;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`
	finalHTML := strings.Replace(htmlTemplate, "{{otp}}", otp, 1)

	params := &resend.SendEmailRequest{
		From:    "Wallet Guardian <noreply@wallet.shivam23.me>",
		To:      []string{to},
		Html:    finalHTML,
		Subject: "Your Verification Code",
	}

	sent, err := client.Emails.Send(params)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println(sent.Id)
}
