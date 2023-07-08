/*
Pig Latin Translator
Randy Huynh 
7/7/2023

Pseudo Code:
script.js

-Function to Translate
    -Retrieve input text from textbox
    -Split input into array of words
    -Convert each word to lowercase
    -Create an empty array to store translated words
    -Case function for words that start with to append either 'ay' or 'way':
        -Single Consonant
        -Double Consonant
        -Vowel
    -Add capitialization if original had it using indexes
    -Add translated word to array of translated words
    -Join words into single string
    -Set string to output element
-Function to check if letter is a vowel
-Function to clear old outputs (new)
*/

 //Using document.getElementById to retrieve inputText and declare outputText for later use
function translateToPigLatin() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
  
    //alert for a empty text box
    if (inputText === "") {
      alert("Please enter text in the box to translate");
    } else if (inputText.length === 1) {
      alert("Please enter more than one letter to translate");
    } else {  //Creating an array called 'words' using .split from user text
      const words = inputText.split(' ');

      //Iterate over each word in 'words'; using .map to convert to lowercase assign to a variable to be translated later (empty string)
      const translatedWords = words.map((word) => {
        const lowerCaseWord = word.toLowerCase();
        let translatedWord = '';
  

        //Function that sees if the first character is a vowel if it is keep the word the same and simply add 'way' to the end.
        if (isVowel(lowerCaseWord[0])) {
          translatedWord = lowerCaseWord + 'way';
        } else {//initializes 2 variables: consonants and restOfWord
          let consonants = '';
          let restOfWord = lowerCaseWord;
 
          //while loop that keeps iterating through the string until the first character of restOfWord is not a vowel
          while (restOfWord.length > 0 && !isVowel(restOfWord[0])) {
            consonants += restOfWord[0];
            restOfWord = restOfWord.slice(1);
          }
          //when condition is met create the translated word with the reformatted string and concatenate 'ay' to end of word
          translatedWord = restOfWord + consonants + 'ay';
        }
        
        //Check to convert first character to original words capitalization or not 
        if (word[0] === word[0].toUpperCase()) {//updates first char and concatenate it
          translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
        }
        
        
        return translatedWord;
      });
  
      //Where the words are joined into one string
      const translatedText = translatedWords.join(' ');
  
      //Adding a space to the end of the word for future translated words for reader visibility
      outputText.textContent += translatedText + '\n';
    }
  }
  
//function that checks to see if letter is a vowel 
function isVowel(letter) {
return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
}
//"clears" old output by replacing the content of outputText with an empty ' '.
function clearOutputText() {
const outputText = document.getElementById('outputText');
outputText.textContent = '';
}
  
