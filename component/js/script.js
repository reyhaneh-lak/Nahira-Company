
$(document).ready(function(){
    $(".boxSearch__input_items").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".boxSearch__content_item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
