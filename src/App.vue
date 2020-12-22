<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-headline">CSS Generator</h1>
    </md-toolbar>
    <md-tabs>
      <md-tab id="box-shadow" md-label="Box Shadow">
        <box-shadow-generator />
      </md-tab>

      <md-tab id="text-shadow" md-label="Text Shadow">
        <text-shadow-generator />
      </md-tab>

      <md-tab id="triangle" md-label="Triangle">
        <triangle-generator />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './styles/input-range.scss'
import BoxShadowGenerator from './generators/BoxShadowGenerator'
import TextShadowGenerator from './generators/TextShadowGenerator'
import TriangleGenerator from './generators/TriangleGenerator'

Vue.use(VueMaterial)

export default {
  name: 'app',
  components: {
    BoxShadowGenerator,
    TextShadowGenerator,
    TriangleGenerator
  }
}
</script>

