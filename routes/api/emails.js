const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
var { google } = require('googleapis');

const CLIENT_ID = require('../../config/keys').client_id;
const CLIENT_SECRET = require('../../config/keys').client_secret;
const REDIRECT_URI = require('../../config/keys').redirect_uri;
const REFRESH_TOKEN = require('../../config/keys').refresh_token;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
 
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post('/:id/send', (req, res) => {
    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
    
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'stateoffluxapp@gmail.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,
                },
            });
            
            const planId = req.params.id;
            const email  = req.body.email;
            const mailOptions = {
                from: 'FLUX <stateoffluxapp@gmail.com>',
                to: email,
                subject: "Let's get this trip organized!",
                text: `Please join by following this link: localhost:5000/api/plans/${planId}`,
            };
    
            const result = await transport.sendMail(mailOptions);

            return result;

        } catch (error) {
            return error;
        }
    }
    
    sendMail()
        .then(mail => res.json(mail))
        .catch((error) => console.log(error.message));
});

module.exports = router;