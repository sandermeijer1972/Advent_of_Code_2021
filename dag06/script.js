// INPUT

const testInput = [3,4,3,1,2];

const input = [3,4,3,1,2,1,5,1,1,1,1,4,1,2,1,1,2,1,1,1,3,4,4,4,1,3,2,1,3,4,1,1,3,4,2,5,5,3,3,3,5,1,4,1,2,3,1,1,1,4,1,4,1,5,3,3,1,4,1,5,1,2,2,1,1,5,5,2,5,1,1,1,1,3,1,4,1,1,1,4,1,1,1,5,2,3,5,3,4,1,1,1,1,1,2,2,1,1,1,1,1,1,5,5,1,3,3,1,2,1,3,1,5,1,1,4,1,1,2,4,1,5,1,1,3,3,3,4,2,4,1,1,5,1,1,1,1,4,4,1,1,1,3,1,1,2,1,3,1,1,1,1,5,3,3,2,2,1,4,3,3,2,1,3,3,1,2,5,1,3,5,2,2,1,1,1,1,5,1,2,1,1,3,5,4,2,3,1,1,1,4,1,3,2,1,5,4,5,1,4,5,1,3,3,5,1,2,1,1,3,3,1,5,3,1,1,1,3,2,5,5,1,1,4,2,1,2,1,1,5,5,1,4,1,1,3,1,5,2,5,3,1,5,2,2,1,1,5,1,5,1,2,1,3,1,1,1,2,3,2,1,4,1,1,1,1,5,4,1,4,5,1,4,3,4,1,1,1,1,2,5,4,1,1,3,1,2,1,1,2,1,1,1,2,1,1,1,1,1,4];


// PART 1

const makeFish = ([array, numb]) => {
        const newArray = [];
        const newCount = [];
        array.forEach(fish => {
            if (fish === 0) {
                const newTimer = 6;
                newArray.push(newTimer);
                
            } else if (fish === 1) {
                const newTimer = 0;
                newArray.push(newTimer);
                newCount.push(1);
            } else {
                const newTimer = fish - 1;
                newArray.push(newTimer);
            };
        });
        for (n = 1; n <= numb; n++) {
            newArray.push(8);
        };
        console.log("lengte: " + newArray.length);
        return [newArray, newCount.length];
};

const test = [[8], 0];
const echt = [input, 0];

const dag1 = makeFish(test);
const dag2 = makeFish(dag1);
const dag3 = makeFish(dag2);
const dag4 = makeFish(dag3);
const dag5 = makeFish(dag4);
const dag6 = makeFish(dag5);
const dag7 = makeFish(dag6);
const dag8 = makeFish(dag7);
const dag9 = makeFish(dag8);
const dag10 = makeFish(dag9);
const dag11 = makeFish(dag10);
const dag12 = makeFish(dag11);
const dag13 = makeFish(dag12);
const dag14 = makeFish(dag13);
const dag15 = makeFish(dag14);
const dag16 = makeFish(dag15);
const dag17 = makeFish(dag16);
const dag18 = makeFish(dag17);
const dag19 = makeFish(dag18);
const dag20 = makeFish(dag19);
const dag21 = makeFish(dag20);
const dag22 = makeFish(dag21);
const dag23 = makeFish(dag22);
const dag24 = makeFish(dag23);
const dag25 = makeFish(dag24);
const dag26 = makeFish(dag25);
const dag27 = makeFish(dag26);
const dag28 = makeFish(dag27);
const dag29 = makeFish(dag28);
const dag30 = makeFish(dag29);
const dag31 = makeFish(dag30);
const dag32 = makeFish(dag31);
const dag33 = makeFish(dag32);
const dag34 = makeFish(dag33);
const dag35 = makeFish(dag34);
const dag36 = makeFish(dag35);
const dag37 = makeFish(dag36);
const dag38 = makeFish(dag37);
const dag39 = makeFish(dag38);
const dag40 = makeFish(dag39);
const dag41 = makeFish(dag40);
const dag42 = makeFish(dag41);
const dag43 = makeFish(dag42);
const dag44 = makeFish(dag43);
const dag45 = makeFish(dag44);
const dag46 = makeFish(dag45);
const dag47 = makeFish(dag46);
const dag48 = makeFish(dag47);
const dag49 = makeFish(dag48);
const dag50 = makeFish(dag49);
const dag51 = makeFish(dag50);
const dag52 = makeFish(dag51);
const dag53 = makeFish(dag52);
const dag54 = makeFish(dag53);
const dag55 = makeFish(dag54);
const dag56 = makeFish(dag55);
const dag57 = makeFish(dag56);
const dag58 = makeFish(dag57);
const dag59 = makeFish(dag58);
const dag60 = makeFish(dag59);
const dag61 = makeFish(dag60);
const dag62 = makeFish(dag61);
const dag63 = makeFish(dag62);
const dag64 = makeFish(dag63);
const dag65 = makeFish(dag64);
const dag66 = makeFish(dag65);
const dag67 = makeFish(dag66);
const dag68 = makeFish(dag67);
const dag69 = makeFish(dag68);
const dag70 = makeFish(dag69);
const dag71 = makeFish(dag70);
const dag72 = makeFish(dag71);
const dag73 = makeFish(dag72);
const dag74 = makeFish(dag73);
const dag75 = makeFish(dag74);
const dag76 = makeFish(dag75);
const dag77 = makeFish(dag76);
const dag78 = makeFish(dag77);
const dag79 = makeFish(dag78);
const dag80 = makeFish(dag79);

