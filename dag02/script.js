// INPUT

const test = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];

const input = ["forward 6", "down 8", "down 5", "down 9", "forward 2", "down 5", "down 5", "forward 1", "forward 7", "down 8", "up 2", "down 4", "up 8", "down 8", "forward 3", "forward 4", "down 1", "forward 5", "up 7", "down 7", "down 8", "forward 2", "up 3", "forward 1", "forward 6", "forward 9", "forward 7", "forward 8", "forward 2", "forward 3", "up 2", "up 8", "down 1", "forward 7", "down 7", "down 2", "forward 6", "down 1", "forward 5", "down 3", "forward 6", "down 7", "up 1", "up 3", "forward 7", "forward 6", "forward 8", "down 4", "down 2", "up 5", "down 2", "forward 2", "up 5", "forward 6", "down 3", "down 1", "down 5", "forward 6", "up 6", "down 7", "down 8", "down 2", "forward 3", "down 5", "down 4", "forward 7", "forward 9", "up 9", "up 8", "up 4", "forward 8", "forward 5", "down 4", "up 2", "forward 9", "up 5", "down 5", "up 9", "forward 2", "forward 3", "down 6", "down 8", "forward 8", "up 5", "down 5", "forward 7", "forward 6", "forward 8", "up 3", "forward 3", "forward 1", "up 8", "down 8", "down 2", "down 4", "up 7", "up 2", "up 9", "up 4", "forward 6", "down 8", "down 1", "forward 6", "forward 6", "down 4", "down 2", "up 7", "down 9", "down 9", "up 2", "up 7", "down 4", "down 2", "forward 1", "down 1", "up 5", "up 5", "forward 9", "up 3", "down 7", "forward 7", "down 4", "down 8", "up 1", "down 4", "down 7", "forward 5", "up 9", "forward 5", "forward 1", "forward 8", "forward 6", "forward 5", "forward 1", "down 4", "down 6", "forward 5", "forward 2", "forward 3", "down 1", "up 2", "up 9", "forward 4", "up 8", "down 7", "down 8", "up 7", "down 2", "forward 7", "up 1", "forward 5", "forward 1", "forward 8", "forward 1", "up 8", "down 6", "down 7", "forward 2", "down 8", "down 8", "forward 8", "up 8", "down 6", "down 7", "down 4", "down 7", "forward 6", "up 3", "forward 3", "down 2", "down 8", "down 3", "down 9", "forward 9", "forward 7", "down 6", "down 4", "forward 6", "down 2", "down 7", "up 7", "up 8", "forward 2", "forward 8", "down 3", "up 2", "forward 9", "down 2", "up 3", "down 1", "down 1", "down 4", "down 8", "up 2", "up 8", "forward 2", "forward 1", "up 1", "forward 7", "down 8", "down 1", "down 7", "up 3", "down 3", "forward 8", "forward 2", "forward 7", "down 2", "up 9", "up 3", "up 5", "down 4", "up 3", "forward 4", "up 5", "down 9", "down 9", "forward 2", "forward 2", "down 2", "down 8", "down 3", "down 5", "forward 6", "down 6", "up 5", "down 2", "down 4", "down 9", "down 3", "forward 7", "down 1", "forward 1", "down 4", "up 1", "down 9", "forward 5", "up 2", "down 3", "forward 8", "forward 9", "up 9", "down 2", "forward 8", "down 4", "down 5", "forward 6", "forward 5", "forward 4", "down 6", "down 9", "down 2", "forward 9", "down 4", "up 8", "up 9", "up 2", "up 5", "up 5", "forward 9", "up 1", "forward 6", "forward 7", "forward 8", "forward 9", "up 2", "forward 3", "forward 4", "forward 6", "forward 9", "up 5", "up 5", "down 3", "forward 1", "forward 3", "forward 2", "forward 3", "forward 6", "forward 7", "down 4", "down 2", "down 1", "forward 2", "down 5", "forward 3", "forward 6", "down 8", "down 9", "forward 4", "forward 6", "down 6", "down 6", "forward 3", "down 6", "down 8", "down 1", "forward 7", "forward 9", "down 2", "down 5", "forward 1", "forward 3", "down 2", "forward 1", "down 8", "down 1", "forward 4", "down 8", "forward 5", "forward 1", "down 7", "down 7", "forward 3", "forward 1", "forward 6", "forward 7", "forward 5", "up 1", "forward 2", "down 9", "forward 3", "up 1", "forward 2", "down 1", "down 6", "down 3", "forward 7", "down 5", "down 4", "down 1", "forward 9", "forward 9", "down 5", "forward 7", "forward 3", "forward 5", "down 1", "forward 6", "down 8", "up 2", "forward 6", "down 3", "forward 2", "forward 9", "forward 4", "down 1", "down 3", "forward 9", "forward 3", "forward 8", "forward 9", "up 3", "up 1", "forward 1", "forward 2", "down 8", "down 9", "down 2", "down 1", "down 3", "down 2", "forward 9", "forward 7", "down 5", "forward 1", "forward 6", "forward 3", "forward 9", "down 2", "forward 8", "down 5", "down 1", "forward 5", "forward 3", "down 6", "forward 6", "down 8", "forward 2", "up 5", "forward 1", "down 2", "down 6", "forward 9", "forward 7", "down 1", "down 3", "down 6", "up 3", "down 4", "forward 8", "forward 1", "forward 7", "down 2", "down 5", "down 9", "forward 6", "down 5", "forward 5", "up 1", "down 5", "forward 8", "up 9", "forward 2", "down 6", "forward 2", "forward 7", "up 2", "down 9", "down 7", "up 7", "down 6", "up 5", "forward 1", "down 8", "forward 8", "forward 1", "forward 7", "down 9", "down 6", "forward 3", "down 6", "down 1", "down 1", "down 1", "down 3", "down 7", "down 7", "down 3", "down 5", "forward 4", "down 4", "forward 7", "forward 5", "down 9", "down 9", "forward 7", "down 3", "down 9", "down 4", "forward 3", "down 7", "down 2", "forward 2", "down 6", "forward 9", "forward 9", "forward 5", "up 4", "down 7", "down 2", "up 9", "up 4", "forward 8", "forward 1", "down 8", "up 5", "down 4", "down 3", "forward 2", "down 7", "down 2", "down 1", "down 9", "forward 7", "forward 7", "up 8", "up 4", "down 3", "down 8", "forward 6", "forward 5", "forward 5", "forward 5", "down 3", "down 8", "forward 4", "forward 7", "forward 1", "up 3", "up 9", "down 6", "up 4", "down 7", "forward 8", "forward 4", "forward 3", "up 8", "up 3", "down 3", "forward 6", "down 2", "forward 7", "forward 4", "forward 8", "down 3", "down 9", "down 9", "down 2", "forward 8", "up 4", "down 3", "forward 8", "forward 5", "forward 7", "down 6", "up 9", "forward 3", "down 2", "forward 5", "forward 2", "down 7", "forward 6", "forward 2", "up 9", "down 1", "down 1", "forward 4", "up 1", "forward 9", "down 3", "down 4", "down 2", "forward 3", "forward 3", "forward 3", "up 7", "up 8", "down 5", "forward 1", "forward 7", "up 9", "up 3", "down 3", "down 8", "forward 6", "up 5", "up 5", "forward 4", "down 2", "down 8", "down 1", "forward 6", "down 3", "forward 3", "forward 6", "forward 1", "up 3", "up 1", "down 5", "down 2", "down 7", "down 1", "forward 9", "down 4", "down 8", "forward 9", "forward 7", "forward 8", "down 1", "down 2", "up 7", "down 5", "down 2", "down 1", "up 4", "up 8", "up 7", "down 4", "forward 3", "down 2", "down 2", "forward 5", "forward 4", "down 8", "up 4", "forward 4", "up 1", "down 3", "down 9", "down 9", "down 3", "up 8", "forward 1", "forward 6", "down 6", "down 2", "forward 8", "down 3", "forward 8", "forward 2", "forward 9", "up 3", "forward 6", "down 5", "forward 6", "forward 2", "up 7", "down 9", "forward 2", "up 2", "forward 7", "down 1", "down 5", "down 6", "forward 8", "down 6", "forward 4", "forward 1", "forward 3", "forward 4", "up 4", "forward 4", "down 4", "forward 2", "forward 5", "forward 2", "forward 5", "down 9", "up 2", "up 1", "down 2", "up 4", "up 5", "forward 2", "down 3", "down 9", "forward 3", "down 8", "down 9", "forward 5", "down 3", "forward 5", "down 3", "up 8", "forward 7", "forward 1", "down 2", "down 7", "forward 3", "down 8", "forward 9", "down 4", "down 1", "down 7", "down 4", "up 5", "forward 1", "down 4", "forward 1", "forward 8", "up 1", "up 5", "up 2", "up 2", "down 4", "down 7", "forward 2", "down 8", "up 8", "down 9", "down 3", "down 6", "down 3", "down 1", "forward 7", "up 8", "forward 5", "up 5", "down 8", "down 1", "down 8", "down 6", "down 5", "forward 2", "up 5", "down 6", "forward 9", "up 6", "down 5", "down 7", "up 9", "down 1", "forward 4", "up 6", "forward 2", "down 5", "down 5", "forward 2", "up 6", "forward 1", "down 8", "forward 4", "up 8", "down 3", "forward 8", "down 8", "forward 5", "down 6", "down 3", "forward 1", "down 4", "down 8", "up 1", "down 1", "down 2", "up 9", "forward 2", "forward 3", "down 7", "down 2", "forward 7", "up 8", "down 2", "down 8", "down 9", "up 1", "down 5", "down 5", "down 4", "down 8", "down 9", "up 5", "forward 2", "down 4", "down 3", "down 2", "forward 5", "forward 8", "down 8", "down 1", "forward 9", "down 5", "forward 5", "down 2", "up 3", "up 9", "down 1", "down 9", "forward 7", "up 7", "forward 3", "up 6", "forward 8", "down 2", "down 1", "down 7", "forward 5", "down 8", "down 4", "forward 7", "forward 4", "down 6", "forward 9", "down 3", "forward 2", "down 3", "down 1", "down 1", "up 1", "up 3", "down 6", "forward 3", "up 9", "down 4", "up 2", "down 3", "up 1", "down 8", "down 5", "forward 7", "forward 2", "forward 9", "down 8", "down 5", "down 6", "up 3", "forward 2", "up 8", "down 4", "forward 7", "down 8", "down 6", "down 4", "forward 7", "up 9", "down 4", "forward 2", "forward 5", "down 3", "up 6", "up 6", "down 2", "down 4", "forward 8", "forward 5", "forward 3", "forward 5", "down 5", "down 5", "down 6", "forward 3", "forward 7", "forward 1", "down 8", "down 5", "forward 7", "up 7", "down 9", "down 9", "down 9", "up 6", "down 2", "down 3", "forward 1", "up 7", "up 8", "forward 5", "down 1", "down 3", "down 3", "forward 5", "down 7", "down 1", "up 2", "down 2", "down 3", "forward 7", "down 9", "forward 6", "down 5", "forward 2", "down 5", "forward 6", "up 3", "down 8", "up 2", "forward 5", "forward 1", "forward 5", "forward 8", "forward 6", "forward 9", "forward 6", "up 6", "up 5", "down 8", "down 3", "down 5", "down 2", "forward 9", "forward 8", "down 1", "up 1", "up 6", "down 6", "forward 4", "down 3", "forward 6", "forward 1", "up 5", "down 6", "up 9", "down 7", "down 2", "down 9", "down 5", "forward 5", "up 2", "forward 8", "down 2", "down 8", "forward 6", "down 4", "forward 8", "down 7", "down 8", "down 1", "forward 3", "down 6", "down 9", "down 3", "forward 3", "down 8", "forward 8", "down 7", "forward 6", "forward 8", "down 8", "up 7", "down 1", "forward 2", "forward 3", "down 5", "up 8", "down 3", "down 4", "down 7", "forward 9", "forward 7", "forward 1", "down 3", "forward 9", "down 8", "forward 2", "down 2", "down 9", "down 4", "down 3", "up 6", "up 9", "down 3", "down 2", "forward 5", "down 3", "down 2", "down 8", "forward 6", "forward 5", "up 4", "forward 9", "forward 8", "forward 9", "down 2", "forward 2", "up 6", "forward 1", "down 5", "forward 2", "down 8", "up 2", "up 3", "down 3", "up 2", "up 1", "up 5", "forward 1", "forward 2", "down 8", "up 3", "down 9", "forward 7", "up 5", "down 4", "down 4", "up 3", "forward 2", "up 5", "down 4", "down 4", "up 5", "forward 8", "down 8", "down 6", "forward 7", "down 1", "down 3", "down 1", "forward 3", "down 5", "down 3", "forward 3", "up 2", "forward 2", "down 9", "up 8", "forward 8", "up 8", "forward 1", "forward 9", "forward 3", "down 8", "down 3", "forward 8", "forward 4", "down 2", "forward 2", "down 2", "down 5", "down 7", "down 5", "forward 8", "up 3", "forward 1", "down 1", "forward 3", "down 9", "forward 2", "forward 2", "forward 7", "down 7", "down 2", "forward 9", "up 5", "up 7", "forward 8", "forward 1", "down 7", "down 8", "down 3", "forward 6"];


