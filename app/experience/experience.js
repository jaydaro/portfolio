'use strict';

angular.module('myApp.experience', ['ngRoute', 'chart.js'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/experience', {
            templateUrl: 'experience/experience.html',
            controller: 'ExperienceCtrl'
        });
    }])

    .controller('ExperienceCtrl', function ($scope) {
        $scope.labels1 = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.data1 = [300, 500, 100];

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

    });