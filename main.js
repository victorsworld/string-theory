const prompt = require ("prompt-sync") ({sigint: true})


// function xify(str){
//     let newStr = "";
    
//     for(let i = 0 ; i < str.length; i ++){
//         newStr = newStr + "x";
//     }
//     return newStr

// }
// console.log(xify('hello'))


// function yellingChars(str){
//     let x = ""
//     for(let i = 0 ; i < str.length; i ++){
//         x = x + str[i] + "!"
//     }
//     return x;
// } console.log(yellingChars('hello'))

// function indexedChars(str){
//     let x = ""
//     let num = 0
//     for(let i = 0 ;  i < str.length && num <= str.length; i ++){
     
//         x = x + num+ str[i]
//         num += 1
//     }
//     return x
// } console.log(indexedChars('Hello'))


// function exclaim(str){
//     let x = "";
//     for (let i = 0; i < str.length; i ++){

//         if(str[i] === "?" || str[i] === "."){
//            x +=  "!";
//         } else{
//            x += str[i] 
//         }

//     }
//     return x;
// }
// console.log(exclaim("I DID IT???????."))


// function truncate(str){
//     let x = ""
//     for(let i = 0; i <= 15; i++ )
//         {
//             x += str[i]
//         }
        
//       return x + "..." ;
// }

// console.log(truncate("Well, thats just, like, your opion man"))

// function ciEmailify(str){
//     let x = "";
//         for (let i = 0; i < str.length; i ++){
    
//             if(str[i] === " " || str[i] === ","){
//                x +=  ".";
//             } else {x += str[i] }
//         }
//             return x + "@codeimmersives.com" ;
//     }
// console.log(ciEmailify(prompt(" What is your Full name space ie 'joe doe': ")))

// function reverse(str){
//     x = ""
//     for(let i  = str.length -1; i >= 0 ; i-- ){
//         x = x + str[i]
//     }
//     return x;
// }
// console.log(reverse(" !!!draeh huy doG morf eb sgnisselb"))
function onlyVowels(str){
    let x  = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a"){
            x += "a"
        }else if (str[i] === "e"){
            x += "e"
        }else if (str[i] === "i"){
            x += "i"
        }else if (str[i] === "o"){
            x += "o"
        }else if (str[i] === "u"){
            x += "u"
        }}
         return x;
}
console.log(onlyVowels(prompt()))
