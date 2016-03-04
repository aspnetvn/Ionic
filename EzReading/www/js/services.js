angular.module('starter.services', [])
        .factory('LoaderService', function ($rootScope, $ionicLoading) {
            return {
                show: function () {

                    $ionicLoading.show({
                        // The text to display in the loading indicator
                        content: '<i class="icon ion-looping"></i> Loading',
                        // The animation to use
                        animation: 'fade-in',
                        // Will a dark overlay or backdrop cover the entire view
                        showBackdrop: true,
                        // The maximum width of the loading indicator
                        // Text will be wrapped if longer than maxWidth
                        maxWidth: 200,
                        // The delay in showing the indicator
                        showDelay: 10
                    });
                },
                hide: function () {
                    $ionicLoading.hide();
                }
            };
        })
        .factory('BooksService', function ($q, $http, LoaderService, WEB_CONFIG) {

            return {
                all: function () {
                    return $http({
                        method: 'get',
                        url: WEB_CONFIG.URL + "GetReadingBooks?level=A"
                    });

                },
                remove: function (book) {
                    books.splice(books.indexOf(book), 1);
                },
                getDetails: function (bookId) {
                    return $http({
                        method: 'get',
                        url: WEB_CONFIG.URL + "GetReadingBook?id=" + bookId
                    });
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
