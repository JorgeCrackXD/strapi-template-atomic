'use strict';
const _ = require('lodash');
const AWS = require('aws-sdk');
let env = process.env;
var s3 = new AWS.S3({
  accessKeyId: env.API_AWS_ACCESS_KEY_ID,
  secretAccessKey: env.API_AWS_ACCESS_SECRET,
  region: env.AWS_DEFAULT_REGION,
  params: {
    Bucket: env.API_AWS_BUCKET,
  },
});
/**
 * download service.
 */

module.exports = ({ strapi }) => ({
  download: (key) => {
    var options = {
      Key: key
    };
    return new Promise((res, rej) => {
      s3.getObject(options, function (err, data) {
        if (err) {
          rej(err);
        }
        res(data);
      });
    });
  }
});
