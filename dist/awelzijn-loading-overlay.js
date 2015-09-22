'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.loadingoverlay');
  } catch (e) {
    module = angular.module('awelzijn.loadingoverlay', []);
  }
  module.directive('aWelzijnLoadingOverlay', [function () {
    return {
      restrict: 'A',
      scope: {
        loading: "="
      },
      link: function (scope, element, attrs) {
        angular.element(element[0]).wrap("<div class='position-relative'></div>");

        var overlay = document.createElement("div");
        overlay.classList.add("loading-overlay");
        overlay.innerHTML = '<div class="loader" />';
        element[0].parentNode.insertBefore(overlay, element[0]);

        scope.$watch("loading", function (value) {
          if (scope.loading) {
            overlay.style.display = 'block';
          } else {
            overlay.style.display = 'none';
          }
        });
      }
    };
  }]);
})();
;