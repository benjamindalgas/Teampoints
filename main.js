var shot = ["jordan.gif",  "lebron.gif", "lillard.gif", "kobe.gif", "miss1.gif", "miss2.gif"];
var shot3 = ["steph3.gif", "miss3.gif"];
var teamscore = 0;




function randomshot() {
    var x = Math.floor(Math.random() * shot.length);
    var imagepicker = shot[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x < 4) {
        addscore();
    } else {
        noscore();
    }
  
}

function randomshot3(){
    var x = Math.floor(Math.random() * shot3.length);
    var imagepicker = shot3[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x < 1) {
        addscore3();
    } else {
        noscore();
    }

}

function addscore() {
  teamscore += 2;
  document.getElementById("teamdisplay").innerHTML = teamscore;
   setTimeout(function blackout() {document.getElementById("dunkpic").src = "black.jpg";},  6000);
}

function addscore3() {
  teamscore += 3;
  document.getElementById("teamdisplay").innerHTML = teamscore;
  setTimeout(function blackout() {document.getElementById("dunkpic").src = "black.jpg";},  6000);
}

function noscore() {
  teamscore += 0;
  document.getElementById("teamdisplay").innerHTML = teamscore;
  setTimeout(function blackout() {document.getElementById("dunkpic").src = "black.jpg";},  6000);
}



