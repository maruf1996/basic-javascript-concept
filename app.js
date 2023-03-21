// Practice 1 (if else)

// const marks=101;
// console.log('Your Result', marks)

// if(marks>0 && marks <=100){
//     // console.log('Result Positive')
//     if(marks<33){
//         console.log('Your Faild')
//     }
//     else if(marks>=33 && marks<=39){
//         console.log('D grade')
//     }
//     else if(marks>=40 && marks<=49){
//         console.log('C grade')
//     }
//     else if(marks>=50 && marks<=59){
//         console.log('A-')
//     }
//     else if(marks>=60 && marks<=69){
//         console.log('B grade')
//     }
//     else if(marks>-70 && marks<=79){
//         console.log('A grade')
//     }
//     else if(marks>=80 && marks<=89){
//         console.log('A+')
//     }
//     else{
//         console.log('Golden A+')
//     }
// }else{ 
//     console.log('Result Nagetive')
// }


// Practice 2 (switch)

// const name='tonni';
// switch(name){
//     case 'rakib':console.log('Boro Chele');
//     break;
//     case 'maruf':console.log('Choto Chele');
//     break;
//     case 'surmi':console.log('Boro Meye');
//     break;
//     case 'tonni':console.log('Choto Meye');
//     break;
//     default:console.log('Ora keu na')
// }


// Practice 3 (Array)

// const result=[45,75,98,67];
// console.log(result.length);
// console.log(result[3]);
// result.push(95);
// result.push(90);
// result.push(85);
// result.pop();
// result.pop();
// result.shift();
// result.shift();
// result.unshift(65);
// result.unshift(75);
// console.log(result);
// console.log(result.reverse());


// Practice 4 (loop)

// for(let i=1; i<=10;i++){
//     console.log(i)
// }
// for (let i=10; i>=0;i--){
//     console.log(i)
// }
// const names=['rakib','maruf','surmi','tonni','mamun','tuhin','tania','rubaiya'];
// for(let i=0;i<names.length;i++){
//     const name=names[i];
//     console.log(name);
// }
const names=['rakib','maruf','surmi','tonni','mamun','tuhin','tania','rubaiya'];
let bigName=names[0];
for(let i=0;i<names.length;i++){
    const name=names[i];
    if(bigName.length<name.length){
        bigName=name;
    }
}
console.log(bigName);
