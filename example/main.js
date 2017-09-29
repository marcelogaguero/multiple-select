var app = angular.module('main', ['multiple-select']);

app.controller('main', ['$scope', function ($scope) {
  $scope.values = [1, 2, 3, 4, 5, 6, 7];
  $scope.options = [{
    id: 4,
    title: "4"
  }, {
    id: 5,
    title: "5"
  }];
}]);

angular.element(function () {
  angular.bootstrap(document, ['main']);
});

