// how to addEventListener? 
element.attachEvent('onclick', function() { /* do stuff here*/ });


element.addEventListener('click', function() { /* do stuff here*/ }, false);


var myFunctionReference = function() { /* do stuff here*/ }

element.attachEvent('onclick', myFunctionReference);
element.addEventListener('click', myFunctionReference , false);


<a id="testing" href="#" onclick="alert('did stuff inline');">Click me</a>


element.onclick = function () { /*do stuff here */ };


var element = document.getElementById('testing');
element.onclick = function () { alert('did stuff #1'); };
element.onclick = function () { alert('did stuff #2'); };



$(element).on('click', function () { /* do stuff */ });


function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}

// example
addEvent(
    document.getElementById('myElement'),
    'click',
    function () { alert('hi!'); }
);




















