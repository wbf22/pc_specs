<template>
  <div class="vote">
    <h1>Voting</h1>
    <p>
      We want to make sure people can hear from
      fellow gamers what kind of PC's they would
      really want for gaming. In the future we'll
      let you make recommendations for PCs.
    </p>
    <SpecsTable/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'VoteView',
  components: {
    
  }
}
</script>

<style scoped>
.vote {
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
