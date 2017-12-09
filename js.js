$(document).ready(() => {
  let input;
  // Inputs array handles our incoming values and operators
  var inputs = [''];
  var totalString;
  var operators1 = ['+', '-', '*', '/'];
  var operators2 = ['.'];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // This program uses the eval() method which takes a string and evaluates it.

  function getValue(input) {
    if (
      operators2.includes(inputs[inputs.length - 1]) === true &&
      input === '.'
    ) {
      $('error').html("Duplicate '.'");
    } else if (inputs.length === 1 && operators1.includes(inputs) === false) {
      inputs.push(input);
    } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
    } else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  function update() {
    totalString = inputs.join('');
    $('#calculation').html(totalString);
  }

  // Runs the eval() method and displays result on screen:

  function getTotal() {
    // Convert array to a string:
    totalString = inputs.join('');
    $('#calculation').html(eval(totalString).toFixed(2));
  }

  $('a').on('click', function() {
    if (this.id === 'AC') {
      inputs = [''];
      $('#calculation').html('0');
    } else if (this.id === 'CE' && inputs.length <= 2) {
      console.log(inputs.length);

      $('#calculation').html('0');
    } else if (this.id === 'CE') {
      inputs.pop();
      update();
    } else if (this.id === 'total') {
      getTotal();
    } else {
      if (inputs[inputs.length - 1].indexOf('+', '-', '/', '*', '.') === -1) {
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }
  });
});
