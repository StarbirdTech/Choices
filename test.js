class ButtonVisual {
    constructor(human, rand){
    this.human = human
    this.rand  = rand
    }
draw() {
    textSize(30)
    fill(0)
    text('Pressed ', 50, height/2+150);
    text('Skipped ', 440, height/2+150);
    fill(0);
    rect(550, height/2, -500, 50);
    fill(255);
    rect(50, height/2, map(rand[0]/(rand[0]+rand[1])*100,0,100,50,550)-50, 50);
    print(rand[0]/(rand[0]+rand[1])*100)
    fill(0);
    rect(550, height/2.5, -500, 50);
    fill(255);
    rect(50, height/2.5, map(human[0]/(human[0]+human[1])*100,0,100,50,550)-50, 50);
} 
}