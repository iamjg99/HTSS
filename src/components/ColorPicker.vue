<template>
  <div class="color-picker">
    <label class="color-picker-label">Color: </label>
    <chrome v-model="colors" @change-color="onChange"></chrome>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  name: 'color-piker',
  data () {
    return {
      colors: {
        hex: '#e91e63',
        rgba: {
          r: 233,
          g: 30,
          b: 99,
          a: 1
        },
        a: 1
      },
      cssrgba: null
    }
  },
  components: {
    'chrome': Chrome
  },
  mounted () {
    this.onChange(this.colors)
  },
  methods: {
    onChange (val) {
      this.colors = val
      this.cssrbga = this.formattRGBACssColor(val.rgba)
      this.$emit('colorPikerChange', this.cssrbga)
    },
    formattRGBACssColor (rgba) {
      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
    }
  }
}
</script>

<style lang="scss">
.color-picker-label {
  font-size: 12px;
  color: rgba(0, 0, 0, .54);
}
</style>
