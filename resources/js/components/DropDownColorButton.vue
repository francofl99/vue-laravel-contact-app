<template>
  <AppDropdown>
    <color-button slot="toggler"/>
      <AppDropdownContent>
        <color-button-menu 
            :color="color"
            v-on:assignColorAs="notifyColorPicked" />
      </AppDropdownContent>
    </AppDropdown>
</template>

<script>
import AppDropdown from './AppDropdown'
import AppDropdownContent from './AppDropdownContent'

import ColorButton from './ColorButton'
import ColorButtonMenu from './ColorButtonMenu'

export default {
    name: 'DropDownColorButton',

    components: {
    AppDropdown,
    AppDropdownContent,
    ColorButton,
    ColorButtonMenu
  },

  props: {
    color: String
  },

  methods: {
      notifyColorPicked(colorPicked) {
        this.$emit('colorPicked', colorPicked)
      }
  }
}
</script>

<style>

</style>