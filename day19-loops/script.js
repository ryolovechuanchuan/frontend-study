for(let i =1 ;i<=5;i++){
    console.log(i);
}

for(let i=10;i>=1;i--){
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}



for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(
      `${i} x ${j} = ${i * j}`
    );
  }
}

let i =1;
while(i<=10){
    console.log(i)
    i++;
}

for(let i =1 ; i<=10 ; i++){
    if(i===7){
        break;
    }
    console.log(i)
}

for(let i =1 ;i <=10 ; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

for(let i = 100 ;i>=1;i--){
    if(i%10 === 0){
        console.log(i)
    }
}


for(let i = 1 ; i<=100 ;i++){
    if(i===0){
        console.log(i);
    }
}

for(let i =1 ; i<=100 ; i++){
    if(i%2===0){
        console.log(i)
    }
}

let sum = 0;
for(let i = 1; i<=100 ; i++){
    sum+=i;
}
console.log(sum);


const target = 8;
for(let i = 1 ;i<=10;i++){
    if(i===8){
        console.log("找到數字")
        break;
    }
}

for(let i = 1 ;i<=9;i++){
    for(let y = 1 ;y<=9;y++){
        console.log(`${i}*${y}=${i*y}`)
    }
}