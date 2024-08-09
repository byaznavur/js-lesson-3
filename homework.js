//! if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let num = -132;
// if (num > 0) {
//   num++;
// } else {
//   num;
// }

const { element } = require("prop-types");

// console.log(num);

//! if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let num = -132;
// if (num > 0) {
//   num++;
// } else if (num < 0) {
//   num -= 2;
// } else {
//   num = 10;
// }
//! if3. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.
// let res = 0,
//   a = 1,
//   b = 2,
//   c = 3;

// if (a > 0) {
//   res++;
// }
// if (b > 0) {
//   res++;
// }
// if (c > 0) {
//   res++;
// }

// console.log(res);
// if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.

// let a = 2,
//   b = 4;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.
// let res,
//   a = 2,
//   b = 4;

// if (a > b) {
//   res = "Ikkinchi son kichkina";
// }else{
//  res = "Birinchi son kichkina"
// }
//! if6. Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.

// let res,
//   a = 6,
//   b = 4;
// if (a > b) {
//   res = `${a} ${b}`;
// } else {
//   res = `${b} ${a} `;
// }

// console.log(res);
//! if7. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.
// let res,
//   a = 7,
//   b = 3;

// if (a > b) {
//   let k = a;
//   b = k;

//   res = `${b} a ni qiymati b ga berildi`;
// } else {
//   res = b;
// }

// console.log(res);
//! if8. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// let res,
//   a = 4,
//   b = 7;

// if (a !== b) {
//   res = a + b;
// } else if (a == b) {
//   res = 0;
// }

// console.log(res, a, b);
//! if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
// let res,
//   a = 4,
//   b = 7;

// if (a !== b && a > b ) {
//   res = a;
// } else if (a  !== b && b > a ) {
//   res = b;
// }else if(a === b ){
// res = 0
// }

// console.log(res, a, b);
//! if10. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.
// let res,
//   a = 10,
//   b = 4,
//   c = 8;

// if (a < b && a < c) {
//   res = a;
// } else if (b < a && b < c) {
//   res = b;
// } else if (c < a && c < b) {
//   res = c;
// }

// console.log(res);
//! if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.
// let res,
//   a = 9,
//   b = 7,
//   c = 8;

// if ((a < b && a > c) || (a > b && a < c)) {
//   res = a;
// } else if ((a > b && b > c) || (b > a && c > b)) {
//   res = b;
// } else if ((a > c && c > b) || (b > c && b > a)) {
//   res = c;
// }

// console.log(res);
//! if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.
// let res,
//   a = 9,
//   b = 7,
//   c = 8;

// if (a + b > b + c && a + c > b + c) {
//   res = a + b;
// } else if (a + c > b + c && a + c > a + b) {
//   res = a + c;
// } else {
//   res = b + c;
// }

// console.log(res);
//! if13. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.
// let res,
//   a = 9,
//   b = 7,
//   c = 8;

// if (a > b && b > c) {
//   a = 2 * a;
//   b = 2 * b;
//   c = 2 * c;
// } else {
//   (a = -a), (b = -b), (c = -c);
// }

// console.log(a, b, c);
//! if14. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.
// let res,
//   a = 9,
//   b = 7,
//   c = 8;

// if ((a > b && b > c) || (a< b && b < c)) {
//   a = 2 * a;
//   b = 2 * b;
//   c = 2 * c;
// } else {
//   (a = -a), (b = -b), (c = -c);
// }

// console.log(a, b, c);
//! if15. To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let res,
//   a = 1,
//   b = 2,
//   c = 2,
//   d = 2;

// if (a == b && b == c && c !== d) {
//   res = `${d} - bu 4-raqam`;
// } else if (a == b && b == d && d !== c) {
//   res = `${c} - bu 3-raqam`;
// } else if (a == c && c == d && d != b) {
//   res = `${b} - bu 2-raqam`;
// } else {
//   res = `${a} - bu 1-raqam`;
// }
// console.log(res);
//! if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4

// if (x <= 0) {
//   -x;
// } else if (x > 0 && x > 2) {
//   x ** 2;
// } else {
//   x = 4;
// }

// if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.
// let year = 2024; // bu yerda yilingizni kiriting
// let days;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   days = 366; // Kabisa yili
// } else {
//   days = 365; // Kabisa yili emas
// }

// console.log(`${year}-yil ${days} kun`);

//! if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.
// let abc = 123;
// let res;

// if (abc > 0 && abc < 9 && abc % 2 == 0) {
//   res = "Bir xonali juft son";
// } else if (abc > 0 && abc < 9 && abc % 2 !== 0) {
//   res = "Bir xonali toq son ";
// } else if (abc > 9 && abc < 100 && abc % 2 == 0) {
//   res = "Ikki xonali juft son";
// } else if (abc > 9 && abc < 100 && abc % 2 !== 0) {
//   res = "Ikki xonali toq son";
// } else if (abc > 100 && abc < 1000 && abc % 2 == 0) {
//   res = " Uch xonali juft son";
// } else if (abc > 100 && abc < 1000 && abc % 2 !== 0) {
//   res = " Uch xonali toq son";
// }

// console.log(res);
//

// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")

// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.

// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

// Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

// Case8. Robot faqat to`rtta tomonga ko`cha oladi ("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-o`ngga buril. Y - robot yo`nalishi va K - kamanda berilgan. Berilgan kamanda bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.

// Case9. O'yin kartasi turlari berilgan 1-g`isht, 2-olma, 3-chillak, 4-qarg`a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o`zlashtirgan: 11-valet, 12-dama, 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-karta turi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg`a”) chiqarib beruvchi programma tuzilsin.

// Case10. O`quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son kiritilganda unga mos so`zlarda ifodalovchi programma tuzilsin. ("yigirmata masala", "o`n uchta masala" va h.k.)

// Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").

// Case12. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon, ajdar, ilon, ot, qo`y, maymun, tovuq, it va to’ngizlardan) nomlarining kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".
