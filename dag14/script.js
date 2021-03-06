// INPUT

const input = ["FK -> O", "BK -> B", "PB -> N", "VS -> P", "OF -> H", "KP -> K", "PS -> K", "OV -> N", "FO -> H", "KN -> P", "HF -> K", "BV -> N", "OO -> B", "KC -> V", "CK -> H", "BC -> P", "VV -> S", "NS -> C", "SF -> O", "BN -> V", "NH -> N", "VP -> F", "KH -> S", "BO -> N", "VN -> K", "BB -> H", "CH -> H", "HP -> O", "KK -> O", "CB -> S", "VC -> P", "FH -> B", "SP -> C", "NF -> O", "HN -> N", "PO -> P", "PP -> C", "SO -> F", "FB -> B", "SB -> B", "SC -> B", "HK -> O", "BF -> V", "OB -> B", "NC -> V", "HC -> F", "KO -> C", "NV -> C", "HB -> H", "FP -> S", "OS -> O", "HH -> K", "OK -> B", "OH -> C", "NP -> V", "SN -> H", "SK -> B", "HV -> F", "VF -> P", "CP -> H", "FN -> H", "FV -> B", "CN -> H", "OC -> O", "KV -> P", "CF -> B", "OP -> B", "FC -> O", "PC -> B", "CV -> S", "PV -> H", "VK -> N", "SS -> C", "HO -> F", "VH -> C", "NB -> S", "NN -> F", "FF -> K", "CC -> H", "SV -> H", "CO -> K", "BP -> O", "SH -> H", "KS -> K", "FS -> F", "PF -> S", "BS -> H", "VO -> H", "NK -> F", "PK -> B", "KB -> K", "CS -> C", "VB -> V", "BH -> O", "KF -> N", "HS -> H", "PH -> K", "ON -> H", "PN -> K", "NO -> S"];

const start = "CBNBOKHVBONCPPBBCKVH";
const firstStart = "CB";

const testInput = ["CH -> B", "HH -> N", "CB -> H", "NH -> C", "HB -> C", "HC -> B", "HN -> C", "NN -> C", "BH -> H", "NC -> B", "NB -> B", "BN -> B", "BB -> N", "BC -> B", "CC -> N", "CN -> C"];

const testStart = "NNCB";


// PART 1

const voegToe = (string, array) => {
    let newString = string[0];
    //console.log(newString);
    for (i = 1; i <= string.length - 1; i++) {
        array.forEach(item => {
            if (item.split(" -> ")[0] === string[i-1]+string[i]) {
                let ingevoegd = item.split(" -> ")[1]+string[i];
                //console.log(ingevoegd);
                const aanElkaar = newString+ingevoegd;
                newString = aanElkaar;
            };
        });
    };
    //console.log(newString);
    return newString;
};

const testArrayAfterOne = voegToe(testStart, testInput);

const TestArrayAfterTwo = voegToe(testArrayAfterOne, testInput);

console.log("start" + start);
console.log("lengte: " + start.length);
const stringAfterOne = voegToe(firstStart, input);
const stringAfterTwo = voegToe(stringAfterOne, input);
const stringAfterThree = voegToe(stringAfterTwo, input);
const stringAfterFour = voegToe(stringAfterThree, input);
const stringAfterFive = voegToe(stringAfterFour, input);
const stringAfterSix = voegToe(stringAfterFive, input);
const stringAfterSeven = voegToe(stringAfterSix, input);
const stringAfterEight = voegToe(stringAfterSeven, input);
const stringAfterNine = voegToe(stringAfterEight, input);
const stringAfterTen = voegToe(stringAfterNine, input);

const workString = stringAfterTen;
console.log(workString);
console.log(workString.length);

const workArray = workString.split("");
console.log(workArray);
const characterArray = [...new Set(workArray)];
console.log(characterArray);

const filter = (letters, array) => {
    const newArray = [];
    letters.forEach(letter => {
        const perLetter = array.filter(item => item == letter);
        const newString = perLetter.length;
        //console.log(newString);
        newArray.push(newString);
    });
    console.log(newArray);
    return newArray;
};

const letterCounts = filter(characterArray, workArray);
console.log(letterCounts);

const uitkomst = Math.max(...letterCounts) - Math.min(...letterCounts);
console.log(uitkomst);



// PART 2

const stringAfter11 = voegToe(stringAfterTen, input);
const stringAfter12 = voegToe(stringAfter11, input);
const stringAfter13 = voegToe(stringAfter12, input);
const stringAfter14 = voegToe(stringAfter13, input);
const stringAfter15 = voegToe(stringAfter14, input);
const stringAfter16 = voegToe(stringAfter15, input);
const stringAfter17 = voegToe(stringAfter16, input);
const stringAfter18 = voegToe(stringAfter17, input);
const stringAfter19 = voegToe(stringAfter18, input);
const stringAfter20 = voegToe(stringAfter19, input);

console.log(stringAfter20.length);

const arrayPerTwo = (string, array) => {
    const newArray = [];
    for (i = 0; i < string.length - 2; i++) {
        const newStr = string[i]+string[i+1];
        newArray.push(newStr);
    };
    console.log(newArray);
};

arrayPerTwo(stringAfter20, input);
