<template>
  <div class="building">
    <h1>Buidling Your Own Pc</h1>
    <div class="description">
        <p>
        Building your own PC mostly boils down to 
        two considerations: price and difficulty
        </p>
        <p>
            Building your own PC requires a lot of time
            and research, and many novices may find it 
            too difficult. There is also some risk as 
            integrating different parts can lead to 
            compatibility issues. Sometimes this can cause
            crashes or other problems. However, building 
            a PC allows you to have whatever specs you 
            want as well as giving you more options for
            asthetic. It is also generally cheaper to build
            your own PC than to buy one.  
        </p>
        <p>
            So if you have time and confidence, build a PC. If 
            not buying is probably your best option.
        </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BuildingView',
  components: {
    
  }
}
</script>

<style scoped>
.building {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-top: 5%;
}

.description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

p {
  text-align: left;
  margin-top: 5%;
}

</style>
