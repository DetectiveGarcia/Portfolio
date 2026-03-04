import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Skills = () => {
  useEffect(() => {
    // ---- Scene / Camera ----
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      100,
    );
    camera.position.set(0, 10, 60);

    // ✅ TS: hämta canvas som HTMLCanvasElement
    const canvas = document.getElementById(
      "threeJsCanvas",
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ---- Studio lights (replace your current light block) ----
    scene.add(new THREE.AmbientLight(0xffffff, 0.25)); // soft base fill

    const keyLight = new THREE.DirectionalLight(0xf2f2ff, 1.2); // slightly cool key
    keyLight.position.set(30, 40, 30);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6); // softer fill
    fillLight.position.set(-30, 20, 40);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.9); // rim / edge separation
    rimLight.position.set(0, 30, -50);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1a1a1a, 0.35); // sky/ground
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    // ---- Carousel base (✅ dessa saknades hos dig) ----
    const loader = new GLTFLoader(); // ✅ loader defined
    const carouselGroup = new THREE.Group(); // ✅ carouselGroup defined
    scene.add(carouselGroup);

    const modelPaths = [
      "../../../../assets/models/HTML.glb",
      "../../../../assets/models/CSS.glb",
      "../../../../assets/models/Github.glb",
      "../../../../assets/models/Javascript.glb",
      "../../../../assets/models/Node.glb",
      "../../../../assets/models/Typescript.glb",
      "../../../../assets/models/React.glb",
      "../../../../assets/models/NextJS.glb",
      "../../../../assets/models/Docker.glb",
      "../../../../assets/models/Threejs.glb",
      "../../../../assets/models/C-sharp.glb",
    ];

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enablePan = false;

    controls.minDistance = 20;
    controls.maxDistance = 120;

    controls.target.set(0, 0, 0);
    controls.update();

    const radius = 24; // ✅ radius defined (tweak)
    const slotAngle = (Math.PI * 2) / modelPaths.length; // ✅ slotAngle defined

    // ---- Load models ----
    modelPaths.forEach((path, i) => {
      loader.load(
        path,
        (gltf) => {
          const model = gltf.scene;

          // center model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          // scale
          const size = box.getSize(new THREE.Vector3()).length();
          const scale = 6 / size;
          model.scale.setScalar(scale);

          // place on ring (positions from your previous code)
          const angle = i * slotAngle;
          model.position.x = Math.sin(angle) * radius;
          model.position.z = Math.cos(angle) * radius;

          model.lookAt(0, 0, 0);

          carouselGroup.add(model);
        },
        undefined,
        (err) => console.error("Failed to load:", path, err),
      );
    });

    // ---- Render loop (✅ inte inuti forEach) ----
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);

      controls.update(); // behövs för damping

      renderer.render(scene, camera);
    };
    animate();

    // ---- Resize ----
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize);

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div>
      <canvas id="threeJsCanvas" />
    </div>
  );
};

export default Skills;
