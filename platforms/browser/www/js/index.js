var app = {
    // Application Constructor
    initialize: function() {
        // call bindEvents function 
        this.bindEvents();

        // when debugging, make sure this prints to the console to ensure you don't have any js errors
        console.log("javascript works");

    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    //put your old initialize code in here, will be executed when your app is ready
    //(kind of like document ready!) 
    onDeviceReady: function() {

        // Variable to store navBar functions
        // var NavbarActions = function() {
        // }

        // Load About Page onClick
        // $("#about-title").on('click hover', function() {
        //     $(this).css("text-decoration", "underline");
        //     $(".about-page-title").show();
        //     console.log("narbar activity!");
        // });

        // Load Carousel onClick
        $("#section-title").on('click hover', function() {
            // onClick underline 
            $(this).css("text-decoration", "underline");
            $("#myCarousel").show();
            $(".multiple-items").slick({
                infinite: true,
                slideToShow: 3,
                autoplaySpeed: 5000,
                dots: true,
                speed: 300,
                fade: true,
            });
            // inspect mouse
            console.log("narbar activity!");
        });
    },
    
};

/* $('#link').click(function() {
   window.history.pushState('obj', 'newtitle', '/abc');
   return false;
});
Or if you want to use url hashes(like in your code):

$('#link').click(function () {
    window.location.hash = 'xyz';
    return false;
});
That will not r
*/