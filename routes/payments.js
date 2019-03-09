
const keys = require('../config/keys');
const paypal = require('paypal-rest-sdk');

module.exports = app => {

    app.post('/buywithpaypal',(req, res, next) => {
        console.log('hiddt');
      
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