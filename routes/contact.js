const keys = require('../config/keys');
const nodemailer = require('nodemailer');

module.exports = app => {

    app.post('/process-contact',(req, res, next) => {

        res.send(req.data)
      
        var name = req.body.name,
        email = req.body.email,
        contactNumber = req.body.phone,
        suburb = req.body.suburb,
        subject = req.body.subject,
        enquiry = req.body.enquiry;
      
        var subjectForEmail = `
      <p>Hi Aby, you have a new enquiry from your website</p>
      <br>Name : ${name}, <br> 
        Phone : ${contactNumber}, <br> 
        Location : ${suburb}, <br> 
        Subject : ${subject}, <br> 
        More Details : ${enquiry} <br><br>
        Cheers
        `;
      
        const transporter = nodemailer.createTransport({                  
          service: keys.emailService,
          auth: {
            user: keys.senderEmail,
            pass: keys.senderEmailPass
          }            
      
          // service: 'gmail',
          // auth: {
          //   user: 'melvinsalmat@gmail.com',
          //   pass: 'services-123'
          // }

        });
        
        const mailOptions = {
            from: keys.senderEmail,
            to: keys.adminEmail,
            subject: 'A new enquiry for Mantra Driving School',
            html: subjectForEmail
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      
      })
}