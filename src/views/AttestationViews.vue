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
                    <!-- Le reste du code de la table reste inchangé -->
                </table>
            </div>
        </div>
    </div>
</template>


