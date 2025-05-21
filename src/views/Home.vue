<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div
      class="bg-white rounded-lg shadow-xl p-12 border-2 border-gray-300"
      style="background-color: #f7fafc"
    >
      <form class="space-y-6">
        <div class="grid grid-cols-3 gap-6">
          <InputField
            v-for="(field, index) in fields"
            :key="index"
            :label="field.label"
            :type="field.type"
            :placeholder="field.placeholder"
            :name="field.name"
          />
        </div>
        <div class="mt-6">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Cache</label
          >
          <div class="flex space-x-2">
            <div class="flex items-center" v-for="cache in caches" :key="cache">
              <input
                class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                :id="`cache${cache}`"
                type="radio"
                name="cache"
                :value="`Cache ${cache}`"
              />
              <label
                class="ml-2 block text-sm text-gray-700"
                :for="`cache${cache}`"
                >{{ `Cache ${cache}` }}</label
              >
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6">
          <button
            class="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";

export default {
  components: { InputField },
  data() {
    return {
      fields: [
        { label: "Nom", type: "text", placeholder: "Votre nom", name: "nom" },
        { label: "Prénom", type: "text", placeholder: "Votre prénom", name: "prenom" },
        { label: "Email", type: "email", placeholder: "Votre email", name: "email" },
        { label: "Téléphone", type: "tel", placeholder: "Votre téléphone", name: "telephone" },
        { label: "Adresse", type: "text", placeholder: "Votre adresse", name: "adresse" },
        { label: "Ville", type: "text", placeholder: "Votre ville", name: "ville" },
        { label: "Code Postal", type: "text", placeholder: "Votre code postal", name: "code_postal" },
        { label: "Pays", type: "text", placeholder: "Votre pays", name: "pays" },
        { label: "Profession", type: "text", placeholder: "Votre profession", name: "profession" },
      ],
      caches: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<style>
</style>
