// Generated by CoffeeScript 1.3.1
(function() {
  var fizzbuzz;

  fizzbuzz = function(x) {
    if (x > 1) {
      fizzbuzz(x - 1);
    }
    if ((x % 3 === 0) && (x % 5 === 0)) {
      return console.log("fizzbuzz");
    } else if (x % 3 === 0) {
      return console.log("fizz");
    } else if (x % 5 === 0) {
      return console.log("buzz");
    } else {
      return console.log(x);
    }
  };

  fizzbuzz(100);

}).call(this);
