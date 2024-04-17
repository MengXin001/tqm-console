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

const swanmCR = () => {
  let url = ""/* BackedApi */
  return url
}

onMounted(() => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWVuZ3hpbjAwMSIsImEiOiJja2Q2MmVzMjkwZ3BwMndwZzdoajlrbXgwIn0.LkCmyt-_LmdfpTBkU3fEMQ';
  const map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/standard',
    center: [113.88, 22.5],
    zoom: 8,
    minZoom: 0,
    maxZoom: 22,
    pitch: 0,
    bearing: 0,
  })

  map.addControl(new mapboxgl.ScaleControl(), 'top-right')
  map.addControl(new mapboxgl.NavigationControl({
    visualizePitch: true
  }), 'top-right')
  map.addControl(new mapboxgl.FullscreenControl(), 'bottom-right')
  map.addControl(new mapboxgl.GeolocateControl())


  map.on('load', () => {
    /* Task */
    let url = swanmCR()
    map.addSource('swanmCR', {
      type: 'image',
      url: url,
      coordinates: [
        [108.5, 26.9],
        [119, 26.9],
        [119, 18.1],
        [108.5, 18.1],
      ]
    });
    map.addLayer({
      id: 'swanmCR',
      type: 'raster',
      source: 'swanmCR'
    })
  })
})

</script>