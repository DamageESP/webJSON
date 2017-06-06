function webJSON() {

  // Loop elems
  this.loopElems = function(list = elements, parent = document.getElementsByTagName("body")[0]) {
    for (var i=0; i<list.elem.length; i++) {
      this.newElem = createElement(list.elem[i]);
      parent && parent.appendChild(this.newElem);
      if (hasChild(list.elem[i])) {
        loopElems(list.elem[i], this.newElem);
      }
    }
  }

  // Check for child elements
  this.hasChild = function(elem) {
    if ("elem" in elem) {
      return true;
    }
    else {
      return false;
    }
  }

  // Create element
  this.createElement = function(elem) {
    this.newElem = document.createElement(elem.type);
    // Create the element
    // Set innerHTML via .text property
    if (elem.text) {
      this.newElem.innerHTML = elem.text;
    }
    // Set attributes
    if (elem.attrs) {
      for (var i = 0; i < elem.attrs.length; i++) {
        this.newElem.setAttribute(elem.attrs[i].type, elem.attrs[i].value);
      }
    }
    return this.newElem;
  }

  // Populate HEAD with scripts
  this.head = function(data) {
    document.head.innerHTML = "";
    for (var i=0; i<data.length; i++) {
      var newHead = document.createElement("script");
      newHead.type = data[i].type;
      newHead.src = data[i].url;
      document.head.appendChild(newHead);
    }
  }

  // Change JSON source file
  this.changeTo = function(file) {
    var jsElm = document.getElementById("elems");
    jsElm.remove();
    this.head(headData);
    jsElm = document.createElement("script");
    jsElm.id = "elems";
    jsElm.type = "application/javascript";
    jsElm.src = "views/"+file+".json";
    document.head.appendChild(jsElm);
    document.body.innerHTML = "";
    this.init();
  }

  // Initiate process
  this.init = function() {
    document.title = title;
    this.loopElems();
  }
  return this;
}
