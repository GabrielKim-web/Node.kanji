const express = require('express');
const app = express();
const {addKanji, getKanji, editKanji, removeKanji} = require('./controller');
let portNo = 5555;

app.use(express.json());

app.use(express.static(__dirname + '/../public'));

app.get('/api/kanji', getKanji);
app.post('/api/kanji', addKanji);
app.put('/api/kanji/:id', editKanji);
app.delete('/api/kanji/:id', removeKanji);


app.listen(portNo, () => console.log(`Listening on ${portNo}`));