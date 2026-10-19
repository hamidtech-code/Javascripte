// Conditional statements
let number=2
if(number>0){
   console.log("The number is Positive")}
else if(number<0){
   console.log("The number is negative")
}
else{
   console.log("zero")
}

// Loop :-
// for loop
for (let i = 1; i <=5; i++) {
   console.log(i)
   
}
// for in loop:
let item={
   "apple":100,
   "banana":50,
   "potato":40

}
for(let key in item){
   console.log(key,item[key])
   
   
}

// for of:
let fruit="Apple";
for (const fruits of fruit) {
   console.log(fruits)   
}

// while do loop:
let i=1;
while(i<=10){
   console.log(i,"I like Javascript!")
i++;}

let e=1;
do{
   console.log("Coding is best subject")
e++;
}
while(e<5);
