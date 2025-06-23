let scores1=[12,13,14,16]
let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

let fruits=["banana","mango","pomegranate","apple"]
fruits.sort()
console.log(fruits)

let numbers=[23,16,12,39,9]
numbers.sort()
console.log(numbers)

numbers.sort((a,b)=>a-b)
console.log(numbers)

