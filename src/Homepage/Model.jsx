import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function Model({ playEnterAnim }) {
  const group = useRef()
  // const { nodes, materials, animations } = useGLTF('/SciFi-Corridor-Pack B.glb')
  const { nodes, materials, animations } = useGLTF('/spaceship/SciFi-Corridor-B.gltf')
  const { actions } = useAnimations(animations, group)

  const intensityScale = 300000;

  useEffect(() => {
    console.log("actions", actions)
    // ["Armature|mixamo.com|Layer0"]
    // ["Armature|mixamo.com|Layer0.001"]
    // ["Armature|mixamo.com|Layer0.003"]
    // CameraAction
    // window_shutter_downAction
    // window_shutter_upAction

    // play only once
    actions["CameraAction"].setLoop(THREE.LoopOnce)
    actions["window_shutter_downAction"].setLoop(THREE.LoopOnce)
    actions["window_shutter_upAction"].setLoop(THREE.LoopOnce)
    actions["Armature|mixamo.com|Layer0"].setLoop(THREE.LoopOnce)
    actions["Armature|mixamo.com|Layer0.001"].setLoop(THREE.LoopOnce)
    actions["Armature|mixamo.com|Layer0.003"].setLoop(THREE.LoopOnce)

    // action.clampWhenFinished = true
    actions["CameraAction"].clampWhenFinished = true
    actions["window_shutter_downAction"].clampWhenFinished = true
    actions["window_shutter_upAction"].clampWhenFinished = true
    actions["Armature|mixamo.com|Layer0"].clampWhenFinished = true
    actions["Armature|mixamo.com|Layer0.001"].clampWhenFinished = true
    actions["Armature|mixamo.com|Layer0.003"].clampWhenFinished = true

    if (playEnterAnim) {
      // play animation
      actions["CameraAction"].play()
      actions["window_shutter_downAction"].play()
      actions["window_shutter_upAction"].play()
      actions["Armature|mixamo.com|Layer0"].play()
      actions["Armature|mixamo.com|Layer0.001"].play()
      actions["Armature|mixamo.com|Layer0.003"].play()
    }
    
    // stop animation at last frame
    // actions["CameraAction"].stop()
  }, [actions, playEnterAnim])

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          name="door_003"
          castShadow
          receiveShadow
          geometry={nodes.door_003.geometry}
          material={nodes.door_003.material}
          position={[0, 0, 78]}
          rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="door"
            castShadow
            receiveShadow
            geometry={nodes.door.geometry}
            material={nodes.door.material}
            position={[0, -10.541, 0]}
          />
          <mesh
            name="door_001"
            castShadow
            receiveShadow
            geometry={nodes.door_001.geometry}
            material={nodes.door_001.material}
            position={[0, 0.269, 0.843]}
          />
          <mesh
            name="door_002"
            castShadow
            receiveShadow
            geometry={nodes.door_002.geometry}
            material={nodes.door_002.material}
            position={[0, 7.31, 0]}
          />
          <mesh
            name="door_004"
            castShadow
            receiveShadow
            geometry={nodes.door_004.geometry}
            material={nodes.door_004.material}
            position={[0, 0.269, -1.079]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </mesh>
        <mesh
          name="door_005"
          castShadow
          receiveShadow
          geometry={nodes.door_005.geometry}
          material={nodes.door_005.material}
          position={[0, 0, -78]}>
          <mesh
            name="door_006"
            castShadow
            receiveShadow
            geometry={nodes.door_006.geometry}
            material={nodes.door_006.material}
            position={[0, 7.31, 0]}
          />
          <mesh
            name="door_007"
            castShadow
            receiveShadow
            geometry={nodes.door_007.geometry}
            material={nodes.door_007.material}
            position={[0, -10.541, 0]}
          />
          <mesh
            name="door_008"
            castShadow
            receiveShadow
            geometry={nodes.door_008.geometry}
            material={nodes.door_008.material}
            position={[0, 0.269, 0.843]}
          />
          <mesh
            name="door_009"
            castShadow
            receiveShadow
            geometry={nodes.door_009.geometry}
            material={nodes.door_009.material}
            position={[0, 0.269, -1.079]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </mesh>
        <mesh
          name="Drohn_1_002"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_002.geometry}
          material={nodes.Drohn_1_002.material}
          position={[-6.273, 6.361, 198.587]}>
          <mesh
            name="Drohn_1_003"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_003.geometry}
            material={nodes.Drohn_1_003.material}>
            <mesh
              name="Drohn_1_001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_001.geometry}
              material={nodes.Drohn_1_001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_005"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_005.geometry}
          material={nodes.Drohn_1_005.material}
          position={[10.331, 1.861, 153.78]}>
          <mesh
            name="Drohn_1_004"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_004.geometry}
            material={nodes.Drohn_1_004.material}>
            <mesh
              name="Drohn_1_006"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_006.geometry}
              material={nodes.Drohn_1_006.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_007"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_007.geometry}
          material={nodes.Drohn_1_007.material}
          position={[-5.611, 10.173, 152.982]}>
          <mesh
            name="Drohn_1_008"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_008.geometry}
            material={nodes.Drohn_1_008.material}>
            <mesh
              name="Drohn_1_018"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_018.geometry}
              material={nodes.Drohn_1_018.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_011"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_011.geometry}
          material={nodes.Drohn_1_011.material}
          position={[3.88, 12.477, 182.278]}>
          <mesh
            name="Drohn_1_010"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_010.geometry}
            material={nodes.Drohn_1_010.material}>
            <mesh
              name="Drohn_1_009"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_009.geometry}
              material={nodes.Drohn_1_009.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_014"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_014.geometry}
          material={nodes.Drohn_1_014.material}
          position={[11.202, 9.845, -195.027]}>
          <mesh
            name="Drohn_1_012"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_012.geometry}
            material={nodes.Drohn_1_012.material}>
            <mesh
              name="Drohn_1_013"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_013.geometry}
              material={nodes.Drohn_1_013.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_017"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_017.geometry}
          material={nodes.Drohn_1_017.material}
          position={[3.384, 10.425, -195.027]}>
          <mesh
            name="Drohn_1_016"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_016.geometry}
            material={nodes.Drohn_1_016.material}>
            <mesh
              name="Drohn_1_015"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_015.geometry}
              material={nodes.Drohn_1_015.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_021"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_021.geometry}
          material={nodes.Drohn_1_021.material}
          position={[-12.908, 7.823, -195.289]}>
          <mesh
            name="Drohn_1_020"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_020.geometry}
            material={nodes.Drohn_1_020.material}>
            <mesh
              name="Drohn_1_019"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_019.geometry}
              material={nodes.Drohn_1_019.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_023"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_023.geometry}
          material={nodes.Drohn_1_023.material}
          position={[-6.273, 11.875, -195.114]}>
          <mesh
            name="Drohn_1_022"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_022.geometry}
            material={nodes.Drohn_1_022.material}>
            <mesh
              name="Drohn_1"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1.geometry}
              material={nodes.Drohn_1.material}
            />
          </mesh>
        </mesh>
        <group name="Hemi" position={[38, 16, 23]} rotation={[0.46, -0.226, -0.687]} />
        <mesh
          name="hologram"
          castShadow
          receiveShadow
          geometry={nodes.hologram.geometry}
          material={materials['Material.010']}
          position={[0, 1, 0]}
        />
        <mesh
          name="hologram_ground"
          castShadow
          receiveShadow
          geometry={nodes.hologram_ground.geometry}
          material={nodes.hologram_ground.material}
        />
        <mesh
          name="hologram_radar_004"
          castShadow
          receiveShadow
          geometry={nodes.hologram_radar_004.geometry}
          material={materials['Material.016']}
          position={[-0.119, 18.697, 0.416]}
          rotation={[0, 0, 0.235]}>
          <mesh
            name="hologram_radar_005"
            castShadow
            receiveShadow
            geometry={nodes.hologram_radar_005.geometry}
            material={materials['Material.013']}
            position={[-0.333, -0.406, 0.056]}
            rotation={[0.602, -0.602, 0.235]}>
            <mesh
              name="hologram_radar_006"
              castShadow
              receiveShadow
              geometry={nodes.hologram_radar_006.geometry}
              material={materials['Material.017']}
              position={[0.343, -0.126, -0.26]}
              rotation={[1.866, 0.653, 1.494]}>
              <mesh
                name="hologram_radar_003"
                castShadow
                receiveShadow
                geometry={nodes.hologram_radar_003.geometry}
                material={materials['Material.022']}
                position={[0.085, 0.342, 0.135]}
                rotation={[-0.768, 0.693, -1.13]}>
                <mesh
                  name="hologram_radar_002"
                  castShadow
                  receiveShadow
                  geometry={nodes.hologram_radar_002.geometry}
                  material={materials['Material.021']}
                  position={[-0.237, -0.115, 0.14]}
                  rotation={[0.459, -0.599, 0.092]}>
                  <mesh
                    name="hologram_radar_007"
                    castShadow
                    receiveShadow
                    geometry={nodes.hologram_radar_007.geometry}
                    material={materials['Material.012']}
                    position={[0.092, -0.17, -0.073]}
                    rotation={[1.826, 0.54, 1.455]}>
                    <mesh
                      name="hologram_radar"
                      castShadow
                      receiveShadow
                      geometry={nodes.hologram_radar.geometry}
                      material={materials['Material.018']}
                      position={[0.072, 0.086, 0]}
                      rotation={[-0.806, 0.807, -1.166]}
                    />
                  </mesh>
                </mesh>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh
          name="Red_Laser_011"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_011.geometry}
          material={nodes.Red_Laser_011.material}
          scale={0}
        />
        <mesh
          name="Red_Laser_003"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_003.geometry}
          material={nodes.Red_Laser_003.material}
          scale={0}
        />
        <mesh
          name="Red_Laser"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser.geometry}
          material={nodes.Red_Laser.material}
          scale={0}
        />
        <mesh
          name="Red_Laser_014"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_014.geometry}
          material={nodes.Red_Laser_014.material}
          scale={0}
        />
        <mesh
          name="Red_Laser_001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_001.geometry}
          material={nodes.Red_Laser_001.material}
          scale={0}
        />
        <group name="Point" position={[0, 19, 0]} />
        <group name="Empty_004" position={[3.316, -0.069, 3.374]}>
          <mesh
            name="Star_Fighter_Fire_005"
            castShadow
            receiveShadow
            geometry={nodes.Star_Fighter_Fire_005.geometry}
            material={nodes.Star_Fighter_Fire_005.material}
            position={[-0.578, 1.118, -0.425]}
          />
        </group>
        <group name="Empty_005" position={[3.399, -0.104, -3.352]}>
          <mesh
            name="Star_Fighter_Fire_004"
            castShadow
            receiveShadow
            geometry={nodes.Star_Fighter_Fire_004.geometry}
            material={nodes.Star_Fighter_Fire_004.material}
            position={[-0.465, 0.689, -0.454]}
          />
        </group>
        <group name="Empty_006" position={[3.226, -0.118, -3.471]}>
          <mesh
            name="Star_Fighter_Fire_003"
            castShadow
            receiveShadow
            geometry={nodes.Star_Fighter_Fire_003.geometry}
            material={nodes.Star_Fighter_Fire_003.material}
            position={[-0.415, 0.573, -0.686]}
          />
        </group>
        <group name="Empty_007" position={[3.422, -0.131, 3.595]}>
          <mesh
            name="Star_Fighter_Fire_002"
            castShadow
            receiveShadow
            geometry={nodes.Star_Fighter_Fire_002.geometry}
            material={nodes.Star_Fighter_Fire_002.material}
            position={[-0.364, 1.085, -0.865]}
          />
        </group>
        <mesh
          name="scifi_column"
          castShadow
          receiveShadow
          geometry={nodes.scifi_column.geometry}
          material={materials['Material.002']}
          position={[56, 0, -60]}
        />
        <mesh
          name="scifi_column_001"
          castShadow
          receiveShadow
          geometry={nodes.scifi_column_001.geometry}
          material={materials['Material.004']}
          position={[84, 0, -33]}
          rotation={[0, -0.696, 0]}
        />
        <mesh
          name="Station-Inside"
          castShadow
          receiveShadow
          geometry={nodes['Station-Inside'].geometry}
          material={materials['Material.043']}
          position={[0, -0.447, 0]}
        />
        <mesh
          name="Station-Outside"
          castShadow
          receiveShadow
          geometry={nodes['Station-Outside'].geometry}
          material={materials['Material.006']}
        />
        <mesh
          name="window_shutter_down"
          castShadow
          receiveShadow
          geometry={nodes.window_shutter_down.geometry}
          material={materials['Material.025']}
        />
        <mesh
          name="window_shutter_up"
          castShadow
          receiveShadow
          geometry={nodes.window_shutter_up.geometry}
          material={materials['Material.046']}
          position={[0, 38.866, 0]}
          rotation={[Math.PI, 0, 0]}
        />
        <mesh
          name="Windows"
          castShadow
          receiveShadow
          geometry={nodes.Windows.geometry}
          material={materials['Material.047']}
          rotation={[0, 0.009, 0]}
        />
        <mesh
          name="door_003001"
          castShadow
          receiveShadow
          geometry={nodes.door_003001.geometry}
          material={nodes.door_003001.material}
          position={[0, 0, 78]}
          rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            name="door001"
            castShadow
            receiveShadow
            geometry={nodes.door001.geometry}
            material={nodes.door001.material}
            position={[0, -10.541, 0]}
          />
          <mesh
            name="door_001001"
            castShadow
            receiveShadow
            geometry={nodes.door_001001.geometry}
            material={nodes.door_001001.material}
            position={[0, 0.269, 0.843]}
          />
          <mesh
            name="door_002001"
            castShadow
            receiveShadow
            geometry={nodes.door_002001.geometry}
            material={nodes.door_002001.material}
            position={[0, 7.31, 0]}
          />
          <mesh
            name="door_004001"
            castShadow
            receiveShadow
            geometry={nodes.door_004001.geometry}
            material={nodes.door_004001.material}
            position={[0, 0.269, -1.079]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </mesh>
        <mesh
          name="door_005001"
          castShadow
          receiveShadow
          geometry={nodes.door_005001.geometry}
          material={nodes.door_005001.material}
          position={[0, 0, -78]}>
          <mesh
            name="door_006001"
            castShadow
            receiveShadow
            geometry={nodes.door_006001.geometry}
            material={nodes.door_006001.material}
            position={[0, 7.31, 0]}
          />
          <mesh
            name="door_007001"
            castShadow
            receiveShadow
            geometry={nodes.door_007001.geometry}
            material={nodes.door_007001.material}
            position={[0, -10.541, 0]}
          />
          <mesh
            name="door_008001"
            castShadow
            receiveShadow
            geometry={nodes.door_008001.geometry}
            material={nodes.door_008001.material}
            position={[0, 0.269, 0.843]}
          />
          <mesh
            name="door_009001"
            castShadow
            receiveShadow
            geometry={nodes.door_009001.geometry}
            material={nodes.door_009001.material}
            position={[0, 0.269, -1.079]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </mesh>
        <mesh
          name="Drohn_1_002001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_002001.geometry}
          material={nodes.Drohn_1_002001.material}
          position={[-6.273, 6.361, 198.587]}>
          <mesh
            name="Drohn_1_003001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_003001.geometry}
            material={nodes.Drohn_1_003001.material}>
            <mesh
              name="Drohn_1_001001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_001001.geometry}
              material={nodes.Drohn_1_001001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_005001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_005001.geometry}
          material={nodes.Drohn_1_005001.material}
          position={[10.331, 1.861, 153.78]}>
          <mesh
            name="Drohn_1_004001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_004001.geometry}
            material={nodes.Drohn_1_004001.material}>
            <mesh
              name="Drohn_1_006001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_006001.geometry}
              material={nodes.Drohn_1_006001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_007001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_007001.geometry}
          material={nodes.Drohn_1_007001.material}
          position={[-5.611, 10.173, 152.982]}>
          <mesh
            name="Drohn_1_008001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_008001.geometry}
            material={nodes.Drohn_1_008001.material}>
            <mesh
              name="Drohn_1_018001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_018001.geometry}
              material={nodes.Drohn_1_018001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_011001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_011001.geometry}
          material={nodes.Drohn_1_011001.material}
          position={[3.88, 12.477, 182.278]}>
          <mesh
            name="Drohn_1_010001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_010001.geometry}
            material={nodes.Drohn_1_010001.material}>
            <mesh
              name="Drohn_1_009001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_009001.geometry}
              material={nodes.Drohn_1_009001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_014001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_014001.geometry}
          material={nodes.Drohn_1_014001.material}
          position={[11.202, 9.845, -195.027]}>
          <mesh
            name="Drohn_1_012001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_012001.geometry}
            material={nodes.Drohn_1_012001.material}>
            <mesh
              name="Drohn_1_013001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_013001.geometry}
              material={nodes.Drohn_1_013001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_017001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_017001.geometry}
          material={nodes.Drohn_1_017001.material}
          position={[3.384, 10.425, -195.027]}>
          <mesh
            name="Drohn_1_016001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_016001.geometry}
            material={nodes.Drohn_1_016001.material}>
            <mesh
              name="Drohn_1_015001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_015001.geometry}
              material={nodes.Drohn_1_015001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_021001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_021001.geometry}
          material={nodes.Drohn_1_021001.material}
          position={[-12.908, 7.823, -195.289]}>
          <mesh
            name="Drohn_1_020001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_020001.geometry}
            material={nodes.Drohn_1_020001.material}>
            <mesh
              name="Drohn_1_019001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1_019001.geometry}
              material={nodes.Drohn_1_019001.material}
            />
          </mesh>
        </mesh>
        <mesh
          name="Drohn_1_023001"
          castShadow
          receiveShadow
          geometry={nodes.Drohn_1_023001.geometry}
          material={nodes.Drohn_1_023001.material}
          position={[-6.273, 11.875, -195.114]}>
          <mesh
            name="Drohn_1_022001"
            castShadow
            receiveShadow
            geometry={nodes.Drohn_1_022001.geometry}
            material={nodes.Drohn_1_022001.material}>
            <mesh
              name="Drohn_1001"
              castShadow
              receiveShadow
              geometry={nodes.Drohn_1001.geometry}
              material={nodes.Drohn_1001.material}
            />
          </mesh>
        </mesh>
        <group name="Hemi001" position={[38, 16, 23]} rotation={[0.46, -0.226, -0.687]} />
        <mesh
          name="hologram001"
          castShadow
          receiveShadow
          geometry={nodes.hologram001.geometry}
          material={materials['Material.009']}
          position={[0, 1, 0]}
        />
        <mesh
          name="hologram_ground001"
          castShadow
          receiveShadow
          geometry={nodes.hologram_ground001.geometry}
          material={materials.Material}
        />
        <mesh
          name="hologram_radar_004001"
          castShadow
          receiveShadow
          geometry={nodes.hologram_radar_004001.geometry}
          material={materials['Material.020']}
          position={[-0.119, 18.697, 0.416]}
          rotation={[0, 0, 0.235]}>
          <mesh
            name="hologram_radar_005001"
            castShadow
            receiveShadow
            geometry={nodes.hologram_radar_005001.geometry}
            material={materials['Material.014']}
            position={[-0.333, -0.406, 0.056]}
            rotation={[0.602, -0.602, 0.235]}>
            <mesh
              name="hologram_radar_006001"
              castShadow
              receiveShadow
              geometry={nodes.hologram_radar_006001.geometry}
              material={materials['Material.019']}
              position={[0.343, -0.126, -0.26]}
              rotation={[1.866, 0.653, 1.494]}>
              <mesh
                name="hologram_radar_003001"
                castShadow
                receiveShadow
                geometry={nodes.hologram_radar_003001.geometry}
                material={materials['Material.011']}
                position={[0.085, 0.342, 0.135]}
                rotation={[-0.768, 0.693, -1.13]}>
                <mesh
                  name="hologram_radar_002001"
                  castShadow
                  receiveShadow
                  geometry={nodes.hologram_radar_002001.geometry}
                  material={materials['Material.024']}
                  position={[-0.237, -0.115, 0.14]}
                  rotation={[0.459, -0.599, 0.092]}>
                  <mesh
                    name="hologram_radar_007001"
                    castShadow
                    receiveShadow
                    geometry={nodes.hologram_radar_007001.geometry}
                    material={materials['Material.015']}
                    position={[0.092, -0.17, -0.073]}
                    rotation={[1.826, 0.54, 1.455]}>
                    <mesh
                      name="hologram_radar001"
                      castShadow
                      receiveShadow
                      geometry={nodes.hologram_radar001.geometry}
                      material={materials['Material.023']}
                      position={[0.072, 0.086, 0]}
                      rotation={[-0.806, 0.807, -1.166]}
                    />
                  </mesh>
                </mesh>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh
          name="Red_Laser_004001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_004001.geometry}
          material={materials['Material.050']}
          scale={0}
        />
        <mesh
          name="Red_Laser_015001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_015001.geometry}
          material={nodes.Red_Laser_015001.material}
          scale={0}
        />
        <mesh
          name="Red_Laser_005001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_005001.geometry}
          material={materials['Material.061']}
          scale={0}
        />
        <mesh
          name="Red_Laser_008001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_008001.geometry}
          material={materials['Material.062']}
          scale={0}
        />
        <mesh
          name="Red_Laser_006001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_006001.geometry}
          material={materials['Material.053']}
          scale={0}
        />
        <mesh
          name="Red_Laser_009001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_009001.geometry}
          material={materials['Material.063']}
          scale={0}
        />
        <mesh
          name="Red_Laser_007001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_007001.geometry}
          material={materials['Material.059']}
          scale={0}
        />
        <mesh
          name="Red_Laser_010001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_010001.geometry}
          material={materials['Material.058']}
          scale={0}
        />
        <mesh
          name="Red_Laser_003001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser_003001.geometry}
          material={materials['Material.060']}
          scale={0}
        />
        <mesh
          name="Red_Laser001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Laser001.geometry}
          material={materials['Material.056']}
          scale={0}
        />
        <mesh
          name="Panic_Bot_001001"
          castShadow
          receiveShadow
          geometry={nodes.Panic_Bot_001001.geometry}
          material={materials['Material.001']}
          position={[23.991, 2.025, 0]}
          rotation={[0, -0.178, 0]}
          scale={0.8}>
          <mesh
            name="Circle_020001"
            castShadow
            receiveShadow
            geometry={nodes.Circle_020001.geometry}
            material={nodes.Circle_020001.material}
            position={[2.1, 6.593, -0.156]}
            rotation={[0, 0.178, -Math.PI / 2]}
          />
          <mesh
            name="Station001"
            castShadow
            receiveShadow
            geometry={nodes.Station001.geometry}
            material={nodes.Station001.material}
            position={[2.003, 6.593, -0.139]}
            rotation={[Math.PI / 2, 0, -1.662]}
          />
          <mesh
            name="Text_003001"
            castShadow
            receiveShadow
            geometry={nodes.Text_003001.geometry}
            material={nodes.Text_003001.material}
            position={[2.016, 6.593, -0.141]}
            rotation={[Math.PI / 2, 0, -1.662]}
          />
          <mesh
            name="Under_Attack001"
            castShadow
            receiveShadow
            geometry={nodes.Under_Attack001.geometry}
            material={nodes.Under_Attack001.material}
            position={[2.304, 6.593, -0.193]}
            rotation={[Math.PI / 2, 0, -1.662]}
          />
          <mesh
            name="Warning001"
            castShadow
            receiveShadow
            geometry={nodes.Warning001.geometry}
            material={nodes.Warning001.material}
            position={[1.994, 6.593, -0.137]}
            rotation={[Math.PI / 2, 0, -1.662]}
          />
        </mesh>
        <group name="Point001" position={[0, 19, 0]} />
        <mesh
          name="Sartfighter_001001"
          castShadow
          receiveShadow
          geometry={nodes.Sartfighter_001001.geometry}
          material={nodes.Sartfighter_001001.material}
          scale={0}
        />
        <mesh
          name="scifi_column001"
          castShadow
          receiveShadow
          geometry={nodes.scifi_column001.geometry}
          material={materials['Material.003']}
          position={[56, 0, -60]}
        />
        <mesh
          name="scifi_column_001001"
          castShadow
          receiveShadow
          geometry={nodes.scifi_column_001001.geometry}
          material={materials['Material.005']}
          position={[84, 0, -33]}
          rotation={[0, -0.696, 0]}
        />
        <mesh
          name="Station-Outside001"
          castShadow
          receiveShadow
          geometry={nodes['Station-Outside001'].geometry}
          material={materials['Material.007']}
        />
        <spotLight
          name="Point002"
          intensity={5435141.307/intensityScale}
          angle={Math.PI / 2}
          penumbra={0.15}
          decay={2}
          position={[0.837, 24.825, -1.166]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.647}>
          <group position={[0, 0, -1]} />
        </spotLight>
        <group
          name="Point003"
          position={[-1.697, 34.827, -1.166]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.647}
        />
        <directionalLight
          name="Sun"
          intensity={4794.66/intensityScale}
          decay={2}
          position={[-1.263, 148.386, 3.431]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <pointLight
          name="Point004"
          intensity={9038.639/intensityScale}
          decay={2}
          position={[429.876, -0.286, -0.47]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <spotLight
          name="Spot"
          intensity={543.514/intensityScale}
          angle={Math.PI / 8}
          decay={2}
          position={[0.757, 4.914, 1.881]}
          rotation={[-1.823, -0.06, 2.467]}
          scale={-0.898}>
          <group position={[0, 0, -1]} />
        </spotLight>
        <group name="Armature" scale={0}>
          <skinnedMesh
            name="model"
            geometry={nodes.model.geometry}
            material={materials['CustomMaterial.006']}
            skeleton={nodes.model.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
        <spotLight
          name="Point005"
          intensity={21952.534/intensityScale}
          angle={Math.PI / 8}
          penumbra={0.15}
          decay={2}
          position={[193.486, 19.156, 28.615]}
          rotation={[2.972, 0.754, 0.879]}>
          <group position={[0, 0, -1]} />
        </spotLight>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={22.895}
          position={[557.639, 44.01, 2.51]}
          rotation={[-1.57, 0.174, 1.566]}
          scale={13.705}
        />
        <group
          name="scene"
          position={[-66.912, 14.343, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.228, 0.208, 0.314]}>
          <group name="Materials" />
          <group name="Meshes" scale={100}>
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="glass_2">
                    <mesh
                      name="Object_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_2.geometry}
                      material={materials.material_2}
                      position={[0, 0.004, 0]}
                      rotation={[0, 0, 2.802]}
                    />
                  </group>
                  <group
                    name="Grass_low_0"
                    position={[0.037, 0.056, 0.177]}
                    rotation={[0.299, -0.209, -2.178]}
                    scale={0.359}
                  />
                  <group name="low_1">
                    <mesh
                      name="Object_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1.geometry}
                      material={materials.material_1}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Armature001" scale={0}>
          <primitive object={nodes.mixamorigHips_1} />
        </group>
        <group name="scene001" rotation={[Math.PI / 2, 0, -2.338]} scale={0.386}>
          <group name="Meshes001" scale={100}>
            <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]} scale={2.174}>
              <group name="Dome_Showcase_fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="RootNode">
                  <group name="Background" rotation={[-Math.PI / 2, 0, 0]} scale={250} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="scene002" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Meshes002" position={[0, 26.209, 0]} scale={100}>
            <group name="Sketchfab_model002" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Infinity_Table_fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="RootNode001">
                  <group
                    name="Infinity_Table"
                    position={[0.103, -26.211, -20.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Infinity_Table_Glass_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Infinity_Table_Glass_0.geometry}
                      material={materials.Glass}
                      position={[-0.727, -0.069, -0.295]}
                      rotation={[-Math.PI, 0.526, Math.PI / 2]}
                      scale={[0.333, 0.323, 0.568]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="scene003" position={[0, 0, -28.186]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="Meshes003" position={[0, 26.209, 0]} scale={100}>
            <group name="Sketchfab_model003" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Infinity_Table_fbx001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="RootNode002">
                  <group
                    name="Infinity_Table001"
                    position={[0.103, -26.211, -20.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Infinity_Table_Glass_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Infinity_Table_Glass_0001.geometry}
                      material={materials['Glass.001']}
                      position={[-0.54, -0.069, -0.258]}
                      rotation={[-Math.PI, 1.062, Math.PI / 2]}
                      scale={[0.333, 0.323, 0.568]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="scene004" position={[0, 0, 73.013]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="Meshes004" position={[0, 26.209, 0]} scale={100}>
            <group name="Sketchfab_model004" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Infinity_Table_fbx002" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="RootNode003">
                  <group
                    name="Infinity_Table002"
                    position={[0.103, -26.211, -20.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Infinity_Table_Glass_0002"
                      castShadow
                      receiveShadow
                      geometry={nodes.Infinity_Table_Glass_0002.geometry}
                      material={materials['Glass.002']}
                      position={[-0.727, -0.069, -0.436]}
                      rotation={[Math.PI, -0.508, Math.PI / 2]}
                      scale={[0.333, 0.323, 0.568]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="scene005" position={[0, 0, 101.083]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="Meshes005" position={[0, 26.209, 0]} scale={100}>
            <group name="Sketchfab_model005" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Infinity_Table_fbx003" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="RootNode004">
                  <group
                    name="Infinity_Table003"
                    position={[0.103, -26.211, -20.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Infinity_Table_Glass_0003"
                      castShadow
                      receiveShadow
                      geometry={nodes.Infinity_Table_Glass_0003.geometry}
                      material={materials['Glass.003']}
                      position={[-0.684, -0.069, -0.361]}
                      rotation={[0, 0.909, -1.571]}
                      scale={[0.333, 0.323, 0.568]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="scene006" position={[0, 0, 101.083]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="Meshes006" position={[0, 26.209, 0]} scale={100}>
            <group name="Sketchfab_model006" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Infinity_Table_fbx004" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="RootNode005">
                  <group
                    name="Infinity_Table004"
                    position={[0.103, -26.211, -20.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Infinity_Table_Glass_0004"
                      castShadow
                      receiveShadow
                      geometry={nodes.Infinity_Table_Glass_0004.geometry}
                      material={materials['Glass.004']}
                      position={[0.455, -0.069, -0.311]}
                      rotation={[0, 1.524, -1.571]}
                      scale={[0.333, 0.323, 0.568]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="scene007" position={[0, 0, -24.252]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="Meshes007" position={[0, 26.209, 0]} scale={100}>
            <group name="Sketchfab_model007" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Infinity_Table_fbx005" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="RootNode006">
                  <group
                    name="Infinity_Table005"
                    position={[0.103, -26.211, -20.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}>
                    <mesh
                      name="Infinity_Table_Glass_0005"
                      castShadow
                      receiveShadow
                      geometry={nodes.Infinity_Table_Glass_0005.geometry}
                      material={materials['Glass.005']}
                      position={[0.455, -0.069, -0.316]}
                      rotation={[0, 1.316, -1.571]}
                      scale={[0.333, 0.323, 0.568]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials.toptext}
          position={[0.549, 15.098, 6.204]}
          rotation={[1.57, -0.02, -1.59]}
          scale={5.381}
        />
        <mesh
          name="Text001"
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials['tech text.001']}
          position={[-0.019, 15.075, 6.215]}
          rotation={[1.57, -0.02, -1.59]}
          scale={5.508}
        />
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials['base text']}
          position={[-0.455, 14.791, 6.224]}
          rotation={[1.57, -0.02, -1.59]}
          scale={5.508}
        />
        <group
          name="Armature002"
          position={[329.967, 4.393, 20.137]}
          rotation={[Math.PI / 2, 0, 1.63]}
          scale={0.174}>
          <skinnedMesh
            name="model002"
            geometry={nodes.model002.geometry}
            material={materials['CustomMaterial.001']}
            skeleton={nodes.model002.skeleton}
          />
          <primitive object={nodes.mixamorigHips_2} />
        </group>
        <mesh
          name="Text003"
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials['toptext.001']}
          position={[553.721, 2.21, 10.222]}
          rotation={[-Math.PI, 1.565, -Math.PI]}
          scale={7.741}
        />
        <mesh
          name="Text004"
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={materials['tech text.002']}
          position={[553.915, 1.391, 9.996]}
          rotation={[-Math.PI, 1.565, -Math.PI]}
          scale={7.923}
        />
        <mesh
          name="Text005"
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={materials['base text.001']}
          position={[557.612, 44.378, 2.514]}
          rotation={[1.542, 1.39, -1.542]}
          scale={13.705}
        />
        <spotLight
          name="Point006"
          intensity={271757.065/intensityScale}
          angle={1.173}
          decay={2}
          position={[547.494, 7.83, -22.029]}
          rotation={[-2.718, -0.171, -0.21]}>
          <group position={[0, 0, -1]} />
        </spotLight>
        <spotLight
          name="Point007"
          intensity={43481.13/intensityScale}
          angle={1.173}
          decay={2}
          position={[547.494, 25.046, 14.832]}
          rotation={[-1.808, 0.489, 0.558]}>
          <group position={[0, 0, -1]} />
        </spotLight>
        <pointLight name="Light" intensity={54351.413/intensityScale} decay={2} scale={0} />
        <group
          name="Armature003"
          position={[-64.736, 8.979, 0]}
          rotation={[Math.PI / 2, 0, -1.566]}
          scale={0.074}>
          <skinnedMesh
            name="model003"
            geometry={nodes.model003.geometry}
            material={materials['CustomMaterial.002']}
            skeleton={nodes.model003.skeleton}
          />
          <primitive object={nodes.mixamorigHips_3} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/SciFi-Corridor-B.gltf')
