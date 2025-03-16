$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect:"bounceIn",
        },
        out: {
            effect:"bounceOut",
        },
    });

});

$(document).ready(function () {
    function startBounceAnimation() {
      $('.tlt').textillate({
        loop: true, // Ensures continuous animation
        minDisplayTime: 0, // Remove wait time before restarting
        initialDelay: 0, // Start immediately
        in: {
          effect: 'bounceIn',
          delay: 10
        },
        out: {
          effect: 'bounceOut',
          delay: 10
        }
      });

      // Set interval to trigger animation every 2 seconds
      setInterval(function () {
        $('.tlt').textillate('start');
      }, 3000);
    }
    
    // Initialize animation
    startBounceAnimation();
  });
