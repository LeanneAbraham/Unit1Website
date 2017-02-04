// these are the notes from class 1.31.2017
function initialize () {
  jsAjax ();
};

//demo of ajax using plain javascript
function jsAjax (){
  //instatiate an ajax requet object
  var ajaxRequest = new XMLHttpRequest ();

  //create an event hadler for the request
  ajaxRequest.onreadystatechange = function (){
    console.log(ajaxRequest.readyState);
    if (ajaxRequest.readyState == 4) {
      //shows the data in the console in a string, but we wannt it to be a json object
      // console.log(ajaxRequest.response);
      //to send the data to a different function, call a callback function and send the data to it
      jsCallback(ajaxRequest.response);
    };
  };

  ajaxRequest.open('GET', 'data/MegaCities.geojson', 'true');
  //two types of ajax request, a get request which gets data from the server
  //or a post request which sends data to the server
  //so you either get or post, then the path to the data, and then mark if you want it to run the data, false means nothing would run until you got the data

  //set the data type, you can tell if you set it correctly when the type is 'feature collection'
  ajaxRequest.responseType = 'json';

  //send the call to the server, big red go button
  ajaxRequest.send();
  //a ready state of 4 means the data is here
  };
  //defines the callback function
  function jsCallback(data){
    // console.log(data);
    //this writes the html to put the data on the page
    var htmlString = "<h3>javascript AJAX resonse text:</h3>";
    htmlString += JSON.stringify(data);
    console.log(htmlString);
    var p = document.createElement("p");
    p.innerHTML = htmlString;
    document.getElementById('mydiv').appendChild(p);
  };

  //ajax with jQuery
  function jQueryCallback (data){
    // console.log(data);
    var htmlString = "<h3>jQuery AJAX Response Text</h3>";
    htmlString += JSON.stringify(data);
    $("#mydiv").append("<p>"+htmlString+"</p>");
  };

  function jQueryAjax(){
    $ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: jQueryCallback
//this is the same way of doing this thing
    // $.getJSON ("data/MegaCities.geojson", jQueryCallback);

    });
  };
window.onload = initialize;
