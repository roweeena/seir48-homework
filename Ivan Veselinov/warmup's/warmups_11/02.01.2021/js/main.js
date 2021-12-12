let three = THREE;
let scene = new three.Scene();
let camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
console.log(camera);
let renderer = new three.WebGLRenderer({alpha: true})
console.log(renderer);

const shape = new three.Object3D;
const skeleton = new three.Object3D;
const particles = new three.Object3D;

$(document).ready( function(){

  function init(){
    $(renderer.domElement).appendTo('#canvas');

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearAlpha(0.0);
    camera.position.z = 400;

    scene.add(camera);
    scene.add(shape);
    scene.add(skeleton);
    scene.add(particles);

  //rain particles
    const rain = new three.SphereGeometry(2, 32, 16);
    let material = new three.MeshPhongMaterial({
      color: 0xffffff,
      shading: three.FlatShading
    })

    for (let i = 0; i < 1000; i++){
      let mesh = new three.Mesh(rain, material);
      //console.log(mesh);
      particles.add(mesh)
      mesh.position.set(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize();
      mesh.position.multiplyScalar(90 + (Math.random() * 700));
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    }

//inner icosahedron
    const planet = new three.IcosahedronGeometry(7, 1);

    let innerMat = new three.MeshPhongMaterial({
      color: 0xffffff,
      shading: three.FlatShading
    })

    let inner = new three.Mesh(planet, innerMat);
    console.log(inner);
    inner.scale.x = inner.scale.y = inner.scale.z = 16; //size
    shape.add(inner);

    //outer icosahredron

    const wire = new three.IcosahedronGeometry(20, 1);

    let outerMat = new three.MeshPhongMaterial({
      color: 0xffffff,
      wireframe:true
    })

    let outer = new three.Mesh(wire, outerMat);
    outer.scale.x = outer.scale.y = outer.scale.z = 10;
    skeleton.add(outer);

    //lighting
    const ambient = new three.AmbientLight(0x999999);
    scene.add(ambient);

    const lights = [];

    lights[0] = new three.DirectionalLight(0xffffff, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new three.DirectionalLight(0xe98e11, 1);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new three.DirectionalLight(0x001cc9, 1);
    lights[2].position.set(-0.75, -1, 0.5);

    scene.add(lights[0], lights[1], lights[2]);

    $(window).resize(onWindowResize);
  }

  init();

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate(){
    requestAnimationFrame(animate);
    particles.rotation.x += 0.0000;
    particles.rotation.y -= 0.0040;
    // shape.rotation.x -= 0.0020;
    // shape.rotation.y -= 0.0040;
    // skeleton.rotation.x -= 0.0010;
    // skeleton.rotation.y += 0.0040;
    renderer.render(scene, camera);
  }

  animate();
});
