<template>
  <div>
    <h1>Molecule Viewer</h1>
    <button @click="handleDownload()">Download</button>
    <mocule-viewer ref="viewer" :molData="molData"/>
  </div>
</template>

<script>
import MoculeViewer from './components/MoculeViewer.vue';
import * as THREE from 'three';

export default {
  components: { MoculeViewer },
  data() {
    return {
      molData: "_rank1\n     RDKit          3D\n\n 37 40  0  0  0  0  0  0  0  0999 V2000\n  -38.1653 -168.6665  314.5609 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -36.7483 -168.2868  314.4496 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.8999 -168.4347  315.5291 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -34.7303 -167.9260  315.5497 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -33.6272 -168.4972  314.8068 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -33.6411 -168.5444  312.9266 Br  0  0  0  0  0  0  0  0  0  0  0  0\n  -34.5270 -166.7875  316.3685 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.4775 -165.8136  316.5528 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.6785 -165.4237  317.8531 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.0135 -165.9914  318.7636 O   0  0  0  0  0  0  0  0  0  0  0  0\n  -36.5623 -164.4642  318.1240 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.2842 -163.8441  317.1574 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -38.2064 -162.8404  317.5009 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -38.5602 -162.4640  318.8032 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.6282 -162.3799  319.8029 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.9883 -161.9746  321.0989 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.2669 -161.8024  322.2701 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -38.0983 -161.3911  323.2383 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.6942 -161.1060  324.6041 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -39.3101 -161.3011  322.7135 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -39.2871 -161.6484  321.4091 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -40.2075 -161.7387  320.3947 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -39.8783 -162.1324  319.1211 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -40.8039 -162.2164  318.1295 F   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.1081 -164.2047  315.8493 N   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.8624 -163.5621  314.8295 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.1835 -163.2311  313.5730 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.8071 -163.4421  313.4369 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.1014 -163.1677  312.2882 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -33.7620 -163.3953  312.2161 F   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.7686 -162.6609  311.2162 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -35.0948 -162.3812  310.0664 F   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.1198 -162.4287  311.2825 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -37.8113 -162.7225  312.4787 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -39.1454 -162.4309  312.4472 F   0  0  0  0  0  0  0  0  0  0  0  0\n  -36.2036 -165.1824  315.6241 C   0  0  0  0  0  0  0  0  0  0  0  0\n  -36.0061 -165.5570  314.4370 O   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  6\n  2  3  1  0\n  3  4  2  3\n  4  5  1  0\n  5  6  1  0\n  4  7  1  0\n  7  8  1  0\n  8  9  1  0\n  9 10  2  0\n  9 11  1  0\n 11 12  2  0\n 12 13  1  0\n 13 14  1  0\n 14 15  2  0\n 15 16  1  0\n 16 17  2  0\n 17 18  1  0\n 19 18  1  1\n 18 20  1  0\n 20 21  2  0\n 21 22  1  0\n 22 23  2  0\n 23 24  1  0\n 12 25  1  0\n 26 25  1  6\n 26 27  1  0\n 27 28  2  0\n 28 29  1  0\n 29 30  1  0\n 29 31  2  0\n 31 32  1  0\n 31 33  1  0\n 33 34  2  0\n 34 35  1  0\n 25 36  1  0\n 36 37  2  0\n 36  8  1  0\n 23 14  1  0\n 34 27  1  0\n 21 16  1  0\nM  END\n$$$$\n", // Example molecule data
    };
  },
  methods: {
    handleDownload() {
      const viewer = this.$refs.viewer.viewer;
      console.log(viewer, "viewer");
      
      if (viewer) {
        // Convert 3Dmol model to Three.js
        const scene = new THREE.Scene();
        const model = viewer.getModel(0); // Get the first model

        // Create a Three.js mesh based on the 3Dmol model (simplified example)
        const geometry = new THREE.BufferGeometry();
        const vertices = []; // Collect vertices from the 3Dmol model here (example below)
        model.eachAtom(function(atom) {
          vertices.push(atom.x, atom.y, atom.z); // Push atom positions
        });
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        const material = new THREE.PointsMaterial({ size: 0.1 });
        const mesh = new THREE.Points(geometry, material);
        scene.add(mesh);

        // Export to GLB using Three.js GLTFExporter
        const exporter = new THREE.GLTFExporter();
        exporter.parse(
          scene,
          function (result) {
            const blob = new Blob([result], { type: 'application/octet-stream' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'model.glb';
            link.click();
          },
          { binary: true }
        );
      } else {
        console.error("Viewer not initialized.");
      }
    }
    },
};
</script>
