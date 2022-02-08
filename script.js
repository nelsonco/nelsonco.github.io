//import './style.css'
//import * as THREE from './three'

// Canvas
const canvas = document.querySelector('.webgl')


// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 'cyan'})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)


// Sizes 
const sizes = {
    width: 1400,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
camera.position.x =-2
camera.lookAt(cube.position)
scene.add(camera)

// Controls
//const controls = new THREE.OrbitControls(camera, canvas)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)

renderer.render(scene, camera)