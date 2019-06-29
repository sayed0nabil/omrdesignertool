
// NPM Packages
const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      passport   = require('passport');
// Routes
const users   = require('./routes/api/users'),
      papers  = require('./routes/api/papers'),
      image  = require('./routes/api/image');
// Default Settings
const app = express(),
      port  = process.env.PORT || 4000,
    //   mongodbURI = 'mongodb+srv://seko:seko@mernstackfronttoback-qiptm.mongodb.net/gprojectdb?retryWrites=true';
          mongodbURI = 'mongodb://localhost:27017/ssgprojectdb';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
mongoose
    .connect(mongodbURI, { useNewUrlParser: true })
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err));
app.use(passport.initialize());
require('./authentication/passport')(passport);
// Routes
app.use('/api/users', users);
app.use('/api/papers', papers);
app.use('/api/image', image);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));  
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.listen(port, () => console.log(`listening on port ${port}`));