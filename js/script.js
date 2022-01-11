// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// GLTF Loader

// var loader = new THREE.GLTFLoader();
// var obj;
// loader.load(
// 	// resource URL
// 	'cryptopyramidpp_.glb',
// 	// called when the resource is loaded
// 	    function ( gltf ) {
//         obj = gltf.scene
// 		scene.add( obj );
//         obj.scale.set(0.6,0.65,0.6)
//         obj.rotation.set(0.3,0.8,-0.2)
        
//         mixer1 = new THREE.AnimationMixer(obj);
// 	    console.log(gltf.animations)
// 	    mixer1.clipAction( gltf.animations[0]).play();
        
//     }
// );
const geometry = new THREE.BoxGeometry( 12,12,12 );
const material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry1 = new THREE.BoxGeometry( 0.03,19,0.03 );
const material1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.set(0,0,6)

const geometry2 = new THREE.BoxGeometry( 0.03,19,0.03 );
const material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube2= new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );
cube2.position.set(6,0,0)

const geometry3 = new THREE.BoxGeometry( 19,0.03,0.03 );
const material3 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );
cube3.position.set(0,0,6)

const geometry4 = new THREE.BoxGeometry( 0.03,0.03,19 );
const material4 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube4 = new THREE.Mesh( geometry4, material4 );
scene.add( cube4 );
cube4.position.set(6,0,0)

// image Loader
// Mosanto

var img = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/monsanto.jpg'),
    tranparent: true
});
img.map.needsUpdate = true; //ADDED

var plane = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img);
plane.overdraw = false;
plane.position.set(-5,5.5,6.02)
scene.add(plane);

// image Loader
// Cargil

var img2 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Cargil.JPG'),
    tranparent: true
});
img2.map.needsUpdate = true; //ADDED

var plane2 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img2);
plane2.overdraw = false;
plane2.position.set(-4.5,4.5,6.01)
scene.add(plane2);

// image Loader
// Google-X

var img3 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/x the moonshot.jpg'),
    tranparent: true
});
img3.map.needsUpdate = true; //ADDED

var plane3 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img3);
plane3.overdraw = false;
plane3.position.set(-0.5,5,5.01)
scene.add(plane3);

// image Loader
// John deere

var img5 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/john deere.jpg'),
    tranparent: true
});
img5.map.needsUpdate = true; //ADDED

var plane5 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img5);
plane5.overdraw = false;
plane5.position.set(-1,3,6.01)
scene.add(plane5);

// image Loader
// impossible

var img6 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/impossible.JPG'),
    tranparent: true
});
img6.map.needsUpdate = true; //ADDED

var plane6 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img6);
plane6.overdraw = false;
plane6.position.set(3,4.5,6.01)
scene.add(plane6);

// image Loader
// beyond meat

var img7 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Beyond Meat.JPG'),
    tranparent: true
});
img7.map.needsUpdate = true; //ADDED

var plane7 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img7);
plane7.overdraw = false;
plane7.position.set(2.5,4,6.02)
scene.add(plane7);

// image Loader
// oatly

var img8 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/oatly.JPG'),
    tranparent: true
});
img8.map.needsUpdate = true; //ADDED

var plane8 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img8);
plane8.overdraw = false;
plane8.position.set(3,3,6.02)
scene.add(plane8);

// image Loader
// gotham greens

var img9 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/gotham-greens.JPG'),
    tranparent: true
});
img9.map.needsUpdate = true; //ADDED

var plane9 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img9);
plane9.overdraw = false;
plane9.position.set(2,1,6.02)
scene.add(plane9);

// image Loader
// one point one

var img10 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/OnePointOne.jpg'),
    tranparent: true
});
img10.map.needsUpdate = true; //ADDED

var plane10 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img10);
plane10.overdraw = false;
plane10.position.set(0.5,3,6.02)
scene.add(plane10);

// image Loader
// plenty

var img11 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/plenty1.jpg'),
    tranparent: true
});
img11.map.needsUpdate = true; //ADDED

var plane11 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img11);
plane11.overdraw = false;
plane11.position.set(1,1,6.02)
scene.add(plane11);

// image Loader
// chipotle

var img12 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/chipotle.jpg'),
    tranparent: true
});
img12.map.needsUpdate = true; //ADDED

var plane12 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img12);
plane12.overdraw = false;
plane12.position.set(4,-1,6.02)
scene.add(plane12);

// image Loader
// Ben + jerry

var img13 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/ben+jerrys.jpg'),
    tranparent: true
});
img13.map.needsUpdate = true; //ADDED

