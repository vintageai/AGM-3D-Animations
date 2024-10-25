import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Set up a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x222222); // dark background
document.body.appendChild(renderer.domElement);

// Add directional light
const light = new THREE.DirectionalLight(0xffffff, 1); // white light
light.position.set(1, 1, 1).normalize(); // position light
scene.add(light); // add light to scene

// Add the cube
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(cube); // Add cube to the scene

// Add a torus
const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100); // create torus geometry
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x0077ff, metalness: 0.6, roughness: 0.2 }); // shiny material
const torus = new THREE.Mesh(torusGeometry, torusMaterial); // create torus mesh
scene.add(torus); // add torus to the scene

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate cube and torus
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
