angular.module('starter.controllers', [])
    .controller('BooksCtrl', function ($scope, $http, Books) {
        $http.get("http://www.ezlearning.edu.vn/ezl/api/EzlApi/GetReadingBooks?level=A").then(function (response) {
            $scope.books = response.data;
            console.log('books: ', $scope.books);
        });

        $scope.remove = function (book) {
            Books.remove(book);
        }
    })

    .controller('BookDetailCtrl', function ($scope, $http, $stateParams, Books) {

        $http.get("http://www.ezlearning.edu.vn/ezl/api/EzlApi/GetReadingBook?id=" + $stateParams.bookId).then(function (response) {
            $scope.book = response.data;
            console.log('book: ', $scope.book);
        });
    });