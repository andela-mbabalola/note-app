(function() {
  'use strict';
  var express = require('express'),
      //creating an instance of express
      app = express(),
      path = require('path'),
      port = process.env.PORT || 8000;

  app.use(express.static(path.join(__dirname, './public')));

  function apiMiddleware(req, res, next){
      next();
  }

  app.use('/api', apiMiddleware);

  app.get('/*', function (req, res){
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.listen(port);
  console.log('Successfully connected to port ' + port);

  module.exports = app;

})();
