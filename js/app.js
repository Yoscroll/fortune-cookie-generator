var fortunesList = ["you are rich","you got a free trip to hawaii","try again","make a wish!","you won free tickets"];
var fortune=null;
function generateFortuneCookie() {
	var box = document.getElementById('fortune-cookie-text');
	var list = document.getElementById('list');
	var li = document.createElement("li");
	if (fortune!==null){
		li.appendChild(document.createTextNode(fortune));
		list.appendChild(li);
	}	
	fortune = fortunesList[Math.floor(Math.random()*fortunesList.length)];
	box.innerHTML = fortune;
}
