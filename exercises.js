// if1

// let n = 10;

// if (n > 0) {
//   n++;
// } else {
//   n -= 2;
// }

// n > 0 ? n++ : (n -= 2);

// console.log(n);

// if2

// let a = 10;
// let b = -5;
// let c = 0;

// let positiveCount = 0;
// let negativeCount = 0;

// if (a > 0) {
//   positiveCount++;
// } else if (a < 0) {
//   negativeCount++;
// }

// if (b > 0) {
//   positiveCount++;
// } else if (b < 0) {
//   negativeCount++;
// }

// if (c > 0) {
//   positiveCount++;
// } else if (c < 0) {
//   negativeCount++;
// }

// console.log(positiveCount);
// console.log(negativeCount);

// if3

// let a = 30;
// let b = 25;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// if4

// let a = 4;
// let b = 5;
// let c = 5;

// if (a == c) {
//   console.log(2);
// }

// if (a == b) {
//   console.log(3);
// }

// if (b == c) {
//   console.log(1);
// }

// a == b && console.log(3);

// a == c && console.log(2);

// b == c && console.log(1);

// if5

// let x = 1;

// if (x < -2 || x > 2) {
//   console.log(2 * x);
// } else {
//   console.log(-3 * x);
// }

// if6

// let n = 10;
// let n = 11;
// let n = -5;
// let n = 0;

// if (n > 0) {
//   if (n % 2) {
//     console.log("Musbat toq");
//   } else {
//     console.log("Musbat juft");
//   }
// } else if (n < 0) {
//   if (n % 2) {
//     console.log("Manfiy toq");
//   } else {
//     console.log("Manfiy juft");
//   }
// } else {
//   console.log("Nol");
// }

// Case2

// let A = 20;
// let B = 5;

// let sign = "-";

// switch (sign) {
//   case "+":
//     console.log(A + B);
//     break;
//   case "-":
//     console.log(A - B);
//     break;
//   case "*":
//     console.log(A * B);
//     break;
//   case "/":
//     console.log(A / B);
//   default:
//     console.log("No sign !");
// }

// Case3

let ab = 70;

let a = parseInt(ab / 10);
let b = ab % 10;

let res;

switch (a) {
  case 2:
    res = "Yigirma";
    break;
  case 3:
    res = "O'ttiz";
    break;
  case 4:
    res = "Qirq";
    break;
  case 5:
    res = "Ellik";
    break;
  case 6:
    res = "Oltmish";
    break;
  default:
    res = "...";
}

res += " ";

switch (b) {
  case 1:
    res += "bir";
    break;
  case 2:
    res += "ikki";
    break;
  case 3:
    res += "uch";
    break;
  case 4:
    res += "to'rt";
    break;
  case 5:
    res += "besh";
    break;
  case 6:
    res += "olti";
    break;
  case 7:
    res += "jetti";
    break;
  case 8:
    res += "sakkiz";
    break;
  case 9:
    res += "to'qqiz";
    break;
}

console.log(res);
