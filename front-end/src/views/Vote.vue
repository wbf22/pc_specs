<template>
  <div class="vote">
    <h1>Voting</h1>
    <p>
      We want to make sure people can hear from
      fellow gamers what kind of PC's they would
      really want for gaming. Vote here what
      you would reccomend. 
    </p>

    <VotingTable :data="graphicsCards" @vote="voteOnRec" @newRec="postRecomendation"></VotingTable>
    <VotingTable :data="cpus" @vote="voteOnRec" @newRec="postRecomendation"></VotingTable>
    <VotingTable :data="rams" @vote="voteOnRec" @newRec="postRecomendation"></VotingTable>
    <VotingTable :data="storages" @vote="voteOnRec" @newRec="postRecomendation"></VotingTable>


  </div>
</template>

<script>
// @ is an alias to /src
import VotingTable from '@/components/VotingTable.vue'

export default {
  name: 'VoteView',
  components: {
    VotingTable
  },
  data() {
    return {
      recomendations: [],
    }
  },
  created: {
    this.getRecomendations();
  },
  computed: {
    graphicsCards() {
      let gcs = this.recomendations.filter(recomendation => recomendation.type.toLowerCase() == "Graphics Card"));
      return gcs.sort((a, b) => a.votes > b.votes);
    },
    cpus() {
      let cs = this.recomendations.filter(recomendation => recomendation.type.toLowerCase() == "CPU"));
      return cs.sort((a, b) => a.votes > b.votes);
    },
    rams() {
      let rs = this.recomendations.filter(recomendation => recomendation.type.toLowerCase() == ("RAM"));
      return rs.sort((a, b) => a.votes > b.votes);
    },
    storages() {
      let ss = this.recomendations.filter(recomendation => recomendation.type.toLowerCase() == ("Storage"));
      return ss.sort((a, b) => a.votes > b.votes);
    },
  },
  methods: {
    async getRecomendations() {
      try {
        let response = await axios.get("/api/recommendations");
        this.recomendations = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async postRecomendation(rec) {
      try {
        let r2 = await axios.post('/api/recommendations', {
          type: rec.type,
          name: rec.name,
          dateCreated: rec.dateCreated,
          votes: rec.votes,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/recommendations/" + item._id);
        this.getRecomendations();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async voteOnRec(recomendation) {
      try {
        await axios.put("/api/recommendations/" + item._id, {
          votes:recomendation.votes
        });
        this.getRecomendations();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
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
  width: 70%;
}

</style>
