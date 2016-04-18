    // Run the inital function to Start
window.onload = init;

var qindex = 1;
var random=true;
var sodium;
var magnesium;
var zinc;
var radio_common;
var beakerId="";
var removedData="";
var leadqArray=["Test sample","2","3","4","5"];
var sodiumqArray=["Test sample","2","3","4","5"];
var magnesiumqArray=["Test sample","2","4","6","8"];
var zincqArray=["Test sample","3","5","7","9"];
var count=0;
var countArray=[];
var leadArray=[0.52, 0.34, 0.48, 0.65, 0.83];
var sodiumArray=[0.275, 0.147, 0.221, 0.294, 0.367];
var magnesiumArray=[0.97,0.54, 0.82, 1.15, 1.43];
var zincArray=[0.75, 0.54, 0.69, 0.88, 0.95];


var isDrag = false;
var ie = document.all;
var nn6 = document.getElementById && !document.all;
var moveElement;
document.onmousedown = mDown;
document.onmouseup = mUp;
document.onmousemove = mMove;
var fobjId;
var stop_drops_drag = true;
var enabledrag = true;
var stopdrag=true;
var dropToDragEle={isDrag:false,split_id:0,replacementChild:0,elementColor:0,deletemouseNear:0,deletemouseNearchild:0,oldElecolor:0}
var format;
var fobj;
var store = {};

function init()
{
    addTouch(); 
}

function addTouch() {
    /* touch for dragItems */
    var dragElements = document.getElementsByClassName("beaker");

    for (i = 0; i < dragElements.length; i++) {
        dragElements[i].addEventListener("touchstart", touchHandler, true);
        dragElements[i].addEventListener("touchmove", touchHandler, true);
        dragElements[i].addEventListener("touchend", touchHandler, true);
        dragElements[i].addEventListener("touchcancel", touchHandler, true);
    }

}

function touchHandler(event) {
    event.preventDefault();
    var touches = event.changedTouches,
		first = touches[0],
		type = "";
    switch (event.type) {
        case "touchstart": type = "mousedown"; break;
        case "touchmove": type = "mousemove"; break;
        case "touchend": type = "mouseup"; break;
        default: return;
    }
    //initMouseEvent(type, canBubble, cancelable, view, clickCount,
    //           screenX, screenY, clientX, clientY, ctrlKey,
    //           altKey, shiftKey, metaKey, button, relatedTarget);
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
    first.target.dispatchEvent(simulatedEvent);
}

