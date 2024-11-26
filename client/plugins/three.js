import * as THREE from "three"

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Three.js plugin loaded")
  nuxtApp.provide("three", THREE)
})