var palindrome = function(input) {
  return input.toLowerCase().split("").reverse().join("") === input.toLowerCase();
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    var input = $("input#word").val();
    var result = palindrome(input);

    $(".palindrome").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
