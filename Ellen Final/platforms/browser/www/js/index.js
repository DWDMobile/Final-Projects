// $( document ).ready(function() {
//       $('#itemBox').show();
//   var toggle = true; //toggle false means item is hidden
//   console.log("show");
//   //jquery, # for id, . for class

//   $( "#itemBox" ).click(function() {
//       if(toggle == false){
//           $('#itemBox').show();
//           toggle = true;
//             console.log("show");
//       }
//       else{
//           $( "#itemBox" ).hide( "slow" );
//           toggle = false;
//             console.log("hide");
//       }
    
//   });

//   });
////////

$(document).ready(function(){
  $('#itemBox').show();
  var toggle = true; 


    $("#itemBox").click(function(){
       if(toggle == false){
        $("#itemBox").animate({top: '530px'});
                toggle = true;
                 console.log("show");
               }

        else{

        $("#itemBox").animate({top: '610px'});
        toggle = false;
        console.log("hide");
      }

    });
});
 ////////



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

//document.addEventListener("touchstart", function(){}, true);
        

        }



    
}
