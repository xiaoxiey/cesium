<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
</template>
<script setup>
import { onMounted } from 'vue'
import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer } from 'cesium';
import '../Widgets/widgets.css'
// Cesium Ion 访问令牌
// Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IlFmWDNkOEUwanZwTlBLS2MiLCJqdGkiOiJhNDIzZmQ4Ny0zNDBmLTQyNGItYjc4Yy0wNjhjMWMxMGQ2ZjgiLCJpZCI6NTQwOTUwLCJzdWIiOiJ4aWFveGlld3VkaSIsImlzcyI6Imh0dHBzOi8vYXBpLmNlc2l1bS5jb20iLCJhdWQiOiJkZW1vIiwiaWF0IjoxNzkzNjIwMjc1fQ.LqJuVohdJp3kX3Gm5FNAt4iYXPuM24iM0SRwz3kivEQ';
window.CESIUM_BASE_URL = '/'
onMounted(async () => {
  // Ion.defaultAccessToken = ACCESS_TOKEN
  var viewer = new Viewer('cesiumContainer', {
    infoBox: false,
    // 浏览器沙盒限制
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false
});
})



</script>
<style>
* {

  margin: 0;
  padding: 0;

}
</style>
