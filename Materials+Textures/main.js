// Learning About textures and materials

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const geometry = new THREE.BoxGeometry(3,2,2,1000,100);
// const material = new THREE.MeshStandardMaterial({color:"pink",side:THREE.DoubleSide});

// Learning Part
// #Note 
// MeshStandardMaterial is used for rendering 3D objects with standard lighting and shading effects. without light this material will not work
// Add studio lighting
// Create a high-intensity directional light
const highIntensityLight = new THREE.DirectionalLight(0xffffff, 2);
highIntensityLight.position.set(10, 10, 10);
scene.add(highIntensityLight);


// Create an ambient light for overall illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Create a key light (main light source)
const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(5, 5, 5);
scene.add(keyLight);

// Create a fill light (softer light to fill shadows)
const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
fillLight.position.set(-5, 3, -5);
scene.add(fillLight);


// Create a back light (rim light)
const backLight = new THREE.DirectionalLight(0xffffff, 0.7);
backLight.position.set(0, 5, -5);
scene.add(backLight);

// Texture  Part 
let loader = new THREE.TextureLoader();
let color=loader.load("/Textures/color.jpg")
let roughness=loader.load("/Textures/roughness.jpg")
let normal=loader.load("/Textures/normal.png")

let height=loader.load("/Textures/height.png")
let ambientOcclusion=loader.load("/Textures/ao.jpg")
// Material Part without texture
// const material = new THREE.MeshStandardMaterial({ color: "red" ,roughness:0.1, metalness:.2, side:THREE.DoubleSide});

// Material Part with texture
const material = new THREE.MeshStandardMaterial({ map:color , roughnessMap:roughness,normalMap:normal,heightMap:height,aoMap:ambientOcclusion,side:THREE.DoubleSide});


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