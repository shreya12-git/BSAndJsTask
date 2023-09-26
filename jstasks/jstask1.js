function reverseNumber(n) {
  let reversedNumber = 0;
  while (n != 0) {
    reversedNumber = (reversedNumber * 10) + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversedNumber;
}
  console.log("the reverse of the number is:"+reverseNumber(32243));