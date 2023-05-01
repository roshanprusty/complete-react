// import { useState } from "react";
// // If a word begins with a consonant, take the first consonant or consonant cluster and move it to the end of the word. Once that’s done, add an “ay” at the end.
// // If the word doesn’t have a vowel, just add an “ay” at the end.
// // If a word begins with a vowel, just add “way” at the end.
// function App(){
//   const [pigLatin, setPigLatin]=useState("")
//   function temp(e){
//     let text = e.target.value;
//     for(let i=0; i<text.length;i++){
//       if()
//     }
//     if(e.target.value.charAt(0)=='a' || e.target.value.charAt(0)=='e'|| e.target.value.charAt(0)=='i'|| e.target.value.charAt(0)=='o'|| e.target.value.charAt(0)=='u') setPigLatin(e.target.value+"way");
    
//   }
//   return(<>
//     <span>Enter the text that you want to convert into Pig Latin : </span>
//     <input type="text" onChange={temp}/> <br />
//     <span>Pig Latin : </span><p>{pigLatin}</p>
//   </>)
// }
// export default App;