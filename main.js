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
  sum23= sum23 + i;
  console.log(sum23)
}

