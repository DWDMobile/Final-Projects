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

      // skygear.config({
      //   'endPoint': 'https://<your-app-name>.skygeario.com/', // trailing slash is required
      //   'apiKey': '<your-api-key>',
      // }).then(() => {
      //   console.log('skygear container is now ready for making API calls.');
      // }, (error) => {
      //   console.error(error);
      // });

        $(document).ready(function() {

          //camera function
          $('.addphoto').click(function() {
              app.takePhoto();
              // $(this).addClass("cameraimage");
          });
          $("#recipeimagediv").on("click", function(){
          $(".recomend").addClass("showrecomend");
          $(".like").addClass("showlike");
        });
        });
        },

      takePhoto: function() {
          navigator.camera.getPicture(this.onSuccess, this.onFail, { quality: 50,
              destinationType: Camera.DestinationType.DATA_URL
          });
      },

      onSuccess: function(imageData) {
          var image = $('.the-photo').attr('src', "data:image/jpeg;base64," + imageData);
          $('.the-photo').addClass("cameraimage");
      },

      onFail: function() {
          console.log('Something went wrong');
      }
    }
