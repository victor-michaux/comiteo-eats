<template>
  <form class="w-full max-w-lg"  @submit.prevent="submitForm">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
        <CustomInput
          placeholder="Nom"
          @keydown.enter="search"
          v-model="last_name"
          label="Name"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <CustomInput
          placeholder="Prénom"
          @keydown.enter="search"
          v-model="first_name"
          label="Firstname"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-1 mb-4">
    <div class="w-full px-3">
      <CustomInput
        placeholder="Adresse"
        @keydown.enter="search"
        v-model="delivery_street_address"
        label="Adresse"
      />
    </div>
  </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <CustomInput
          placeholder="Ville"
          @keydown.enter="search"
          v-model="delivery_city"
          label="Ville"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <CustomInput
          placeholder="Code Postal"
          @keydown.enter="search"
          v-model="delivery_zip_code"
          label="Code Postal"
        />
      </div>
    </div>
     <button
        type="submit"
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Valider ma commande
      </button>
  </form>
</template>
<script>
import { mapActions } from 'vuex';
import CustomInput from './CustomInput';
export default {
  name: 'Forms',
  components: {
    CustomInput,
  },
  data() {
    return {
      last_name: '',
      first_name: '',
      delivery_street_address: '',
      delivery_zip_code: '',
      delivery_city: '',
    }
  },
  methods: {
    ...mapActions(['pushFormOrder']),
    submitForm() {
      const formData = {
        last_name: this.last_name,
        first_name: this.first_name,
        delivery_street_address: this.delivery_street_address,
        delivery_zip_code: this.delivery_zip_code,
        delivery_city: this.delivery_city
      }

      this.pushFormOrder(formData);
    },
  },
}
</script>
