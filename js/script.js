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
// const geometry = new THREE.BoxGeometry( 12,12,12 );
// const material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

/// TEXT  ///

var fontLoader = new THREE.FontLoader();
fontLoader.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('INNOVATION', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-1,8,0)
    text.scale.set(1,1,0.1)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('SCIENTIFIC APPROACH', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-2,7.5,0)
    text.scale.set(1,1,0.1)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('INNOVATION', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-1,-7.7,0)
    text.scale.set(1,1,0.1)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('SUSTAINABILITY', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(7.5,-0.15,0)
    text.scale.set(1,1,0.1)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('ECO-FRIENDLY', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-10.1,-0.15,0)
    text.scale.set(1,1,0.1)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('NO BRAND AFFINITY', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-1.7,0,-7.5)
    text.scale.set(1,1,0.1)
    text.rotation.set(-Math.PI/2,0,0)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('PRODUCT QUALITY/', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-1.7,0,7.5)
    text.scale.set(1,1,0.1)
    text.rotation.set(-Math.PI/2,0,0)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('BRAND LOVE', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-1.3,0,8)
    text.scale.set(1,1,0.1)
    text.rotation.set(-Math.PI/2,0,0)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('ECO-FRIENDLY', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(-10.15,0.2,0)
    text.scale.set(1,1,0.1)
    text.rotation.set(-Math.PI/2,0,0)
    scene.add(text);
})

/// Text ///

var fontLoader1 = new THREE.FontLoader();
fontLoader1.load("helvetiker_regular.typeface.json",function(tex){ 
    var  textGeo = new THREE.TextGeometry('SUSTAINABILITY', {
            size: 0.3,
            height: 0.3,
            curveSegments: 1,
            font: tex,
    });
  
    var  textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var  text = new THREE.Mesh(textGeo , textMaterial);
    text.position.set(7.55,0.2,0)
    text.scale.set(1,1,0.1)
    text.rotation.set(-Math.PI/2,0,0)
    scene.add(text);
})


// Geometry

const geometry1 = new THREE.BoxGeometry( 0.03,14,0.03 );
const material1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.set(0,0,0)

// const geometry2 = new THREE.BoxGeometry( 0.03,19,0.03 );
// const material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
// const cube2= new THREE.Mesh( geometry2, material2 );
// scene.add( cube2 );
// cube2.position.set(0,0,0)

const geometry3 = new THREE.BoxGeometry( 14,0.03,0.03 );
const material3 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );
cube3.position.set(0,0,0)

const geometry4 = new THREE.BoxGeometry( 0.03,0.03,14 );
const material4 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube4 = new THREE.Mesh( geometry4, material4 );
scene.add( cube4 );
cube4.position.set(0,0,0)

// image Loader
// Mosanto

var img = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/monsanto.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img.map.needsUpdate = true; //ADDED

var plane = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img);
plane.position.set(-5,5.5,0)
scene.add(plane);
// var plane = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img);
// plane.position.set(-5,5.5,6.02)
// scene.add(plane);

var planea = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img);
planea.position.set(-5,0,-4)
planea.rotation.set(-Math.PI/2,0,0)
scene.add(planea);

// image Loader
// Cargil

var img2 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Cargil.JPG'),
    tranparent: true,
    side: THREE.DoubleSide
});
img2.map.needsUpdate = true; //ADDED

var plane2 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img2);
plane2.overdraw = false;
plane2.position.set(-4.5,4.5,0)
scene.add(plane2);
// var plane2 = new THREE.Mesh(THREE.PlaneGeometry(1,0.5),img2);
// plane2.overdraw = false;
// plane2.position.set(-4.5,4.5,6.01)
// scene.add(plane2);

var plane2a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img2);
plane2a.overdraw = false;
plane2a.position.set(-4.5,0,-2.5)
plane2a.rotation.set(-Math.PI/2,0,0)
scene.add(plane2a);

// image Loader
// Google-X

var img3 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/x the moonshot.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img3.map.needsUpdate = true; //ADDED

var plane3 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img3);
plane3.overdraw = false;
plane3.position.set(-0.5,5,0)
scene.add(plane3);
// var plane3 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img3);
// plane3.overdraw = false;
// plane3.position.set(-0.5,5,6.01)
// scene.add(plane3);

var plane3a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img3);
plane3a.overdraw = false;
plane3a.position.set(-0.5,0,-1)
plane3a.rotation.set(-Math.PI/2,0,0)
scene.add(plane3a);

// image Loader
// John deere

