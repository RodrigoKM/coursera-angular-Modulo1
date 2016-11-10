(function () {
    'use strict';

    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.listLunch = '';
        $scope.message = '';

        $scope.CheckIfTooMuch = function () {
            if (isEmpty($scope.listLunch)) {
                $scope.message = 'Please enter data first';
            } else if(splitString($scope.listLunch).length <= 3){
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        }
    }

    function isEmpty(list) {
        return list === '';
    }

    function splitString(list) {
        return list.split(',').filter(function(i){return i.trim().length != 0 });
    }

})();