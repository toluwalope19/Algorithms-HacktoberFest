
function isPalindrome(word)
{
  let forward ="";
  let backward = "";
  for(let i = 0; i < word.length; i++){
    forward += word[i].toLowerCase();
   
}
for(let j = (word.length)-1; j>=0; j--){
  backward += word[j].toLowerCase();
}
if (forward == backward){
  return true;
}else{
  return false;
}
console.log(forward)
};

console.log(isPalindrome());