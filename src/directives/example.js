'use strict';

angular.module('bookingApp').directive('myExample', function ($timeout) {

    function link(scope, element, attr) {``

        scope.data = {
            myData: attr.myData,
            myExample: attr.myExample
        };

        element[0].style.cssText = 'color: red;';

        const firstP = jQuery(".first", element[0]);
        const lastP = jQuery(".second", element[0]);

        firstP[0].style.cssText = 'color: green;';
        lastP[0].style.cssText = 'color: blue;';

        $timeout(function () {
            window.scroll(50, 50);
        }, 3000);
    }

    return {
        restrict: 'A',
        // template: '<div>...</div>' - inline view
        templateUrl: 'src/views/templates/example.html',
        link: link
    }
});
