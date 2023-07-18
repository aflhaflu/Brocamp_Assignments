let out = document.getElementById("lb");
window.addEventListener("load", () => {
  const ml = prompt("Enter your String");
  const value = checkPalindrome(ml);
  out.textContent=value;
  document.getElementById("q").textContent=ml
});
function checkPalindrome(string) {
  for (let i = 0; i < (string.length)/2; i++) {
    if(string[i] !== string[string.length -1 -i]){
      return 'It is not a Palindrome';
    }
  }
  return 'It is a Palindrome'
}
