var fortunesList = ["you're rich","you're poor","you're going to ace all your classes","you have infinite cash"];

var fortunesToSay=[];
function resetList(){
	for (var i = 0; i < fortunesList.length; i++) {
		fortunesToSay.push(fortunesList[i]);
	}
}
resetList();
var fortune=null;
function generateFortuneCookie() {
	document.getElementById('onlyButton').innerHTML="Click Again!";
	var box = document.getElementById('fortune-cookie-text');
	var list = document.getElementById('list');
	var li = document.createElement("li");
	if (fortune!==null){
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
		}
	}
	else{
		resetList();
		fortune=null;
		generateFortuneCookie();
	}
	console.log(fortunesToSay);
	console.log(fortunesList);
	box.innerHTML = "<b>Fortunes</b> <br><br>"+fortune;
}
