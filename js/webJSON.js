function webJSON() {

  // Loop elems
  this.loopElems = function(list = elements, parent = document.getElementsByTagName("body")[0]) {
    for (var i=0; i<list.length; i++) {
      if (!list[i].type) {
        loopElems(list[i].elem, parent);
      }
      else
      {
        this.newElem = createElement(list[i], parent);
        if (list[i].elem) {
          parent = this.newElem;
          loopElems(list[i].elem, parent);
        }
      }
    }
  }

  // Check for child elements
  this.createChildren = function(elem) {
    if (elem.elem) {
      loopElems(elem.elem, elem);
    }
    else {
      return false;
    }
  }

  // Create element
  this.createElement = function(elem, parent) {
        this.newElem = document.createElement(elem.type);
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
      // Create the element
      // Set innerHTML via .text property
  }

  // Populate HEAD with scripts
  this.head = function(data = headData) {
    document.head.innerHTML = "";
    for (var i=0; i<data.length; i++) {
      var newHead = this.createElement(data[i].elem[0], document.head);
    }
    return newHead;
  }

  // Change JSON source file
  this.changeTo = function(file) {
    this.head(headData);
    var jsElm = document.createElement("script");
    jsElm.id = "elems";
    jsElm.type = "application/javascript";
    jsElm.src = "views/"+file+".json";
    document.head.appendChild(jsElm);
    document.body.innerHTML = "";
    this.init();
  }

  // Initiate process
  this.init = function() {
    this.head(headData);
    document.title = title;
    this.loopElems();
  }
  return this;
}
