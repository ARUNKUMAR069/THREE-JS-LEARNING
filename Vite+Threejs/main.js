import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// Trying diffrent geometries
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.SphereGeometry(1, 32, 100, 0, Math.PI * 2, 0, Math.PI * 2);
const geometry = new THREE.CylinderGeometry(5, 5, 5,  100);
// const geometry = new THREE.ConeGeometry(5.5,10,100,100,false,);

const material = new THREE.MeshBasicMaterial({ color: "pink",side:THREE.DoubleSide });
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

let clock = new THREE.Clock();

// end of controls for camera

// Used for responsive design
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});








function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // cube.rotation.x = clock.getElapsedTime();
  cube.rotation.y = clock.getElapsedTime();
  // Update controls 
  controls.update();
  renderer.render(scene, camera);
}




animate();