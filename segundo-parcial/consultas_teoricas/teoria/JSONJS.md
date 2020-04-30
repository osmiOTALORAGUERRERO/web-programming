# JSON
JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax but is distinct from it: some JavaScript is not JSON.
## JSON Syntax

*    Data is in name/value pairs
*    Data is separated by commas
*    Curly braces hold objects
*    Square brackets hold arrays

```javascript
{
  'books' : [
    {'title':'name1', 'author':'author1', 'year':1960},
    {'title':'name2', 'author':'author2', 'year':1870}
  ]
}
```

## JSON vs XML
JSON is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript.

## JSON Data Types
JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax but is distinct from it: some JavaScript is not JSON.
```
JSON = null
    or true or false
    or JSONNumber
    or JSONString
    or JSONObject
    or JSONArray

JSONNumber = - PositiveNumber
          or PositiveNumber
PositiveNumber = DecimalNumber
              or DecimalNumber . Digits
              or DecimalNumber . Digits ExponentPart
              or DecimalNumber ExponentPart
DecimalNumber = 0
             or OneToNine Digits
ExponentPart = e Exponent
            or E Exponent
Exponent = Digits
        or + Digits
        or - Digits
Digits = Digit
      or Digits Digit
Digit = 0 through 9
OneToNine = 1 through 9

JSONString = ""
          or " StringCharacters "
StringCharacters = StringCharacter
                or StringCharacters StringCharacter
StringCharacter = any character
                  except " or \ or U+0000 through U+001F
               or EscapeSequence
EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
              or \u HexDigit HexDigit HexDigit HexDigit
HexDigit = 0 through 9
        or A through F
        or a through f

JSONObject = { }
          or { Members }
Members = JSONString : JSON
       or Members , JSONString : JSON

JSONArray = [ ]
         or [ ArrayElements ]
ArrayElements = JSON
             or ArrayElements , JSON
```

## JSON Parse
Parse the string text as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a SyntaxError to be thrown. The reviver option allows for interpreting what the replacer has used to stand in for other datatypes.

```javascript
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

[See more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## JSON Stringify
The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
```javascript
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"
```
[See more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## JSON Objects
Property names must be double-quoted strings; trailing commas are forbidden.
```javascript
{"result":true, "count":42}
```

## JSON Arrays
Property names must be double-quoted strings; trailing commas are forbidden.
``` javascript
{
    'books':[
    {'title':'name1', 'author':'author1', 'year':1960},
    {'title':'name2', 'author':'author2', 'year':1870}
  ]
}
```
## JSON PHP
```php
<?php
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>
```
[See more here](https://www.w3schools.com/js/js_json_php.asp)

## JSON HTML
It is the use of javascript and the DOM to display the obtained JSON data.

[See more here](https://www.w3schools.com/js/js_json_html.asp)

## JSON JSONP
JSONP is a method for sending JSON data without worrying about cross-domain issues.

JSONP does not use the XMLHttpRequest object.

JSONP uses the `<script>` tag instead.

```html
<script src="demo_jsonp.php">
```
```php
<?php
$myJSON = '{ "name":"John", "age":30, "city":"New York" }';

echo "myFunc(".$myJSON.");";
?>
```
```JavaScript
function myFunc(myObj) {
  document.getElementById("demo").innerHTML = myObj.name;
}
```
[See more here](https://www.w3schools.com/js/js_json_jsonp.asp)

# References

* [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
* [w3schools](https://www.w3schools.com/js/js_json_intro.asp)

# Examples
[Example json](../examples/Example.json)
Take from https://www.coinapi.io/

***

[Index](../README.md)
