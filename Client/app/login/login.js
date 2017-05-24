"use strict";
angular.module("TodoApp").config(function ($stateProvider) {
    $stateProvider
        .state("login", {
            url:"/login",
            templateUrl:"Client/app/login/login.html",
            controller:"LoginCntrl",
        })

});