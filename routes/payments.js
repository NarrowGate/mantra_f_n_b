
const keys = require('../config/keys');
//const paypal = require('paypal-rest-sdk');
const nodemailer = require('nodemailer');

module.exports = app => {

    app.post('/buywithpaypal',(req, res, next) => {
        console.log('hiddt');

        var customer = {
          fName: req.body.userDetails.first_name,
          lName: req.body.userDetails.second_name,
          cNumber:req.body.userDetails.contact_number,
          email:req.body.userDetails.email,
          address:req.body.userDetails.pickup_address,
          transmission:req.body.userDetails.transmission,
          package:req.body.userDetails.purchasedPackage,
          packagePrice:req.body.userDetails.purchasedPackagePrice
        }

        var transactionDetails = {
          fName: req.body.payerAccountDetails.first_name,
          lName: req.body.payerAccountDetails.second_name,
          payer_id:req.body.payerAccountDetails.contact_number,
          payment_method:req.body.payerAccountDetails.email,
          status:req.body.payerAccountDetails.pickup_address,
          total:req.body.payerAccountDetails.transmission,
          currency:req.body.payerAccountDetails.purchasedPackage
        }

        console.log(req.body);

        var subjectForEmail = `
        <p>Hi Aby, you have a new order from your website. Below is the details of the customer:</p>
        <br>Name : ${customer.fName}, <br> 
        Last Name : ${customer.lName}, <br> 
          Phone : ${customer.cNumber}, <br> 
          Address : ${customer.address}, <br> 
          Transmission : ${customer.transmission}, <br> 
          Package : ${customer.package} <br>
          Package Price : ${customer.packagePrice} <br><br>
          Cheers
          `;

          const transporter = nodemailer.createTransport({                  
            service: keys.emailService,
            name: 'www.yahoo.com',
            secure: false,
            port: 25,
            auth: {
              user: keys.senderEmail,
              pass: keys.senderEmailPass
            }, tls: {
              rejectUnauthorized: false
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
            subject: 'A new order recieved for Mantra Driving School',
            html: subjectForEmail
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });


        res.send('lslsls');
      
        // paypal.configure({
        //   'mode': 'sandbox', //sandbox or live
        //   'client_id': keys.paypalClient_id,
        //   'client_secret': keys.paypalClient_secret
        // });
        
        // const create_payment_json = {
        //   "intent": "sale",
        //   "payer": {
        //       "payment_method": "paypal"
        //   },
        //   "redirect_urls": {
        //       "return_url": "/paymentsuccess",
        //       "cancel_url": "/paymentcancel"
        //   },
        //   "transactions": [{
        //       "item_list": {
        //           "items": [{
        //               "name": "Driving Test",
        //               "sku": "001",
        //               "price": "34.00",
        //               "currency": "USD",
        //               "quantity": 1
        //           }]
        //       },
        //       "amount": {
        //           "currency": "USD",
        //           "total": "34.00"
        //       },
        //       "description": "Driving Test purchase description."
        //   }]
        // };
        
        // paypal.payment.create(create_payment_json, function (error, payment) {
        //   if (error) {
        //       throw error;
        //   } else {
      
        //       for(let i = 0; i < payment.links.length; i++) {
        //         if(payment.links[i].rel === "approval_url") {
      
        //           console.log(payment.links[i].href);
        //           //res.redirect(payment.links[i].href);
        //           res.send(payment.links[i].href);
        //           return payment.links[i].href;
        //         }
        //       }
      
        //   }
        // });
      
      
      
      })
}

  // "proxy" : {
  //   "/buywithpaypal": {
  //     "target":"http://localhost:9000"
  //   }
  // },