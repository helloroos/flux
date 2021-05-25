const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
var { google } = require('googleapis');

const CLIENT_ID = "957768252496-6pa4oe3v07ttsk83p3c3fd47jihscd32.apps.googleusercontent.com";
const CLIENT_SECRET = "LDz6xC-kxvZR95PZDmbTQ9XI";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//048N_eApYLQQVCgYIARAAGAQSNwF-L9IrnUQv__RT9sZQ5w4YyMA3fPDI3OjJgNP1-4AdnFumjmxh6hZ1DQ4-3NJdU7bkLCl8D8c";

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
 
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post('/send', (req, res) => {
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
            console.log(planId);
            const { to } = req.body;
            const mailOptions = {
                from: 'FLUX <stateoffluxapp@gmail.com>',
                to: to,
                subject: "Let's get this trip organized!",
                text: `Please join by following this link: `,
                // text: `Please join by following this link: localhost:5000/api/plans/${planId}`,
                // api/plans/:id
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