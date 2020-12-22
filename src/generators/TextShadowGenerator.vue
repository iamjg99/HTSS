<template>
  <md-layout md-gutter>
    <md-layout md-flex="65" md-column>
      <div class="view">
        <p class="view-text" :style="formatCssCodeSnippet">Text Shadow</p>
      </div>
      <code-snippet :snippet="formatCssCodeSnippet" />
    </md-layout>
    <md-layout md-flex="35">
        <md-input-container>
          <label>Offset X: </label>
          <md-input type="number" v-model="offsetX" />
          <md-input type="range" v-model="offsetX" min="-75" max="75" class="input-range" />
        </md-input-container>

        <md-input-container>
          <label>Offset Y: </label>
          <md-input type="number" v-model="offsetY" />
          <md-input type="range" v-model="offsetY" min="-75" max="75" class="input-range" />
        </md-input-container>

        <md-input-container>
          <label>Blur Radius: </label>
          <md-input type="number" v-model="blurRadius" />
          <md-input type="range" v-model="blurRadius" min="0" max="30" class="input-range" />
        </md-input-container>

        <color-picker @colorPikerChange="onColorPickerChange" />
      </md-layout>
  </md-layout>
</template>

<script>
  import ColorPicker from '../components/ColorPicker'
  import CodeSnippet from '../components/CodeSnippet'

  export default {
    name: 'text-shadow-generator',
    data () {
      return {
        offsetX: 2,
        offsetY: 2,
        blurRadius: 2,
        color: null
      }
    },
    components: {
      ColorPicker,
      CodeSnippet
    },
    computed: {
      formatCssCodeSnippet () {
        const { offsetX, offsetY, blurRadius, color } = this
        return `text-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${color};`
      }
    },
    methods: {
      onColorPickerChange (val) {
        this.color = val
      }
    }
  }
</script>

<style lang="scss">
.view-text {
  font-weight: 700;
  font-size: 42px;
}
</style>
