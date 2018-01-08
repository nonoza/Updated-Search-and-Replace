

Algorithm
function myReplace(str, before, after) { 
  var replace;
  var search2;
  var new_word;
//Search the before word in the sentence
  search2 = str.indexOf(before);
   if (str[search2] === str[search2].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
   after = after.charAt(0).toUpperCase() + after.slice(1);
   }
  //Replace the word in the sentence
   new_word = str.replace(before,after); 
  //Display the new sentence.
  return new_word;
}
  
  



myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

