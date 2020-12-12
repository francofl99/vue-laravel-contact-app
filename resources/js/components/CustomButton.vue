<template>
<div>
  <drop-down-color-button 
    v-if="isName('color-dropdown-button')"
    :color="color"
    v-on:colorPicked="notifyColorPicked" />
  <save-button v-if="isName('save-button')"  />
  <edit-button v-if="isName('edit-button')"  />
  <remove-button  v-if="isName('remove-button')"  />
</div>
</template>

<script>
import DropDownColorButton from './DropDownColorButton'
import SaveButton from './SaveButton'
import EditButton from './EditButton'
import RemoveButton from './RemoveButton'

export default {
    name: 'CustomButton',

    props: {
        color: String,
        name: String,
        label: {
          type: Boolean,
          default: true
        }
    },

    provide() {
      return {
        label: this.label
      }
    },

    components: {
    DropDownColorButton,
    SaveButton,
    EditButton,
    RemoveButton
    },

    methods: {
        
      notifyColorPicked(colorPicked) {
        this.$emit('colorPicked', colorPicked)
      },

      isName(nameToVerify) {
        return this.name == nameToVerify
      }
  }


}
</script>

<style>

</style>

