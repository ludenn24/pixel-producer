function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

var today = new Date();
var month = new Array();
month[0] = "Ene";
month[1] = "Feb";  
month[2] = "Mar";
month[3] = "Abr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Ago";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dic";
var date = (month[today.getMonth()]) + '. ' + today.getFullYear();
jQuery(document).ready(function () {
    jQuery(".date-text").text(date);
});

var day = today.getDate();
jQuery(document).ready(function () {
    jQuery(".day-text").text(day);
});