var img5 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/john deere.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img5.map.needsUpdate = true; //ADDED

var plane5 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img5);
plane5.overdraw = false;
plane5.position.set(-1,3,0)
scene.add(plane5);
// var plane5 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img5);
// plane5.overdraw = false;
// plane5.position.set(-1,3,6.01)
// scene.add(plane5);

var plane5a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img5);
plane5a.overdraw = false;
plane5a.position.set(-1,0,-2)
plane5a.rotation.set(-Math.PI/2,0,0)
scene.add(plane5a);

// image Loader
// impossible

var img6 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/impossible.JPG'),
    tranparent: true,
    side: THREE.DoubleSide
});
img6.map.needsUpdate = true; //ADDED

var plane6 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img6);
plane6.overdraw = false;
plane6.position.set(3,4.5,0)
scene.add(plane6);
// var plane6 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img6);
// plane6.overdraw = false;
// plane6.position.set(3,4.5,6.01)
// scene.add(plane6);

var plane6a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img6);
plane6a.overdraw = false;
plane6a.position.set(3,0,1)
plane6a.rotation.set(-Math.PI/2,0,0)
scene.add(plane6a);

// image Loader
// beyond meat

var img7 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Beyond Meat.JPG'),
    tranparent: true,
    side: THREE.DoubleSide
});
img7.map.needsUpdate = true; //ADDED

var plane7 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img7);
plane7.overdraw = false;
plane7.position.set(2.5,4,0.01)
scene.add(plane7);
// var plane7 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img7);
// plane7.overdraw = false;
// plane7.position.set(2.5,4,6.02)
// scene.add(plane7);

var plane7a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img7);
plane7a.overdraw = false;
plane7a.position.set(2.5,0.01,0.5)
plane7a.rotation.set(-Math.PI/2,0,0)
scene.add(plane7a);

// image Loader
// oatly

var img8 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/oatly.JPG'),
    tranparent: true,
    side: THREE.DoubleSide
});
img8.map.needsUpdate = true; //ADDED

var plane8 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img8);
plane8.overdraw = false;
plane8.position.set(3,3,0)
scene.add(plane8);
// var plane8 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img8);
// plane8.overdraw = false;
// plane8.position.set(3,3,6.02)
// scene.add(plane8);

var plane8a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img8);
plane8a.overdraw = false;
plane8a.position.set(3,0.01,4)
plane8a.rotation.set(-Math.PI/2,0,0)
scene.add(plane8a);

// image Loader
// gotham greens

var img9 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/gotham-greens.JPG'),
    tranparent: true,
    side: THREE.DoubleSide
});
img9.map.needsUpdate = true; //ADDED

var plane9 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img9);
plane9.overdraw = false;
plane9.position.set(2,1,0)
scene.add(plane9);
// var plane9 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img9);
// plane9.overdraw = false;
// plane9.position.set(2,1,6.02)
// scene.add(plane9);

var plane9a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img9);
plane9a.overdraw = false;
plane9a.position.set(2,0,2)
plane9a.rotation.set(-Math.PI/2,0,0)
scene.add(plane9a);

// image Loader
// one point one

var img10 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/OnePointOne.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img10.map.needsUpdate = true; //ADDED

var plane10 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img10);
plane10.overdraw = false;
plane10.position.set(0.5,3,0)
scene.add(plane10);
// var plane10 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img10);
// plane10.overdraw = false;
// plane10.position.set(0.5,3,6.02)
// scene.add(plane10);

var plane10a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img10);
plane10a.overdraw = false;
plane10a.position.set(0.5,0,-4)
plane10a.rotation.set(-Math.PI/2,0,0)
scene.add(plane10a);

// image Loader
// plenty

var img11 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/plenty1.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img11.map.needsUpdate = true; //ADDED

var plane11 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img11);
plane11.overdraw = false;
plane11.position.set(1,1,0)
scene.add(plane11);
// var plane11 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img11);
// plane11.overdraw = false;
// plane11.position.set(1,1,6.02)
// scene.add(plane11);

var plane11a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img11);
plane11a.overdraw = false;
plane11a.position.set(1,0,1)
plane11a.rotation.set(-Math.PI/2,0,0)
scene.add(plane11a);

// image Loader
// chipotle

var img12 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/chipotle.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img12.map.needsUpdate = true; //ADDED

var plane12 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img12);
plane12.overdraw = false;
plane12.position.set(4,-1,0)
scene.add(plane12);
// var plane12 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img12);
// plane12.overdraw = false;
// plane12.position.set(4,-1,6.02)
// scene.add(plane12);

