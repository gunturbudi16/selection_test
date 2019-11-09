/* Buatlah fungsi/method untuk menentukan bilangan terbesar ke 3 dari array yang dimasukan sebagai parameter. Jika yang dimasukkan bukan merupakan array maka akan mencetak “Parameter should be an array!”. Jika array yang dimasukkan panjangnya kurang dari 3 maka akan mencetak “Minimal array length is 3!”. Fungsi/method juga harus menghandle kemungkinan di dalam array terdapat variable lain selain number (seperti string/character dll) agar tidak error.

Input: thirdHighest([1,2,3,4,5,6])
Output: 4

Input: thirdHighest(“bukan array nih”)
Output: Parameter should be an array!

Input: thirdHighest([1,2])
output: “Minimal array length is 3!”

 Input: thirdHighest([107,1,-4,’a’,’true’,0, -77])
 Output: 0
 for (var i = 0; i < angka.length; i++) {
    for (var j = i + 1; j < angka.length; j++) {
      if (angka[i] > angka[j]) {
        var temp = angka[i];
        angka[i] = angka[j];
        angka[j] = temp;
      }
    }
  }
  return angka;*/

function thirdHighest(angka) {
  for (var i = 0; i < angka.length; i++) {
    if (typeof angka[i] == "boolean" || typeof angka[i] == "string") {
      return "0";
    }
  }
  if (angka.length < 3) {
    return "Minimal array length is 3!";
  } else {
    for (var i = 0; i < angka.length; i++) {
      for (var j = i + 1; j < angka.length; j++) {
        if (angka[i] > angka[j]) {
          var temp = angka[i];
          angka[i] = angka[j];
          angka[j] = temp;
        }
      }
    }
    return angka[angka.length - 3];
  }
}
console.log(thirdHighest([1, 2, 3, 4, 5, 6]));
console.log(thirdHighest([1, 2]));
console.log(thirdHighest([107, 1, -4, "a", true, 0, -77]));
