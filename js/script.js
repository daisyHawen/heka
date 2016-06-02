window.onload = function() {
  var music = document.getElementById("music");
  var audio = document.getElementsByTagName("audio")[0]
  var page1=document.getElementById("page1");
  var page2=document.getElementById("page2");
  var page3=document.getElementById("page3");
//音乐停止
audio.addEventListener("ended",function(){
  music.setAttribute("class","");
},false)
  music.addEventListener("touchstart",function(){
    if (audio.paused) {
      audio.play()
      this.setAttribute("class", "play")
      // this.style.animationPlaystate="running";
      // this.style.webkitanimationPlaystate="running";
    } else {
      audio.pause();
      this.setAttribute("class", "")
      // this.style.animationPlaystate="paused";
      // this.style.webkitanimationPlaystate="paused";
    }
  },false)
  page1.addEventListener("touchstart",function(){
    page1.style.display="none";
    page2.style.display="block";
    page3.style.display="block";
    page3.style.top="100%";
    setTimeout(function(){
      page2.setAttribute("class","page fadeout")
      page3.setAttribute("class","page fadein")

    },5500)
  },false)
}
