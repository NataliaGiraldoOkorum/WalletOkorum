module.export({default:()=>getViewportRect});let getWindow;module.link("./getWindow.js",{default(v){getWindow=v}},0);let getDocumentElement;module.link("./getDocumentElement.js",{default(v){getDocumentElement=v}},1);let getWindowScrollBarX;module.link("./getWindowScrollBarX.js",{default(v){getWindowScrollBarX=v}},2);let isLayoutViewport;module.link("./isLayoutViewport.js",{default(v){isLayoutViewport=v}},3);



function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}