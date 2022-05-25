<template>
  <div class="abouthero-container container-fluid">

    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/KmxwCNRL88U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
<div class="videoContainer">
     <iframe class="videoContainer__video" width="x" height="y" src="https://www.youtube.com/embed/KmxwCNRL88U?controls=0&modestbranding=1&rel=0&autoplay=1" frameborder="0">
    </iframe> 
</div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";

.abouthero-container {
  background-color: $shadecolor;
  min-height: 80vh;
  position: relative;
}

.videoContainer {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
bottom: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

iframe {
/* optional */
width: 100%;
height: 100%;
}

</style>