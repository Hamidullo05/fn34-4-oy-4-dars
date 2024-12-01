  // Oddiy masalalar:
  // 1-masala
  for ( let i = 1; i <= 100; i++) {
    console.log(i)
  }
  // 2-masala
  for ( let i = 2; i <= 50; i+= 2) {
    console.log(i)
  } 
  // 3-masala
  for ( let i = 1; i <= 30; i+=2) {
    console.log(i)
  }
  // 4-masala
  for ( let i = 1; i <= 20; i++) {
    console.log(i**2)
  }
  // 5-masala
  for ( let i = 10; i >= 1; i--) {
    console.log(i)
  }
  // 6-masala
  let sum = 0;
  for ( let i = 1; i <= 100; i++) {
    sum = sum + i;
   
  }
  console.log(sum)
  // 7-masala
  let sum7 = 0;
  for ( let i = 2; i <= 20; i+=2) {
    sum7 = sum7+ i;
   
  }
  console.log(sum7)
  // 8-masala
  let countr = 1;
  for ( let i = 1; i <= 15; i+=3) {
    countr= countr + i;
   
  }
  console.log(countr)
  // 9-masala
  for ( let i = 5; i <= 25; i++) {
    console.log(i**3)
  }
  // 10-masala
  for ( let i = 1; i <= 10; i++) {
    console.log(i**(1/2))
  }
  // O‘rtacha murakkablikdagi masalalar:
  // 11-masala
  for ( let i = 1; i <= 50; i++)  {
    if (i%3==0)
      console.log(i)
  }
  // 12-masala
  let sum12 = 0;
  for ( let i = 1; i <= 100; i++) {
    sum12 = sum12 + i;
   
  }
  console.log(sum12)
  // 13-masala
  for ( let i = 1; i <= 100; i++)  {
    if (i%7==0)
      console.log(i)
  }
  // 14-masala
  let sum14 = 0;
  for ( let i = 1; i <= 100; i++) {
    sum14 = sum14 + i;
   
  }
  console.log(sum14/2)
  // 15-masala
  let sum15 = 0;
  for ( let i = 1; i <= 20; i+=2)  {
    sum15 = sum15 + i ;
      
  }
  console.log(sum15)
  // 16-masala
  let num16 = +prompt("son kiriting")
  for (let i = num16; i <=2; i--) {
    if (i%2==0) {
      console.log("i")
    }
  }
  // 17-masala
  for (let i = 1; i<=50; i++) {
    if (i%15==0) {
      console.log(i)
    }
   
  }
  // 18-masala
  let sum18= 0;
  for (let i = 1; i<=30; i++) {
      sum18 = sum18 + i;
      console.log(i**2 + '' + sum18)
  }
  // 19-masala
  let sum19 = 0;
  for (let i = 1; i<=100; i++) {
    sum19 = sum19 + 1;
    if (i%2==1) {
      console.log(i+ '' + sum19)
    }
  }
  // 20-masala
  /*let num20_1 = +prompt("20-masala")
  let num20_2 = +prompt("20-masala")
  let sum20 = 0;
  for ()*/
  // Murakkabroq masalalar:
  // 21-masala
  for (let i = 1; i <=50; i++) {
    if (i%3!=0) {
      console.log(i)
    }
  }
  // 22-masala
  for (let i = 1; i <=20; i++) {
    if (i%2==1) {
      console.log(i)
    }
  }
  // 23-masala
  let sum23 = 0;
  for (let i = 1; i <=100; i++)
if (i%10!=0) {
  sum23=  + i;
  console.log(sum23);
}
// 24-masala
let sum24 =1;
for (let i = 1; i <=30; i++) {
  sum24 *=i
}
console.log(sum24)
// 25-masala
let num1 = +prompt("soni kiriting")
let num2 = +prompt("soni kiriting")
let max;
let min;
if (num1>num2) {
  max = num1;
  min = num2
} else {
  max = num2;
  min = num2;
}
for (let i = min; i<= max; i++) {
  console.log(i)
}
// 26-masala
for (let i = 1; i <=100; i++) {
  if (i %15==0) {
    console.log(i)
  }
}
// 28-masala
for (let i = 1; i <=50; i++) {
  if (i % 2 == 0)
    console.log(i)
}
// 29-masala
for (let i = 1; i <=10; i++) {
  console.log(i **3)
}
// 30-masala
for (let i = 1; i <=20; i++) {
  console.log(i **2)
}
// 31-masala
let countr31 =1
for (let i = 1; i <=100; i++) {
  if (i %7 ==0)
    countr31 *= i
  console.log(countr31)
}
// 32-masala

for (let i = 1; i <=30; i++) {
  i*=10;
  console.log(i)
}
// 34-masala
let sum34 = 0
let num34 = +prompt("soni kiriting")
if (num34>0  && num34%2==0) {
sum34 = sum34+ num34;
console.log(sum34)
}
// 35-masala
let num35_2 = +prompt("soni kiriting")
let num35_3 = +prompt("soni kiriting")
let max1;
let min2;
let sum35_1=1;
if (num35_2>num35_3) {
  max1 = num35_2;
  min2 = num35_3;
} else {
  max1 = num35_3;
  min2 = num35_2;
}
for (let i = min2; i<= max1; i++) {
  sum35_1 = sum35_1 * i
  console.log(sum35_1)
}
// 36-masala
/*let num36 = +prompt("sonni kiriting")
if (num36 > 0  ) {
for (let i > num36;  )
}*/
// 38-masala
let sum38 = 1;
for (let i = 1; i<=10; i++ ) {
  sum38 = sum38*i
  console.log(sum38)
}
// 39-masala
let num39 = +prompt("iltimos musbat son kiriting")
let sum39= 0;
for (let i = 1; i<=num39; i++) {
    sum39 = sum39 + i**2;
    console.log(sum39)
}
// 41-masala
for (let = 2; i <= 50; i+=2) {
  console.log(i**3)
}
// 42-masala
for (let = 1; i <= 100; i ++) {
  if (i % 5 !=0) {
    console.log(i)
  }
}
// 43-masala
let num43 = +prompt("musbat son kiritiing")
if(num43 >0 && num % 3 == 0) {
  for (let i = 1; i<=num43; i ++) {
    console.log(i)
  }
}
// 44-masala
/*for (let i = 1: i <= 20; i++) 
if (i % 2 ==0) {
  console.log("juft son")
} else {
  console.log("toq son")
}*/ 
// 45-masala
let sum45 = 0
for (let i = 1; i <= 10; i+=2) {
sum45 = sum45 + i**2;
console.log(sum45)
}
// 47-masala
let sum47 = 0;
for (let i = 1; i<= 30;) 
  if ( i % 12 != 0) {
    sum47 = sum47 + i;
    console.log(sum47)
  }
  // 48-masala
  for ( let i = 1; i <=50; i+=2) {
    console.log(i)
  }
  // 49-masala
  let sum49 = 1;
  let num49 = +prompt("sonni kiriting")
  for (let i = 1; i <=num49; i ++) 
if (i % 7 == 0) {
  sum49 = sum * i;
  console.log(sum49)
}
// 50-masala
let num501 = +prompt("sonni kiriting")
let num502 = +prompt("sonni kiriting")
let max501;
let min502;
if (num501 > num502) {
  max501=num501;
  mmin502 = num502;
} else {
  max501 = num502;
  min502 = num501;

}
for ( let i = min502; i <= max501; i ++){
  console.log(i**2)
}
  


