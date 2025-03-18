const prompt = require("prompt-sync")();
function fibonacci(n, m) {
  if (n < 0 || n > 2147483647) {
    console.log(
      "Posisi Fibonacci (n) harus berada dalam rentang 0 ≤ n ≤ 2147483647."
    );
    return;
  }
  if (m < 0 || m > 20) {
    console.log("Angka m harus berada dalam rentang 0 ≤ m < 20.");
    return;
  }
  let pangkat = Math.pow(2, m);

  if (n === 0) {
    console.log(`n= f0, m=${m} = 0`);
    return;
  } else if (n === 1) {
    console.log(`n= f1, m=${m} = ${1 % pangkat}`);
    return;
  }

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let next = (a + b) % pangkat;
    a = b;
    b = next;
  }

  let hasil = b % pangkat;
  console.log(`n= f${n}, m=${m}  = ${hasil} `);
}
n = parseInt(prompt("Masukkan posisi Fibonacci: "), 10);
m = parseInt(prompt("Masukkan angka untuk m (2^m) : "), 10);

fibonacci(n, m);
