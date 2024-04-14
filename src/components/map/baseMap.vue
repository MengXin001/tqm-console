<template>
  <div class="map-box">
    <div id="map" class="w-full h-screen">
      <Panel class="absolute z-20" />
      <Legend></Legend>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Panel from './control/Panel.vue';
import Legend from './control/Legend.vue';
const props = defineProps({
  title: String,
  placeholderProps: {
    type: Number,
    default: 999
  }
})

onMounted(() => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWVuZ3hpbjAwMSIsImEiOiJja2Q2MmVzMjkwZ3BwMndwZzdoajlrbXgwIn0.LkCmyt-_LmdfpTBkU3fEMQ';
  const map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/standard',
    center: [113.88, 22.5],
    zoom: 9,
    minZoom: 0,
    maxZoom: 22,
    pitch: 0,
    bearing: 0,
  })
  map.addControl(new mapboxgl.NavigationControl({
    visualizePitch: true
  }), 'top-right')
  map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
  map.on('load', () => {
    /* Task */
  })
})
</script>