const express = require('express');
const bodyParser = require('body-parser');
const messagecontroller = require('./controllers/messages_controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public/build'));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, messagecontroller.create);
app.get(messagesBaseUrl, messagecontroller.read);
app.put(`${messagesBaseUrl}/:id`, messagecontroller.update);
app.delete(`${messagesBaseUrl}/:id`, messagecontroller.delete);

const port = 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); });