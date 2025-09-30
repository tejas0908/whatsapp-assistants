import express from 'express';
import twilio from 'twilio';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

//const accountSid = process.env.TWILIO_ACCOUNT_SID;
//const authToken = process.env.TWILIO_AUTH_TOKEN;
//const client = twilio(accountSid, authToken);

app.get('/health', (req, res) => {
    res.send('OK');
});

app.post('/webhook', (req, res) => {
    console.log(req.body.Body);
    const twiml = new twilio.twiml.MessagingResponse();
    const message = twiml.message("Message received! Hello again from the Twilio Sandbox for WhatsApp.");
    res.type('text/xml').send(message.toString());
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});