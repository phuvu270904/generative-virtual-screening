<template>
  <div :id="viewerId" class="viewer"></div>
</template>

<script>
export default {
  name: "MoleculeViewer",
  props: {
    molData: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      viewerId: "3dmol-viewer", // Static ID
      viewer: null, // Store the viewer instance here
    };
  },
  mounted() {
    // Dynamically load 3Dmol.js
    const script = document.createElement("script");
    script.src = "https://3dmol.csb.pitt.edu/build/3Dmol-min.js";
    script.onload = this.init3DViewer;
    document.head.appendChild(script);
  },
  methods: {
    init3DViewer() {
      const viewerElement = document.getElementById(this.viewerId);
      if (!viewerElement) {
        console.error("Viewer element not found.");
        return;
      }

      // Initialize the viewer and store the instance
      this.viewer = $3Dmol.createViewer(viewerElement, {
        defaultcolors: $3Dmol.rasmolElementColors,
      });

      // Load the initial molecule data
      this.viewer.addModel(this.molData, "mol"); // Specify the format (e.g., MOL)
      this.viewer.setStyle({}, { stick: {} }); // Apply stick style
      this.viewer.zoomTo(); // Adjust zoom
      this.viewer.render(); // Render the molecule

      $3Dmol.download('pdb:2nbd', this.viewer, { onemol: true, multimodel: true }, (model) => {
        // Optionally apply some style or transformations to the model
        model.setStyle({ 'cartoon': { colorscheme: { prop: 'ss', map: $3Dmol.ssColors.Jmol } } });

        // Zoom to the model and render it
        this.viewer.zoomTo();
        this.viewer.render();
      });
    },
  },
  watch: {
    molData(newMolData) {
      if (this.viewer) {
        this.viewer.removeAllModels(); // Clear the previous model
        this.viewer.addModel(newMolData, "mol"); // Add new model
        this.viewer.zoomTo();
        this.viewer.render();
      }
    },
  },
};
</script>

<style>
.viewer {
  width: 100%;
  height: 500px;
}

.viewer canvas {
  margin-top: 200px;
}
</style>
