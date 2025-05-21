<template>
  <div class="flex flex-col">
    <label :for="name" class="text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>