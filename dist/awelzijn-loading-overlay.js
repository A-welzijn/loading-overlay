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
        angular.element(element[0]).wrap("<div class='position-relative loader-wrap'></div>");
        var wrap = angular.element(element[0].parentNode);
        var overlay = document.createElement("div");
        overlay.classList.add("loading-overlay");
        overlay.innerHTML = '<div class="loader" />';
        wrap[0].insertBefore(overlay, element[0]);

        scope.$watch("loading", function (value) {
          if (scope.loading) {
            overlay.style.display = 'block';
            wrap[0].classList.add('min-height');
          } else {
            overlay.style.display = 'none';
            wrap[0].classList.remove('min-height');
          }
        });
      }
    };
  }]);
})();
;