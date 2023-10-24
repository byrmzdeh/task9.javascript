// 1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin. 
// let eded = parseInt(prompt("Ededi daxil edin:"));
// let quvvet = 2;
// let ededinQuvveti = 1;

// while (ededinQuvveti < eded) {
//     ededinQuvveti =ededinQuvveti*quvvet;
// }

// if (ededinQuvveti=== eded) {
//     console.log(eded + " 2-nin quvvətidir.");
// } else {
//     console.log(eded + " 2-nin quvvəti deyil.");
// }




// 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin .
let one = +(prompt("Ededi daxil edin:"));
let two = +(prompt("Quvveti daxil edin:"));
let netice = 1;

for (let i = 0; i < two; i++) {
    netice = netice * one;
}
console.log(one + " ededini " + two + " quvvetine yukseltdikde " + netice + " alinir");



// 3.1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)
let sum1 = 0
for (let i = 0; i < 1000; i++) {
    if (i % 111 == 0) {
        sum1 = sum1 + i

    } else if (i % 11 === 0 && i < 100) {
        sum1 = sum1 + i
    }
}
console.log(sum1);



// 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.
let onearr = [5, 9, 24, 65, 11, 43, 6, 88]
let number = 0
for (let i = 0; i < onearr.length; i++) {
    if (onearr[i] % 2 == 0 && onearr[i] > number) {
        number = onearr[i]
    }
}
console.log(number)



// 5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.
let twoarr = [54, 31, 3, 76, 17, 90, 65, 49, 51]
let little = Infinity
let enkicikindex = 0

for (let i = 0; i < twoarr.length; i++) {
    if (twoarr[i] % 2 == 1 && twoarr[i] < little) {
        little = twoarr[i]
        enkicikindex = i
    }
}
console.log(enkicikindex);




// 6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.
let threearr = [54, 31, 3, 76, 17, 90, 65, 49, 51, 2, 1, 13, 35]
let sade = 0
let murekkeb = 0
for (let i = 0; i < threearr.length; i++) {
    if (threearr[i] % 2 == 0 && threearr[i] > 2 || threearr[i] % 3 == 0 && threearr[i] > 3 || threearr[i] % 5 == 0 && threearr[i] > 5 || threearr[i] % 7 == 0 && threearr[i] > 7) {
        murekkeb = murekkeb + 1
    } else if (threearr[i] % threearr[i] == 0 && threearr[i] % 1 == 0) {
        sade = sade + 1
    }
}
console.log(murekkeb + ' murekkeb ededlerin sayi');
console.log(sade + ' sade ededlerin sayi');


// 7.Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin
let arr = [54, 31, 3, 76, 17, 90, 65, 49, 51, 13, 35]
let max = -Infinity
let min = Infinity
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    } else if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(max + " Arrayin max qiymet");
console.log(min + " Arrayin min qiymeti");
let sum = max + min
console.log(sum + " Max-la min-un cemi");

let edediorta = 0
let bigsum = 0
for (let i = 0; i < arr.length; i++) {
    bigsum = bigsum + arr[i]
    edediorta = bigsum / arr.length
}
console.log(edediorta + " Edediorta");

if (sum > edediorta) {
    console.log(true);
} else {
    console.log(false);
}


// 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.
let say = 659
let stringreqem = say.toString()
let boyukreqem = 0
for (let i = 0; i < stringreqem.length; i++) {
    let numberreqem = parseInt(stringreqem[i])
    if (numberreqem > boyukreqem) {
        boyukreqem = numberreqem
    }
}
console.log(boyukreqem);



