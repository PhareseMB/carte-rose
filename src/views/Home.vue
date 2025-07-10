<template>
  <div class="max-w-9xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div
      class="bg-white rounded-lg shadow-xl p-12 border-2 border-gray-300"
      style="background-color: #f7fafc"
    >
      <form class="space-y-6" @submit.prevent="sendData">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-1 flex items-center space-x-6">
            <label class="block text-gray-700 text-sm font-bold mr-4"
              >Type :</label
            >
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="type_attestation"
                value="1"
                v-model="attestationData.type_attestation"
                class="form-radio text-blue-600 h-4 w-4 border-gray-300 focus:ring-blue-500"
              />
              <span class="ml-2 text-gray-700 text-sm">AFN</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="type_attestation"
                value="2"
                v-model="attestationData.type_attestation"
                class="form-radio text-blue-600 h-4 w-4 border-gray-300 focus:ring-blue-500"
              />
              <span class="ml-2 text-gray-700 text-sm">REN</span>
            </label>
          </div>
          <select
            name="bureau"
            id="bureau"
            v-model="attestationData.categorie"
            class="col-span-3 sm:col-span-1 border border-gray-300 rounded-lg px-2 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" disabled>Choisir une categorie</option>
            <option v-for="(cat, id) in categories" :key="id" :value="cat">
              {{ cat.name }}
            </option>
          </select>
          <select
            name="bureau"
            id="bureau"
            v-model="attestationData.bureau"
            class="col-span-3 sm:col-span-1 border border-gray-300 rounded-lg px-2 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" disabled>Choisir un bureau</option>
            <option v-for="(bureau, id) in bureaux" :key="id" :value="bureau">
              {{ bureau.label }}
            </option>
          </select>
          <InputField
            v-for="(field, index) in fields"
            :key="index"
            :label="field.label"
            :type="field.type"
            :placeholder="field.placeholder"
            :name="field.name"
            v-model:value="attestationData[field.name]"
          />
        </div>
        <div class="mt-6">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Granties</label
          >
          <div class="flex space-x-4 flex-wrap">
            <div
              class="flex items-center"
              v-for="cache in caches"
              :key="cache.id"
            >
              <input
                class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                type="checkbox"
                :id="cache.id"
                :value="cache"
                :checked="cache.value"
                :disabled="cache.disabled"
                v-model="selectedGarantie"
              />
              <label class="ml-2 block text-sm text-gray-700" :for="cache.id">
                {{ cache.label }}
              </label>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6">
          <button
            class="w-1/2 bg-blue-700 text-black font-bold py-3 px-4 border rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import InputField from "../components/InputField.vue";
import { useAttestationStore } from "../store/attestation";

// Champs dynamiques du formulaire
const fields = [
  {
    label: "Nom client",
    name: "nom_client",
    type: "text",
    placeholder: "Votre nom & prénoms",
  },
  {
    label: "Plaque",
    name: "plaque",
    type: "text",
    placeholder: "Votre plaque",
  },
  {
    label: "Adresse",
    name: "adresse",
    type: "text",
    placeholder: "Votre adresse",
  },
  {
    label: "Date debut",
    name: "date_debut",
    type: "date",
    placeholder: "Date de début",
  },
  {
    label: "Date fin",
    name: "date_fin",
    type: "date",
    placeholder: "Date de fin",
  },
  {
    label: "Genre",
    name: "genre_vehicule",
    type: "text",
    placeholder: "Genre de vehicule",
  },
  { label: "Type", name: "type", type: "text", placeholder: "Type" },
  { label: "Marque", name: "marque", type: "text", placeholder: "Marque" },
];

// Garanties disponibles
const caches = [
  { id: 1, label: "R.C", disabled: true, value: true },
  { id: 2, label: "D.R", disabled: true, value: true },
  { id: 3, label: "Vol", disabled: false, value: false },
  { id: 4, label: "Incendie", disabled: false, value: false },
  { id: 5, label: "DOM", disabled: false, value: false },
  { id: 6, label: "B.G", disabled: false, value: false },
];

// Bureaux et catégories
const bureaux = [
  { id: 2, label: "BUREAU DIRECT SIEGE", code: 2003 },
  { id: 3, label: "BUREAU DIRECT POG", code: 2004 },
  { id: 4, label: "BUREAU DIRECT PETIT PARIS", code: 2005 },
  { id: 5, label: "BUREAU DIRECT MOUILA", code: 2006 },
  { id: 6, label: "BUREAU DIRECT CAMPAGNE", code: 2007 },
  { id: 7, label: "BUREAU DIRECT AKANDA", code: 2008 },
  { id: 8, label: "BUREAU DIRECT MAKOUKOU", code: 2009 },
  { id: 9, label: "BUREAU DIRECT OYEM", code: 2010 },
  { id: 10, label: " SAG", code: 3004 },
  { id: 11, label: "ROYAL ASSURANCES", code: 3011 },
  { id: 12, label: "AGENT MANDATAIRES", code: 3011 },
];

const categories = [
  { id: 1, name: "PROMENADE & AFFAIRES", code: 201 },
  { id: 4, name: "TAXI", code: 204 },
  { id: 2, name: "TRANSPORT PUBLIC DE MARCHANDISES", code: 203 },
  { id: 3, name: "TRANSPORT PRIVE DE MARCHANDES", code: 202 },
  { id: 5, name: "ENGIN MOBILE DE CHANTIER", code: 209 },
  { id: 6, name: "MOTO DEUX OU TROIS ROUES", code: 205 },
  {
    id: 7,
    name: "TRACTEURS AGRICOLES ET FORESTIERS AVEC OU SANS CHENILLES",
    code: 212,
  },
];

// Données du formulaire
const attestationData = reactive({
  type_attestation: "",
  categorie: "",
  bureau: "",
});

// Garanties sélectionnées (toujours R.C et D.R cochées)
const selectedGarantie = ref([
  { id: 1, label: "R.C" },
  { id: 2, label: "D.R" },
]);

const router = useRouter();
const attestationStore = useAttestationStore();

// Gestion des garanties cochées/décochées
function updateGarantie(cache, checked) {
  if (checked) {
    if (!selectedGarantie.value.find((g) => g.id === cache.id)) {
      selectedGarantie.value.push({ id: cache.id, label: cache.label });
    }
  } else {
    selectedGarantie.value = selectedGarantie.value.filter(
      (g) => g.id !== cache.id
    );
  }
}

// Soumission du formulaire
async function sendData() {
  try {
    const data = {
      ...attestationData,
      garanties: [...selectedGarantie.value],
    };
    attestationStore.addAttestion(data);
    resetForm();
    router.push("/show");
  } catch (error) {
    console.error("Error sending data:", error);
  }
}

// Réinitialisation du formulaire
function resetForm() {
  Object.keys(attestationData).forEach((key) => (attestationData[key] = ""));
  selectedGarantie.value = [
    { id: 1, label: "R.C" },
    { id: 2, label: "D.R" },
  ];
}
</script>

<style></style>
