'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.about',
    'myApp.experience',
    'myApp.version',
    'ui.bootstrap',
    'chart.js'

]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/about'});
    }])


angular.module('myApp').controller('NavbarCtrl', function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 75) {
            $('nav').addClass('shrink');
            $('.nav-image img').attr('src', 'media/header_jay_100px.png')

        } else {
            $('nav').removeClass('shrink');
            $('.nav-image img').attr('src', 'media/header_jay_800px.png')
        }
    });

});