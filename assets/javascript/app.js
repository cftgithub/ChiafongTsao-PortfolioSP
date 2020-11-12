var today = new Date();

function greeting() {
    var hour = today.getHours();
    if (hour < 12) {
        hour = "Good Morning! "
    }
    if (hour >= 12 && hour < 18) {
        hour = "Good Afternoon! "
    }
    if (hour >= 18) {
        hour = "Good Evening! "
    }
    console.log(hour);

    var day = today.getDay();
    var dayofweek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]
    var month = today.getMonth();
    var monthList = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ]
    var date = today.getDate() + ", ";
    var year = today.getFullYear();

    document.getElementById("date").innerHTML =
        hour + "Today is " + dayofweek[day] + ", " + monthList[month] + " " + date + year;
}
greeting();

function hireBanner(id){
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data + textNode.data;

    setInterval(function(){
        // text = text[text.length - 1] + text.substring(0, text.length -1);
        text = text.substring(1, text.length) + text[0];
        textNode.data = text;
    }, 200);
}