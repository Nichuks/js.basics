console.log("Number from 11 to 20:");
for (let i = 11; i <= 20; i++){
    console.log(i)
}
console.log("Number from 20 to 11:")
for (let i = 20; i >=11; i--){
    console.log(i)
}

let friends = ["Kristers", "Braiens", "Fenestra", "Valters" ,"Rainers"]

console.log("first friend:", friends[0]);
console.log("third friend:", friends[2]);

let friendsCount = friends.length

console.log("Draugi");
for (let i = 0; i < friendsCount; i++){
    console.log(`${i + 1}. ${friends[i]}`);
}