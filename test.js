function setup() {
    createCanvas(600, 600);
    textSize(30)
}
function draw() {
    text('Pressed', 50, height/2+150);
    text('Skipped', 440, height/2+150);
    fill(255);
    rect(50, height/2, 250, 50);
    fill(0);
    rect(550, height/2, -250, 50);
} 