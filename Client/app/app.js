var app=angular.module("TodoApp",[
    "ui.router",

]);

app.config(function($urlRouterProvider){
    $urlRouterProvider.otherwise("login");
});