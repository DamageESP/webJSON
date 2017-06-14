function webJSON() {

  // Loop elems
  this.loopElems = function(list, parent = document.getElementsByTagName("body")[0]) {
    for (var i=0; i<list.length; i++) {
      if (!list[i].type) {
        this.loopElems(list[i].elem, parent);
      }
      else
      {
        this.newElem = this.createElement(list[i], parent);
        if (list[i].elem) {
          parent = this.newElem;
          this.loopElems(list[i].elem, parent);
        }
      }
    }
  }

  // Create element
  this.createElement = function(elem, parent) {
        this.newElem = document.createElement(elem.type);
        // Set innerHTML via .text property
        if (elem.text) {
          this.newElem.innerHTML = elem.text;
        }
        // Set attributes
        if (elem.attrs) {
          for (var j = 0; j < elem.attrs.length; j++) {
            this.newElem.setAttribute(elem.attrs[j].type, elem.attrs[j].value);
          }
        }
        parent.appendChild(this.newElem);
        return this.newElem;
  }

  // Populate HEAD with scripts
  this.head = function(data = headData) {
    document.head.innerHTML = "";
    for (var i=0; i<data.length; i++) {
      this.loopElems(data[i].elem, document.head);
    }
  }

  // Change JSON source file
  this.changeTo = function(file) {
    this.loadJSON(file).then(function(response){
      response[1].headData && web.head(response[1].headData);
      document.title = response[0].title;
      web.loopElems(response[2].elements);
    });
    /*
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://damageesp.github.io/webJSON/views/"+file+".json");
    xhr.responseType = "text";
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var data = xhr.response;
        console.log(data);
      }
    }
    var jsElm = document.createElement("script");
    jsElm.type = "application/javascript";
    jsElm.src = "views/"+file+".json";
    document.head.appendChild(jsElm);
    document.body.innerHTML = "";
    this.init();*/
  }

  this.loadJSON = function (file = "pag1") {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://damageesp.github.io/webJSON/views/"+file+".json");
      xhr.responseType = "text";
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          resolve(JSON.parse(xhr.response));
        }
      }
    });
  }

  // Initiate process
  this.init = function() {
    this.loadJSON().then(function(response){
      response[1].headData && web.head(response[1].headData);
      document.title = response[0].title;
      web.loopElems(response[2].elements);
    });
  }
}
