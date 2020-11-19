<template>
  <div class="border-2 border-gray-800 rounded-md bg-gray-400 card mx-4 grid grid-rows-4">
      <div class="row-span-1 bg-gray-800 p-2 text-gray-200 items-center flex">Nombre: {{ contactName }}</div>
      <div class="p-2 text-gray-800 items-center flex">Apellido: {{ contactLastName }}</div>
      <div class="p-2 text-gray-800 items-start flex" >Numero: ({{ contactAreaCode }}) - {{ contactPhoneNumeber }}</div>

        <div class=" px-2 flex justify-between">
            <button 
                class="w-32 button border-blue-500 hover:border-blue-600 bg-blue-400 text-blue-900 hover:bg-blue-500"
            >
                Editar
            </button>
            <button 
                class="w-16 button border-red-500 hover:border-red-600 bg-red-400 text-red-900 hover:bg-red-500"
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

.button {
    height: 3rem;

    border-bottom-width: 4px;

    font-weight: 700;

    border-radius: 0.375rem;

    padding: 0.5rem;

    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 150ms;
    
}

</style>