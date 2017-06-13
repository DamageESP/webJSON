# webJSON
Generate dynamic websites with JSON-based HTML.
# Usage
Create your custom HTML web page using the following JSON structure:
* To set your page title, you can use `title = "my title"`
* To include your head scripts, you can use `headData = [Array of elem]`
Each one of these `elem` elements has to be an Object and has to have the properties `type` and `url`
Example code:
```
headData = [{
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
}
];
```
* To establish your elements in your page, you will have to create an `"elem"` object inside your `elements` variable. Then, follow with the type of element you want to create and add all you want to it.
Example code:
```
elements = {
  "elem": [
    {
      "type": "div",
      "text": "hey broder",
      "attrs": [
        {
          "type": "style",
          "value": "background:blue;color:white;"
        }
      ]
   }
}
```
# Full example
```
title = "myScripts";
headData = [{
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
        },
        {
          "type": "type",
          "value": "text/css"
        }
      ]
  }]
}];
elements = [{
  "elem": [{
    "type": "div",
    "attrs": [{
      "type": "style",
      "value": "background:blue"
      }],
    "elem": [{
      "type": "button",
      "text": "1",
      "attrs": [{
        "type": "onclick",
        "value": "changeTo('pag2')"
        }]
      },
      {
      "type": "button",
      "text": "2"
      },
      {
        "type": "p",
        "text": "dentro de blue hehe",
        "attrs": [{
          "type": "style",
          "value": "color:green"
          },{
            "type": "id",
            "value": "parrafo"
            }]
        }]
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
    "text": "mi h2",
    },{
      "type": "button",
      "text": "hey",
      "attrs": [{
        "type": "onclick",
        "value": "myFunction()"
        }]
      }]
  }]

```
