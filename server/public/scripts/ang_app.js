var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    var apikey = "3ab8967d07caf3cc7fcf420937eb687fd8fe09b5";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Batman & Robin';

    var finalURL = gameSearchURL + '&query=' + encodeURI(query) + '&json_callback=JSON_CALLBACK';

    $http.jsonp(finalURL).then(
        function(response) {
            console.log(response.data);
        }
    );


}]);