var plane12a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img12);
plane12a.overdraw = false;
plane12a.position.set(4,0,3)
plane12a.rotation.set(-Math.PI/2,0,0)
scene.add(plane12a);

// image Loader
// Ben + jerry

var img13 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/ben+jerrys.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img13.map.needsUpdate = true; //ADDED

var plane13 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img13);
plane13.overdraw = false;
plane13.position.set(3.5,-2,0)
scene.add(plane13);
// var plane13 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img13);
// plane13.overdraw = false;
// plane13.position.set(3.5,-2,6.02)
// scene.add(plane13);

var plane13a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img13);
plane13a.overdraw = false;
plane13a.position.set(3.5,0,5)
plane13a.rotation.set(-Math.PI/2,0,0)
scene.add(plane13a);

// image Loader
// Starbucks

var img14 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/starbucks.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img14.map.needsUpdate = true; //ADDED

var plane14 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img14);
plane14.overdraw = false;
plane14.position.set(3,-3,0)
scene.add(plane14);
// var plane14 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img14);
// plane14.overdraw = false;
// plane14.position.set(3,-3,6.02)
// scene.add(plane14);

var plane14a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img14);
plane14a.overdraw = false;
plane14a.position.set(3,0,4)
plane14a.rotation.set(-Math.PI/2,0,0)
scene.add(plane14a);

// image Loader
// app harvest

var img15 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/app harvest.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img15.map.needsUpdate = true; //ADDED

var plane15 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img15);
plane15.overdraw = false;
plane15.position.set(1,-2,0)
scene.add(plane15);
// var plane15 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img15);
// plane15.overdraw = false;
// plane15.position.set(1,-2,6.02)
// scene.add(plane15);

var plane15a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img15);
plane15a.overdraw = false;
plane15a.position.set(1,0,-1)
plane15a.rotation.set(-Math.PI/2,0,0)
scene.add(plane15a);


// image Loader
// organic girl

var img16 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/organic girl.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img16.map.needsUpdate = true; //ADDED

var plane16 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img16);
plane16.overdraw = false;
plane16.position.set(0,-3,0)
scene.add(plane16);
// var plane16 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img16);
// plane16.overdraw = false;
// plane16.position.set(0,-3,6.04)
// scene.add(plane16);

var plane16a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img16);
plane16a.overdraw = false;
plane16a.position.set(0,0,3)
plane16a.rotation.set(-Math.PI/2,0,0)
scene.add(plane16a);

// image Loader
// Starbucks

var img17 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Dole.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img17.map.needsUpdate = true; //ADDED

var plane17 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img17);
plane17.overdraw = false;
plane17.position.set(-2,-2,0)
scene.add(plane17);
// var plane17 = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img17);
// plane17.overdraw = false;
// plane17.position.set(-2,-2,6.02)
// scene.add(plane17);

var plane17a = new THREE.Mesh(new THREE.PlaneGeometry(1,1),img17);
plane17a.overdraw = false;
plane17a.position.set(-2,0,1.5)
plane17a.rotation.set(-Math.PI/2,0,0)
scene.add(plane17a);

// image Loader
// Starbucks

var img18 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/Driscolls.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img18.map.needsUpdate = true; //ADDED

var plane18 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img18);
plane18.overdraw = false;
plane18.position.set(-2,-1,0)
scene.add(plane18);

// var plane18 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img18);
// plane18.overdraw = false;
// plane18.position.set(-2,-1,6.02)
// scene.add(plane18);

var plane18a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img18);
plane18a.overdraw = false;
plane18a.position.set(-2,0.01,1)
plane18a.rotation.set(-Math.PI/2,0,0)
scene.add(plane18a);

// image Loader
// Taylor

var img19 = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
    map:THREE.ImageUtils.loadTexture('images/taylor.jpg'),
    tranparent: true,
    side: THREE.DoubleSide
});
img19.map.needsUpdate = true; //ADDED

var plane19 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img19);
plane19.overdraw = false;
plane19.position.set(-2,0,0)
scene.add(plane19);

// var plane19 = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img19);
// plane19.overdraw = false;
// plane19.position.set(-2,0,6.03)
// scene.add(plane19);

var plane19a = new THREE.Mesh(new THREE.PlaneGeometry(1,0.5),img19);
plane19a.overdraw = false;
plane19a.position.set(-2,0,0)
plane19a.rotation.set(-Math.PI/2,0,0)
scene.add(plane19a);


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
