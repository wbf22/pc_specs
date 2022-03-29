<template>
  <div class="home">
    <h1>Finding a PC for you</h1>
    <p>
      There's a lot of confusing names and numbers when it
      comes to buying a PC. Below we've put together a list
      of what we and other Gamers think you'll need to play
      the lastest games. The first table shows recommended 
      specs for a new PC, and below that
      is a table showing the minimum specs if you need to 
      stay cheap. These tables are updated by users. Vote
      <a href="http://pcspecs.freedommuskrats.com/#/vote">here</a> 
      to help keep them up to date. 
    </p>
    <SpecsTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import SpecsTable from '@/components/SpecsTable.vue'

export default {
  name: 'HomeView',
  components: {
    SpecsTable
  }
}
</script>

<style scoped>
.home {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-top: 5%;
}

p {
  text-align: left;
  margin-top: 5%;
}

</style>
