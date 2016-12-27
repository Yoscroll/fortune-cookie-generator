var fortunesList = ["A secret admirer will soon show how they feel", 
"The more you give, the more you'll have", 
"Hard work pays off" ,
"Don't give up" ,
"The one you love is closer than you think" ,
"It's time to make new friends" ,
"Stay focused" ,
"Good times are coming your way" ,
"Stay patient and you will be rewarded" ,
"Something you lost will soon turn up" ,
"A great surprise is in store for you",
"Your hidden talents will soon be revealed",
"Your life will be happy and peaceful" ,
"A quiet evening with friends is the best cure for a long day", 
"Happy news is on its way" ];

var fortunesToSay=[];
function resetList(){
	for (var i = 0; i < fortunesList.length; i++) {
		fortunesToSay.push(fortunesList[i]);
	}
}
resetList();

var fortune=null;
function generateFortuneCookie() {
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
		generateFortuneCookie();
	}
	console.log(fortunesToSay);
	console.log(fortunesList);
	box.innerHTML = fortune;
}
