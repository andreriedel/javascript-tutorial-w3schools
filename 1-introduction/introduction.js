function changeElement() {
  let demo = document.getElementById("demo1");

  demo.innerHTML = "Hello JavaScript!";
}

/* -------------------------------------------------------------------------- */

function changeImgSrc(bool) {
  if (bool) {
    document.getElementById("myImage").src = "pic_bulbon.gif";
  }
  else {
    document.getElementById("myImage").src = "pic_bulboff.gif";
  }
}

/* -------------------------------------------------------------------------- */

function changeStyle() {
  document.getElementById("demo2").style.color = "red";
}

/* -------------------------------------------------------------------------- */

function hideElement() {
  document.getElementById("demo3").style.display = "none";
}

/* -------------------------------------------------------------------------- */

function showElement() {
  document.getElementById("demo4").style.display = "block";
}
