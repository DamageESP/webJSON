# webJSON
Generate dynamic websites with JSON-based HTML.
# Usage
Create your custom HTML web page using the following JSON structure:
* To set your page title, you can use `title = "my title"`
* To include your head scripts, you can use `headData = [Array of elements]`
Each one of these elements has to be an Object and has to have the properties `type` and `url`
Example code:
```
headData = [
  {
    "type": "application/javascript",
    "url": "js/index.js"
  },
  {
    "type": "application/javascript",
    "url": "js/webJSON.js"
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
title = "my web title";
headData = [
  {
    "type": "application/javascript",
    "url": "js/index.js"
  },
  {
    "type": "application/javascript",
    "url": "js/webJSON.js"
  }
];
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
      ],
      "elem": [
        {
          "type": "button",
          "text": "pagina 2",
          "attrs": [
            {
              "type": "onclick",
              "value": "changeTo('pag2')"
            }
          ]
        }
      ]
    },
    {
      "type": "h1",
      "text": "titulo json",
      "attrs": [
        {
          "type": "style",
          "value": "color:lightblue;"
        }
      ]
    }
  ]
};
```
