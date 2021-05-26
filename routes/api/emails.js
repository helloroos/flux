const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
var { google } = require('googleapis');
const keys = require('./config/keys').mongoURI;

const CLIENT_ID = keys.client_id;
const CLIENT_SECRET = keys.client_secret;
const REDIRECT_URI = keys.redirect_uri;
const REFRESH_TOKEN = keys.refresh_token;

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
            // console.log(planId);
            // console.log(req.body)
            // console.log(req)
            // const [email] = req.body.email;
            const to  = req.body.email;
            // {to} = to.email;
            // console.log({to});
            const mailOptions = {
                from: 'FLUX <stateoffluxapp@gmail.com>',
                to: to,
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