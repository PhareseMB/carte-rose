<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <div class="container mx-auto p-6 flex-grow">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden h-full">
        <div class="p-4">
          <router-link
            :to="{ name: 'Home' }"
            class="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Créer
          </router-link>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nom
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Prénom
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Doe</td>
              <td class="px-6 py-4 whitespace-nowrap">John</td>
              <td class="px-6 py-4 whitespace-nowrap">01/01/2024</td>
              <td class="px-6 py-4 whitespace-nowrap space-x-2">
                <button
                  class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <i class="fas fa-print mr-2"></i>Imprimer
                </button>
                <button
                  class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <i class="fas fa-eye mr-2"></i>Voir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
