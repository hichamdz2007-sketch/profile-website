const words=["Web Designer","Frontend Developer","Freelancer"];
let i=0,j=0,del=false;
const span=document.querySelector(".typing-text span");
function type(){
 if(!del && j<=words[i].length) span.textContent=words[i].substring(0,j++);
 if(del && j>=0) span.textContent=words[i].substring(0,j--);
 if(j==words[i].length) del=true;
 if(del && j==0){del=false;i=(i+1)%words.length}
 setTimeout(type,120);
}
type();




