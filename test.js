let data = {
    grid: {rand: [0,0,0,0,0,0,0,0,0], human: [0,0,0,0,0,0,0,0,0]},
    button: {rand: [], human: []},
    slider: {rand: [], human: []},
    colorGrid: {rand: [], human: []},
  }

class BarGraph{
    constructor(data){
        this.data = data;
    }

    setup(){
        textAlign(CENTER);
        textSize(50);
        for(let i = 0; i < 100; i++){
            data.grid.rand[floor(random(9))]++;
        }
    }
    draw(){
        for(let i = 0; i < 9; i++){
            fill(255);
            rect(i*66+11, 550, 50, -map(data.grid.rand[i], 0, 100, 0, height*4), 5);
            fill(0);
            text(data.grid.rand[i], i*66+35, 550-data.grid.rand[i]*12);
        }
    }
}

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER);
    BarGraph = new BarGraph(data);
}