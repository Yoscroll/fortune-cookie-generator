var fortunesToSay = ["you're rich","you're poor","you're going to ace all your classes","you have infinite cash","a potato will come flying on your front door"];
var fortune="";
var saidAll=false;

function generateFortuneCookie() {
	if(saidAll==false){
		//stuff	
		var btn= document.getElementById('onlyButton')
		var box = document.getElementById('fortune-cookie-text');
		var list = document.getElementById('list');
		var li = document.createElement("li");
		btn.innerHTML="Click Again!";

		if (fortune!=""){
			//adds current fortune to the previous fortunes list
			li.appendChild(document.createTextNode(fortune));
			list.appendChild(li);
		}
		if (fortunesToSay.length>0) {
			//find a random fortune from the fortunesToSay
			var num;
			num =Math.floor(Math.random()*fortunesToSay.length);
			fortune = fortunesToSay[num];

			//find the fortune and deletes it from fortunesToSay
		  fortunesToSay.splice(num, 1);
		  box.innerHTML = "<b>Fortunes</b> <br><br>"+fortune;
		}
		else{
			//notfies that there aren't any fortunes left
			btn.innerHTML="You ran out of fortunes!";
			box.innerHTML = "<b>Fortunes</b> <br><br> You ran out of fortunes!";
			saidAll=true;
		}
	}
}
