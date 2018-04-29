require('dotenv').config()
let AWS = require('aws-sdk');


let albumBucketName = 'node-sdk-sample-73eaf656-a6b2-4e7b-ad7e-7b2f05fd2fe5';
let bucketRegion = 'US_EAST_1';
let IdentityPoolId = "us-east-1:c7a1e632-17e1-4592-959d-844c8d216bef";
AWS.config.update({
    accessKeyId : process.env.ACCESS_KEY,
        secretAccessKey : process.env.SECRET_KEY,
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
    })
  });
  
exports = module.exports = {
    addPhoto: function () {
        //console.log(fileNames)
        AWS.config.update({
            
            region: bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
              IdentityPoolId: IdentityPoolId
            })
          });
        let s3 = new AWS.S3({
            apiVersion: '2006-03-01',
            params: {Bucket: albumBucketName}
          });
        var files = document.getElementById('inputs').files;
        console.log(files)
        if (!files.length) {
          return alert('Please choose a file to upload first.');
        }
        let file = files[0];
        let fileName = file.name;
        let albumPhotosKey = encodeURIComponent(albumBucketName) + '//';
      
        var photoKey = albumPhotosKey + fileName;
        s3.upload({
          Key: photoKey,
          Body: file,
          ContentType: file.type
        }, function(err, data) {
          if (err) {
              console.log(err.message)
            return alert('There was an error uploading your photo: ', err.message);
          }
          alert('Successfully uploaded photo.');
          //viewAlbum(albumBucketName);
        });
      }}