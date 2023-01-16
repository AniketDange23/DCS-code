function reverse(a, sp, ed) {
  while (i < j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++, j--;
  }
  return a;
}
let a =[1,2,3,4,5,6];
a =reverse (a,n-k,n-1);  