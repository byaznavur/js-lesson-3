let passingScore = 70;

let score = +prompt("Enter the score of student");

let res;

// if (score >= passingScore) {
//   res = "Passed";
// } else {
//   res = "Failed";
// }

// score >= passingScore ? (res = "Passed") : (res = "Failed");

// res = score >= passingScore ? "Passed" : "Failed";

res = score >= passingScore ? "Passed" : score >= 60 ? "Retake" : "Failed";

console.log(res);
