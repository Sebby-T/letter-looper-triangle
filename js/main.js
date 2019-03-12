var typeLetter = prompt('Enter a letter:');
  var i;
  var h;

for (i = 0; i < 10; i++) {
  document.write(typeLetter);

  for (h = 0; h < i; h++) {
    document.write(typeLetter);
  }

  document.write('<br>');
}