console.log(dag80[0].length);

// PART 2

const dag81 = makeFish(dag80);
const dag82 = makeFish(dag81);
const dag83 = makeFish(dag82);
const dag84 = makeFish(dag83);
const dag85 = makeFish(dag84);
const dag86 = makeFish(dag85);
const dag87 = makeFish(dag86);
const dag88 = makeFish(dag87);
const dag89 = makeFish(dag88);
const dag90 = makeFish(dag89);
const dag91 = makeFish(dag90);
const dag92 = makeFish(dag91);
const dag93 = makeFish(dag92);
const dag94 = makeFish(dag93);
const dag95 = makeFish(dag94);
const dag96 = makeFish(dag95);
const dag97 = makeFish(dag96);
const dag98 = makeFish(dag97);
const dag99 = makeFish(dag98);
const dag100 = makeFish(dag99);
const dag101 = makeFish(dag100);
const dag102 = makeFish(dag101);
const dag103 = makeFish(dag102);
const dag104 = makeFish(dag103);
const dag105 = makeFish(dag104);
const dag106 = makeFish(dag105);
const dag107 = makeFish(dag106);
const dag108 = makeFish(dag107);
const dag109 = makeFish(dag108);
const dag110 = makeFish(dag109);
const dag111 = makeFish(dag110);
const dag112 = makeFish(dag111);
const dag113 = makeFish(dag112);
const dag114 = makeFish(dag113);
const dag115 = makeFish(dag114);
const dag116 = makeFish(dag115);
const dag117 = makeFish(dag116);
const dag118 = makeFish(dag117);
const dag119 = makeFish(dag118);
const dag120 = makeFish(dag119);
const dag121 = makeFish(dag120);
const dag122 = makeFish(dag121);
const dag123 = makeFish(dag122);
const dag124 = makeFish(dag123);
const dag125 = makeFish(dag124);
const dag126 = makeFish(dag125);
const dag127 = makeFish(dag126);
const dag128 = makeFish(dag127);



console.log(dag128[0].length);

//voor elk cijfer apart

const arrayAfter128Days = dag128[0];
//console.log(arrayAfter128Days);

