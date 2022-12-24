/*CODEWARS */
function scramble(str1, str2) {
    for (const char2 of str2) {
      if (!str1.includes(char2)) {
        return false;
      }
    }
    return true;
  }
  
  console.log(scramble("rkqodlw", "world")); // true
  console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
  console.log(scramble("katas", "steak")); // false
  
  /*Extract the domain name from a URL */
  function domainName(url) {
    url = url.replace("https://", "");
    url = url.replace("http://", "");
    url = url.replace("www.", "");
    return url.split(".")[0];
  }
  
  console.log(domainName("http://google.com"));
  console.log(domainName("http://google.co.jp"));
  console.log(domainName("http://youtube.com"));