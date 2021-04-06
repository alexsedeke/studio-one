<template>
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">Color Palettes</h1>
    </header>
    <div class="block block--text">
      <!-- https://sujansundareswaran.com/blog/why-hsl-is-better-than-hex-and-rgb -->
      <p>
        There are multiple color palettes we use at Studio One. All color palettes use HSL color model.
        This is because both hex and RGB aren’t intutive color models, unlike HSL.
        HSL was built to be more human friendly, and tries to mimic the real world in how colours work.
      </p>
      <p>
        HSL stands for <strong>Hue</strong>, <strong>Saturation</strong> and <strong>Lightness</strong>, and is meant to be an intuitive colour model,
        and be understood by humans better. In CSS, it’s written in a similar format as RGB, like so: <code>hsl(20, 100%, 60%)</code>
      </p>
      <p>
        When creating a color, we save each HSL value individually. The color <code>'--color-red-100'</code> is therefore composed of 3 additional color variables,
         <code>'--hsl-red-100-h'</code> for <strong>Hue</strong>, <code>'--hsl-red-100-s'</code> for <strong>Saturation</strong> and <code>'--hsl-red-100-l'</code> for <strong>Lightness</strong>. 
      </p>
      <p>
        In this way, no alpha or opacity value has to be used to adjust the brightness of the color.
        The basic color can also be used in this way to create a new variation. This is very flexible and should make it easier to work with colors. 
      </p>
    </div>
    <!-- corporate color palette -->
    <div class="block--heading" id="corporate">
      <h2 class="h h--h2">
        <a href="#corporate" class="h__anchor">Corporate Palette </a>
        <span class="h__anchor__indicator">#</span>
      </h2>
    </div>
    <div class="block block--text">
      <p>
        We created the corporate color palette for this project. You can use these as well or define your own with your own color values.
      </p>
    </div>
    <div class="block block--table">
      <table class="colors">
        <tbody>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-corporate-green)"></div></td>
            <td class="color__name">Corporate Green</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-corporate-green') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-corporate-green') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-corporate-green-h') }}, {{ getCSSVariableValue('--hsl-corporate-green-s') }}, {{ getCSSVariableValue('--hsl-corporate-green-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-corporate-green')">--color-corporate-green</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-corporate-light-green)"></div></td>
            <td class="color__name">Corporate Light Green</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-corporate-light-green') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-corporate-light-green') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-corporate-light-green-h') }}, {{ getCSSVariableValue('--hsl-corporate-light-green-s') }}, {{ getCSSVariableValue('--hsl-corporate-light-green-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-corporate-light-green')">--color-corporate-light-green</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-corporate-orange)"></div></td>
            <td class="color__name">Corporate Orange</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-corporate-orange') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-corporate-orange') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-corporate-orange-h') }}, {{ getCSSVariableValue('--hsl-corporate-orange-s') }}, {{ getCSSVariableValue('--hsl-corporate-orange-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-corporate-orange')">--color-corporate-orange</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-corporate-light-orange)"></div></td>
            <td class="color__name">Corporate Light Orange</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-corporate-light-orange') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-corporate-light-orange') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-corporate-light-orange-h') }}, {{ getCSSVariableValue('--hsl-corporate-light-orange-s') }}, {{ getCSSVariableValue('--hsl-corporate-light-orange-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-corporate-light-orange')">--color-corporate-light-orange</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-corporate-violet)"></div></td>
            <td class="color__name">Corporate Violet</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-corporate-violet') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-corporate-violet') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-corporate-violet-h') }}, {{ getCSSVariableValue('--hsl-corporate-violet-s') }}, {{ getCSSVariableValue('--hsl-corporate-violet-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-corporate-violet')">--color-corporate-violet</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-corporate-light-violet)"></div></td>
            <td class="color__name">Corporate Light Violet</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-corporate-light-violet') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-corporate-light-violet') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-corporate-light-violet-h') }}, {{ getCSSVariableValue('--hsl-corporate-light-violet-s') }}, {{ getCSSVariableValue('--hsl-corporate-light-violet-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-corporate-light-violet')">--color-corporate-light-violet</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- state color palette -->
    <div class="block--heading" id="state">
      <h2 class="h h--h2">
        <a href="#state" class="h__anchor">State Palette </a><span class="h__anchor__indicator">#</span>
      </h2>
    </div>
    <div class="block block--text">
      <p>
        The state color palette should make it easy to assign a certain state to a component without always having to remember its exact color name.
      </p>
    </div>
    <div class="block block--table">
      <table class="colors">
        <tbody>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-state-primary)"></div></td>
            <td class="color__name">State Primary</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-state-primary') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-state-primary') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-state-primary-h') }}, {{ getCSSVariableValue('--hsl-state-primary-s') }}, {{ getCSSVariableValue('--hsl-state-primary-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-state-primary')">--color-state-primary</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-state-secondary)"></div></td>
            <td class="color__name">State Secondary</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-state-secondary') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-state-secondary') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-state-secondary-h') }}, {{ getCSSVariableValue('--hsl-state-secondary-s') }}, {{ getCSSVariableValue('--hsl-state-secondary-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-state-secondary')">--color-state-secondary</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-state-success)"></div></td>
            <td class="color__name">State Success</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-state-success') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-state-success') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-state-success-h') }}, {{ getCSSVariableValue('--hsl-state-success-s') }}, {{ getCSSVariableValue('--hsl-state-success-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-state-success')">--color-state-success</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-state-warning)"></div></td>
            <td class="color__name">State Warning</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-state-warning') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-state-warning') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-state-warning-h') }}, {{ getCSSVariableValue('--hsl-state-warning-s') }}, {{ getCSSVariableValue('--hsl-state-warning-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-state-warning')">--color-state-warning</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-state-danger)"></div></td>
            <td class="color__name">State Danger</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-state-danger') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-state-danger') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-state-danger-h') }}, {{ getCSSVariableValue('--hsl-state-danger-s') }}, {{ getCSSVariableValue('--hsl-state-danger-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-state-danger')">--color-state-danger</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-state-info)"></div></td>
            <td class="color__name">State Info</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-state-info') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-state-info') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-state-info-h') }}, {{ getCSSVariableValue('--hsl-state-info-s') }}, {{ getCSSVariableValue('--hsl-state-info-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-state-info')">--color-state-info</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-state-disabled)"></div></td>
            <td class="color__name">State Disabled</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-state-disabled') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-state-disabled') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-state-disabled-h') }}, {{ getCSSVariableValue('--hsl-state-disabled-s') }}, {{ getCSSVariableValue('--hsl-state-disabled-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-state-disabled')">--color-state-disabled</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Basic Color Palette -->
    <div class="block--heading" id="basic">
      <h2 class="h h--h2">
        <a href="#basic" class="h__anchor">Basic Color Palette </a><span class="h__anchor__indicator">#</span>
      </h2>
    </div>
    <div class="block block--text">
      <p>
        The basic color palette should support the development by giving the user a simple preselection of colors which harmonize with each other.
      </p>
    </div>
    <div class="block block--table">
      <table class="colors">
        <tbody>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-white)"></div></td>
            <td class="color__name">White</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-white') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-white') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-white-h') }}, {{ getCSSVariableValue('--hsl-white-s') }}, {{ getCSSVariableValue('--hsl-white-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-white')">--color-white</td>
          </tr>
          <tr class="color">
            <td class="color__swatch"><div style="background-color: var(--color-black)"></div></td>
            <td class="color__name">Black</td>
            <td class="color__hex">#{{ HSLtoHEX('--color-black') }}</td>
            <td class="color__rgb">{{ HSLtoRGB('--color-black') }}</td>
            <td class="color__hsl">{{ getCSSVariableValue('--hsl-black-h') }}, {{ getCSSVariableValue('--hsl-black-s') }}, {{ getCSSVariableValue('--hsl-black-l') }}</td>
            <td class="color__variable" @click="copyToClipboard('--color-black')">--color-black</td>
          </tr>
        </tbody>
        <tbody v-for="color in colorBasis" :key="color.name">
          <tr class="color" v-for="step in color.steps" :key="step">
            <td class="color__swatch"><div :style="createBackgroundStyle(color.variable, step.toString())"></div></td>
            <td class="color__name">{{color.name}} {{step}}</td>
            <td class="color__hex">#{{ HSLtoHEX(`--color-${color.variable}-${step}`) }}</td>
            <td class="color__rgb">{{ HSLtoRGB(`--color-${color.variable}-${step}`) }}</td>
            <td class="color__hsl">{{ getCSSVariableValue(`--hsl-${color.variable}-${step}-h`) }}, {{ getCSSVariableValue(`--hsl-${color.variable}-${step}-s`) }}, {{ getCSSVariableValue(`--hsl-${color.variable}-${step}-l`) }}</td>
            <td class="color__variable" @click="copyToClipboard(`--color-${color.variable}-${step}`)">{{ `--color-${color.variable}-${step}` }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { hsl } from 'color-convert'
import { copyToClipboard } from '../../../lib/features/clipboard'
export default defineComponent({
  name: 'ColorpaletteView',
  setup() {
    // Helper to get css variables
    const documentStyle = window.getComputedStyle(document.documentElement)
    const getCSSVariableValue = (variableName: string) => documentStyle.getPropertyValue(variableName)
    // Helper to create style background by variable base name and step
    const createBackgroundStyle = (variable: string, step: string) => {
      return { backgroundColor: `var(--color-${variable}-${step})` }
    }
    // Helper to trim base values from hsl color variable
    const toRawHSL = (variableName: string) => {
      const hslValue = getCSSVariableValue(variableName)
      return hslValue.substring(4, hslValue.indexOf(')')).replaceAll(' ', '').replaceAll('%', '').split(',')
    }
    const HSLtoRGB = (variableName: string) => {
      const rawHSL = toRawHSL(variableName)
      return hsl.rgb([parseFloat(rawHSL[0]), parseFloat(rawHSL[1]), parseFloat(rawHSL[2])]).toString()
    }
    const HSLtoHEX = (variableName: string) => {
      const rawHSL = toRawHSL(variableName)
      return hsl.hex([parseFloat(rawHSL[0]), parseFloat(rawHSL[1]), parseFloat(rawHSL[2])])
    }
    const steps = [100, 200, 300, 400, 500, 600, 700, 800]
    const colorBasis = [
      { 
        name: 'Yellow',
        variable: 'yellow',
        steps
      }, { 
        name: 'Orange',
        variable: 'orange',
        steps
      }, { 
        name: 'Red',
        variable: 'red',
        steps
      }, { 
        name: 'Burgundy',
        variable: 'burgundy',
        steps
      }, { 
        name: 'Pink',
        variable: 'pink',
        steps
      }, { 
        name: 'Violet',
        variable: 'violet',
        steps
      }, { 
        name: 'Blue',
        variable: 'blue',
        steps
      }, { 
        name: 'Cyan',
        variable: 'cyan',
        steps
      }, { 
        name: 'Green',
        variable: 'green',
        steps
      }, { 
        name: 'Light Green',
        variable: 'light-green',
        steps
      }, { 
        name: 'Warm Grey',
        variable: 'warm-grey',
        steps
      }, { 
        name: 'Cool Grey',
        variable: 'cool-grey',
        steps
      }
    ]

    return {
      getCSSVariableValue,
      colorBasis,
      createBackgroundStyle,
      HSLtoRGB,
      HSLtoHEX,
      copyToClipboard
    }
  }
})
</script>
