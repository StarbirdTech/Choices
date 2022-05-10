var sm; // scene manager

// outputs
let sliderCounter = [];

function setup()
{
  // fill sliderCounter with mock data
  for (let i = 0; i < 101; i++) {
    sliderCounter.push(50);
  }
  createCanvas(600, 600);
  sm = new SceneManager();
  sm.addScene( endScreen );
  sm.addScene ( menu );
  sm.addScene ( level1 );
  sm.addScene ( level2 );
  sm.addScene ( level3 );
  sm.addScene ( level4 );
  //sm.addScene ( endScreen );
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
        sliderCounter[data] = 100;
        print('yes' + data);
      }
      sm.showNextScene();
    }
  }
}