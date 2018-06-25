let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);

exports.handler = function (event, context, callback) {
    twitter.postTweet({
        "status": "Hello",
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
        console.log(data);
    }).catch(err => {
        console.log("Error", err);
    });

    callback(null, 'Successfully executed');
}