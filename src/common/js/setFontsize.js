export default function setFontsize(){
  var designWidth = 1440;
  var designFontSize = 100;
  var win_width;
  if(window.screen.width>1440){
      win_width=1440
  }else{
    win_width= window.screen.width
  }
  var scale = win_width/designWidth;
  var root_font_size = ((scale * 10000 * designFontSize) / 10000).toFixed(4);
  document.documentElement.style.fontSize = root_font_size+'px';
  window.onresize=function(){
    setFontsize();
  }
}