<template>
  <AppDropdown>
    <color-button slot="toggler"/>
      <AppDropdownContent>
        <color-button-menu 
            :contactColor="contactColor"
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
    contactColor: String
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