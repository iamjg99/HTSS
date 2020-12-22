<template>
  <div class="snippet">
    <pre>
      <code>{{snippet}}</code>
    </pre>
    <md-button class="md-raised md-primary" @click.native="copySnippetToClipboard">Copy To Clipboard</md-button>
  </div>
</template>

<script>
import { copyToClipboard } from '../utils'

export default {
  name: 'code-snippet',
  props: ['snippet'],
  methods: {
    copySnippetToClipboard () {
      const { snippet } = this
      copyToClipboard(snippet)
    }
  }
}
</script>

<style lang="scss">
.snippet {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  overflow: auto;

  pre {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0 0 30px;
  }

  code {
    margin: 0;
    padding: 30px 20px;
    width: 100%;
  }
}
</style>
