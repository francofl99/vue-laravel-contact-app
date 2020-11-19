<template>
  <view-container>
    <div class="bg-gray-500 w-full p-4 flex main-view justify-between">
      <input-contact @newContactAdded="cardContainerKey += 1"/>
      <card-container :key="cardContainerKey" />
    </div>
  </view-container>
</template>

<script>
    import ViewContainer from "./ViewContainer.vue";
    import InputContact from '../js/components/InputContact'
    import CardContainer from "../js/components/CardContainer.vue";

    import axios from 'axios';

    export default {
        name: "MainView",

        components: {
            ViewContainer,
            InputContact,
            CardContainer,
        },

        data() {
             return {
                cardContainerKey: 0
            }   
        },
    };
</script>

<style>
.main-view {
  height: 88%;
}

.input {
    width: 30%;
    height: 73%;
}
</style>