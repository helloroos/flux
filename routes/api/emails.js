const React = require("react");

const express = require("express");
const router = express.Router();

var nodemailer = require('nodemailer');
var { google } = require('googleapis');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const CLIENT_ID = require('../../config/keys').google_client_id;
const CLIENT_SECRET = require('../../config/keys').google_client_secret;
const REDIRECT_URI = require('../../config/keys').google_redirect_uri;
const REFRESH_TOKEN = require('../../config/keys').google_refresh_token;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post('/:id/send',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

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

                const user = req.user.firstName.slice(0, 1).toUpperCase() + req.user.firstName.slice(1);
                const planId = req.params.id;
                const email = req.body.email;
                
                const mailOptions = {
                    from: 'FLUX ☀️🌴 <stateoffluxapp@gmail.com>',
                    to: email,
                    subject: `${user} wants to go on a trip with you ✈️`,
                    text: `${user} has invited you to join their travel plan on Flux. Please join the plan at https://state-of-flux.herokuapp.com/#/${planId}.`
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