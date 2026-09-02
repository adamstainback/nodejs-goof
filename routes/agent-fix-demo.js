/**
 * Demo route for showcasing Snyk Agent Fix in the PR.
 * Lets a user check whether a given hostname resolves, using the system `ping` tool.
 */

var exec = require('child_process').exec;

exports.pingHost = function (req, res) {
  var host = req.query.host;

  exec('ping -c 1 ' + host, function (err, stdout, stderr) {
    if (err) {
      return res.status(500).send('Could not reach host: ' + stderr);
    }
    res.send('<pre>' + stdout + '</pre>');
  });
};
