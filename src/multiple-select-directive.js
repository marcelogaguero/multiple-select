var angular = require('angular'),
    $ = require('jquery');

module.exports = ['$timeout', '$parse', function ($timeout, $parse){

  return {
    link: function ($scope, $element, $attr) {
      var available = $element.find("select").eq(0);
      var selected = $element.find("select").eq(1);

      var key = $element.attr("data-key") || 'id';
      var value = $element.attr("data-value") || 'name';
      var model = selected.attr("model");
      var getter = $parse(model);
      var setter = getter.assign;

      var clean = function () {
        var options1 = $(available).find("option");
        var options2 = getter($scope);
        options1.each(function () {
          var ava = $(this);
          for (var x = 0; x < options2.length; x++) {
            var item = options2[x];
            if (ava.val() == item[key]) ava.remove();
          }
        });
      }

      $($element).find(".right").eq(0).on('click', function () {
        $scope.$apply(function () {
          var options = $(available).find(":selected");
          var values = getter($scope);
          for (var x = 0; x < options.length; x++) {
            var item = $(options[x]);
            values.push({
              [key]: item.val(), [value]: item.text()
            })
            item.remove();
          }
          setter($scope, values);
        })
      });

      $($element).find(".left").eq(0).on('click', function () {
        var options = $(selected).find(":selected");
        for (var x = 0; x < options.length; x++) {
          var item = $(options[x]);
          $(available).append(
            $("<option></option>")
              .val(item.val())
              .text(item.text())
          );

          item.remove();
          //deleteOption(item.val());
        }

        var values = [];
        var options = $(selected).find("option");
        for (var x = 0; x < options.length; x++) {
          var item = $(options[x]);
          values.push({
            [key]: item.val(), [value]: item.text()
          });
        }

        $scope.$apply(function () {
          setter($scope, values);
        });
      });

      $timeout(clean, 0);

    },
    restrict: 'C'

  }

}];