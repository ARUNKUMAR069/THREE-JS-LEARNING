let scene = new THREE.Scene();
// Camera
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;
scene.add(camera);
// Creating mesh
let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "pink"});
let mesh = new THREE.Mesh(box, material);
scene.add(mesh);

// Position of mesh

// .y for moving up and down
// mesh.position.y = 2;
// .x for moving left and rights
// mesh.position.x = 2;
// .z for moving forward and backward
// mesh.position.z = 2;


// Rotation of mesh
// .x for moving left and rights
// mesh.rotation.x = 2;
// .y for moving up and down
// mesh.rotation.y = 2;
// .z for moving forward and backward
// mesh.rotation.z = 2;
// basically 3.14 is 180 degree and 6.28 is 360 degree or 2*pi is 360 degree
mesh.rotation.y = Math.PI/4;

// Scale of mesh
// .x for moving left and rights
// mesh.scale.x = 2;
// .y for moving up and down
// mesh.scale.y = 3;
// .z for moving forward and backward
// mesh.rotation.x = 1;
// mesh.scale.z = 2;

// End of creating mesh
const canvas = document.querySelector('canvas');

const renderer = new THREE.WebGLRenderer({ canvas:canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
    // Clock is used to get the time of the animation
    let clock = new THREE.Clock();
function animate(){
// Basically means that this function will be called again and again as fast as possible by the computer full power
window.requestAnimationFrame(animate)
renderer.render(scene, camera);
// getElapsedTime() is used to get the time of the animation and to run the animation speed same on every computer
mesh.rotation.x = clock.getElapsedTime();
mesh.rotation.z = clock.getElapsedTime();

}
animate();










