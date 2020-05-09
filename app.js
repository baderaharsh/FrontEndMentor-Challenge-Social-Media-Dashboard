let inDarkMode=true;

function lightMode(){
  inDarkMode===true ? inDarkMode=false : inDarkMode=true
  console.log("after ternary operator : "+inDarkMode);
  if(inDarkMode===false){
    console.log("IF activated");
    $(".white-text").css("color", "black");
    $("body").css("background-color", "white");
    $(".upper-container").css("background-color","hsl(225, 100%, 98%)");
    $(".card").css("background-color","hsl(227, 47%, 96%)");
    $(".blue-text").css("color","hsl(230, 17%, 14%)");
    $("p.blue-text").css("color","#686A7C");
    $("a.blue-text").css("color","#686A7C");
    $("label.white-text").css("color","#686A7C");
    $("h4.white-text").css("color","#686A7C");
    $(".card").hover(function(){
      $(this).css("background-color","#E1E3F0");
    }, function(){
      $(this).css("background-color","hsl(227, 47%, 96%)");
    });
    // #E1E3F0

  }
  else{
    console.log("In else loop : "+inDarkMode);
    location.reload();
  }

  // document.querySelector(".upper-container").style.backgroundColor="hsl(225, 100%, 98%)";
  // document.querySelector("body").style.backgroundColor="hsl(0, 0%, 100%)";
  // document.querySelectorAll(".white-text").style.color="black";
  // document.querySelectorAll(".card").style.backgroundColor="hsl(227, 47%, 96%)";
  // document.querySelectorAll(".blue-text").style.color="hsl(230, 17%, 14%)";
}
