function clock()
{
	var time = "";
	var currentTime = new Date();

	var weekdays = new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");
	var weekday = currentTime.getDay();

	var day = currentTime.getDate();
	day = (day < 10) ? day = "0" + day : day;

	var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	var month = currentTime.getMonth();

	var year = currentTime.getFullYear();
	year += ''

	var hours = currentTime.getHours();
	hours = (hours > 12) ? hours - 12 : hours;
	hours = (hours == 0) ? hours = 1 : hours;

	var minutes = currentTime.getMinutes();
	minutes = (minutes < 10) ? minutes = "0" + minutes : minutes;
	
	var indicator = "";
	if(hours < 11){
		indicator = "am"
	}else{
		indicator = "pm"
	}
	
	time = weekdays[weekday] + " " + day + " " + months[month] + " " + year + " " + hours + ":" + minutes + " " + indicator;
	$(".date").html(time);
}