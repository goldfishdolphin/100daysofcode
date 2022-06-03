// For the following challenges, uncomment each console.log and make a prediction as to the value shown. Run the code to see if you were right or if something was not as expected

// The following type coercions are known as *implicit coercion*
const mystery1 = 1 + '2';
 console.log(mystery1);
//3
const mystery2 = '2' + 1;
 console.log(mystery2);

const mystery3 = 12 - '5';
console.log(mystery3);

const mystery4 = 10 + true;
console.log(mystery4);

const mystery5 = false - 15;
 console.log(mystery5);

const mystery6 = 'hello' + undefined;
console.log(mystery6);

const mystery7 = 7 + null;
console.log(mystery7);

const mystery8 = '9' + '2';
 console.log(mystery8);

const mystery9 = '9' - '2';
 console.log(mystery9);

const mystery10 = +'12' + +'6';
 console.log(mystery10);

const mystery11 = 15 + '';
console.log(mystery11);

const mystery12 = 1 == '1';
console.log(mystery12);

const mystery13 = true == 'true';
console.log(mystery13);

const mystery14 = 0 == '';
console.log(mystery14);

const mystery15 = 5 === +'5';
 console.log(mystery15);

const mystery16 = 0 < '7';
console.log(mystery16);

// The following type coercions are known as *explicit coercion*
const mystery17 = Boolean('hello');
console.log(mystery17);

const mystery18 = Boolean(0);
 console.log(mystery18);

const mystery19 = Boolean(!'hello');
console.log(mystery19);

const mystery20 = String('hello');
console.log(mystery20);

const mystery21 = String(7);
console.log(mystery21);

const mystery22 = String(false);
 console.log(mystery22);

const num = 17;
const mystery23 = num.toString();
console.log(mystery23);

const mystery24 = Number(true);
console.log(mystery24);

const mystery25 = Number('17');
console.log(mystery25);

const mystery26 = parseInt('42');
console.log(mystery26);

const mystery27 = parseFloat('88.94');
console.log(mystery27);