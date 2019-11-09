function matrix(angka) {
  var matrix = [];
  var count = Math.floor(Math.random() * 10);
  for (var i = 0; i < angka; i++) {
    matrix[i] = [];
    for (var j = 0; j < angka; j++) {
      matrix[i][j] = count++;
    }
  }
  let diagonal1 = 0,
    diagonal2 = 0;

  for (let row = 0; row < matrix.length; row++) {
    diagonal1 += matrix[row][row];
    diagonal2 += matrix[row][matrix.length - row - 1];
  }
  return diagonal1 + diagonal2;
}

console.log(matrix(3));
