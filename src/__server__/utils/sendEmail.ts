import nodemailer from "nodemailer";

async function sendEmail(name: string, email: string, message: string) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "contact.jamir@gmail.com", pass: "lsqgqhevwmisczuu" },
  });

  await transporter.sendMail({
    to: "contact.jamir@gmail.com",
    from: email,
    subject: "Contact Message From Portfolio",
    html: `
        <div>
            <h5 
                style="
                    font-size: 18px;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                    margin-bottom: 8px;
                "
            >
                ${name}
            </h5>
            <a 
                href="mailto:${email}"
                style="
                    font-size: 16px;
                    margin: 0;
                    padding: 0;
                "
            >
                ${email}
            </a>
            <p
                style="
                    font-size: 16px;
                    line-height: 20px;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                    margin: 0 0 24px 0;
                    text-align: left;
                "
            >
                ${message}
            </p>
        </div>
    `,
  });
}

export default sendEmail;
