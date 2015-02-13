var gith = require('gith').create(4000);
var exec = require('child_process').execFile;

var execOptions = {
     maxBuffer: 1024 * 1024 // 1mb
}

gith({repo: 'ianzapolsky/alumnus'}).on('all', function( payload ) {

  if (payload.branch === 'master') {
    // Exec a shell script
    exec('/home/ubuntu/alumnus-django/replace.sh', execOptions, function(error, stdout, stderr) {
      // Log success in some manner
      console.log( 'exec complete' );
    });
  }
});
