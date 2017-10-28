var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider
   
   .when('/', {
      templateUrl: 'home.html'
   })
   
   .when('/about', {
      templateUrl: 'about.html'
   })
   
   .when('/contact', {
      templateUrl: 'contact.html'
   })
   
   .when('/articles', {
      templateUrl: 'articles.html'
   })
   
   .when('/courses', {
      templateUrl: 'courses.html'
   })
   
   .when('/fieldsvisits', {
      templateUrl: 'fieldsvisits.html'
   })
   
   .when('/interships', {
      templateUrl: 'interships.html'
   })
   
   .when('/gallery', {
      templateUrl: 'gallery.html'
   })
   
   .when('/profile', {
      templateUrl: 'profile.html'
   })
   
   .otherwise({
      redirectTo: '#/'
   });
	
}]);

mainApp.controller('MyCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});