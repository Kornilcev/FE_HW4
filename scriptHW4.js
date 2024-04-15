//1

function isEven(mas) {

   let sum1 = 0 
for( let i = 0; i < mas.length; i++){
    if(mas[i] % 2 === 0) {
        sum1 += mas[i]
    }
} return sum1
}
console.log(isEven([1,2,3,4,5]))

function isNotEven(mas) {

    let sum2 = 0 
 for( let i = 0; i < mas.length; i++){
     if(mas[i] % 2 !== 0) {
         sum2 += mas[i]
     }
 } return sum2
 }
 console.log(isNotEven([1,2,3,4,5]))

 function isLarger(isEven, isNotEven){
   
     if (isEven > isNotEven){
        return isEven 
     } else {
        return isNotEven
     }
}
 console.log(isLarger())
        
//2 

function inFahrenheit(degrees){
let num = degrees * 9/5 + 32;
return num
} console.log(inFahrenheit(5) + " Fahrenheit")

//3

function returnMaxPageObj (array){
    
    let maxPage = 0;
    let obj ={};
    for (let i= 0; i < array.length; i++){
        const {page} = array[i];
        if (maxPage < page){
            maxPage = page;
            obj = array[i]
        }
    }
         return obj;
    
}

console.log(returnMaxPageObj([
    {
    id: 1,
    title: "Сон",
page: 300,
author: "Тарас Шевченко"
},
    {
    id: 2,
    title: "Невский проспект",
page: 150,
author: "Николай Гоголь"
},
    {
    id: 3,
    title: "Война и мир",
page: 1000,
author: "Лев Толстой"
},
    {
    id: 4,
    title: "Ромео и Джульетта",
page: 250,
author: "Уильям Шекспир"
}

]));

//4

// function uniqueNumber(mas){
//     const unique = [];
//     for( let i = 0; i < mas.length; i++){
//         if()
//         unique.push(i)
//     } return unique
// }
// console.log(uniqueNumber([1,2,3,4,2,2,1]))
