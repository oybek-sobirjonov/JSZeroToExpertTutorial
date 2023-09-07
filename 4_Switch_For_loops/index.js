// if va switch ning asosiy farqi quyidagicha:
// if qabul qiladigan holatlar <, >, <=, >=, ==, ==
// switch qabul qiladigan holat ===

// let data = "qor";

// switch (data) {
//     case "bulut":
//         console.log("Havo bulut");
//         break;
//     case "qor":
//         console.log("Havo qor");
//         break;
//     case "yomgir":
//         console.log("Havo yomg'ir");
//         break;
//     default:
//         console.log("Havo nomalum");
// }

// console.log("Muhammad");
// console.log("Muhammad");
// console.log("Muhammad");
// console.log("Muhammad");
// console.log("Muhammad");
// console.log("Muhammad");
// console.log("Muhammad");
// console.log("Muhammad");

// console.log(1);
// console.log(2);
// console.log(3);

// for loop - looks like a stairs
// for (beginnig point, target (until where we are going), steps (how many steps each time))
// for (i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 5;) {
//     console.log(i);
//     i++; // yuqorida i < 5 dan keyingi icrement condition yo'q,
//          // u conditionni gulli qavs ichiga yozsa ham xato bo'lmaydi    
// }

// BREAK - to'xtatish uchun ishlatiladi

// let sum = 0; // stop the loop when sum is 10
// for (let i = 0; i < 5; i++){
//     console.log(sum += i);
//     if (sum === 10) break;
// }

// Toq sonlarni chiqarish

// for (let i = 0; i < 10; i++) {
//     // if (i % 2 === 1) console.log(i);
//     (i % 2 === 1) ? console.log(i) : i;
// }

// for (let i = 5; i >= 1; i--) {
//     for (let j = 6 - i; j <= 5; j++) {
//         console.log(`i = ${i} j = ${j}`);
//         break;
//     }
// }

// LABELLING

outer: for (let i = 5; i >= 1; i--) {
    inner: for (let j = 6 - i; j <= 5; j++) {
        // if (i === 3) break;    // bunda break faqat inner loopni to'xtatadi
        if (i === 3) break outer; // bunda break inner va outer looplarni to'xtatadi
                                  // labelling shuning uchun juda muhim
        console.log(`i = ${i} j = ${j}`);
        break;
    }
}