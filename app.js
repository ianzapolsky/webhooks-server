var gith = require('gith').create(4000);
var exec = require('child_process').execFile;

gith({repo: 'ianzapolsky/alumnus'}).on('all', function( payload ) {

  if (payload.branch === 'master') {
    // Exec a shell script
    exec('/Users/ianzapolsky/projects/webhooks-server/hello.sh', function(error, stdout, stderr) {
      // Log success in some manner
      console.log( 'exec complete' );
    });
  }
});
