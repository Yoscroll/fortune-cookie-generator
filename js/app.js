var fortunesList = ["you're rich","you're poor","you're going to ace all your classes","you have infinite cash"];
var fortunesToSay=[];
for (var i = 0; i < fortunesList.length; i++) {
		fortunesToSay.push(fortunesList[i]);
	}
var fortune=null;

function generateFortuneCookie() {
	document.getElementById('onlyButton').innerHTML="Click Again!";
	var box = document.getElementById('fortune-cookie-text');
	var list = document.getElementById('list');
	var li = document.createElement("li");
	if (fortune!==null&&fortunesToSay.length>0){
		li.appendChild(document.createTextNode(fortune));
		list.appendChild(li);
	}
	var num;
	if (fortunesToSay.length>0) {
		num =Math.floor(Math.random()*fortunesToSay.length);
		fortune = fortunesToSay[num];
		var index = fortunesToSay.indexOf(fortune);
		if (index > -1) {
	    	fortunesToSay.splice(index, 1);
	    	box.innerHTML = "<b>Fortunes</b> <br><br>"+fortune;
		}
	}
	else{
		document.getElementById('onlyButton').innerHTML="You ran out of fortunes!";
		box.innerHTML = "<b>Fortunes</b> <br><br> You ran out of fortunes!";
	}
}
