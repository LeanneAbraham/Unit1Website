//MODULE 3
//initialize function called when the script loads
function initialize(){
	cities();
};
//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{city: 'Madison', population: 233209},
		{city: 'Milwaukee', population: 594833},
		{city: 'Green Bay', population: 104057},
		{city: 'Superior', population: 27244},
		{city: 'Washington, DC', population: 658893},
		{city: 'Wheaton, MD', population: 48284},
		{city: 'Syracuse, NY', population: 144669},
		{city: 'Middletown, DE', population: 19600}
		];
	//append the table element to the div
	$("#mydiv").append("<table>");
	//append a header row to the table
	$("table").append("<tr>");
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
		};

    addColumns(cityPop);
    addEvents();
};
//function to add a column to table with the city size
function addColumns(cityPop){
	//finds all the table rows
    $('tr').each(function(i){
		//finds the header row
    	if (i == 0){
		//Adds City Size column header to the first line
    		$(this).append('<th>City Size</th>');
    	}
		else {
		//creates variable citySize
    		var citySize;
		//uses if else to assign the generalized city size based on population
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
		//populates the city size cells
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};
//function to change text color and create popup
function addEvents(){
	$('table').mouseover(function (){
		//assigns rgb code to variable color
		var color = "rgb(";

		for (var i=0; i<3; i++){
			//generates a random number between 0 and 1 then multiplies it by 255 and rounds to create a whole number
			var random = Math.round(Math.random() * 255);
			//adds random number to color 3 times
			color += random;
			//if this has run less than 3 times adds a ,
			if (i<2){
				color += ",";
			//otherwise closes the statement
			} else {
				color += ")";
		};
	};
	//assigns the color property to the css for the table
	$(this).css('color', color);

});
//function to create a popup when event is triggered
function clickme(){
	//creates popup
	alert('Hey, you clicked me!');
};
//triggers popup when table is clicked on
$('table').click(clickme);
};

//ajax with jQuery

//define AJAX function
function jQueryAjax(){
    //define a variable to hold the data
    var mydata;
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
          mydata = response;
            //check the data, can access the data here
						console.log("this is the data:");
            console.log(mydata);
						//adds the stringified data to #mydiv plus some html formattting and a title
						$("#mydiv").append('</br><b>GeoJSON data:</b>' + "<p>" + JSON.stringify(mydata) + "</p>");
						//console.log(JSON.stringify(response));

						//START DEBUGGING HERE

						//all of this existed above

						// function debugCallback(response){
						// 	$("#mydiv").append('GeoJSON data:' + JSON.stringify(mydata));
						// };

						//function debugAjax(){
							//Already defined this above
							//var mydata;

							// $.ajax("data/MegaCities.geojson", {
							// 	dataType: "json",
							// 	success: function(response){
							//
							// 		debugCallback(mydata);
							// 	}
							// });

							// $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
						//};
        }
    });
//check the data, cannot access the data outside of the ajax function
console.log(mydata);
};

//call the initialize function when the document has loaded
$(document).ready(jQueryAjax);
$(document).ready(initialize);
