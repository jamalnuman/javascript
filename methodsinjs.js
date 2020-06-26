//Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

function reverse(string){
  var start = 0;
    var end = S.length-1;
    while (start < end) {
        if (!S[start].match(/[a-z]/i)) {
          start++;
        } else if (!S[start].match(/[a-z]/i)) {
          end--;
        } else{
          var temp = S[start];
          S[start] = S[end];
          S[end] = temp;
          start++;
          end++;
      }
    }
  return S; 
}  

//Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

function removeVowels(S) {
    let regex = /[aeiouAEIOU]/g;
    let newString = "";
    for(let i = 0; i < S.length; i++){
        if(!S[i].match(regex)) {
           newString+= S[i]
        }
    }
    return newString;
};

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

function twoNElements(nums, n) {
    let finalArray = [];
    let j = n;
    for(var i = 0; i < n; i++){
        finalArray.push(nums[i], nums[j]);
        j++;
    }
    return finalArray;
};

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

 

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 

function(candies, extraCandies) {
    var finalAnswer = [];
    let max = 0;
    candies.forEach(function(candy){
        if(candy > max) max = candy;
    });
    for(var i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) finalAnswer.push(true);
        else{ finalAnswer.push(false)}
    }
    
    return finalAnswer;
    
};

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

function ip(address) {
  var finalAnswer = "";
    for(var char of address){
        if (char === "."){
          finalAnswer+= "[.]";
        } else{
          finalAnswer+= char;
        }
    }
    return finalAnswer;
    
    
};