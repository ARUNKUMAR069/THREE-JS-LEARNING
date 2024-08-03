 // Creating a Scene of website
 const scene = new THREE.Scene()
 // Creating geomentry such as deciding the shape and there dimmensons
 const geometry = new THREE.BoxGeometry(4, 3, 2)  //  new THREE.BoxGeometry(width,height,depth)
 // Creating the material for geometry
 const material = new THREE.MeshBasicMaterial({ color:"blue"})
 // Creating an object
 const cube = new THREE.Mesh(geometry, material)
 // Deciding the size of the obj

 // Adding  cube object in scene
 scene.add(cube)
 const size = {
     width: 800,
     height: 500,
 }
 const camera = new THREE.PerspectiveCamera(75, size.width/size.height)

 camera.position.z=10;
 // camera.position.y=3;
 camera.position.x=5;        

 scene.add(camera)
 // Rendering
 const target=document.querySelector('.webgl')
 const renderer= new THREE.WebGLRenderer({canvas:target})
 renderer.setSize(size.width,size.height)
 renderer.render(scene,camera)