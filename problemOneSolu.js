const fs = require('fs');
const { json } = require('stream/consumers');


//1.read the file
const read = fs.readFileSync('problem1.json',{encoding: 'utf-8'})
file = JSON.parse(read);

//2.add height and weight to fluffy
file.weight = "50kg";
file.height = "100cm"


//3.update fluffy name
file.name = "Fluffyy";


let friends = file.catFriends;
let act = [];
let friendsNames = [];
let friendsWeight = 0;
friends.forEach(element => {
    //4.fluffy's cat friends activities
    if(element.activities){
        console.log(element.activities)
        act.push(...element.activities);
    }
    //5.fluffy's cat friends names
    if(element.name){
        friendsNames.push(element.name)
    }
    //6.friends total weight
    if(element.weight){
        friendsWeight += element.weight;
    }
})

console.log(friendsNames)
console.log(friendsWeight)
//7.total activities for all friends
console.log(act)


file.catFriends.forEach((cat) => {
    //8.adding two more activities for bar and foo
  if (cat.name === "bar" || cat.name === "foo") {
    cat.activities.push("new activity 1", "new activity 2");
  }
  //9.updating bar color
  if (cat.name === "bar") {
        cat.furcolor = "orange";
      }
});

