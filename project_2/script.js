const LOADER = document.getElementById('js-loader');

const TRAY = document.getElementById('js-tray-slide');
const DRAG_NOTICE = document.getElementById('js-drag-notice');

var theModel;

const MODEL_PATH = "sadia.glb";

var activeOption = 'face';
var loaded = false;

const colors = [
{
  texture: 'img/sadia_grandma_1_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_grandparents_1_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_mom_1_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_space_1_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_1_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_2_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_texture_3_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_texture_4_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_texture_5_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_texture_6_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_texture_7_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_texture_8_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_water_1_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_water_2_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_water_3_.jpg',
  size: [2, 2, 2],
  shininess: 0 },

{
  texture: 'img/sadia_texture_9_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_10_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_11_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_12_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_13_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_14_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_15_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_16_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_17_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_18_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_19_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_20_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_21_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_22_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_23_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_24_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_25_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_26_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_27_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_28_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_29_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_30_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_31_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_32_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_33_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_34_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_35_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_36_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_37_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_38_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_39_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_40_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_41_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_42_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_43_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_44_.jpg',
  size: [1, 1, 1],
  shininess: 0 },
{
  texture: 'img/sadia_texture_45_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_46_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_47_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_48_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_49_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_50_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_51_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_52_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_53_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_54_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_55_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_56_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_57_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_58_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_59_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_60_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_61_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_62_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_63_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_64_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_65_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_66_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_67_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_68_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_69_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_70_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_71_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_72_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_73_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_74_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_75_.jpg',
  size: [1, 1, 1],
  shininess: 0 },

{
  texture: 'img/sadia_texture_76_.jpg',
  size: [1, 1, 1],
  shininess: 0 }];


// {
//   color: '438AAC' }

const BACKGROUND_COLOR = 0xf1f1f1;
// Init the scene
const scene = new THREE.Scene();

// Cube Map

// Set background
var loader = new THREE.CubeTextureLoader();
  const texture = loader.load([
    'https://files.cargocollective.com/c388631/right.png',
    'https://files.cargocollective.com/c388631/left.png',
    'https://files.cargocollective.com/c388631/top.png',
    'https://files.cargocollective.com/c388631/bottom.png',
    'https://files.cargocollective.com/c388631/front.png',
    'https://files.cargocollective.com/c388631/back.png',
  ]);
  scene.background = texture;

// scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);

const canvas = document.querySelector('#c');

// Init the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);

var cameraFar = 5;

document.body.appendChild(renderer.domElement);

// Add a camera
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = cameraFar;
camera.position.x = 0;

// Initial material
const INITIAL_MTL = new THREE.MeshPhongMaterial({ color: 0xf1f1f1, shininess: 10 });

const INITIAL_MAP = [
{ childID: "face", mtl: INITIAL_MTL },
{ childID: "hair", mtl: INITIAL_MTL },
{ childID: "jacket", mtl: INITIAL_MTL },
{ childID: "torso", mtl: INITIAL_MTL },
{ childID: "leg", mtl: INITIAL_MTL }];


// Init the object loader
var loader = new THREE.GLTFLoader();

loader.load(MODEL_PATH, function (gltf) {
  theModel = gltf.scene;

  theModel.traverse(o => {
    if (o.isMesh) {
      o.castShadow = false;
      o.receiveShadow = true;
    }
  });

  // Set the models initial scale   
  theModel.scale.set(.65, .65, .65);
  theModel.rotation.y = Math.PI;

  // Offset the y position a bit
  theModel.position.y = .2;

  // Set initial textures
  for (let object of INITIAL_MAP) {
    initColor(theModel, object.childID, object.mtl);
  }

  // Add the model to the scene
  scene.add(theModel);

  // Remove the loader
  LOADER.remove();

}, undefined, function (error) {
  console.error(error);
});

// Function - Add the textures to the models
function initColor(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type; // Set a new property to identify this object
      }
    }
  });
}

// Add lights
var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
hemiLight.position.set(0, 50, 0);
// Add hemisphere light to scene   
scene.add(hemiLight);

var dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
dirLight.position.set(8, 12, 8);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
// Add directional Light to scene    
scene.add(dirLight);

// Floor
// var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
// var floorMaterial = new THREE.MeshPhongMaterial({
//   color: 0xeeeeee,
//   transparent: true,
//   shininess: 0 });


// var floor = new THREE.Mesh(floorGeometry, floorMaterial);
// floor.rotation.x = -0.5 * Math.PI;
// floor.receiveShadow = true;
// floor.position.y = -1;
// floor.opacity = 0.0;
// scene.add(floor);

// Add controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

function animate() {

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  if (theModel != null && loaded == false) {
    initialRotation();
    DRAG_NOTICE.classList.add('start');
  }
}

animate();

// Function - New resizing method
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {

    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Function - Build Colors

function buildColors(colors) {
  for (let [i, color] of colors.entries()) {
    let swatch = document.createElement('div');
    swatch.classList.add('tray__swatch');

    if (color.texture)
    {
      swatch.style.backgroundImage = "url(" + color.texture + ")";
    } else
    {
      swatch.style.background = "#" + color.color;
    }

    swatch.setAttribute('data-key', i);
    TRAY.append(swatch);
  }
}

buildColors(colors);

// Select Option
const options = document.querySelectorAll(".option");

for (const option of options) {
  option.addEventListener('click', selectOption);
}

function selectOption(e) {
  let option = e.target;
  activeOption = e.target.dataset.option;
  for (const otherOption of options) {
    otherOption.classList.remove('--is-active');
  }
  option.classList.add('--is-active');
}

// Swatches
const swatches = document.querySelectorAll(".tray__swatch");

for (const swatch of swatches) {
  swatch.addEventListener('click', selectSwatch);
}

function selectSwatch(e) {
  let color = colors[parseInt(e.target.dataset.key)];
  let new_mtl;

  if (color.texture) {

    let txt = new THREE.TextureLoader().load(color.texture);

    txt.repeat.set(color.size[0], color.size[1], color.size[2]);
    txt.wrapS = THREE.RepeatWrapping;
    txt.wrapT = THREE.RepeatWrapping;

    new_mtl = new THREE.MeshPhongMaterial({
      map: txt,
      shininess: color.shininess ? color.shininess : 10 });

  } else

  {
    new_mtl = new THREE.MeshPhongMaterial({
      color: parseInt('0x' + color.color),
      shininess: color.shininess ? color.shininess : 10 });


  }

  setMaterial(theModel, activeOption, new_mtl);
}

function setMaterial(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh && o.nameID != null) {
      if (o.nameID == type) {
        o.material = mtl;
      }
    }
  });
}

// Function - Opening rotate
let initRotate = 0;

function initialRotation() {
  initRotate++;
  if (initRotate <= 120) {
    theModel.rotation.y += Math.PI / 60;
  } else {
    loaded = true;
  }
}

var slider = document.getElementById('js-tray'),sliderItems = document.getElementById('js-tray-slide'),difference;

function slide(wrapper, items) {
  var posX1 = 0,
  posX2 = 0,
  posInitial,
  threshold = 20,
  posFinal,
  slides = items.getElementsByClassName('tray__swatch');

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);


  function dragStart(e) {
    e = e || window.event;
    posInitial = items.offsetLeft;
    difference = sliderItems.offsetWidth - slider.offsetWidth;
    difference = difference * -1;

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }

    if (items.offsetLeft - posX2 <= 0 && items.offsetLeft - posX2 >= difference) {
      items.style.left = items.offsetLeft - posX2 + "px";
    }
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {

    } else if (posFinal - posInitial > threshold) {

    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

}

slide(slider, sliderItems);