const kanji = require('./data/kanji.json');

function addKanji(req, res) {
   kanji.push(req.body);
   res.status(200).json(kanji);
}

function editKanji(req, res) {
   const {id} = req.params;
   let editHere = kanji.findIndex((element, index) => index == id);
   kanji[editHere] = req.body;
   res.status(200).json(kanji);
}

function removeKanji(req, res) {
   //we need the id of the card that we want to delete
   const {id} = req.params;
   let spliceHere = kanji.findIndex((element, index) => index == id);
   kanji.splice(spliceHere, 1);
   res.status(200).json(kanji);
}

function getKanji(req, res) {
   res.status(200).json(kanji);
}

module.exports = {
   addKanji, editKanji, removeKanji, getKanji
}