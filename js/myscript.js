var q = document.getElementById("q");
var r = document.getElementById("maxR");
var ytList = new ytList();
q.onkeypress = function(e) {
  if (e.which == "13") {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDuc8QK7PC9PvLBXcSzz9R0koHYLB3S2UM&q="+q.value+"&maxResults="+r.value);
    xhr.responseType = "json";
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        console.log(xhr.response);
        ytList.clear();
        ytList.populate(xhr.response);
      }
    }
  }
}

function ytList(vids){
  var myNode = document.getElementById("results");
  this.clear = function () {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
  this.populate = function(vids) {
    var elemts = [];
    for (var i = 0; i < vids.items.length; i++) {
      elemts.push({
        type: "div",
        attrs: [{type: "class", value: "video"}],
        elem: [{
          type: "a",
          text: vids.items[i].snippet.title,
          attrs: [{type: "href", value: "https://youtube.com/watch?v="+vids.items[i].id.videoId}]
        },
        {
          type: "img",
          attrs: [{type: "src", value: vids.items[i].snippet.thumbnails.default.url}]
        },
        {
          type: "p",
          text: "as"
        }]
      });
    }
    web.loopElems(elemts, myNode);
  }
}
