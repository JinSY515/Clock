var timer = document.getElementById("timer");
var hours=00;
var minutes=00;
var seconds=00;
var mseconds=00;
var hourView=document.getElementById("hours");
var minView=document.getElementById("minutes");
var secView=document.getElementById("seconds");
var msecView=document.getElementById("mseconds");
var StartBtn=document.getElementById("StartBtn");
var StopBtn=document.getElementById("StopBtn");
var RecordBtn=document.getElementById("RecordBtn");
var ResetBtn=document.getElementById("ResetBtn");
var record_list = document.getElementById('record_list');
var Interval; 
 
StartBtn.addEventListener('click',function(){
    clearInterval(Interval);
    Interval=setInterval(startCounting,10);
});

StopBtn.onclick=function(){
    clearInterval(Interval);
};

RecordBtn.onclick=function(){
    createRecord();
}

ResetBtn.onclick=function(){
    clearInterval(Interval);
    mseconds="00";
    seconds="00";
    minutes="00";
    hours="00";
    msecView.innerHTML=mseconds;
    secView.innerHTML=seconds;
    minView.innerHTML=minutes;
    hourView.innerHTML=hours;
    record_list.innerHTML="";
}
 
function createRecord(){
    var n=document.createElement("li");
    var record=timer.textContent;
    var tn=document.createTextNode(record);
    n.appendChild(tn);
    record_list.appendChild(n);
}

function startCounting(){
    mseconds++;
    if(mseconds<9){
        msecView.innerHTML="0"+mseconds;
    }
    if(mseconds>9){
        msecView.innerHTML=mseconds;
    }
    if(mseconds>99){
        seconds++;
        secView.innerHTML="0"+seconds;
        mseconds=0;
        mseconds.innerHTML="0"+0;
    }
    if(seconds>9){
        secView.innerHTML=seconds;
    }
    if(seconds>59){
        seconds=0;
        secView.innerHTML="0"+0;
        minutes++;
        minView.innerHTML="0"+minutes;
    }
    if(minutes>9){
        minView.innerHTML=minutes;
    }
    if(minutes>59){
        minutes=0;
        minView.innerHTML="0"+0;
        hours++;
        hourView.innerHTML="0"+hours; 
    }
}

/*timer*/
var timer2 = document.getElementById("timer2");
var t_hours=00;
var t_minutes=00;
var t_seconds=00;
var t_mseconds=00;
var t_hourView=document.getElementById("t_hours");
var t_minView=document.getElementById("t_minutes");
var t_secView=document.getElementById("t_seconds");
var t_msecView=document.getElementById("t_mseconds");
var plushour=document.getElementById("plushour");
var plusmin=document.getElementById("plusmin");
var plussec=document.getElementById("plussec");
var StartBtn2=document.getElementById("StartBtn2");
var StopBtn2=document.getElementById("StopBtn2");
var ResetBtn2=document.getElementById("ResetBtn2");
var t_Interval; 

plushour.onclick=function(){
    t_hours++;
    if(t_hours<=9){
        t_hourView.innerHTML="0"+t_hours;
    }
    if(t_hours>9){
        t_hourView.innerHTML=t_hours;
    }
}

plusmin.onclick=function(){
    t_minutes++;
    if(t_minutes<=9){
        t_minView.innerHTML="0"+t_minutes;
    }
    if(t_minutes>9){
        t_minView.innerHTML=t_minutes;
    }
    if(t_minutes>59){
        t_minutes=0;
        t_minView.innerHTML="0"+0;
        t_hours++;
        if(t_hours<=9)
        t_hourView.innerHTML="0"+t_hours;
        if(t_hours>9)
        t_hourView.innerHTML=t_hours;
    }
}

plussec.onclick=function(){
    t_seconds++;
    if(t_seconds<=9){
        t_secView.innerHTML="0"+t_seconds;
    }
    if(t_seconds>9){
        t_secView.innerHTML=t_seconds;
    }
    if(t_seconds>59){
        t_seconds=0;
        t_secView.innerHTML="0"+0;
        t_minutes++;
        if(t_minutes<=9)
        t_minView.innerHTML="0"+t_minutes;
        if(t_minutes>9)
        t_minView.innerHTML=t_minutes;
        if(t_minutes>59){
            t_minutes=0;
            t_minView.innerHTML="0"+0;

            t_hours++;
            if(t_hours<=9)
            t_hourView.innerHTML="0"+t_hours;
            if(t_hours>9)
            t_hourView.innerHTML=t_hours;
        }
    }
}

ResetBtn2.onclick=function(){
    clearInterval(t_Interval);
    t_mseconds="00";
    t_seconds="00";
    t_minutes="00";
    t_hours="00";
    t_msecView.innerHTML=t_mseconds;
    t_secView.innerHTML=t_seconds;
    t_minView.innerHTML=t_minutes;
    t_hourView.innerHTML=t_hours;
}

StartBtn2.addEventListener('click',function(){
    clearInterval(t_Interval);
    t_Interval=setInterval(startTimer,10);
});

StopBtn2.onclick=function(){
    clearInterval(t_Interval);
};

function startTimer(){
    if(t_mseconds==0 && t_seconds==0 && t_minutes==0 && t_hours==0){
        alert("Time out!");
        clearInterval(t_Interval);
        return;
    }
    if(t_mseconds==0){
        t_mseconds=100;
        t_msecView.innerHTML=t_mseconds;
        if(t_seconds==0){
            t_seconds=60;
            t_secView.innerHTML=t_seconds;
            if(t_minutes==0){
                t_minutes=60;
                t_minView.innerHTML=t_minutes;
                if(t_hours==0){
                    t_hourView.innerHTML="0"+t_hours;
                }
                t_hours--;
                if(t_hours<=9){
                    t_hourView.innerHTML="0"+t_hours;
                }
                if(t_hours>9){
                    t_hourView.innerHTML=t_housr;
                }    
            }
            t_minutes--;
            if(t_minutes<=9){
                t_minView.innerHTML="0"+t_minutes;
            }
            if(t_minutes>9){
                t_minView.innerHTML=t_minutes;
            }
        }
        t_seconds--;
        if(t_seconds<=9){
            t_secView.innerHTML="0"+t_seconds;
        }
        if(t_seconds>9){
            t_secView.innerHTML=t_seconds;
        }
    }
    t_mseconds--;
    if(t_mseconds<9){
        t_msecView.innerHTML="0"+t_mseconds;
    }
    if(t_mseconds>9){
        t_msecView.innerHTML=t_mseconds;
    }
    
    
}