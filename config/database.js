// Require our modules (Mongoose)
const mongoose = require('mongoose');

// Set up shortcut variables
const db = mongoose.connection;

const connectionURI = 'mongodb+srv://admin:321Meow321@cluster0.rhzud.mongodb.net/carbtracker?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Set up a listener to alert us when we're connected
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});