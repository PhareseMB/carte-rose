<template>
  <div class="form-container">
    <section class="column">
      <input
        class="title"
        v-model="formData.Agents"
        placeholder="AGENTS MANDATAIRES"
      />
      <input v-model="formData.reference" placeholder="GB4000212302469" />

      <div class="radio-group">
        <label v-for="(group, index) in radioGroups" :key="index">
          <input
            type="radio"
            :name="'group' + (index + 1)"
            :value="group.value"
            v-model="formData[`group${index + 1}`]"
          />
          {{ group.label }}
        </label>
      </div>

      <div class="date-range">
        <input type="date" v-model="formData.startDate" />
        <input type="date" v-model="formData.endDate" />
      </div>
    </section>

    <section class="column">
      <input
        v-model="formData.name"
        class="input-bold"
        placeholder="MOUSSOUNDA MARIE GABRIELLE"
      />
      <input v-model="formData.bp" placeholder="BP POG" />
      <div class="vehicle-info">
        <input v-model="formData.category" placeholder="B" />
        <input v-model="formData.license" placeholder="LJ90GLL" />
        <input v-model="formData.brand" placeholder="TOYOTA" />
        <input v-model="formData.plateNumber" placeholder="FT852AA" />
      </div>
    </section>

    <section class="column">
      <input v-model="formData.plateNumber2" placeholder="FT852AA" />
      <div class="date-range">
        <input type="date" v-model="formData.startDate2" />
        <input type="date" v-model="formData.endDate2" />
      </div>
      <input v-model="formData.reference2" placeholder="GB4000212302469" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        Agents: "",
        reference: "",
        group1: "",
        group2: "",
        startDate: "",
        endDate: "",
        name: "",
        bp: "",
        category: "",
        license: "",
        brand: "",
        plateNumber: "",
        plateNumber2: "",
        startDate2: "",
        endDate2: "",
        reference2: "",
      },
      radioGroups: [
        { value: "OUI", label: "OUI" },
        { value: "NON", label: "NON" },
        { value: "OUI", label: "OUI" },
        { value: "NON", label: "NON" },
        { value: "OUI", label: "OUI" },
        { value: "NON", label: "NON" },
      ],
    };
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.title {
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.input-bold {
  font-weight: bold;
  text-align: center;
}

.radio-group {
  display: flex;
  gap: 1rem;
  margin-left: 2rem;
}

.date-range {
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
}

.vehicle-info {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
