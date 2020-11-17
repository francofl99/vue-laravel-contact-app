<template>
    
    <div class="bg-gray-400 rounded-md input ml-4 mt-4 p-4">

        <form class="flex-wrap flex">
            <label for="nombre" class="text-gray-800">Nombre</label>
            <input type="text" id="nombre" class="my-2 rounded-md h-8 pl-2 w-full" placeholder="Juan">
            <label for="apellido" class="text-gray-800">Apellido</label>
            <input type="text" id="apellido" class="my-2 rounded-md h-8 pl-2 w-full" placeholder="Perez">
            <label for="area" class="text-gray-800 w-full">Codigo de area</label>
            <input type="text" id="area" class=" my-2 rounded-md h-8 w-20 pl-2" placeholder="358">
            <label for="numero-telefono" class="text-gray-800 w-full">Numero</label>
            <input type="text" id="numero-telefono" class="mt-2 rounded-md h-8 pl-2 w-32" placeholder="5 166 293">
        </form>

        <button class="border-b-4 border-teal-500 font-bold mt-8 hover:border-teal-600 bg-teal-400 rounded-md p-2 text-teal-900 border-transparent hover:bg-teal-500 transition duration-150">Agendar</button>
    </div>
    
</template>

<script>
export default {
  name: "InputContact",

};
</script>

<style>
.input {
    width: 30%;
    height: 82%;
}
</style>