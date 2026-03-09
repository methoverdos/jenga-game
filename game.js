let scene, camera, renderer;
let world;
let blocks = [];

let players = {
1:{name:"",score:0,color:""},
2:{name:"Player 2",score:0,color:""}
};

let playerTurn = 1;

function startGame(){

document.getElementById("startScreen").style.display="none";

players[1].name = document.getElementById("name1").value;
players[1].color = document.getElementById("colorPick").value;

players[2].color = players[1].color === "crimson" ? "lavender" : "crimson";

init3D();
createTower();
animate();

}

function init3D(){

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(8,10,15);

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(10,20,10);

scene.add(light);

}

function createTower(){

let blockW=3;
let blockH=0.8;
let blockD=1;

for(let y=0;y<18;y++){

for(let i=0;i<3;i++){

let geometry = new THREE.BoxGeometry(blockW,blockH,blockD);

let material = new THREE.MeshStandardMaterial({
color:0xd2a679
});

let mesh = new THREE.Mesh(geometry,material);

mesh.position.set((i-1)*blockW,y*blockH,0);

scene.add(mesh);

blocks.push(mesh);

}

}

}

function animate(){

requestAnimationFrame(animate);

renderer.render(scene,camera);

}