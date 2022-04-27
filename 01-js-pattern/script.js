// Square star Pattern



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











//hollow square pattern

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






//right triangle pattern 


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







//left triangle pattern

// let n=5;
// let string= '';

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         string+='*';
//     }
//     string+='\n';
// }
// console.log(string);










//downward triangle

// let n=5;
// let string='';

// for(let i=0; i<n; i++){
//     for(let k=0; k<n-i; k++){
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);








//hollow triangle star pattern

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




//Pyramid pattern

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











//reverse Pyramid

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






//hollow pyramid

