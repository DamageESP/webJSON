# webJSON
Generate dynamic websites with JSON-based HTML.
Live example: damageesp.github.io/webJSON
# Usage
## Quick overview
All you need to start using your JSON files is to download webJSON.js and instantiate it when your document loads. Create `index.js` and do so, like this:
```
var web = new webJSON();
window.onload = function() {
  web.init('yourIndexPage'); // Default: 'pag1'
}
```
In your index page, include webJSON.js and the index.js to initialize webJSON, and start rolling.
```
<html>
<head>
  <script type="application/javascript" src="js/webJSON.js"></script>
  <script type="application/javascript" src="js/index.js"></script>
</head>
<body>
</body>
</html>
```
After this, you are ready to start using `webJSON.init('pageName')` to navigate through your JSON files live.
```
[{
  "title": "myTitle" // Will set the document.title to myTitle.
},{
  "headData": [{ // Will modify the document.head contents exclusively.
    "elem": [{
      "type": "script",
      "attrs": [{
        "type": "src",
        "value": "https://code.jquery.com/jquery-3.2.1.min.js"
      }]
    }]
  }]
},{
  "elements": [{ // Will modify the document.body contents exclusively.
    "elem": [{
      "type": "div",
      "text": "Div inside body",
      "elem": [{
        "type": "h1",
        "text": "Title inside div."
      },{
        "type": "p",
        "text": "Paragraph inside div, after h1."
      }]
    }]
  }]
}]
```
Create your custom HTML web page using the following JSON structure:
* To set your page title, you can use `"title": "my title"`
* To include your head scripts, you can use `"headData": [Array of elem]`
Each one of these `elem` elements has to be an Object, and you can define its attributes inside the array `"attrs"`, each Object inside `attrs` will have to have a `type` and a `value`.
Example code:
```
[{
  "headData": [{
    "elem": [{
        "type": "script",
        "attrs": [
          {
            "type": "type",
            "value": "application/javascript"
          },
          {
            "type": "src",
            "value": "https://code.jquery.com/jquery-3.2.1.min.js"
          },
          {
            "type": "integrity",
            "value": "sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          },
          {
            "type": "crossorigin",
            "value": "anonymous"
          }
        ]
  }]
}]
```
* To establish your elements in your page, you will have to create an `"elem"` object inside your `elements` Array. Then, follow with the type of element you want to create and add all you want to it. If you want an `elem` inside another `elem`, just put all `elem` Objects you want inside the `elem` key of the current Object.
Example code:
```
[{
  "elements": [{
    "elem": [{
      "type": "div",
      "text": "Div inside body",
      "elem": [{
        "type": "h1",
        "text": "Title inside div."
      },{
        "type": "p",
        "text": "Paragraph inside div, after h1."
      }]
    }]
  }]
}]
```
# Full example
```
[{
  "title":"myScripts"
},
{
  "headData": [{
    "elem": [{
        "type": "script",
        "attrs": [
          {
            "type": "type",
            "value": "application/javascript"
          },
          {
            "type": "src",
            "value": "https://code.jquery.com/jquery-3.2.1.min.js"
          },
          {
            "type": "integrity",
            "value": "sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          },
          {
            "type": "crossorigin",
            "value": "anonymous"
          }
        ]
  }]
},
{
  "elem": [{
      "type": "link",
      "attrs": [
        {
          "type": "rel",
          "value": "stylesheet"
        },
        {
          "type": "href",
          "value": "css/style.css"
        }
      ]
  }]
},
{
  "elem": [{
      "type": "link",
      "attrs": [
        {
          "type": "rel",
          "value": "icon"
        },
        {
          "type": "href",
          "value": "img/fav1.png"
        }
      ]
  }]
},
{
  "elem": [{
      "type": "script",
      "attrs": [
        {
          "type": "type",
          "value": "application/javascript"
        },
        {
          "type": "src",
          "value": "js/webJSON.js"
        }
      ]
  }]
},
{
  "elem": [{
      "type": "script",
      "attrs": [
        {
          "type": "type",
          "value": "application/javascript"
        },
        {
          "type": "src",
          "value": "js/index.js"
        }
      ]
  }]
},
{
  "elem": [{
      "type": "script",
      "attrs": [
        {
          "type": "type",
          "value": "application/javascript"
        },
        {
          "type": "src",
          "value": "js/myscript.js"
        }
      ]
  }]
}]
},
{
  "elements": [{
  "elem": [{
    "type": "div",
    "attrs": [{
      "type": "style",
      "value": "background:blue"
      },
      {
        "type": "class",
        "value": "parrafo"
        }],
    "elem": [{
      "type": "button",
      "text": "pag2",
      "attrs": [{
        "type": "onclick",
        "value": "web.changeTo('pag2')"
        }]
      },
      {
      "type": "button",
      "text": "pag3",
      "attrs": [{
        "type": "onclick",
        "value": "web.changeTo('pag3')"
        }]
      },
      {
        "type": "p",
        "text": "busca",
        "attrs": [{
          "type": "id",
          "value": "parrafo"
          }],
        "elem": [{
          "type":"input",
          "attrs": [{
            "type": "type",
            "value": "text"
            },
            {
            "type": "id",
            "value": "q"
            }]
          },
          {
            "type":"input",
            "attrs": [{
              "type": "type",
              "value": "number"
              },
              {
              "type": "id",
              "value": "maxR"
              },
              {
              "type": "value",
              "value": "5"
              }]
            },
          {
            "type": "button",
            "text": "x",
            "attrs": [{
              "type": "onclick",
              "value": "ytList.clear()"
            }]
          }]
        }]
    }]
  },
  {
    "type": "div",
    "attrs": [{
      "type": "id",
      "value": "results"
    }]
  },
  {
  "elem": [{
    "type": "h1",
    "text": "mi h1"
    }]
  },{
  "elem": [{
    "type": "h2",
    "text": "mi h2"
    },
    {
    "type": "button",
    "text": "hey",
    "attrs": [{
      "type": "onclick",
      "value": "myFunction()"
      }]
    }]
  }]
}]
```
