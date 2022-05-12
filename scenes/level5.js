function level5() {
  let x = [0, 0];
  let output = [0, 0];
  let choice = 1;
  let message = 'Choose A Door'
  let clickcounter = 0;
  let gui = createGui();
  let button = new nextLevelButton();

  this.enter = function() {
    button.create();
    rectMode(CENTER);
    background('#424549');
    textSize(60);
    fill(0);
    textAlign(CENTER)
    text(message, width/2, 100);
    for (let i = 0; i < 3; i++) {
      this.drawDoor(i);
    }
  }

  this.draw = function() {drawGui()}

  this.drawDoor = function(doorIndex) {
    x[0] = (doorIndex * width) / 3 + 100;
    x[1] = (doorIndex * width) / 3 + 130;
    fill(139, 69, 19);
    rect(x[0], 300, 100, 250, 5);
    fill(218, 165, 32);
    circle(x[1], 300, 20);
  }

  this.openDoor = function(doorIndex) {
    x[0] = (doorIndex * width) / 3 + 100;
    x[1] = (doorIndex * width) / 3 + 130;
    fill('#1b0000');
    rect(x[0], 300, 100, 250, 5);
  }

  this.coverText = function() {
    noStroke();
    fill('#424549');
    rect(300, 500, 600, 100);
    rect(300, 100, 600, 100)
  }

  this.mousePressed = function() {
    print('click');
    clickcounter++;
    fill(0);
    this.coverText();
    if (choice == 1) {
      if (mouseX < 200) {
        output[0] = 1;
        this.openDoor(0);
      } else if (mouseX > 200 && mouseX < 400) {
        output[0] = 2;
        this.openDoor(1);
      } else if (mouseX > 400) {
        output[0] = 3;
        this.openDoor(2);
      }

      if (output[0] > 0) {
        choice = 2;
      }
    }

    if (choice == 2) {
      message = 'Are You Sure?'
      if (mouseX < 200) {
        output[1] = 1;
        this.openDoor(0);
        this.drawDoor(1);
        this.drawDoor(2);
      } else if (mouseX > 200 && mouseX < 400) {
        output[1] = 2;
        this.openDoor(1);
        this.drawDoor(0);
        this.drawDoor(2);
      } else if (mouseX > 400) {
        output[1] = 3;
        this.openDoor(2);
        this.drawDoor(0);
        this.drawDoor(1);
      }

      if (output[1] > 0) {
        choice = 2;
        button.switchLabel();
      }
    }
    fill(0);
    text(message, width/2, 100);
    button.clicked(5, choice);
  }
}