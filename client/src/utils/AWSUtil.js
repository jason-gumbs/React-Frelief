require('dotenv').config();
const AWS = require('aws-sdk');



//const IAM_USER_KEY = "AKIAJZP2MXRCGTL5JT3A";
//const IAM_USER_SECRET = "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";
AWS.config.update({

  region: 'us-east-1',

credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:c7a1e632-17e1-4592-959d-844c8d216bef'
  })});
var s3 = new AWS.S3({apiVersion: '2006-03-01'});



exports = module.exports = {
  
  
    addPhoto: function (file,func) {

      
      console.log(file.name)
      var uploadParams = {Bucket:'node-sdk-sample-73eaf656-a6b2-4e7b-ad7e-7b2f05fd2fe5', Key: file.name, Body: file};
          s3.upload(uploadParams, function (err, data) {
            if (err) {
              console.log('error in callback');
              console.log(err);
            }
            else{
            console.log('success');
            console.log(data)
            func(data)
            
         }
          });
     
    }}