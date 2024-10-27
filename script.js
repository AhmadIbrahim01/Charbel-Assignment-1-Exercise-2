var x = prompt("Enter x: ");

for (var i = 1; i <= x; i++) {
    var string = "";
    var number = 1;

    for (var j = 0; j < i; j++) {
        string += number + " "
        number += 2;
    }
    console.log(string);
}
