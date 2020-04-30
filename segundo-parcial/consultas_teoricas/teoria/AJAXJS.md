# AJAX
Asynchronous JavaScript and XML, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object.
When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, JSON is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript. Both JSON and XML are used for packaging information in the Ajax model.


From: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX

## AJAX `XMLHttp`
In order to make an HTTP request to the server with JavaScript, you need an instance of an object with the necessary functionality.  Its predecessor originated in Internet Explorer as an ActiveX object called XMLHTTP

```javascript
if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```


## AJAX `Request`
In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page

```JavaScript
//// Mozilla, Safari, IE7+ ...
xhr = new XMLHttpRequest()
```

## AJAX `Response`
When you sent the request, you provided the name of a JavaScript function to handle the response.
The XMLHttpRequest response property returns the response's body content as an ArrayBuffer, Blob, Document, JavaScript Object, or DOMString, depending on the value of the request's responseType property.

```javascript
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
}
```

## AJAX `Basic estructure`
``` javascript
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json'
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
}

xhr.open('GET', url)
xhr.send()
```

## AJAX `XML File`
AJAX can be used for interactive communication with an XML file.
XML document can be called from api / endpoint, internet or from local file.
### Javascript
``` javascript
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint.xml'; // here extension .xml

xhr.responseType = 'document'
xhr.onreadystatechange = () => {
 # code, work with your xml in response
}

xhr.open('GET', url)
xhr.send()
```
### xml
```XML
<CATALOG>
  <CD>
    <TITLE>Empire Burlesque</TITLE>
    <ARTIST>Bob Dylan</ARTIST>
    <COUNTRY>USA</COUNTRY>
    <COMPANY>Columbia</COMPANY>
    <PRICE>10.90</PRICE>
    <YEAR>1985</YEAR>
  </CD>
  <CD>
    <TITLE>Hide your heart</TITLE>
    <ARTIST>Bonnie Tyler</ARTIST>
    <COUNTRY>UK</COUNTRY>
    <COMPANY>CBS Records</COMPANY>
    <PRICE>9.90</PRICE>
    <YEAR>1988</YEAR>
  </CD>
  <CD>
    <TITLE>Greatest Hits</TITLE>
    <ARTIST>Dolly Parton</ARTIST>
    <COUNTRY>USA</COUNTRY>
    <COMPANY>RCA</COMPANY>
    <PRICE>9.90</PRICE>
    <YEAR>1982</YEAR>
  </CD>
</CATALOG>
```

## AJAX `PHP`
php response can be called from api / endpoint, internet or from local server php file
### javascript
``` javascript
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint.php'; //here extension .php

xhr.responseType = 'json'
xhr.onreadystatechange = () => {
 # code, work with your json in response
}

xhr.open('GET', url)
xhr.send()
```
### PHP
This can a lot of ways to do, this is only a example
```php
<?php
  $cd1 = array('title' => 'Empire Burlesque',
            'artist'=> 'Bob Dylan',
            'country'=> 'USA',
            'company'=> 'Columbia',
            'price'=> 10.90,
            'year'=> 1985);
  $cd2 = array('title' => 'Hide your heart',
            'artist'=> 'Bonnie Tyler',
            'country'=> 'UK',
            'company'=> 'CBS Records',
            'price'=> 9.90,
            'year'=> 1988);
  $cd3 = array('title' => 'Greatest Hits',
            'artist'=> 'Dolly Parton',
            'country'=> 'USA',
            'company'=> 'RCA',
            'price'=> 9.90,
            'year'=> 1982);
  $catalog = array($cd1, $cd2, $cd3);
  echo json_encode($catalog);
?>
```

## AJAX `ASP`
### JavaScript
``` javascript
function showHint(str) {
   if (str.length == 0) {
       document.getElementById("txtHint").innerHTML = "";
       return;
   } else {
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               document.getElementById("txtHint").innerHTML = this.responseText;
           }
       };
       xmlhttp.open("GET", "gethint.asp?q=" + str, true);
       xmlhttp.send();
   }
}
```
### ASP
```cpp
<%
response.expires=-1
dim a(30)
'Fill up array with names
a(1)="Anna"
a(2)="Brittany"
a(3)="Cinderella"
a(4)="Diana"
a(5)="Eva"
a(6)="Fiona"
a(7)="Gunda"
a(8)="Hege"
a(9)="Inga"
a(10)="Johanna"
a(11)="Kitty"
a(12)="Linda"
a(13)="Nina"
a(14)="Ophelia"
a(15)="Petunia"
a(16)="Amanda"
a(17)="Raquel"
a(18)="Cindy"
a(19)="Doris"
a(20)="Eve"
a(21)="Evita"
a(22)="Sunniva"
a(23)="Tove"
a(24)="Unni"
a(25)="Violet"
a(26)="Liza"
a(27)="Elizabeth"
a(28)="Ellen"
a(29)="Wenche"
a(30)="Vicky"

'get the q parameter from URL
q=ucase(request.querystring("q"))

'lookup all hints from array if length of q>0
if len(q)>0 then
  hint=""
  for i=1 to 30
    if q=ucase(mid(a(i),1,len(q))) then
      if hint="" then
        hint=a(i)
      else
        hint=hint & " , " & a(i)
      end if
    end if
  next
end if

'Output "no suggestion" if no hint were found
'or output the correct values
if hint="" then
  response.write("no suggestion")
else
  response.write(hint)
end if
%>
```

## AJAX `Database`
It is the same as in the previous examples, the only difference is that in the language that is being used in the backend it obtains information from the database, which will be sent to the client (js), in the format that is required to be sent.

## AJAX `Applications`
The two major features of AJAX allow you to do the following:

    Make requests to the server without reloading the page
    Receive and work with data from the server

## AJAX `Now fetch`
The fetch API is a new standard that provides an alternative to interact over HTTP, with a modern design, based on promises, with greater flexibility and controllability when making calls to the server, and which works both from window and from worker, which is increasingly important. It is also available in Node, so we can use it isomorphically, that is, both on the client and the server.

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

# References

* [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
* [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
* [w3schools](https://www.w3schools.com/xml/ajax_intro.asp)

# Example
[Example functions](../examples/AJAXExm.html)

***

[Index](../README.md)
