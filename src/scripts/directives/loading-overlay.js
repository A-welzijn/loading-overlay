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
        element[0].parentNode.classList.add("position-relative");

        var overlay = document.createElement("div");
        overlay.classList.add("loading-overlay");
        overlay.innerHTML = '<i class="fa fa-refresh fa-spin"></i>';
        element[0].parentNode.insertBefore(overlay, element[0]);

        scope.$watch("loading", function (value) {
          if (scope.loading) {
            element[0].style.display = 'none';
            overlay.style.display = 'block';
          } else {
            element[0].style.display = 'block';
            overlay.style.display = 'none';
          }
        });
      }
    }
  }]);
})();
;