'use strict';

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);
myApp.controller('appCtrl', function($scope, $http){

    //Format phone
    function formatPhone(str) {
        var numbers = str.replace(/\D/g, ''),
            char = {1:'(',4:') ',7:'-'};
        str = '';
        for (var i = 1; i < numbers.length; i++) {
            str += (char[i]||'') + numbers[i];
        }
        return str;
    }

    //Format data
    var formatData = function(data){
        var listings = [];
        angular.forEach(data.listings, function(item){
            var newItem = {
                address: item.location.address,
                locality: item.location.locality,
                postal: item.location.postal,
                phone: formatPhone(item.contact.phone),
                email: item.contact.email,
                purchase_type: item.purchase_types.join(','),
                url: (item.cur_data=== undefined)?item.cur_data.url: ''
            }

            //Add meta data if available
            if (item.cur_data !== undefined) {
                _.extend( newItem, item.cur_data );
            }

            listings.push(newItem);
        });
      return listings;
    }

    //Sorter
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }
    
    //Get data
    $http.get('/data').success(function(data) {   
        $scope.listingData = formatData(data);
    })
});