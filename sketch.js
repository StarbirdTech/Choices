var sm; // scene manager

let endScreenTesting = false;

// outputs
let sliderCounter = {rand: [], human: [], ai: []};

function setup()
{
  randomSeed(0)
  // fill sliderCounter with mock data
  for (let i = 0; i < 101; i++) {
    sliderCounter.rand.push(floor(random(10,50)));
  }
  for (let i = 0; i < 101; i++) {
    sliderCounter.human.push(0);
  }
  for (let i = 0; i < 101; i++) {
    sliderCounter.ai.push(floor(random(20,100)));
  }
  createCanvas(600, 600);
  sm = new SceneManager();
  if (endScreenTesting) {sm.addScene( endScreen )};
  sm.addScene ( menu );
  sm.addScene ( level1 );
  sm.addScene ( level2 );
  sm.addScene ( level3 );
  sm.addScene ( level4 );
  if (!endScreenTesting) {sm.addScene ( endScreen )};
  sm.showNextScene();
}

function draw() {sm.draw()}
function mousePressed() {sm.handleEvent("mousePressed")}
function mouseReleased() {sm.handleEvent("mouseReleased")}
function keyPressed() {sm.handleEvent("keyPressed")}

/////////////
// Utility //
/////////////

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function sendDiscordMessage(message) {
  httpPost('https://discord.com/api/webhooks/971592413036568597/jG4ly6cLV2x0vLgmltugVaWURDKZg85c6rG-Rfrl_HJlKr-r2y-n0kEPjg7Z-LnEgFE6', 'json', {"content": message,"embeds": null,"attachments": []})
}

function nextLevelButton() {
  let button;
  let interacted = false;
  this.create = function() {
    button = createButton(" ", 450, 550);
    button.visible = false;
  }
  this.switchLabel = function() {
    interacted = true;
    button.label = "Next";
    button.visible = true;
  }
  this.clicked = function(sceneNum, data) {
    if (button.isPressed && interacted) {
      if (sceneNum == 3) {
        sliderCounter.human[data]++;
        print('yes' + data);
      }
      sm.showNextScene();
    }
  }
}