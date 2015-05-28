angular.module('starter.services', [])
    .factory('Books', function ($http) {

        return {
            all: function ($http) {
                $http.get("http://www.ezlearning.edu.vn/ezl/api/EzlApi/GetReadingBooks?level=A")
            },

            remove: function (book) {
                books.splice(books.indexOf(book), 1);
            },
            get: function (bookId) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i].id === parseInt(bookId)) {
                        return books[i];
                    }
                }
                return null;
            }
        };
    });
