//1  Square star Pattern



// let n = 5
// let string1 = '';

// for (let i=0; i<n; i++){
//     //external loop
//     for (let j=0; j<n; j++){
//         //internal Loop
//         string1 += '*';
//     }
//     //new line after each row
//     string1 += '\n';
// }
// console.log(string1);











// 2 hollow square pattern

// let n=5; //rows or coloum count
// let string = '';

// for(i=0; i<n; i++){
//     for(j=0; j<n; j++){
//         if(i==0 || i==n-1){
//             string +='*';
//         }
//         else {
//             if(j==0 || j==n-1){
//                 string+= '*';
//             }
//             else{
//                 string += ' ';
//             }
//         }
//     }
//     string += '\n';
// }
// console.log(string);






// 3 right triangle pattern 


// let n =5;
// string ='';
// for (let i=1; i<=n; i++){
//     for(let j=0; j<n-i; j++){
//         string +=' ';
//     }
//     for(let k=0; k<i; k++) {
//         string += '*';
//     }
//     string +='\n'
// }
// console.log(string);







// 4 left triangle pattern

// let n=5;
// let string= '';

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         string+='*';
//     }
//     string+='\n';
// }
// console.log(string);










// 5 downward triangle

// let n=5;
// let string='';

// for(let i=0; i<n; i++){
//     for(let k=0; k<n-i; k++){
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);








// 6 hollow triangle star pattern

// let n=6;
// let string = '';

// for(let i=0; i<=n; i++){
//     for(let j=0; j<i; j++){
//         if(i===n){
//             string += '*';
//         }
//         else{
//             if(j==0 || j==i-1){
//                 string += '*';
//             }
//             else{
//                 string += ' ';
//             }
//         }
//     }
//     string += '\n';
// }
// console.log(string);




// 7 Pyramid pattern

// let n=7;
// let string ='';

// for (let i=0; i<n; i++){
//     for(let j=0; j<n-i; j++){
//         string += ' ';
//     }
//     for(let k=0; k<2*i-1; k++){
//         string += '*'
//     }
//     string += '\n';
// }
// console.log(string);











// 8 reverse Pyramid

// let n=5;
// let string ='';

// for (let i=0; i<n; i++){
//     for(let j=0; j<i; j++){
//         string += ' ';
//     }
//     for (let k=0; k<2*(n-i)-1; k++){
//         string += '*';
//     }
//     string +='\n';
// }
// console.log(string);






// 9 hollow pyramid

// let n =5;
// let string ='';
// for (i=0; i<=n; i++){
//     for (j=0; j<= n-i; j++){
//         string += ' ';
//     }
//     for (k=0; k<2*i-1; k++){
//         if(i===0 || i===n){
//             string += '*';
//         }
//         else{
//             if(k===0 || k===2*i-2){
//                 string += '*';
//             }
//             else {
//                 string += ' '
//             }
//         }
//     }
//     string+= '\n';
// }
// console.log(string)









// 10 Dimond patttern

// let n=5;
// let  string = '';
// //upside pyramid
// for(let i=1; i<=n; i++){
//     for(let j=n; j>i; j--){
//         string+= ' ';
//     }
//     for(let k=0; k<i*2-1; k++){
//         string += '*';
//     }
//     string +='\n';
// }
// //downward pyramid
// for(let i=1; i<=n-1; i++){
//     for(let j=0; j<i; j++){
//         string += ' ';
//     }
//     for(k=(n-i)*2-1; k>0; k--){
//         string +='*';
//     }
//     string += '\n';
// }
// console.log(string);








// 11 hollow diamond

// let n=5;
// let string ='';
// //upside pramid,dimond
// for (let i=1; i<=n; i++){
//     for (let j=n; j>i; j--){
//         string += ' ';
//     }
//     //printing star
//     for (let k=0; k<i*2-1; k++){
//         if(k===0 || k===2*i-2){
//             string +='*';
//         }
//         else {
//             string += ' ';
//         }
//     }
//     string +='\n';
// }

// //downward dimond
// for (let i=1; i<=n-1; i++){
//     for (let j=0; j<i; j++){
//         string += ' ';
//     }
//     //printing star
//     for (let k=(n-i)*2-1; k>=1; k--){
//         if(k===1 || k===(n-i)*2-1){
//             string += '*';
//         }
//         else {
//             string += ' ';
//         }
//     }
//     string +='\n';
// }
// console.log(string)












// 12 Hourglass star


// let n=5;
// let string ='';

// for (let i=0; i<n; i++){
//     for(let j=0; j<i; j++){
//         string += ' ';
//     }
//     for (let k=0; k<2*(n-i)-1; k++){
//         string += '*';
//     }
//     string +='\n';
// }
// for (let i=2; i<=n; i++){
//     for(let j=0; j<n-i; j++){
//         string += ' ';
//     }
//     for(let k=0; k<2*i-1; k++){
//         string += '*'
//     }
//     string += '\n';
// }
// console.log(string);












//13 Right pascal star pattern

// let n=5;
// let string = '';

// for(let i=1; i<=n; i++){
//     for (let j=0; j<i; j++){
//         string += '*';
//     }
//     string +='\n';
// }
// for (let i=1; i<=n-1; i++){
//     for (let j=0; j<n-i; j++){
//         string +='*';
//     }
//     string +='\n';
// }
// console.log(string);






// 14 Left pascal star pattern

// let n=5;
// let string ='';

// for (let i=1; i<=n; i++){
//     for (let j=0; j<n-i; j++){
//         string +=' ';
//     }
//     for (let k=0; k<i; k++){
//         string += '*';
//     }
//     string += '\n';
// }

// for (let i=1; i<=n-1; i++){
//     for (let j=0; j<i; j++){
//         string += ' ';
//     }
//     for (let k=0; k<n-i; k++){
//         string += '*';
//     }
//     string += '\n';
// }
// console.log (string);






// 15 Heart Star pattern
/*
var n=6;
var str ='';
for (let i=n/2; i<n; i+=2) {
    //printing first spaces
    for(let j=1; j<n-i; j+=2){
        str += ' ';
    }
    //printing firt star
    for (let j=1; j<i+1; j++){
        str +='*';
    }
    //print second space
    for (let j=1; j<n-i+1; j++){
        str += ' ';
    }
    //printing second star
    for(let j=1; j<i+1; j++){
        str += '*';
    }
    str += '\n';
}
//lower part
//inverted pyramid
for (let i=n; i>0; i--){
    for (let j=0; j<n-i; j++){
        str += ' ';
    }
    for (let j=1;  j<i*2; j++){
        str +='*'
    }
    str += '\n';
}
console.log(str);



*/



































