<template>
  <md-layout md-gutter>
    <md-layout md-flex="65" md-column>
      <div class="view">
        <p class="view-triangle" :style="formatCssCodeSnippet"></p>
      </div>
      <code-snippet :snippet="formatCssCodeSnippet" />
    </md-layout>
    <md-layout md-flex="35">
      <div>
        <md-radio class="md-primary" v-model="direction" id="top" name="direction" md-value="top">Top</md-radio>
        <md-radio class="md-primary" v-model="direction" id="left" name="direction" md-value="left">Left</md-radio>
        <md-radio class="md-primary" v-model="direction" id="bottom" name="direction" md-value="bottom">Bottom</md-radio>
        <md-radio class="md-primary" v-model="direction" id="right" name="direction" md-value="right">Right</md-radio>
      </div>

      <div>
        <md-radio class="md-primary" v-model="direction" id="top-left" name="direction" md-value="top-left">Top Left</md-radio>
        <md-radio class="md-primary" v-model="direction" id="top-right" name="direction" md-value="top-right">Top Right</md-radio>
        <md-radio class="md-primary" v-model="direction" id="bottom-left" name="direction" md-value="bottom-left">Bottom Left</md-radio>
        <md-radio class="md-primary" v-model="direction" id="bottom-right" name="direction" md-value="bottom-right">Bottom Right</md-radio>
      </div>

      <md-input-container>
        <label>Width: </label>
        <md-input type="number" v-model="width" />
        <md-input type="range" v-model="width" min="0" max="500" class="input-range" />
      </md-input-container>

      <md-input-container>
        <label>Height: </label>
        <md-input type="number" v-model="height" />
        <md-input type="range" v-model="height" min="0" max="500" class="input-range" />
      </md-input-container>

      <color-picker @colorPikerChange="onColorPickerChange" />
    </md-layout>
  </md-layout>
</template>

<script>
  import ColorPicker from '../components/ColorPicker'
  import CodeSnippet from '../components/CodeSnippet'

  export default {
    name: 'triangle-generator',
    data () {
      return {
        direction: 'top',
        width: 100,
        height: 100,
        color: null
      }
    },
    components: {
      ColorPicker,
      CodeSnippet
    },
    computed: {
      formatCssCodeSnippet () {
        let borderWidth, borderColor
        const { width, height, color } = this

        switch (this.direction) {
          case 'top':
            borderWidth = `border-width: 0 ${width}px ${height}px ${width}px;`
            borderColor = `border-color: transparent transparent ${color} transparent;`
            break

          case 'right':
            borderWidth = `border-width: ${width}px 0 ${width}px ${height}px;`
            borderColor = `border-color: transparent transparent transparent ${color};`
            break

          case 'bottom':
            borderWidth = `border-width: ${height}px ${width}px 0 ${width}px;`
            borderColor = `border-color: ${color} transparent transparent transparent;`
            break

          case 'left':
            borderWidth = `border-width: ${width}px ${height}px ${width}px 0;`
            borderColor = `border-color: transparent ${color} transparent transparent;`
            break

          case 'bottom-left':
            borderWidth = `border-width: ${height}px 0 0 ${width}px;`
            borderColor = `border-color: transparent transparent transparent ${color};`
            break

          case 'bottom-right':
            borderWidth = `border-width: 0 0 ${height}px ${width}px;`
            borderColor = `border-color: transparent transparent ${color} transparent;`
            break

          case 'top-left':
            borderWidth = `border-width: ${height}px ${width}px 0 0;`
            borderColor = `border-color: ${color} transparent transparent transparent;`
            break

          case 'top-right':
            borderWidth = `border-width: 0 ${width}px ${height}px 0;`
            borderColor = `border-color: transparent ${color} transparent transparent;`
            break
          default:

            break
        }

        return [
          'width: 0;',
          'height: 0;',
          'border-style: solid;',
          borderWidth,
          borderColor
        ].join('\r\n')
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
  $caret-size: 12px;

  @function opposite-position($position) {
    $opp: '';

    @if ($position == top) {
      $opp: bottom;
    }

    @else if ($position == right) {
      $opp: left;
    }

    @else if ($position == bottom) {
      $opp: top;
    }

    @else if ($position == left) {
      $opp: right;
    }

    @else {
      $opp: 'false';
    }

    @return $opp;
  }

  /*
    $direction - String
    $width - CSS Value
    $height - CSS Value
    $color - CSS Value
  */
  @mixin caret($direction, $width, $height, $color) {
    $opp: opposite-position($direction);
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    @if ($opp == 'false') {
      border-style: solid;

      @if ($direction == 'bottom left') {
        border-width: $height 0 0 $width;
        border-color: transparent transparent transparent $color;
      }

      @else if ($direction == 'bottom right') {
        border-width: 0 0 $height $width;
        border-color: transparent transparent $color transparent;
      }

      @else if ($direction == 'top left') {
        border-width: $height $width 0 0;
        border-color: $color transparent transparent transparent;
      }

      @else if ($direction == 'top right') {
        border-width: 0 $width $height 0;
        border-color: transparent $color transparent transparent;
      }
    }

    @else {
      border: $width solid transparent;
      border-#{$opp}: $height solid $color;
      border-#{$direction}: 0;
    }
  }

  .caret {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: red;

    &:after {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

    &-top {
      &:after {
        @include caret('top', $caret-size, $caret-size, blue);
      }
    }

    &-right {
      &:after {
        @include caret('right', $caret-size, $caret-size, blue);
      }
    }

    &-bottom {
      &:after {
        @include caret('bottom', $caret-size, $caret-size, blue);
      }
    }

    &-left {
      &:after {
        @include caret('left', $caret-size, $caret-size, blue);
      }
    }

    &-bottom-left {
      &:after {
        @include caret('bottom left', $caret-size, $caret-size, blue);
      }
    }

    &-bottom-right {
      &:after {
        @include caret('bottom right', $caret-size, $caret-size, blue);
      }
    }

    &-top-left {
      &:after {
        @include caret('top left', $caret-size, $caret-size, blue);
      }
    }

    &-top-right {
      &:after {
        @include caret('top right', $caret-size, $caret-size, blue);
      }
    }
  }
</style>
