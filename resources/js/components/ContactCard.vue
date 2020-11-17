<template>
  <div class="rounded-md bg-gray-400 card mr-2 grid grid-rows-4">
      <div class="rounded-t-md row-span-1 bg-gray-800 p-2 text-gray-200 ">Nombre: {{ contactName }}</div>
      <div class="p-2 text-gray-800">Apellido: {{ contactLastName }}</div>
      <div class="p-2 text-gray-800" >Codigo de Area: {{ contactAreaCode }}</div>
      <div class="p-2 text-gray-800">Numero: {{ contactPhoneNumeber }}</div>
  </div>
</template>

<script>
export default {
    name: 'ContactCard',

    props: {
        contactName: String,
        contactLastName: String,
        contactAreaCode: String,
        contactPhoneNumeber: String
    }
}
</script>

<style>
.card {
    width: 30%;
    height: 38%;
}

</style>