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

  // Load JSON elements async. and return them through resolve(response)
  this.loadJSON = function (file) {
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

  // Initiate the JSON file
  this.init = function(file = "pag1") {
    this.loadJSON(file).then(function(response){
      for (var i=0; i<response.length; i++) {
        if (response[i].hasOwnPropery("title")) {
          this.title = response[i].title;
        } else if (response[i].hasOwnPropery("headData")) {
          this.headData = response[i].headData;
        } else if (response[i].hasOwnPropery("elements")) {
          this.elements = response[i].elements;
        }
      }
      this.headData && web.head(this.headData);
      document.title = this.title;
      document.body.innerHTML = "";
      web.loopElems(this.elements);
    });
  }
}
