function calc() {

    var date = document.getElementById("date").value;
    // reduce month by 1 because javascript month index start from 0
    var month = document.getElementById("month").value - 1;
    var year = document.getElementById("year").value;

    if(date <= 0 || date >= 32 || month < 0 || month > 11 || year < 1600){
        document.getElementById('result').innerHTML = "The date doesn't seem right... does it?";
    } else if(month == 1 && date >= 29){
        document.getElementById('result').innerHTML = "This is just insane. Are you nuts?";
        return true;
    } else {
        let day = 1000 * 60 * 60 * 24;

        let date1 = new Date(year, month, date);
        let date2 = new Date();

        let result = Math.floor((date2.getTime() - date1.getTime()) / day );
        if(result < 0){
            document.getElementById('result').innerHTML = "This calculates age, read and then use.";
        } else {
            document.getElementById('result').innerHTML = result + " days.";
        }
    }
}

function reset(){
    document.getElementById('result').innerHTML = "";
    document.getElementById('values').reset();
}