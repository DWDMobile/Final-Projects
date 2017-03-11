fucntion buttonClicked(){
  localStorage.setItem("lastsearch",document.getElementById('searchtext').value;
allsearches.push(currentSearch);
var allsearchesString = JSON.stringify(allsearch);
localStorage.setItem("allsearches",allsearchesString);
}

function loaded(){
  document.getElementById("searchtext").value = localStorage.getItem("lastsearch");
}
