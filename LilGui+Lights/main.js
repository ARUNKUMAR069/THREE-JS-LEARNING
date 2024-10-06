// Learning About lil gui ,Lights and 

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GUI from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const geometry = new THREE.BoxGeometry(3,2,2,1000,100);
// const material = new THREE.MeshStandardMaterial({color:"pink",side:THREE.DoubleSide});

// Learning Part
// #Note 
// MeshStandardMaterial is used for rendering 3D objects with standard lighting and shading effects. without light this material will not work

// Ambient Light is a type of light that simulates a general illumination of a scene. It is characterized by its intensity and color.
const ambientLight = new THREE.AmbientLight("white", 0.5);
scene.add(ambientLight);
// Directional Light is a type of light that simulates a light source that is infinitely far away, such as the sun. It is characterized by its direction, which is specified by a vector.
const directionalLight = new THREE.DirectionalLight("white", 5);
directionalLight.position.set(4, 5, 4);
scene.add(directionalLight);

let helper = new THREE.DirectionalLightHelper(directionalLight,1);
scene.add(helper);


let pointLight = new THREE.PointLight("white", 5, 10, 2);
pointLight.position.set(1, 1, 1);
scene.add(pointLight);




// Material Part without texture
// const material = new THREE.MeshStandardMaterial({ color: "red" ,roughness:0.1, metalness:.2, side:THREE.DoubleSide});

// Material Part with texture
const material = new THREE.MeshStandardMaterial({color:"red", roughness:0.1, metalness:.2, side:THREE.DoubleSide});


// End of Learning Part



const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);


// controls for camera
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.5;
// end of controls for camera
// Used for responsive design
let clock = new THREE.Clock();


// Import GUI

// Create GUI
const gui = new GUI();

// Add controls for material properties
const materialFolder = gui.addFolder('Material');
materialFolder.add(material, 'roughness', 0, 1, 0.01);
materialFolder.add(material, 'metalness', 0, 1, 0.01);
materialFolder.add(material, 'aoMapIntensity', 0, 1, 0.01);
materialFolder.add(material, 'displacementScale', 0, 1, 0.01);

// Add controls for cube rotation
const rotationFolder = gui.addFolder('Cube Rotation');
rotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
rotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
rotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2);

// Add controls for camera position
const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'z', 1, 10);

// Add a button to reset the cube rotation
const resetRotation = {
  reset: function() { 
    cube.rotation.set(0, 0, 0);
  }
};
gui.add(resetRotation, 'reset').name('Reset Cube Rotation');

// Open all folders by default
gui.close();







window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // cube.rotation.x = clock.getElapsedTime();



  // Update controls 
  controls.update();
  renderer.render(scene, camera);
}
animate();