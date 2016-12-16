var fortunesList = ["you are rich","you got a free trip to hawaii","try again","make a wish!","you won free tickets"];
function generateFortuneCookie(argument) {
  var box = document.getElementById('fortune-cookie-text');
  var list = document.getElementById('list');
  var li = document.createElement("li");
  box.innerHTML = fortunesList[Math.floor(Math.random()*fortunesList.length)];
  li.appendChild(document.createTextNode(box.textContent));
  list.appendChild(li);
}