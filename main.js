function spawn67() {
  var a67 = document.createElement("img");
  a67.src = "https://static.wikia.nocookie.net/stealabr/images/4/40/Fourtyone.png/revision/latest?cb=20251014024859";
  a67.height = "50";
  a67.width = "50";
  var x = Math.floor(Math.random() * 1000 - 1000);
  var y = Math.floor(Math.random() * 1000 - 1000);
  a67.top = y;
  a67.right = x;
  document.body.appendChild(a67);
  setInterval(spawn67, 1);
}
