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
	
	var indicator = "";
	if(hours < 11){
		indicator = "am"
	}else{
		indicator = "pm"
	}
	
	hours = (hours > 12) ? hours - 12 : hours;
	hours = (hours == 0) ? hours = 1 : hours;

	var minutes = currentTime.getMinutes();
	minutes = (minutes < 10) ? minutes = "0" + minutes : minutes;	
	
	time = weekdays[weekday] + " " + day + " " + months[month] + " " + year + " " + hours + ":" + minutes + " " + indicator;
	$(".date").html(time);
}

var TaskForce = {
	init:function(){
		TaskForce.setupWindow();  
	},
	
	minimize:function(){
		nativeWindow.minimize();  
	},
	
	move:function(){
		nativeWindow.startMove();  
	},
	
	quit:function(){
		var exitingEvent = new air.Event(air.Event.EXITING, false, true);  
		
		air.NativeApplication.nativeApplication.dispatchEvent(exitingEvent);  
		
		if (!exitingEvent.isDefaultPrevented()){  
			air.NativeApplication.nativeApplication.exit();  
		}  
	},
	
	setupWindow:function(){
		$('.minimize').bind('click', function(event){
			event.preventDefault();
			TaskForce.minimize();
		});
		
		$('.close').bind('click', function(event){
			event.preventDefault();
			TaskForce.quit();
		});
		
		$('.handle').bind('mousedown', function(event){
			event.preventDefault();
			TaskForce.move();
		});
	}
};
