//===Math ====
//console.log("sqr(): ", Math.sqrt(36));
//let data = [8, 5, 10, "Jack", 7,"Jill", 111, 3];
//data.splice(3, 1);
// let onlyNumbers = data.filter( item => {
//     if( typeof item != 'string')
//     return item;
// })
// console.log("Max: ", Math.max(...data));
// let size = data.length -1; 
// console.log("Array size: ", size);
// console.log("Element ", data[size]);
//console.log("at(): ", data.at(-1));
// let middleIndex = Math.trunc((data.length - 1)/2);
// console.log("middleIndex:", middleIndex);
// console.log("middle element:", data.slice(middleIndex, middleIndex + 2));
//let middleIndex = Math.trunc((data.length - 1)/2);
// if(middleIndex %2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex + 2 ));
// }else{
//     console.log(data[middleIndex]);
// }
//console.log(middleIndex %2 === 0 ? data.slice(middleIndex, middleIndex +2) : data[middleIndex]);
// let sentence = "I love programming "
// console.log(sentence.split('p'));
// let myDate = new Date();
// let currentDate = myDate.getDate();
// console.log("setDate(): ", new Date(myDate.setDate(currentDate + 5)));
// const time = new Day("Mon, ");
// let year = (time.getUTCDate()), (time.getUTCDate()), (time.getUTCFullYear());
// console.log();
//console.log("My date: ", myDate.toLocaleDateString());
// let age = 18;
// let salary = 50000;
// if(age > 17) {
//     if(salary >= 5000)
//     console.log("Well done");
// }else {
//     console.log("You're not qualified");
// }
//===Logical operators===
// if((age > 17) && (salary >= 5000)) {
//     console.log("Well done");
// } else {
//     console.log("Thank you, for coming.");
// }
///Switch statement
// let marks = 39;
// switch(true) {
//     case (marks < 49):
//         console.log("failed");
//         break;

//     case (marks >= 50) && (marks <= 69):
//         console.log("Passed");
//         break;

//     case (marks >= 70) && (marks <= 90):
//         console.log("Distinction");
//         break;

//     case (marks >= 50) && (marks <= 69):
//         console.log("You're awesome");
//         break;       
// }
// let numbers = [8, 9, 10, 15, 11];
// let people = {
//     name: "Konke",
//     surname: "Malindi",
//     email: "konke@agmail.com"
// }
// for(let numb in numbers) {
//     console.log(numb);
// }
// /console.table(numbers);
// for(let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }
//for of
// for(let numb of numbers) {
//     console.log(numb);
// }
// for(let p of people) {
//     console.log(p);
// }
// for(let i =0;i< 5 ; 1++) {
// console.log("let found out");
// }
//while loop
// let cnt = 0;
// while (cnt < 10) {
//     console.log(`Step: ${cnt++}`);
//     cnt++
// }
// let cnt = 0;
// while (cnt < numbers.length) {
//     console.log(numbers[cnt]);
//     cnt++;
// }

//do .. while
// do{
//     console.log(numbers[cnt]);
//     cnt++;
// }while(cnt < numbers.length);
// function addition(numb1, numb2, numb3) {
//     console.log("Sum is: ",numb1 + numb2 + numb3);
// }
// addition(4, 5, 1)
// addition(5, 7, 3)
// addition(9, 23, 8)
//arrow function
// let addition = (numb1, numb2)=>{
//     console.log("sum of numb1, numb2: ",numb1 + numb2);
// }
// addition(4, 5)
// Arrow
// =====
// ((numb1, numb2)=>{
//     console.log(numb1 + numb2);
// })(8, 2);
// function subtraction(numb1 , numb2) {
//     return numb1 - numb2
// }
// console.log(subtraction(15,13));
//Ternary operator: Shortcut for an if statement and else
// let age = 17;
// console.log(age > 17 ? "You are qualified" : "You are not qualified" );

// function sumOf(...args){
//     return args.reduce((a, b )=>{
//         return a + b
//     })
// }
// console.log(sumOf(1,2,3,4,5));

// function Person(...details) {
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details.flat(-1)
// }
// let person1 = new Person("Asandile", "Langeni", "Asandile@ymail.com")
// console.log(person1);
// console.dir(person1)
// let numbers = [1, 2, 3, 4, 5,];
// let sum = numbers.reduce((a, b)=>{
//     return a + b
// })
///let numbers = [1, 2, 3, 4, 5,];
// console.log(`Sum: ${sum}`);
// for(let numb of numbers) {
//     console.log(numb /2);
// }
// let double = numbers.map((item)=> {
//     return item * 2
// })
// console.log("Current Array: ", numbers);
// console.log("Double: ", double);
// let numbers = [1, 2, 3, 4, 5,];
// let people = [
//     {
//         id: 1,
//         firstName: 'Danny',
//         surname: 'Henk'
//     },
//     {
//         id: 2,
//         firstName: 'Dave',
//         surname: 'Henky'
//     }
// ]
// console.table(people);

// let peopleFirstName = people.map ((item)=> {
//     return item.firstName;
// })
// console.log(peopleFirstName);
// addition(5, 8, 3);
// function addition(...args) {
    // let sum = args.reduce((a, b)=> {
    //     return a + b;
    // })
    // console.log(sum);
//     console.log(args);
// }
// addition()
// 

