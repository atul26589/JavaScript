let numbers=[1,1,2,7,3,4,5,6];
let doubled=numbers.map(num=>num*2);
console.log(doubled);


let username=['user1','user2'];
let testusers=username.map(u=>({username:u,password:'Test@123'}));
console.log(testusers);


let number=[1,2,3,4,5,6,7,8,9];
let evennums=number.filter(nums=>(nums%10===0));
console.log(evennums);

let result=[{testcaseid:'smaoke',status:'fail'},{testcaseid:'sanity',status:'pass'}];
let passedtc=result.filter(tc=>(tc.status==='pass'));
console.log(passedtc)

let numsum=[1,1,2,2,3,3,4,5];
let sum=numsum.reduce((acc,n)=>acc+n,0);
console.log(sum);

let results=['pass','fail','pass','pass'];
let passedcount=results.reduce((acc,r)=> r==='pass'?acc+1 :acc,0);
console.log(passedcount);