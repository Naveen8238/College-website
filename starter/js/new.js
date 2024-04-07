let a = window.prompt("enter a number");
// function PrimeNumber(a) {
//   isPrime = true;
//   let n1 = Number(a);
//   if (n1 <= 1) {
//     console.log("Neither prime number or not");
//   } else if (n1 >= 2) {
//     for (let i = 2; i < n1; i++) {
//       if (n1 % i == 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       console.log("It is prime number");
//     } else {
//       console.log("It is not Prime number");
//     }
//   } else {
//     console.log("It is not a number");
//   }
// }
// PrimeNumber(a);
let obj = {
  name: "naveen",
  course: "MERN STACK",
  education: [
    { inst: "abc", state: "cd" },
    { inst: "abc", state: "cd" },
    { inst: "abc", state: "cd" },
  ],
};
obj.education.forEach((element) => {
  console.log(element.inst);
});

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function findPrimeNumber(start, end) {
  let Primes = [];
  let ends = Number(end);
  for (let i = start; i <= ends; i++) {
    if (isPrime(i)) {
      Primes.push(i);
    }
  }
  let newarray = Primes.filter((item, index) => {
    return index % 2 !== 0;
  });
  console.log(newarray);
  return Primes;
}
console.log(findPrimeNumber(1, a));
