export default class Palindrome{
     isPalindrome(word : string) : boolean{

         var palindromeArray : string[] = [];
        for(let index= word.length - 1; index >= 0; index--){
            var letter = word[index];
            palindromeArray.push(letter);
        }
        var result : string = palindromeArray.join('');
        return word === result;
    }
}


const palindrome : Palindrome = new Palindrome();
console.log(palindrome.isPalindrome("ana"));
console.log(palindrome.isPalindrome("ovo"));