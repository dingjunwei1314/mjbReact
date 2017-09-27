export default function setFontsize(){
  var designWidth = 720;
  var designFontSize = 100;
  var win_width;
  if(window.screen.width>720){
      win_width=720
  }else{
    win_width= window.screen.width
  }
  var scale = win_width/designWidth;
  var root_font_size = ((scale * 10000 * designFontSize) / 10000).toFixed(4);
  document.documentElement.style.fontSize = root_font_size+'px';
  window.onresize=function(){
    setFontsize()
  }
}