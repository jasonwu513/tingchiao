//Disable async to allow for sequential behavior
async: false;
//Execute the following code once page is fully loaded
$(document).ready(function()
	{
		$( "#StartButton" ).click(SendStart);
		$( "#PauseButton" ).click(SendPause);
		// $( "#UnpauseButton" ).click(SendUnpause);
		$( "#AbortButton" ).click(SendAbort);
		mouseUpDown()
	}
)

//update gets the data from the URL
function SendStart()
{
	if ($(this).hasClass("start")){
		URL = document.URL;
		URL = URL.replace("index.html", "") + "start";
		$.getJSON(URL, function (data) {
			$('#receive').text(data.cmd);
		}
		);
		$(this).text('stop');
		$(this).addClass('stop btn-danger');
		$(this).removeClass('start');
	}else{
		URL = document.URL;
		URL = URL.replace("index.html", "") + "stop";
		$.getJSON(URL, function (data) {
			$('#receive').text(data.cmd);
		}
		);
		$(this).text('start');
		$(this).addClass('start btn-primary');
		$(this).removeClass('stop btn-danger');
	}
}
	
	
function SendPause()
{
	
	if ($("#PauseButton").hasClass("pause")) {
		URL = document.URL;
		URL = URL.replace("index.html", "") + "pause";
		console.log(URL);
		$.getJSON(URL, function (data) {
			$('#receive').text(data.cmd);
		}
		);
		
		$("#PauseButton").text('UnPause');
		$("#PauseButton").addClass('unpause btn-success');
		$("#PauseButton").removeClass('pause btn-secondary');
	} else {
		URL = document.URL;
		URL = URL.replace("index.html", "") + "unpause";
		$.getJSON(URL, function (data) {
			$('#receive').text(data.cmd);
		}
		);
		$("#PauseButton").text('Pause');
		$("#PauseButton").addClass('pause btn-secondary');
		$("#PauseButton").removeClass('unpause btn-success');
	}
}
	
// function SendUnpause()
// {
// 	URL = document.URL;
// 	URL = URL.replace("index.html", "") + "unpause";
// 	$.getJSON(URL, function(data)
// 		{
// 			$('#receive').text(data.cmd);
// 		}
// 	);
// }
	
// function SendStop()
// {
// 	URL = document.URL;
// 	URL = URL.replace("index.html", "") + "stop";
// 	$.getJSON(URL, function(data)
// 		{
// 			$('#receive').text(data.cmd);
// 		}
// 	);
// }
	
function SendAbort()
{
	URL = document.URL;
	URL = URL.replace("index.html", "") + "abort";
	$.getJSON(URL, function(data)
		{
			$('#receive').text(data.cmd);
		}
	);
}


function mouseUpDown()
{
	$("#updown").bind('mousedown touchstart',function() {

		$("#updown").addClass('downdown');
		$("#updown").removeClass('upup');

	})
	$("#updown").bind('mouseup touchend',function(){

		$("#updown").addClass('upup');
		$("#updown").removeClass('downdown');

	})

}


