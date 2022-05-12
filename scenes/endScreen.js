// * Most commented code is for drawing the bar graph or sending data to sheet2api

function endScreen() {
  let barGraph = new BarGraph(data.grid.rand);
  let linegraph = {rand: new LineGraph(data.slider.rand, '#CB2B92'), human: new LineGraph(data.slider.human, '#00008B')};
  let buttonVisual = new ButtonVisual(data.button.rand, data.button.human);
  let currentGraph = 0;
  this.enter = function() {
    //saveJSON(data, 'data.json');
    linegraph.rand.setup();
    linegraph.human.setup();
    background('#424549');
    textSize(75);
    textAlign(CENTER);
    fill('#EF2E72');
    ////text("End Screen", width / 2, height/3);
    /*httpPost('https://sheet2api.com/v1/OL0isnynQyCu/test/Sheet1', 'json',
    {
      "Level 1": lv1,
      "Level 2": lv2,
      "Level 3": lv3,
      "Level 4": lv4
    });*/
  }
  this.draw = function() {
    linegraph.rand.draw();
    linegraph.human.draw();
    buttonVisual.draw();
    barGraph.draw();/*
    if (currentGraph === 0) {
      text("Random", width / 2, height / 2);
    } else {
      text("Human", width / 2, height / 2);
    }
    if (mouseIsPressed) {
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 - 100 && mouseY < height / 2 + 100) {
        currentGraph = 1;
      } else if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 - 100 && mouseY < height / 2 + 100) {
        currentGraph = 0;
      }
    }*/
  }
}
/*
class BarGraph {
  constructor(x, y, data) {
    this.x = x;
    this.y = y;
    this.height = 40;
    this.margin = 10;
    this.data = data;
  }
  draw() {
    for (let i = 0; i < this.data.length; i+=2) {
      rect(this.x,this.y+(this.height + this.margin)*i,map(this.data[i],0,150,this.x,width-this.x*2),this.height);
    }
  }
}*/

class LineGraph {
  constructor(data, lineColor, showPoints = false, showBoundingBox = false) {
    this.data = data;
    this.coords = [];
    this.lineColor = lineColor;
    this.showPoints = showPoints;
    this.showBoundingBox = showBoundingBox
    this.origin = {x: width*.25/2, y: 0}; // ! origin.y isn't used correctly
    this.width = width*.75; // TODO vw & vh functions
    this.height = height*.75;
  }
  setup() {
    // load coords from data
    for (let i = 0; i < 101; i++) {
      this.coords.push(map(i, 0, 100, this.origin.x, this.width+this.origin.x)); // X
      this.coords.push(map(this.data[i], 0, 150, this.origin.y+this.height, this.origin.y)); // X
    }
  }
  draw() {
    noFill();
    stroke(this.lineColor);
    strokeWeight(3);

    // draw line
    beginShape();
    for (let i = 0; i < this.coords.length; i+= 2){
      curveVertex(this.coords[i], this.coords[i+1]);
      if (i == 0 || i == this.coords.length - 2) {
        curveVertex(this.coords[i], this.coords[i+1]);
      }
      if (this.showPoints) {
        ellipse(this.coords[i], this.coords[i+1], 10, 10);
      }
    }
    endShape();

    if (this.showBoundingBox) {
      this.boundingbox();
    }
  }
  boundingbox() { // FIXME bounding box doesn't always match the graph
    rect(this.origin.x, this.origin.y, this.width, this.height)
  }
}

// TODO
// lerp between mills since animation started maped between max time and distance
// line flattens when other data is dragged over it, then leprs to new data
// can also switch between types of graphs

class BarGraph{
  constructor(data){
    this.data = data;
  }
  draw(){
    textAlign(CENTER);
    stroke(0);
    strokeWeight(1)
    textSize(15);
    fill(0)
    rectMode(CORNER);
    for(let i = 0; i < 9; i++){
      fill(255);
      rect(i*66+11, 580, 50, -map(data.grid.rand[i], 0, 100, 0, height*3), 5);
      fill(0);
      text(data.grid.rand[i], i*66+35, 580-data.grid.rand[i]*8.5);
    }
  }
}

class ButtonVisual {
  constructor(human, rand){
    this.human = human
    this.rand  = rand
  }
  draw() {
    stroke(0);
    textSize(30)
    fill(0)
    text('Pressed ', 100, height/2+150);
    text('Skipped ', 500, height/2+150);
    fill(0);
    rect(550, height/2-100, -500, 50);
    fill(255);
    rect(50, height/2-100, map(this.rand[0]/(this.rand[0]+this.rand[1])*100,0,100,50,550)-50, 50);
    fill(0);
    rect(550, height/2+50, -500, 50);
    fill(255);
    rect(50, height/2+50, map(this.human[0]/(this.human[0]+this.human[1])*100,0,100,50,550)-50, 50);
  } 
}