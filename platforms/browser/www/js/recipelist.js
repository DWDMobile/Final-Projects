var app = {
    // Application Constructor
    initialize: function() {
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

        // $(document).ready(function() {
        //
        //   //slide menu from left
        //   var menuBtn = document.getElementById('menu');
        //
        //   menuBtn.addEventListener("click", function(){
        //     var slideLeft = document.getElementById('slide-left');
        //     slideLeft.style.transform = "translateX(0%)";
        //   });
        //
        //   var closeBtn = document.getElementById('close');
        //   var slideLeft = document.getElementById('slide-left');
        //   closeBtn.addEventListener("click", function(){
        //   slideLeft.style.transform = "translateX(-101%)";
        //   });

          //oyster sauce alternative

          //recipe instruction color change

        }
      }
