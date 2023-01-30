const nodemailer = require('nodemailer');
const path = require('path');

const getMailOptions = (body, file) => {
  const { jobTitle, name, phone, email, coverLetter, linkedin, facebook } = body;
  const { originalname, path: filePath } = file

  // add cv
  const fileAttachments = [
    {
      filename: originalname,
      path: filePath
    },
    {
      cid: 'logo',
      content_id: 'logo',
      path: path.join(__dirname, '../public/logo.png'),
      filename: 'logo.png',
      type: 'image/png',
      disposition: 'inline',
    },
  ];

  const options = {
    to: process.env.REACT_APP_HR_EMAIL,
    cc: process.env.REACT_APP_TA_EMAIL,
    replyTo: email,
    subject: `[Job Application / Icetea Careers] ${name} - ${jobTitle}`,
    html: `<div style="background:#f5f5f5; display:flex; padding-top:20px; padding-bottom:20px">
    <div style="background: #fff; padding:20px; margin: 0 auto">
        <img src="cid:logo" width="150" alt="Icetea Labs"
                  style="max-width: 100%; vertical-align: middle; line-height: 100%; border: 0;">
          <p style="padding-bottom: 12px; border-bottom: 2px solid #f3f3f3">Hi TA Team,<br />Please find the resume attached for consideration.</p>
          <p><b>Candidate's name: </b>${name}</p>
          <p><b>Candidate's phone: </b>${phone}</p>
          <p><b>Candidate's email: </b>${email}</p>
          <p><b>Cover letter:</b> ${coverLetter}</p>
          <p><b>Facebook:</b> ${facebook || "Not given"}</p>
          <p><b>Linkedin:</b> ${linkedin || "Not given"}</p>
      </div>
  </div>`,
    attachments: fileAttachments,
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Ha Nguyen' },
      { key: 'X-Application-Version', value: 'v1.0.0' },
    ],
  };

  return options;
}

// config mail server
const getMailTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.REACT_APP_EMAIL_SENDER,
      pass: process.env.REACT_APP_EMAIL_SENDER_PASSWORD
    }
  });

  return transporter;
}

module.exports = { getMailOptions, getMailTransporter }
