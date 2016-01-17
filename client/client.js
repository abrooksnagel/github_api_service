/**
 * Created by abrooksnagel on 1/16/16.
 */
var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', 'GithubService', function($scope, GithubService) {

    $scope.gitStuff = GithubService.data;
    GithubService.makeCall();

}]);

app.factory('GithubService', ['$http', function($http) {

    var data = {};

    var makeCall = function() {
        $http.jsonp('https://api.github.com/users/abrooksnagel/events?callback=JSON_CALLBACK').then(function (response) {

            //Just checking the information I'm receiving
            //for (var i=0; i < response.data.data.length; i++) {
            //    console.log(response.data.data[i].repo.url);
            //}
            //console.log(response.data.data);

            data.results = response.data;

            //Previous attempt to manipulate the info before sending it to the DOM
            //data.results = response.data.data;

        })
    };
    return {
        makeCall: makeCall,
        data: data
    }
}]);

