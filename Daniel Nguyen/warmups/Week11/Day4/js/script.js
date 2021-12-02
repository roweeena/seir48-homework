const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

const shape = new THREE.Object3D;
const skeleton = new THREE.Object3D;
const particles = new THREE.Object3D;

const init = function() {
  initialiseTHREE();
  renderRainParticles();
  renderPlanet();
  renderWire();
  lighting();
};

const initialiseTHREE = function () {
  $(renderer.domElement).appendTo('#canvas');

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearAlpha(0.0);
  camera.position.z = 400;

  scene.add(camera);
  scene.add(shape);
  scene.add(skeleton);
  scene.add(particles);
}

const renderRainParticles = function () {
  // Prepare rain particles
  const rain = new THREE.SphereGeometry(2, 32, 16);
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: THREE.FlatShading
  });

  // Render rain particles
  for (let i = 0; i < 1000; i++) {
    const mesh = new THREE.Mesh(rain, material);
    particles.add(mesh);
    mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
    mesh.position.multiplyScalar( 90 + (Math.random() * 700) );
    mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
  }
};

const renderPlanet = function () {
  const planet = new THREE.IcosahedronGeometry(7, 1);
  const innerMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: THREE.FlatShading
  });

  const inner = new THREE.Mesh(planet, innerMaterial);
  inner.scale.x = inner.scale.y = inner.scale.z = 16;

  shape.add(inner);
}

const renderWire = function () {
  const wire = new THREE.IcosahedronGeometry(20, 1);
  const outerMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true
  });

  const outer = new THREE.Mesh(wire, outerMaterial);
  outer.scale.x = outer.scale.y = outer.scale.z = 10;

  skeleton.add(outer);
}

const animate = function () {
  requestAnimationFrame(animate);

  particles.rotation.x += 0.0000;
  particles.rotation.y -= 0.0040;

  shape.rotation.x -= 0.0020;
  shape.rotation.y -= 0.0040;

  skeleton.rotation.x -= 0.0010;
  skeleton.rotation.y += 0.0040;

  renderer.render(scene, camera);
};

const lighting = function () {
  const ambient = new THREE.AmbientLight(0x999999);
  scene.add(ambient);

  const lights = [];

  lights[0] = new THREE.DirectionalLight(0xffffff, 1);
  lights[0].position.set(1, 0, 0);

  lights[1] = new THREE.DirectionalLight(0xe98e11, 1);
  lights[1].position.set(0.75, 1, 0.5);

  lights[2] = new THREE.DirectionalLight(0x001cc9, 1);
  lights[2].position.set(-0.75, -1, 0.5);

  lights.forEach((light) => scene.add(light));
};

$(document).ready(function () {
  init();
  animate();

  $(window).resize(() => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
