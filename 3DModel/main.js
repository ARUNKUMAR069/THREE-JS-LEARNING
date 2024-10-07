// Learning about the 3D models in Three.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('draw');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);


// Set up camera position
camera.position.set(0, 0, 10);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;




const gltfLoader = new GLTFLoader();
gltfLoader.load('./3dmodels/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, -1.2, 0);
    
});




// Load HDRI environment map
const rgbeLoader = new RGBELoader();
rgbeLoader.load('./3dmodels/hangar_interior_4k.hdr', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;

    scene.environment = texture;
    

    // Add a simple geometry to visualize the scene
   
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
 
}
animate();

