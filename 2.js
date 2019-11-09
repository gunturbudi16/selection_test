function valid_user(username) {
  var hurufkecil = username.toLowerCase();
  for (var i = 0; i < username.length; i++) {
    if (username.length > 5 && username == hurufkecil) {
      return "valid";
    } else {
      return "Invalid";
    }
  }
}

console.log(valid_user("GUNTURBUD"));
console.log(valid_user("budikurniawan"));

/*Format Password: merupakan kombinasi dari 2 digit angka lalu diikuti simbol “@” atau simbol “&” dan diikuti 4 huruf besar
Clue:
Peserta hanya diminta membuat function validasi, tidak boleh membuat form/file HTML.
Examples:
password(“29@PASS”)
return true
password(“234&Agan”)
return false
username(“arkademy”)
return true
username(“Arkademy”)
return false*/
function password(pass) {
  if (pass.length < 7) {
    return false;
  } else {
    var split = [];
    var kalimat = "";
    for (var i = 0; i < pass.length; i++) {
      if (pass[i] == "@" || pass[i] == "&") {
        split.push(kalimat);
        kalimat = "";
      } else if (i == pass.length - 1) {
        kalimat += pass[i];
        split.push(kalimat);
      } else {
        kalimat += pass[i];
      }
    }

    for (var i = 0; i < split.length; i++) {
      var besar = split[1].toUpperCase();
      if (
        Number(split[0]) &&
        split[0].length == 2 &&
        split[1].length == 4 &&
        split[1] == besar
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(password("234&Agan"));
console.log(password("29@PASS"));
console.log(password("29@pas"));
