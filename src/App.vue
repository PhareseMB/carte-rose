<script setup>
import HelloWorld from "./components/HelloWorld.vue";
// import { attestationPdf } from "./data/pdf/BaseModel";
import Attestation from "./components/Attestation.vue";
import AttestationViews from "./views/AttestationViews.vue";
import { ref } from "vue";
const dataValue = {
  nomAdAssure: "mba ndong",
  NomAdSoCiete: "NSIA ",
  NumChassis: "2020",
  policeOriginale: 888999,
  usagecat: "transport personnel",
  dateFin: "20/05/2024",
  dateDebut: "20/05/2024",
  police: 1225,
  BureauEmetteur: "Glass",
  assureur: "NSIA",
  marquetype: "toyota bus",
  immatriculation: 100000522,
};
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <button @click.prevent="attestationPdf(dataValue)">
    <span>Clique ici</span>
  </button> -->
  <!-- <Attestation /> -->
  <!-- <AttestationViews /> -->
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
