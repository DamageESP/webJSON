var q = document.getElementById("q");
var r = document.getElementById("maxR");
var det = document.getElementsByTagName("a");
var ytList = new ytList();
q.onkeypress = function(e) {
  if (e.which == "13") {
    e.preventDefault();
      ytList.populate();
    }
}

function ytList(vids){
  var myNode = document.getElementById("results");

  this.query = function(type, data) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      if (type == "list") {
        xhr.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDuc8QK7PC9PvLBXcSzz9R0koHYLB3S2UM&q="+data.q+"&maxResults="+data.numR);
      } else if (type == "video") {
        xhr.open("GET","https://www.googleapis.com/youtube/v3/videos?id="+data+"&key=AIzaSyDuc8QK7PC9PvLBXcSzz9R0koHYLB3S2UM&part=snippet,contentDetails,statistics,status");
      }
      xhr.responseType = "json";
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      }
    });
  }

  this.details = function(video) {
    this.query("video", video).then(function(result){
      console.log("views: "+result.items[0].statistics.viewCount);
    });
  }

  this.clear = function () {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

  this.populate = function() {
    var elemts = [];
    this.query("list", {q: q.value, numR: r.value}).then(function(list){
      for (var i = 0; i < list.items.length; i++) {
        elemts.push({
          type: "div",
          attrs: [{type: "class", value: "video"}],
          elem: [{
            type: "a",
            text: list.items[i].snippet.title,
            attrs: [{type: "href", value: "#"},{type: "onclick", value: "ytList.details('"+list.items[i].id.videoId+"')"}]
          },
          {
            type: "img",
            attrs: [{type: "src", value: list.items[i].snippet.thumbnails.default.url}]
          }]
        });
      }
      ytList.clear();
      webJSON.loopElems(elemts, myNode);
    });
  }
}
