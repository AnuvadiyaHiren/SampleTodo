"user strict"

angular.module("TodoApp")
    .controller("LoginCntrl", [
        "$scope",
        "$timeout",
        "$q",
        function ($scope, $timeout,$q) {

            $scope.isLoginSuccess = false;
            $scope.isLoading = false;

            $scope.login = function () {

                
                $scope.isLoading=true;
                var deffer = $q.defer();

                deffer.promise.then(function (result) {
                    $scope.isLoading=false;
                    $scope.isLoginSuccess = result;
                });

                $timeout(function () {
                    deffer.resolve(true);
                }, 10000);
            }




        }]);
