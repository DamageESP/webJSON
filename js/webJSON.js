var webJSON = {
  headData: undefined,
  elements: undefined,
  title: undefined,
  newElem: undefined,
  // Loop elems
  loopElems: function(list, parent = document.getElementsByTagName("body")[0]) {
    for (var i=0; i<list.length; i++) {
      if (!list[i].type) {
        webJSON.loopElems(list[i].elem, parent);
      }
      else
      {
        webJSON.newElem = webJSON.createElement(list[i], parent);
        if (list[i].elem) {
          parent = webJSON.newElem;
          webJSON.loopElems(list[i].elem, parent);
        }
      }
    }
  },

  // Create element
  createElement: function(elem, parent) {
        webJSON.newElem = document.createElement(elem.type);
        // Set innerHTML via .text property
        if (elem.text) {
          webJSON.newElem.innerHTML = elem.text;
        }
        // Set attributes
        if (elem.attrs) {
          for (var j = 0; j < elem.attrs.length; j++) {
            webJSON.newElem.setAttribute(elem.attrs[j].type, elem.attrs[j].value);
          }
        }
        parent.appendChild(webJSON.newElem);
        return webJSON.newElem;
  },

  // Populate HEAD with scripts
  head: function(data = webJSON.headData) {
    document.head.innerHTML = "";
    for (var i=0; i<data.length; i++) {
      webJSON.loopElems(data[i].elem, document.head);
    }
  },

  // Load JSON elements async. and return them through resolve(response)
  loadJSON: function(file) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://damageesp.github.io/webJSON/views/"+file+".json");
      xhr.responseType = "json";
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      }
    });
  },

  // Initiate the JSON file
  init: function(file = "pag1") {
    if (!file) {
      file = window.location.pathname.split("/").pop();
    }
    webJSON.loadJSON(file).then(function(response){
      for (var i=0; i<response.length; i++) {
        if (response[i].title) {
          webJSON.title = response[i].title;
        } else if (response[i].headData) {
          webJSON.headData = response[i].headData;
        } else if (response[i].elements) {
          webJSON.elements = response[i].elements;
        }
      }
      webJSON.headData && webJSON.head(webJSON.headData);
      document.title = webJSON.title;
      webJSON.elements && (document.body.innerHTML = "");
      webJSON.loopElems(webJSON.elements);
    }).catch(function(response){
      console.log("json load status: "+response);
    });
  }
}
