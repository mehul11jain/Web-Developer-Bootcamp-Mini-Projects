var color=generateRandomColors(6);
var SelectedColor=pickcolor();
var suc=document.querySelector("#suc"); 
var spn=document.querySelector("#spn")
spn.textContent=SelectedColor;
var h1=document.querySelector("h1");
var divl=document.querySelectorAll(".square");
var b2=document.querySelector("#b2");
var b3=document.querySelector("#b3");

b2.addEventListener("click",function(){
    b2.classList.add("selected");
    b3.classList.remove("selected");
    color=generateRandomColors(3);
    h1.style.backgroundColor="rgb(36, 114, 179)"
    // console.log(color);
    SelectedColor=pickcolor();
    // console.log(SelectedColor);
    spn.textContent=SelectedColor;
    suc.textContent="";
    for(i=0; i<divl.length ; i++ )
    {
        if(i<=2)
        divl[i].style.backgroundColor=color[i];
        else
        divl[i].style.display="none";
    }
})
b3.addEventListener("click",function(){
    b3.classList.add("selected");
    b2.classList.remove("selected");
    h1.style.backgroundColor="rgb(36, 114, 179)"
    color=generateRandomColors(6);
    SelectedColor=pickcolor();
    spn.textContent=SelectedColor;
    suc.textContent="";
    for(i=0; i<divl.length ; i++ )
    {
        divl[i].style.display="block";
        divl[i].style.backgroundColor=color[i];
    }
})

set();

var b1=document.querySelector("#b1");
b1.addEventListener("click",function(){
    b1.textContent="New Colors";
    color=generateRandomColors(6);
    SelectedColor=pickcolor();
    spn.textContent=SelectedColor;
    suc.textContent="";
    h1.style.backgroundColor="rgb(36, 114, 179)";
    for(i=0; i<divl.length ; i++ )
    {
        divl[i].style.display="block";
    }
    set();
})


function set(){
for(i=0 ; i<divl.length ; i++){
    divl[i].style.backgroundColor=color[i];

    divl[i].addEventListener("click",function(){
        var Clickedcolor = this.style.backgroundColor;
        if(Clickedcolor === SelectedColor)
        {
            suc.textContent="Success"
            ChangeColor(Clickedcolor)
            h1.style.backgroundColor=Clickedcolor;
            b1.textContent="Play Again?"
        }    
        else{
            suc.textContent="Try Again!";
            this.style.backgroundColor="#232323";
        }
    })
}
}

function ChangeColor(Clickedcolor){
    for(i=0 ; i<divl.length ; i++){
        divl[i].style.backgroundColor=Clickedcolor;
        }
}
function pickcolor(){
 index=Math.floor(Math.random()*color.length);
 return color[index];
}
function generateRandomColors(num){
  var arr=[];
  for(i=0 ; i<num ; i++){
    arr[i]=randomColor();
  }
  return arr;
}
function randomColor(){
    //pick  red,green,blue from 0-255;
    var r=Math.floor(Math.random()*256); 
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    //format in rgb form
    return "rgb("+ r +", "+ g +", "+ b +")" ;
}