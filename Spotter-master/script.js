var app = {

    initialize: function () {
        this.bindEvents();

        // when debugging, make sure this prints to the console to ensure you don't have any js errors
        console.log("javascript works");

        $('.changePage').click(function () {
            if ($(this).data('nextPage')) {
                app.changePage($(this).data('nextPage'));
            } else {
                alert("You've reached the last page");
            }
        });
    },




    bindEvents: function () {
        // not set up as a phonegap project, so deviceReady will ever be called
        //        document.addEventListener('deviceready', this.onDeviceReady, false);

//        without phonegap, this is essentially:
            $(document).ready(function () {
                app.onDeviceReady();
            });
    },


    selectOption: function (e) {
        app.changePage('#page3');
//        debugger;
        $('.buttonSelection').html($(e.target).data('need').toUpperCase());
    },
    
    selectPerson: function (id) {
        app.changePage('#page4');
        $('.personSelection').html($('.personOptionButton').val().toUpperCase());
    },
    
    requestPerson: function (id) {
        app.changePage('#page5');
    },


    changePage: function (id) {
        console.log("change page");
        $('.page').each(function () {
            $(this).hide();
        });
        $(id).fadeIn();
    },

    onDeviceReady: function () {
        // config your skygear app

        skygear.config({
            'endPoint': 'https://spotter.skygeario.com/', // trailing slash is required
            'apiKey': '2aa488674f7d46aa9f60d606a422c906',
        }).then(() => {
            console.log('skygear container is now ready for making API calls.');
        }, (error) => {
            console.error(error);
        });


        // click listeners
        $('.sign-up-button').click(function (e) {
            e.preventDefault();
            app.signUpUser();

        });

        $('.sign-in-button').click(function (e) {
            e.preventDefault();
            app.signInUser();
        });

        $('.optionButton').click(function (e) {
            e.preventDefault();
            app.selectOption(e);
        });
        
        $('.personOptionButton').click(function (e) {
            e.preventDefault();
            app.selectPerson();
        });

        $('.requestButton').click(function (e) {
            e.preventDefault();
            app.requestPerson();
        });

    },

    signUpUser: function () {
        var email = $('.login .email').val();
        var password = $('.login .password').val();


        //        if ($('.sign-up .email').val() == undefined) {
        //            console.log(error);
        //            $('.errors').html(error.error.message);
        //        };

        skygear.signupWithEmail(email, password).then(function (user) {
            console.log(user); // user object
            app.changePage('#page2');
        }, function (error) {
            console.log(error);
            $('.errors').html(error.error.message);
        });
    },

    signInUser: function () {
        var email = $('.login .email').val();
        var password = $('.login .password').val();

        skygear.loginWithEmail(email, password).then(function (user) {
            app.changePage('#page2');
            $('.hello .email').html(user.email);
            console.log(user); // user object
        }, function (error) {
            console.log(error);
            $('.errors').html(error.error.message);
        });
    },


}