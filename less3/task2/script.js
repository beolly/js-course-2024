let tData = new Date();
let dday= tData.getDay();

function dayto(){
    if (dday==0){
       alert("Sunday");
    }
    if (dday==1){
       alert("Monday");
    }
    if (dday==2){
       alert("Tuesday");
    }
    if (dday==3){
       alert("Wednesday");
    }
    if (dday==4){
       alert("Thursday");
    }
    if (dday==5){
        alert( "Friday");
    }
    else {
       alert("Saturday");
    }
   

}
dayto();
