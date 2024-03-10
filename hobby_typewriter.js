function textTyping(element,text,i=0){
  element.textContent+=text[i];
  if(i === text.length-1){
    return;
  }
  setTimeout(()=> textTyping(element,text,i+1),75);
}
function textDeleting(element, text,i=0) {
  element.textContent = element.textContent.substring(0, element.textContent.length - i);
  if (element.textContent.length === 0) {
    return;
  }
  setTimeout(() => textDeleting(element, text, i +1), 75);
}
///
let hobbies = ['Gamer.','Reader.','Traveler.','Climber.','Learner.','Fighter.','Foodie.'];
let divWriter = document.getElementById("hobbies");
let hobby = document.createElement("h2");
divWriter.appendChild(hobby);
setInterval(()=>{
  let randIndex = Math.floor(Math.random()*7);
  let chosenHobby = hobbies[randIndex];
  textTyping(hobby,chosenHobby);
  setTimeout(()=> textDeleting(hobby,chosenHobby.length),chosenHobby.length *75 + 3000);
},7000);