// PART 1

const forward = [];
const down = [];
const up = [];

const splitter = (array) => {
    array.forEach(movement => {
        if (movement.length <= 5) {
            up.push(movement);
        } else if (movement.length >= 9) {
            forward.push(movement);
        } else {
            down.push(movement);
        };
    });
};

splitter(input);

console.log("forward: " + forward.length);
console.log("down: " + down.length);
console.log("up: " + up.length);


const teller = (array) => {
    const numbs = [];
    array.forEach(item => {
        const getal = parseInt(item.substr(item.length - 2));
        numbs.push(getal);
    });
    //console.log(numbs);
    const totaal = numbs.reduce((accumulator, currentValue) => accumulator + currentValue);
    //console.log(totaal);
    return totaal;
};

const voorwaarts = teller(forward);
console.log("vooruit: " + voorwaarts);

const omlaag = teller(down);
console.log("omlaag: " + omlaag);

const omhoog = teller(up);
console.log("omhoog: " + omhoog);

const verticaal = omlaag - omhoog;
console.log("verticaal: " + verticaal);

const answer = voorwaarts * verticaal;
console.log("antwoord: " + answer);


// PART 2

const berekening = (array) => {
    let aim = 0;
    let depth = 0;
    let hor = 0;
    array.forEach(item => {
        const getal = parseInt(item.substr(item.length - 2));
        if (item.includes("down")) {            
            const newAim = aim + getal;
            aim = newAim;
            //console.log(getal + " zakken, (H-D-A): " + hor + " " + depth + " " + aim);
        } else if (item.includes("up")) {
            const newAim = aim - getal;
            aim = newAim;
            //console.log(getal + " stijgen, (H-D-A): " + hor + " " + depth + " " + aim);
        } else if (item.includes("forward")) {
            const newDepth = (getal * aim) + depth;
            const newHor = hor + getal;
            hor = newHor;
            depth = newDepth;
            //console.log(getal + " voorwaarts, (H-D-A): " + hor + " " + depth + " " + aim);
        };
    });
    console.log("horizontaal: " + hor);
    console.log("diepte: " + depth);
    const som = hor * depth;
    console.log("som: " + som);
    return som;
};

berekening(test);

berekening(input);
