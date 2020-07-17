// feetToMile function

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(21000);
result = result.toFixed(1);
console.log("Mile:", result);



// woodCalculator
function woodCalculator(chair, table, bed){
    var ChairWood= chair*1;
    var tableWood= table*3;
    var bedWood= bed*5;
    var totalWood= ChairWood+tableWood+bedWood;
    return totalWood;
}
var result= woodCalculator(5, 10, 15);
console.log("Total Wood Amount: ",result);

//bricCalculator
function bricCalculator(floor){
    if(floor<=10){
        var bric = floor * 15 * 1000;
    }
    else if(floor<=20){
        var bric = (10*15*1000)+((floor-10)*12*1000);
    }
    else if(floor>20)
    {
        var bric = (10*15*1000)+(10*12*1000)+((floor-20)*10*1000)
    }
    return bric;
}

var totalBric = bricCalculator(35);
console.log("Tiny bric amount is:", totalBric);


// tinyFriend
function tinyFriend(name) {
    var short  = name[0];
    for (var i= 0; i < name.length; i++) {
        var nameElement = name[i];
            if (nameElement.length < short.length) {
                short  = nameElement;
            }
    }
    return short;
}
var tinyFriendName = tinyFriend(['md', 'mukhdum', 'hasan', 'miron']);
console.log("Tiny Freind name is:", tinyFriendName );