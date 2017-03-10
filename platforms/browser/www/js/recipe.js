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



          //oyster sauce alternative
          var oyster = document.getElementById('alterOyster');
          var salt = document.getElementById('alterSalt');

          oyster.addEventListener("click", function(){
            $("#alterOyster").addClass("show");
            $("#alterSalt").addClass("saltshow");
            console.log("addclass");
          });

          salt.addEventListener("click", function(){
            $("#alterOyster").removeClass("show");
            $("#alterSalt").removeClass("saltshow");
            console.log("remove");
          });


          //recipe instruction color change
          $('.recipeinstruction').on('click', function(e) {
          //  debugger;
            $(e.currentTarget).addClass('done');
          });

          $(".unlike").on("click", function(){
            $(this).addClass("removeunlike");
            $(".like").addClass("showlike");
          });

          $(".like").on("click", function(){
            $(this).removeClass("showlike");
            $(".unlike").removeClass("removeunlike");
          });
          //
          // $('.recipeinstruction').click(function(){
          //   $(this).addClass("done");
          // });

        }
      }
