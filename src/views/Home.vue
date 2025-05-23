<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div
      class="bg-white rounded-lg shadow-xl p-12 border-2 border-gray-300"
      style="background-color: #f7fafc"
    >
      <form class="space-y-6" @submit.prevent="sendData">
        <div class="grid grid-cols-3 gap-6">
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
                :value="cache.label"
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
    <!-- <router-link :to="{ name: 'show' }" class="text-xl"> data </router-link> -->
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";

export default {
  name: "Home",
  components: { InputField },
  data() {
    return {
      fields: [
        {
          label: "Bureau de",
          name: "bureau",
          type: "text",
          placeholder: "Bureau",
        },
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
          label: "N° de police",
          name: "numero_police",
          type: "text",
          placeholder: "Votre numero de police",
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
        {
          label: "Marque",
          name: "marque",
          type: "text",
          placeholder: "Marque",
        },
        {
          label: "Date debut validite",
          name: "date_debut_validite",
          type: "date",
          placeholder: "Date début validité",
        },
        {
          label: "Date fin validite",
          name: "date_fin_validite",
          type: "date",
          placeholder: "Date fin validité",
        },
      ],
      caches: [
        { id: 1, label: "R.C" },
        { id: 2, label: "D.R" },
        { id: 3, label: "Vol" },
        { id: 4, label: "Incendie" },
        { id: 5, label: "DOM" },
        { id: 6, label: "B.G" },
      ],
      attestationData: {},
      selectedGarantie: [],
    };
  },
  methods: {
    async sendData() {
      try {
        const data = {
          ...this.attestationData,
          garanties: [...this.selectedGarantie],
        };
        await console.log(data);
        this.resetForm();
        this.$router.push("/show");
      } catch (error) {
        console.error("Error sending data:", error);
      }
    },

    resetForm() {
      this.attestationData = {};
      this.selectedGarantie = [];
    },
  },
};
</script>

<style></style>
