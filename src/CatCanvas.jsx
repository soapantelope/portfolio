import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
// import CanvasLoader from '../Loader'

export default function CatCanvas() {
    return (
        <div className='canvasContainer'>
            <Canvas frameLoop="demand"
                shadows
                camera={{ position: [70, 0, 100], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}>
                {/* <Suspense fallback={<CanvasLoader />}> */}
                <Suspense>
                    <Cat></Cat>
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

function moveJoint(joint, verticalRotation, horizontalRotation) {
    joint.rotation.x = -verticalRotation
    joint.rotation.y = horizontalRotation
}

function Cat() {
    const catRef = useRef()
    const catDirectRef = useRef()
    const cat = useLoader(GLTFLoader, '../public/models/cat.glb')
    const { nodes, materials } = useGLTF('../public/models/cat.glb');

    const info = useThree()

    const [directionFromCat, setDirectionFromCat] = useState({})
    const [distanceFromCat, setDistanceFromCat] = useState({})

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        console.log(nodes)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    useFrame(() => {
        // let vertical = directionFromCat * 0.6;
        let vertical = distanceFromCat.y * Math.PI / 2;
        let horizontal = distanceFromCat.x * Math.PI / 2;
        moveJoint(nodes.Character1_Neck, vertical / 2, horizontal / 2)
        moveJoint(nodes.Character1_Neck1, vertical / 2, horizontal / 2)
        moveJoint(nodes.Character1_Head, vertical / 3, horizontal / 3)
        moveJoint(nodes.Character1_Tail1, vertical * 3, horizontal)
        moveJoint(nodes.Character1_Tail2, vertical * 2, horizontal)
        moveJoint(nodes.Character1_Tail3, vertical * 1, horizontal)
        moveJoint(nodes.Character1_Tail4, vertical / 2, horizontal)
        moveJoint(nodes.Character1_Tail5, vertical / 3, horizontal)

    })

    function handleMouseMove(e) {
        let catRect = info.size

        let center = { x: (2 * catRect.left + catRect.width) / 2, y: (catRect.height + 2 * catRect.top) / 2 }

        let relativeCoords = { x: (e.clientX - center.x) / screen.width, y: (center.y - e.clientY) / screen.height }
        setDistanceFromCat(relativeCoords)

    }

    return (
        <mesh>
            <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={5} position={[0, 50, 0]} />

            <pointLight intensity={1}></pointLight>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={2}
                castShadow
                shadow-mapSize={1024}
            ></spotLight>
            <group ref={catRef} rotation={[0, 0, 0]}>
                <skinnedMesh
                    geometry={nodes.eye_outL.geometry}
                    material={materials.blinn1}
                    skeleton={nodes.eye_outL.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.eye_outR.geometry}
                    material={materials.blinn1}
                    skeleton={nodes.eye_outR.skeleton}
                />
                <skinnedMesh
                    name="EyeL01"
                    geometry={nodes.EyeL01.geometry}
                    material={materials.anisotropic3}
                    skeleton={nodes.EyeL01.skeleton}
                    morphTargetDictionary={nodes.EyeL01.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeL01.morphTargetInfluences}
                />
                <skinnedMesh
                    name="EyeR01"
                    geometry={nodes.EyeR01.geometry}
                    material={materials.anisotropic3}
                    skeleton={nodes.EyeR01.skeleton}
                    morphTargetDictionary={nodes.EyeR01.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeR01.morphTargetInfluences}
                />
                <primitive
                    ref={catDirectRef}
                    object={nodes.Character1_Hips}
                    scale={0.3}
                    position={[-10, 0, 10]}
                    rotation={[Math.PI * 3, Math.PI / 1.5, Math.PI]} />
                <skinnedMesh
                    name="Mesh002"
                    geometry={nodes.Mesh002.geometry}
                    material={materials.anisotropic2}
                    skeleton={nodes.Mesh002.skeleton}
                    morphTargetDictionary={nodes.Mesh002.morphTargetDictionary}
                    morphTargetInfluences={nodes.Mesh002.morphTargetInfluences}
                />
                <skinnedMesh
                    name="Mesh002_1"
                    geometry={nodes.Mesh002_1.geometry}
                    material={materials.anisotropic1}
                    skeleton={nodes.Mesh002_1.skeleton}
                    morphTargetDictionary={nodes.Mesh002_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Mesh002_1.morphTargetInfluences}
                />
            </group>
        </mesh>
    )
}