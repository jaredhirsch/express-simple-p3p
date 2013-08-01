var useragent = require('useragent'),
  policy = require('./config.json'); //TODO specify config path some other way, too.

// add 'P3P' headers so that IE, with default security settings, will allow
// us to set third-party cookies. Only add the headers in that case, saving
// bytes for all the other browsers.
module.exports = function(req, res, next) {
  var browser = useragent.parse(req.headers['user-agent']);
  if (browser.family === 'IE') {
    res.on('header', function() {
      res.setHeader('P3P', policy);
    });
  }
  next();
};