const teller = (array) => {
    const countZero = [];
    const countOne = [];
    const countTwo = [];
    const countThree = [];
    const countFour = [];
    const countFive = [];
    const countSix = [];
    const countSeven = [];
    const countEight = [];
    array.forEach(getal => {
        if(getal === 0) {
            countZero.push(getal);
        } else if(getal === 1) {
            countOne.push(getal);
        } else if(getal === 2) {
            countTwo.push(getal);
        } else if(getal === 3) {
            countThree.push(getal);
        } else if(getal === 4) {
            countFour.push(getal);
        } else if(getal === 5) {
            countFive.push(getal);
        } else if(getal === 6) {
            countSix.push(getal);
        } else if(getal === 7) {
            countSeven.push(getal);
        } else if(getal === 8) {
            countEight.push(getal);
        };
    });
    console.log("aantal 0: " + countZero.length);
    console.log("aantal 1: " + countOne.length);
    console.log("aantal 2: " + countTwo.length);
    console.log("aantal 3: " + countThree.length);
    console.log("aantal 4: " + countFour.length);
    console.log("aantal 5: " + countFive.length);
    console.log("aantal 6: " + countSix.length);
    console.log("aantal 7: " + countSeven.length);
    console.log("aantal 8: " + countEight.length);    
};

teller(arrayAfter128Days);


const nullen = [12888, 6643, 11593, 12481, 8824, 19464, 7428, 11442, 3745];
const nul = nullen.reduce((accumulator, currentValue) => accumulator + currentValue);

const enen = [3745, 12888, 6643, 11593, 12481, 8824, 19464, 3683, 11442];
const een = enen.reduce((accumulator, currentValue) => accumulator + currentValue);

const tweeen = [11442, 3745, 12888, 6643, 11593, 12481, 8824, 8022, 3683];
const twee = tweeen.reduce((accumulator, currentValue) => accumulator + currentValue);

const drieen = [3683, 11442, 3745, 12888, 6643, 11593, 12481, 5141, 8022];
const drie = drieen.reduce((accumulator, currentValue) => accumulator + currentValue);

const vieren = [8022, 3683, 11442, 3745, 12888, 6643, 11593, 4459, 5141];
const vier = vieren.reduce((accumulator, currentValue) => accumulator + currentValue);

const vijfen = [5141, 8022, 3683, 11442, 3745, 12888, 6643, 6452, 4459];
const vijf = vijfen.reduce((accumulator, currentValue) => accumulator + currentValue);

const zessen = [4459, 5141, 8022, 3683, 11442, 3745, 12888, 2184, 6452];
const zes = zessen.reduce((accumulator, currentValue) => accumulator + currentValue);

const zevens = [6452, 4459, 5141, 8022, 3683, 11442, 3745, 6436, 2184];
const zeven = zevens.reduce((accumulator, currentValue) => accumulator + currentValue);

const achten = [2184, 6452, 4459, 5141, 8022, 3683, 11442, 1561, 6436];
const acht = achten.reduce((accumulator, currentValue) => accumulator + currentValue);

const voorElkGetal = (array) => {
    const aantal = (array[0]*nul) + (array[1]*een) + (array[2]*twee) + (array[3]*drie) + (array[4]*vier) + (array[5]*vijf) + (array[6]*zes) + (array[7]*zeven) + (array[8]*acht);
    console.log(aantal);
    return aantal;
};

const startEen = voorElkGetal(enen);
const startTwee = voorElkGetal(tweeen);
const startDrie = voorElkGetal(drieen);
const startVier = voorElkGetal(vieren);
const startVijf = voorElkGetal(vijfen);

const totaalAantalVissen = (array) => {
    const countArray = [];
    array.forEach(getal => {
        if(getal === 1) {
            countArray.push(startEen);
        } else if (getal === 2) {
            countArray.push(startTwee);
        } else if (getal === 3) {
            countArray.push(startDrie);
        } else if (getal === 4) {
            countArray.push(startVier);
        } else if (getal === 5) {
            countArray.push(startVijf);
        };
    });
    const totaal = countArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(totaal);
};

totaalAantalVissen(testInput);
console.log("eindtotaal: ");
totaalAantalVissen(input);
