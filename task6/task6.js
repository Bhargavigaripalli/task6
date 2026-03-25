
// task-1
let input = " naveen kumar "
let output = input
  .trim()              // here trim removes extra spaces from start & end
  .toUpperCase()       // here it converts to uppercase
  .replace(" ", "_")   // replace  space

console.log(output);   // NAVEEN_KUMAR


//task-2
let email="test@gmail.com"
if(email.includes("@")&&email.endsWith(".com")){ //here includes checks whether it present in the input or not
    console.log("Valid email")    //endswith will check whether it ends input with same value or not 
}    
else{
    console.log("Invalid email")
}

//task-3
let word= "javascript is very powerful language"
let count=word.split(" ") //here by using split will craete a array and every word becomes single word
console.log(count.length) //it retures the length of that array

//task-4
let sentence = "python python developer"
let parts = sentence.split(" ");
parts[1] = "javascript"// replace only second word
console.log(parts.join(" "));

//task-5
let password = "Task1234"
let upper = false
let lower = false
let number = false
for (let char of password) {
    if (char >= 'A' && char <= 'Z'){   //it checks whether password contain captial aphabets or not
        upper = true}
    else if (char >= 'a' && char <= 'z') { //it checks whether password contain small aphabets or not
        lower = true }
    else if (char >= '0' && char <= '9') {   //it checks whether password contain numbers or not
        number = true}
}
if (password.length >= 8 && upper && lower && number) {
    console.log("Strong")
} else {
    console.log("Weak")
}


//task-6
let string = "hello"
let reversed = ""
for (let i = string.length - 1; i >= 0; i--) {  // in this  o   l  l e  h
    reversed += string[i] //"o" ,"ol" ,"oll" ,"olle" ,"olleh"
        }
console.log(reversed) // olleh


//task-7

let year = 2009
let month = 8
let date = 17
if (month < 1 || month > 12 || date < 1 || date > 31) { //checks validate month and date
    console.log("Invalid Date")
} else {
    let dob = new Date(year, month - 1, date)   // create date (month - 1 because JS months start from 0)
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] // list of days
    let dayName = days[dob.getDay()]   // get day number (0-6) and convert to name
    console.log(`You were born on ${dayName}`)
}

// task-8
 
setInterval(() => {  //run this block again and again according set the time
    let now = new Date()//get current date and time
    let h = now.getHours() //it will get current hour  of time(here 0 to 23 it consider)
    let m = now.getMinutes() //similarily current minutes(0-59)
    let s = now.getSeconds()  //similarily current seconds(0-59)
    if (h < 10) {
        h = "0" + h  // if hour is less than 10, add 0 in front (example: 07)
    }  
    if (m < 10) {
        m = "0" + m  // if hour is less than 10, add 0 in front 
    }  
    if (s < 10) {
        s = "0" + s  // if hour is less than 10, add 0 in front 
    }
    // console.clear()  before time clear i used this
    // console.log(h + ":" + m + ":" + s);   current time it returns

}, 1000);


//task-9
//  Date Difference Calculator
let date1 = new Date("2026-03-23")
let date2 = new Date("2026-03-25")
let diffTime = Math.abs(date2 - date1); // remove negative
let diffDays = diffTime / (1000 * 60 * 60 * 24)  //here  1000 ms = 1 second,60 sec=1min ,1min=60 sec,24 hrs=1 gay
console.log(diffDays);

//task-10
//  Character Frequency Counter
let js = "javascript"
let count1 = {}
for (let char of js) {  //here each letter go one by one
    if (count1[char]) { //check whether the letter exist or not 
        count1[char] = count1[char] + 1 //it is there it will add 
    } else {
    count1[char] = 1  //if not there then it returns 1
    }
}
console.log(count1)