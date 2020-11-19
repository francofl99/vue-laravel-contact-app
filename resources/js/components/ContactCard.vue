<template>
  <div class="border-2 border-gray-800 rounded-md bg-gray-400 card mx-4 grid grid-rows-4">
      <div class="row-span-1 bg-gray-800 p-2 text-gray-200 items-center flex">Nombre: {{ contactName }}</div>
      <div class="p-2 text-gray-800 items-center flex">Apellido: {{ contactLastName }}</div>
      <div class="p-2 text-gray-800 items-start flex" >Numero: ({{ contactAreaCode }}) - {{ contactPhoneNumeber }}</div>

        <div class=" px-2 flex justify-between">
            <button 
                class=" w-24 h-12 border-b-4 border-blue-500 font-bold hover:border-blue-600 bg-blue-400 rounded-md p-2 text-blue-900 border-transparent hover:bg-blue-500 transition duration-150"
            >
                Editar
            </button>
            <button 
                class=" w-20 h-12 border-b-4 border-red-500 font-bold hover:border-red-600 bg-red-400 rounded-md p-2 text-red-900 border-transparent hover:bg-red-500 transition duration-150"
            >
                Borrar
            </button>
        </div>
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
    height: 90%;
    width: 90%;
}

</style>