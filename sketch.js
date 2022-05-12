var sm; // scene manager

let endScreenTesting = false;

// data from database
/*
let data = {
  grid: {rand: [], human: []},
  button: {rand: [], human: []},
  slider: {rand: [], human: []},
  colorGrid: {rand: [], human: []},
}
*/

function preload() {data = loadJSON('data.json')}

function setup()
{
  /*
  randomSeed(0)
  // fill sliderCounter with mock data
  for (let i = 0; i < 101; i++) {
    data.slider.rand.push(floor(random(10,50)));
  }
  for (let i = 0; i < 101; i++) {
    data.slider.human.push(0);
  }
  print(data.slider.human);*/
  createCanvas(600, 600);
  sm = new SceneManager();
  if (endScreenTesting) {sm.addScene( endScreen )};
  sm.addScene ( menu );
  sm.addScene ( level1 );
  sm.addScene ( level2 );
  sm.addScene ( level3 );
  sm.addScene ( level4 );
  sm.addScene( level5 );
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
  this.clicked = function(sceneNum, inputData) {
    if (button.isPressed && interacted) {
      addRandData(sceneNum);
      addUserData(sceneNum, inputData)
      sm.showNextScene();
    }
  }
}

function addRandData(sceneNum) {
  switch (sceneNum) {
    case 1:
      data.grid.rand[floor(random(9))]++;
      break;
    case 2:
      data.button.rand[floor(random(2))]++;
      break;
    case 3:
      data.slider.rand[floor(random(100))]++;
      break;
    case 4:
      data.colorGrid.rand[floor(random(9))]++;
      break;
    case 5:
      data.door.rand[floor(random(3))][floor(random(3))]++;
      break;
  }
}

function addUserData(sceneNum, inputData) {
  switch (sceneNum) {
    case 1:
      data.grid.human[inputData]++;
      break;
    case 2:
      data.button.human[inputData]++;
      break;
    case 3:
      data.slider.human[inputData]++;
      break;
    case 4:
      data.colorGrid.human[inputData]++;
      break;
    case 5:
      data.door.human[inputData[0]-1][inputData[1]-1]++;
      break;
  }
}