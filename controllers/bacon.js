'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

/**
 * test example
 */
exports.getStaticPage = (req, res) => {
  var requestpath = req.url;
  var filename = path.basename(requestpath);
  var fileextension = path.extname(requestpath);

  //res.send('hello world ' + filename);


  // Check if resource exists and serve 404 page if it doesn't.
  fs.exists(requestpath, function (exists) {
    if ( ! exists) {
      res.render('404', {
        title: '404 [' + requestpath + ']'
      });
    } else {
      res.send('hello world ' + filename);
    }

/*
    fs.readFile(path, function (err, html) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html + '');
      res.end();
    });
*/

  });
};


exports.getBuildStaticPages = (req, res) => {
  res.send('hello world');
};
