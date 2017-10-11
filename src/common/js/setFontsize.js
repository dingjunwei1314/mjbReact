export default function setFontsize(){

  var designWidth = 720;
  var designFontSize = 100;
  var win_width;
 
  if (window.innerWidth)
  win_width = window.innerWidth;
  else if ((document.body) && (document.body.clientWidth))
  win_width = document.body.clientWidth;
  
  if(win_width>720){
    win_width=720
  }

  console.log(win_width)
  var scale = win_width/designWidth;
  var root_font_size = ((scale * 10000 * designFontSize) / 10000).toFixed(4);
  document.documentElement.style.fontSize = root_font_size+'px';
}