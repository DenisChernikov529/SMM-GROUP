function neworderb(n){

  var x = new XMLHttpRequest();
  x.open("GET", "/newworder/" + n, true);
  x.onload = function (){
  }
  x.send(null);
  setTimeout(() => { location.reload(); }, 500);
};
function deletemodel(n){

  var x = new XMLHttpRequest();
  x.open("GET", "/deleteorder/" + n, true);
  x.onload = function (){
  }
  x.send(null);
  setTimeout(() => { location.reload(); }, 500);
};
