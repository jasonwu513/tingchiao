//Disable async to allow for sequential behavior
async: false;
//Execute the following code once page is fully loaded


// 畫面上的button 按下後執行 SendCommand function

$(document).ready(function()
	{
	$("button").click(SendCommand);
		
	}
)



function SendCommand()
{
	URL = document.URL;
	//抓取元件的ID 讓送出command 時, 可以綁定關鍵字
	commandX = $(this).attr("id");
	URL = URL.replace("index.html", "") + "Command?command=" + commandX;
	$.getJSON(URL, function (data) 
	{
	$('#receive').text(data.cmd);
	}
	)

	//因為按鈕有使用CSS 製造效果, 用className 綁定按鈕效果
	if ($(this).hasClass("start") || $(this).hasClass("stop")){
		if ($(this).hasClass("start")) {
			$(this).text('Stop');
			$(this).addClass('stop btn-danger');
			$(this).removeClass('start');
		} else {
			$(this).text('Start');
			$(this).addClass('start btn-primary');
			$(this).removeClass('stop btn-danger');
		}
	}

	if ($(this).hasClass("pause") || $(this).hasClass("unpause")){
		if ($(this).hasClass("pause")) {
			$(this).text('UnPause');
			$(this).addClass('unpause btn-success');
			$(this).removeClass('pause btn-secondary');
		} else {
			$(this).text('Pause');
			$(this).addClass('pause btn-secondary');
			$(this).removeClass('unpause btn-success');
		}
	}

	if ($(this).hasClass("downdown") || $(this).hasClass("upup")){
		if ($(this).hasClass("upup")){
			$(this).bind('mousedown touchstart', function () {
			$(this).addClass('downdown');
			$(this).removeClass('upup');
			})
		}else{
			$(this).bind('mouseup touchend', function () {
			$(this).addClass('upup');
			$(this).removeClass('downdown');
			})
		}
	}
}

