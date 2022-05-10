function endScreen() {
  let graph;
  let data = [10,10];
  this.enter = function() {
    graph = new BarGraph(10,10,data);
    //background('#424549');
    background(255);
    textSize(75);
    textAlign(CENTER);
    fill('#EF2E72');
    text("End Screen", width / 2, height/3);
    /*httpPost('https://sheet2api.com/v1/OL0isnynQyCu/test/Sheet1', 'json',
    {
      "Level 1": lv1,
      "Level 2": lv2,
      "Level 3": lv3,
      "Level 4": lv4
    });*/
    graph.draw();
  }
}

class BarGraph {
  constructor(x, y, data) {
    this.x = x;
    this.y = y;
    this.height = height/data.length;
    this.data = data;
  }
  draw() {
    for (let i = 0; i < this.data.length; i++) {
      rect(this.x,this.y+this.height*i,map(this.data[i],0,100,this.x,width-this.x*2),this.height);
    }
  }
}