function endScreen() {
  let graph;
  let data = [29,10];
  let coordsHOLD = [100, 40, 80, 60, 100, 100, 10, 120, 50, 150];
  let coords = [];
  this.enter = function() {
    for (let i = 0; i < 101; i++) {
      coords.push(coordsHOLD[i % coordsHOLD.length]);
    }
    graph = new BarGraph(10,10,coords);
    //background('#424549');
    background(255);
    textSize(75);
    textAlign(CENTER);
    fill('#EF2E72');
    //text("End Screen", width / 2, height/3);
    /*httpPost('https://sheet2api.com/v1/OL0isnynQyCu/test/Sheet1', 'json',
    {
      "Level 1": lv1,
      "Level 2": lv2,
      "Level 3": lv3,
      "Level 4": lv4
    });*/
    graph.draw();
    noFill();
        stroke(0);
        

        beginShape();

         for (let i = 0; i < coords.length; i+= 2){
          curveVertex(coords[i], coords[i+1]);
          if (i == 0 || i == coords.length - 2) {
            curveVertex(coords[i], coords[i+1]);
          }
          ellipse(coords[i], coords[i+1], 10, 10);
         }
         endShape();
  }
}

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
}