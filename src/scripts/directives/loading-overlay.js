'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.loading-overlay');
  } catch (e) {
    module = angular.module('awelzijn.loading-overlay', []);
  }
  module.directive('aWelzijnLoadingOverlay', [function () {
    return {
      restrict: 'A',
      scope: {
        loading: "="
      },
      link: function (scope, element, attrs) {
        element.parentNode.classList.add("position-relative");

        var overlay = document.createElement("div");
        overlay.classList.add("loading-overlay");
        overlay.innerHTML = '<i class="fa fa-refresh fa-spin"></i>';
        element.parentNode.insertBefore(overlay, element);

        scope.$watch("loading", function (value) {
          if (scope.loading) {
            element.style.display = 'none';
            overlay.style.display = 'block';
          } else {
            element.style.display = 'block';
            overlay.style.display = 'none';
          }
        });
      }
    }
  }]);
})();