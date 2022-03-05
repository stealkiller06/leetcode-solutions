var isPalindrome = function(s) {
    
    let l = 0;
    let r = s.length -1;
    while(l<r){
        const LIsALetter = isAValidLetterOrNumber(s[l].toLowerCase().charCodeAt(0));
        const RIsALetter = isAValidLetterOrNumber(s[r].toLowerCase().charCodeAt(0))

        if(LIsALetter && RIsALetter){
            if(s[l].toLowerCase() === s[r].toLowerCase()){
                l+=1
                r-=1
            }else{
                return false
            }

        }else{
            if(!LIsALetter){
                l+=1
            }
            if(!RIsALetter){
                r-=1
            }
        }
    }
    return true
  
};

const isAValidLetterOrNumber = (c)=>{
    
    return (c <= 122 && c>= 97) || (c>=48 && c<= 57)
}

const s = "0P"

console.log(isPalindrome(s))