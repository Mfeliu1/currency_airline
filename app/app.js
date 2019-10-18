'use strict';
var app = angular.module('airlineCurr', []);



app.controller('airlineCtrl', function ($scope) {
    $scope.itineraries = [{}];
    $scope.addRow = function () {
        if ($scope.usprice > 0){
            var x = $scope.usprice;
            $scope.itineraries.push({'origin':$scope.origin, 'destination':$scope.destination, 'usprice':$scope.usprice, 'argprice':x*58.2299,
                'esprice':x*.8987, 'gerprice':x*.8987});

        }
        if ($scope.argprice > 0){
            var x = $scope.argprice;
            $scope.itineraries.push({'origin':$scope.origin, 'destination':$scope.destination, 'usprice':x/58.2299, 'argprice':$scope.argprice,
                'esprice':x/64.7138, 'gerprice':x/64.7138});
        }
        if ($scope.esprice > 0){
            var x = $scope.esprice;
            $scope.itineraries.push({'origin':$scope.origin, 'destination':$scope.destination, 'usprice':x*1.1126, 'argprice':x*64.7738,
                'esprice':$scope.esprice, 'gerprice':x});
        }
        if ($scope.gerprice > 0){
            var x = $scope.gerprice;
            $scope.itineraries.push({'origin':$scope.origin, 'destination':$scope.destination, 'usprice':x*1.1126, 'argprice':x*64.7738,
                'esprice':x, 'gerprice':$scope.gerprice});
        }
        $scope.origin= '';
        $scope.destination= '';
        $scope.usprice= '';
        $scope.argprice = '';
        $scope.esprice = '';
        $scope.gerprice= '';
    };
    $scope.exportTable = function (csv, filename) {
        var csvFile;
        var downloadLink;
        csvFile = new Blob([csv], {type: "text/csv"});
        downloadLink = document.createElement("a");
        downloadLink.download = filename;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
});