var plane13 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img13);
plane13.overdraw = false;
plane13.position.set(3.5,-2,6.02)
scene.add(plane13);

// image Loader
// Starbucks

var img14 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/starbucks.jpg'),
    tranparent: true
});
img14.map.needsUpdate = true; //ADDED

var plane14 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img14);
plane14.overdraw = false;
plane14.position.set(3,-3,6.02)
scene.add(plane14);

// image Loader
// app harvest

var img15 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/app harvest.jpg'),
    tranparent: true
});
img15.map.needsUpdate = true; //ADDED

var plane15 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img15);
plane15.overdraw = false;
plane15.position.set(1,-2,6.02)
scene.add(plane15);

// image Loader
// organic girl

var img16 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/organic girl.jpg'),
    tranparent: true
});
img16.map.needsUpdate = true; //ADDED

var plane16 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img16);
plane16.overdraw = false;
plane16.position.set(0,-3,6.04)
scene.add(plane16);

// image Loader
// Starbucks

var img17 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Dole.jpg'),
    tranparent: true
});
img17.map.needsUpdate = true; //ADDED

var plane17 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img17);
plane17.overdraw = false;
plane17.position.set(-2,-2,6.02)
scene.add(plane17);

// image Loader
// Starbucks

var img18 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Driscolls.jpg'),
    tranparent: true
});
img18.map.needsUpdate = true; //ADDED

var plane18 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img18);
plane18.overdraw = false;
plane18.position.set(-2,-1,6.02)
scene.add(plane18);

// image Loader
// Taylor

var img19 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/taylor.jpg'),
    tranparent: true
});
img19.map.needsUpdate = true; //ADDED

var plane19 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img19);
plane19.overdraw = false;
plane19.position.set(-2,0,6.03)
scene.add(plane19);


// Lights
const light = new THREE.AmbientLight( 0xfffffff,0.7); // soft white light
scene.add( light );



const pointLight2 = new THREE.PointLight(0xffffff,0.3)
pointLight2.position.x = 10
pointLight2.position.y = 0
pointLight2.position.z = 20
const pointLight = new THREE.PointLight(0xffffff,0.3)
pointLight.position.x = -10
pointLight.position.y = 0
pointLight.position.z = 20
scene.add(pointLight)
const pointLight3 = new THREE.PointLight(0xffffff,0.2)
pointLight3.position.y = 0
pointLight3.position.z = -10
pointLight3.position.x = -10
scene.add(pointLight3)
const pointLight4 = new THREE.PointLight(0xffffff,0.2)
pointLight4.position.y = -10
pointLight4.position.z = 0
pointLight4.position.x = 0
scene.add(pointLight4)
const pointLight5 = new THREE.PointLight(0xffffff,0.3)
pointLight5.position.y = 20
pointLight5.position.z = 0
pointLight5.position.x = 0
scene.add(pointLight5)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 30
scene.add(camera)

//Controls
const controls = new THREE.OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = true
controls.keys = {
	LEFT: 'ArrowLeft', //left arrow
	UP: 'ArrowUp', // up arrow
	RIGHT: 'ArrowRight', // right arrow
	BOTTOM: 'ArrowDown' // down arrow
}

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

//  document.addEventListener('mousemove', onDocumentMouseMove)

//  let mouseX = 0;
//  let mouseY = 0;
 
//  let targetX = 0;
//  let targetY = 0;
 
//  const windowX = window.innerWidth /2;
//  const windowY = window.innerHeight /2;
 
//  function onDocumentMouseMove (event) {
//      mouseX = (event.clientX - windowX)
//      mouseY = (event.clientY - windowY)
//  }
 
//  const updateOnScroll = (event) => {
//      obj.position.z = window.scrollY *.002
//  }
 
//  window.addEventListener('scroll', updateOnScroll)

const clock = new THREE.Clock()

const tick = () =>
{
    window.requestAnimationFrame(tick)
    // const deltaTime = clock.getDelta()
    // if ( mixer1 ) mixer1.update( deltaTime);	
	

   
    // targetX = mouseX * .001
    // targetY = mouseY * .001

    // Update objects
    //obj.rotation.y += .5 * (targetX - obj.rotation.y)
    //obj.rotation.x += .05 * (targetY - obj.rotation.x)
    //obj.rotation.z += -0.05 * (targetY - obj.rotation.x)

    // Update Orbital Controls
    controls.update()
    renderer.render(scene, camera);	

    // Call tick again on the next frame
    

   
}

tick()