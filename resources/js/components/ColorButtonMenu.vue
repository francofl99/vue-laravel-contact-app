<template>
    <div class="menu-container" > 
        <div class="menu-body">
            <div :class="{selected: isColor('gray'), notSelected: !isColor('gray')}" class="menu-body-item" @click="assignColorAs('gray') ">
              <div class="menu-body-item-icon bg-gray-800  border-gray-700" /> Gris
            </div>
            
            <div :class="{selected: isColor('teal'), notSelected: !isColor('teal')}" class="menu-body-item" @click="assignColorAs('teal')">
              <div class="menu-body-item-icon bg-teal-500 border-teal-400" /> Verde
            </div>
            
            <div :class="{selected: isColor('blue'), notSelected: !isColor('blue')}" class="menu-body-item" @click="assignColorAs('blue')">
              <div class="menu-body-item-icon bg-blue-500 border-blue-400" /> Azul
            </div>
            
            <div :class="{selected: isColor('red'), notSelected: !isColor('red')}" class="menu-body-item" @click="assignColorAs('red')">
              <div class="menu-body-item-icon bg-red-500 border-red-400" /> Rojo
            </div>

          </div>
        </div>
</template>

<script>
export default {
  name: 'ColorButtonMenu',

  props: {
    color: String
  },

  methods: {
    isColor(color) {
      return this.color == color;
    },

    assignColorAs(colorPicked) {
      this.$emit('assignColorAs', colorPicked)
    },
  }
}
</script>

<style>
.selected {
 --bg-opacity: 1;
    background-color: #cbd5e0;
    background-color: rgba(203, 213, 224, var(--bg-opacity));
}

.notSelected {
  opacity: 0.75;
}

.menu-container {
    @apply h-16 mt-2 w-32 bg-white text-gray-800 rounded-md absolute overflow-auto flex items-start shadow-lg;
}

.menu-body {
  @apply flex flex-wrap p-2 cursor-pointer items-center;
}

.menu-body-item {
  @apply my-1 rounded-md w-full p-2 flex;
}

.menu-body-item:hover {
  @apply bg-gray-300 ;
}

.menu-body-item-icon {
  @apply w-6 h-6 rounded-full border-2 mr-3;
}
</style>