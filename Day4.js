///1 .compare two json have the same properties without order
const object1 = {
    name: 'person 1',
    age: 5
};

const object2 = {
    age: 5,
    name: 'person 1'
};

let data = JSON.stringify(object1) === JSON.stringify(object2);
console.log(data);

/////////////////




//// 2. dipaly all  countries flag in console

let xyz = new XMLHttpRequest();
xyz.open("GET", "https://restcountries.com/v3.1/all");
xyz.onload = function() {

    let data = JSON.parse(xyz.responseText)

    //  console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(`
        flags:${data[i].flags}
        
        `);

    }
}
xyz.send();


////////
//////
// 3. print all countries names,regions ,subregions and populations


let abc = new XMLHttpRequest();
abc.open("GET", "https://restcountries.com/v3.1/all");
abc.onload = function() {

    let data = JSON.parse(abc.responseText)

    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(`
        name:${data[i].name}
        region:${data[i].region}
        subregion:${data[i].subregion}
        population:${data[i].population}
        `);

    }
}
abc.send();