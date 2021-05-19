const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.i0dhy.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    name: String,
    book : String,
    genre : String,
    description : String,
    image : String
});

var Authdata = mongoose.model('authdata',AuthSchema);
module.exports = Authdata;

