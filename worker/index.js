var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

var seconds = 5, interval = seconds * 1000;

setInterval(function () {
  docker.createContainer({
    Image: 'zachlatta/incline-scraper',
    Cmd: ['-B', 'chase']
  }, function (err, container) {
    container.start(function (err, data) {
      container.attach({
        stream: true,
        stdout: true,
        stderr: true
      }, function (err, stream) {
        container.modem.demuxStream(stream, process.stdout, process.stderr);
      });

      container.wait(function (err, data) {
        container.remove(function (err, data) {
        });
      });
    });
  });
}, interval);
