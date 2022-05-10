function level3() {
  let gui
  let button

  this.enter = function() {
    background('#424549');
    gui = createGui();
    button = new nextLevelButton();
    button.create();
    s = createSlider("Slider", width/8, height/2-20, width*.75, 60);
    fill('#EF2E72')
    text('Move the Slider', width/2, 150);
  }

  this.draw = function() {
    drawGui();

    if (s.isChanged && !button.isInteracted) {
      button.switchLabel();
    }
  }

  this.mousePressed = function() {button.clicked();}
}