function radiochange(){
	countArray=[];
	document.getElementById("graphButton").style.visibility="hidden";
	document.getElementById("graph").style.visibility="hidden";
	document.getElementById("anstext").style.visibility="hidden";
	for(i=0;i<5;i++){
		document.getElementById(i+"c2").innerHTML =	"";
		if(beakerId != "")
			document.getElementById(beakerId).style.visibility="visible";
	}
    random = document.getElementById("Pb").checked;
    sodium = document.getElementById("Na").checked;
    magnesium = document.getElementById("Mg").checked;
    zinc = document.getElementById("Zn").checked;

    if (random) {
		document.getElementById("ppmtext").innerHTML = "2 "+	
		"ppm&nbsp;&nbsp;3 ppm&nbsp;&nbsp;&nbsp;4 ppm&nbsp;&nbsp;&nbsp;5 ppm";
        document.getElementById("random_lable").style.fontWeight = "bold";
        document.getElementById("sodium_lable").style.fontWeight = "normal";
        document.getElementById("magnesium_lable").style.fontWeight = "normal";
        document.getElementById("zinc_lable").style.fontWeight = "normal";
      
        document.getElementById("random_lable").style.color = "rgb(0, 51, 255)";
        document.getElementById("sodium_lable").style.color = "#000000";
        document.getElementById("magnesium_lable").style.color = "#000000";
        document.getElementById("zinc_lable").style.color = "#000000";
        qindex = 1;
		for(i=0;i<5;i++){
			document.getElementById(i+"c1").innerHTML =	leadqArray[i];
		}
    }
    else if (sodium) {
		document.getElementById("ppmtext").innerHTML = "2 "+	
		"ppm&nbsp;&nbsp;3 ppm&nbsp;&nbsp;&nbsp;4 ppm&nbsp;&nbsp;&nbsp;5 ppm";
        document.getElementById("random_lable").style.fontWeight = "normal";
        document.getElementById("sodium_lable").style.fontWeight = "bold";
        document.getElementById("magnesium_lable").style.fontWeight = "normal";
        document.getElementById("zinc_lable").style.fontWeight = "normal";

        document.getElementById("random_lable").style.color = "#000000";
        document.getElementById("sodium_lable").style.color = "rgb(0, 51, 255)";
        document.getElementById("magnesium_lable").style.color = "#000000";
        document.getElementById("zinc_lable").style.color = "#000000";
        qindex = 2;
        for(i=0;i<5;i++){
			document.getElementById(i+"c1").innerHTML =	sodiumqArray[i];
		}
    }
    else if (magnesium){
		document.getElementById("ppmtext").innerHTML = "2 "+	
		"ppm&nbsp;&nbsp;4 ppm&nbsp;&nbsp;&nbsp;6 ppm&nbsp;&nbsp;&nbsp;8 ppm";
        document.getElementById("random_lable").style.fontWeight = "normal";
        document.getElementById("sodium_lable").style.fontWeight = "normal";
        document.getElementById("magnesium_lable").style.fontWeight = "bold";
        document.getElementById("zinc_lable").style.fontWeight = "normal";

        document.getElementById("random_lable").style.color = "#000000";
        document.getElementById("sodium_lable").style.color = "#000000";
        document.getElementById("magnesium_lable").style.color = "rgb(0, 51, 255)";
        document.getElementById("zinc_lable").style.color = "#000000";
        qindex = 3;
        for(i=0;i<5;i++){
			document.getElementById(i+"c1").innerHTML =	magnesiumqArray[i];
		}
    }
	else if (zinc){
		document.getElementById("ppmtext").innerHTML = "3 "+	
		"ppm&nbsp;&nbsp;5 ppm&nbsp;&nbsp;&nbsp;7 ppm&nbsp;&nbsp;&nbsp;9 ppm";
        document.getElementById("random_lable").style.fontWeight = "normal";
        document.getElementById("sodium_lable").style.fontWeight = "normal";
        document.getElementById("magnesium_lable").style.fontWeight = "normal";
        document.getElementById("zinc_lable").style.fontWeight = "bold";

        document.getElementById("random_lable").style.color = "#000000";
        document.getElementById("sodium_lable").style.color = "#000000";
        document.getElementById("magnesium_lable").style.color = "#000000";
        document.getElementById("zinc_lable").style.color = "rgb(0, 51, 255)";
        qindex = 4;
        for(i=0;i<5;i++){
			document.getElementById(i+"c1").innerHTML =	zincqArray[i];
		}
    }
}

function okbutclick()
{
    document.getElementById('popup').style.display = "none";
}

function showpopup(){
	document.getElementById('popup').style.display = "block";
    document.getElementById('popupbox').style.width = "400px";
    document.getElementById('popupbox').style.height = "220px";
	document.getElementById("msgtxt").innerHTML ="<u>Standard solution:</u><br/>"+
	"A solution with a known concentration is called a standard solution.<br/>"+
	"e.g. to prepare a 1 ppm standard solution of sodium chloride, we require 0.001 g of sodium "+ 	
	"chloride to be dissolved in 1000 mL of deionised water.<br/><br/>"+
	"ppm = mg/litres of water<br/>1 ppm = 1 mg/L = 1 &mu;g/mL = 1000 &mu;g/L<br/>1 gram pure element dissolved in 1000 mL = 1000 ppm<br/>";
}



