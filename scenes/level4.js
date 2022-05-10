function level4() {
  let colorsLevel4 = [color(255, 0 , 0), color(255, 127, 0), color(255, 255, 0), color(0, 255, 0), color(0, 0, 255), color(75, 0, 130), color(148, 0, 211), color(0, 0, 0), color(255, 255, 255)];

  var rectSize = 100;
  var clicked = 0;
  var offsetX;
  var offsetY;
  var checkBox = [];
  var gui;
  var button;

  this.enter = function() {
    gui = createGui();
    button = new nextLevelButton();
    button.create();
    clicked = 0;
    stroke(0);
    strokeWeight(5);
    fill(color('#EF2E72'));
    push()
    rectMode(CENTER)
    translate(rectSize,rectSize)
    scale(.5)
    offsetX = rectSize*3/2;
    offsetY = rectSize*3/2;
    for (let squareY = 0; squareY <3; squareY++) {
      for (let squareX = 0; squareX <3; squareX++) {
        checkBox.push(createCheckbox("grid", squareX * rectSize+offsetX, squareY * rectSize + offsetY, rectSize, rectSize));
        checkBox[checkBox.length-1].setStyle({
          fillBg: colorsLevel4[checkBox.length-1],
          fillBgActive: colorsLevel4[checkBox.length-1],
          fillBgHover: colorsLevel4[checkBox.length-1],
        });
        if (checkBox.length-1 == 4 || checkBox.length-1 == 2 || checkBox.length-1 == 3 || checkBox.length-1 == 8) {
          // black
          checkBox[checkBox.length-1].setStyle({
            fillCheck: color(0, 0, 0),
            fillCheckActive: color(0, 0, 0),
            fillCheckHover: color(0, 0, 0)
          });
        } else {
          //white
          checkBox[checkBox.length-1].setStyle({
            fillCheck: color(255, 255, 255),
            fillCheckActive: color(255, 255, 255),
            fillCheckHover: color(255, 255, 255)
          });
        }
      }
    }
    pop()
  }

  this.draw = function() {
    background('#424549');
    rectMode(CENTER);
    fill(0);
    rect(width/2, height/2, 200, 200);
    drawGui();
    strokeWeight(5);
    textSize(48);
    textAlign(CENTER);
    fill(color('#EF2E72'));
    text("Chose a color", width/2, 100)
    for (let boxClicked = 0; boxClicked < checkBox.length; boxClicked++) {
      if(checkBox[boxClicked].isChanged) {
        button.switchLabel();
        for (let i = 0; i < checkBox.length; i++) {
          if (i != boxClicked) {
            checkBox[i].val = false;
          }
        }
      }
    }
  }
  
  this.mousePressed = function() {button.clicked();}
}