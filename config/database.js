const mongoose = require('mongoose');

const db = mongoose.connection;

const connectionURI = 'mongodb+srv://admin:321Meow321@cluster0.rhzud.mongodb.net/carbtracker?retryWrites=true&w=majority';

mongoose.connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});