/*document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    event.target.style.opacity = "0.4";
});

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget") {
        beakerId = event.dataTransfer.getData("Text");
		document.getElementById("beaker").style.visibility="visible";
		document.getElementById(beakerId).style.visibility="hidden";
		//removedData = document.getElementById(beakerId);
		//console.log(removedData);
		//document.getElementById(beakerId).style.marginLeft = "0px";
		//event.target.appendChild(removedData);
		console.log(beakerId);
    }
});*/

function getReading(){
		document.getElementById("beaker").style.visibility="hidden";
		console.log(beakerId);
		if(beakerId.length>0)
		document.getElementById(beakerId).style.visibility="visible";
	
	if(qindex==1){
		for(i=0; i<5;i++){
			if(beakerId == "beaker"+i){
				document.getElementById(i+"c2").innerHTML =	leadArray[i];
				if (countArray.indexOf(i) == -1) 
					countArray.push(i);
			}
		}
	}else if(qindex==2){
		for(i=0; i<5;i++){
			if(beakerId == "beaker"+i){
				document.getElementById(i+"c2").innerHTML =	sodiumArray[i];
				if (countArray.indexOf(i) == -1) 
					countArray.push(i);
			}
		}	
	}else if(qindex==3){
		for(i=0; i<5;i++){
			if(beakerId == "beaker"+i){
				document.getElementById(i+"c2").innerHTML =	magnesiumArray[i];
				if (countArray.indexOf(i) == -1) 
					countArray.push(i);
			}
		}		
	}else if(qindex==4){
		for(i=0; i<5;i++){
			if(beakerId == "beaker"+i){
				document.getElementById(i+"c2").innerHTML =	zincArray[i];
				if (countArray.indexOf(i) == -1) 
					countArray.push(i);
			}
		}	
	}
	if(countArray.length==5){
		document.getElementById("graphButton").style.visibility="visible";
	}
	
	console.log(countArray);
}


function showGraph(){
	document.getElementById("graphButton").style.visibility="hidden";
	document.getElementById("graph").style.visibility="visible";
	document.getElementById("anstext").style.visibility="visible";
}

function beakerClick(e){
	beakerId = e.target.id;
}

function mDown(e) {
    e.stopPropagation();
    
    fobj = nn6 ? e.target : event.srcElement;
    var topelement = nn6 ? "HTML" : "BODY";
    fobjId = fobj.id;
    //var fobj = nn6 ? e.target : event.target.id;
    //fobjId = beakerId;
	//console.log(fobj.offsetLeft,fobj.offsetTop);
	document.getElementById(fobjId).style.left = fobj.offsetLeft;
	document.getElementById(fobjId).style.top = fobj.offsetTop;
	store.beforex = document.getElementById(fobjId).getAttribute("fixXval");
	store.beforey = document.getElementById(fobjId).getAttribute("fixYval");
	store.mar_left = document.getElementById(fobjId).style.marginLeft;
    isDrag = false;
    if (fobjId != "0") {
        isDrag = true;
        boolfirst = true;
    }
		
}

function mMove(e) {
	
	if(isDrag)
	{
            var rect = document.getElementById("stage").getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
                return;
            }
            if(boolfirst)
            {
				store.xoff = fobj.offsetLeft;
				store.yoff = fobj.offsetTop;
				boolfirst = false;
			}
            e.preventDefault();
            // duplicate the element
            //console.log(fobj.offsetLeft + e.clientX,fobj.offsetTop + e.clientY);
			document.getElementById(fobjId).style.left = (e.clientX - store.xoff)-660+"px";
			document.getElementById(fobjId).style.top = (e.clientY - store.yoff)+10+"px";
		
			//fobjId.style.opacity = "0.4";
	}
}

function mUp(ev) {
    ev.preventDefault();
    isDrag = false;
	ev.target.style.opacity = "1";
	document.getElementById(fobjId).style.left = parseInt(store.beforex)-parseInt(store.mar_left)+"px";
		document.getElementById(fobjId).style.top = parseInt(store.beforey)+"px";
	if ( ev.target.className == "droptarget") {
		
        //document.getElementById("beaker").style.visibility="visible";
		//document.getElementById(beakerId).style.visibility="hidden";
		
    }
    

}
