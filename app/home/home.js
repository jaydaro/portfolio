'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$http', '$scope', '$modal', '$log', function ($http, $scope, $modal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                //controller: 'ModalInstanceCtrl',
                size: size,
                backdrop: true,
                resolve: {
                    items: function () {
                        return $scope.items;

                    }
                }
            });

            modalInstance.onmouseout = function () {
                close()
            }

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


        $scope.labels1 = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.data1 = [300, 500, 100];

        $scope.labels = ["6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm","8pm", "10pm", "12am", "2am", "4am"];
        $scope.series = ['Two Weeks Until Release', 'One Day Before Release'];
        $scope.data = [
            [0, 1, 0, 2, 0, 1, 1,0, 1, 0, 0, 0, 0],
            [3, 2, 2, 4, 5, 6, 4,5, 6,7, 8,10]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };



    }]);

angular.module('myApp.home').controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});