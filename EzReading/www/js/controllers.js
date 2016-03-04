angular.module('starter.controllers', [])
        .controller('BooksCtrl', function ($scope, BooksService, LoaderService) {
            /* View Books */
            LoaderService.show();
            BooksService.all().success(function (response) {
                $scope.books = response;
                LoaderService.hide();
            });

            /* remove book */
            $scope.remove = function (book) {
                BooksService.remove(book);
            }
        })

        .controller('BookDetailCtrl', function ($scope, $http, $stateParams, BooksService, LoaderService) {
            console.log("Call BookDetailCtrl");
            LoaderService.show();
            BooksService.getDetails($stateParams.bookId).success(function (response) {
                $scope.book = response;
                LoaderService.hide();
            });

        });