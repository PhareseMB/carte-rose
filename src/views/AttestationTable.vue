<template>
  <div class="min-h-screen bg-gray-50/50">
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div class="p-6 border-b border-gray-100">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-800">
              Liste de production #{{ attestionStore.attestation.length }}
            </h2>
            <router-link
              :to="{ name: 'Home' }"
              class="inline-flex items-center px-4 py-2 bg-yellow-500 text-blue-500 rounded-lg shadow-sm hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Créer nouvelle
            </router-link>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50">
                <th
                  class="px-6 py-4 text-left text-sm font-medium text-gray-600"
                >
                  #
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-medium text-gray-600"
                >
                  Nom
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-medium text-gray-600"
                >
                  N° Police
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-medium text-gray-600"
                >
                  Date
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-medium text-gray-600"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="hover:bg-gray-50/50 transition-colors duration-200"
                v-for="(data, index) in attestionStore.getPaginateAttestation"
                :key="data.id"
              >
                <td class="px-6 py-4 text-sm text-gray-800">
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-800">
                  {{ data.nom_client }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-800">
                  {{ data.numero_police }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-800">
                  {{ data.date_debut }}
                </td>
                <td class="px-6 py-4">
                  <div class="flex space-x-3">
                    <button
                      class="inline-flex items-center px-3 py-2 bg-blue-50 text-yellow-800 rounded-lg hover:bg-blue-100 transition-all duration-200"
                      @click.prevent="attestionStore.impression(2, data)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                      Imprimer carte rose
                    </button>
                    <button
                      class="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all duration-200"
                      @click.prevent="attestionStore.impression(1, data)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                      Imprimer attestation
                    </button>
                    <router-link
                      :to="{ name: 'edit', params: { id: data.type } }"
                      class="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all duration-200"
                    >
                      Modifier
                    </router-link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <PaginateBar
            :start="attestionStore.getStartIndex"
            :end="attestionStore.getEndIndex"
            :total="attestionStore.getNumbeTable"
            :currentPage="attestionStore.currentPage"
            :totalPages="attestionStore.getTotalPages"
            @prev="attestionStore.prevPage"
            @next="attestionStore.nextPage"
            title="Productions"
            class="px-5 mt-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAttestationStore } from "../store/attestation";
import PaginateBar from "../components/Paginate.vue";

const attestionStore = useAttestationStore();

onMounted(async () => {
  await attestionStore.getAttestion();
});
</script>
