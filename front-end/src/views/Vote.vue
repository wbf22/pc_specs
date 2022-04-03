<template>
  <div class="vote">
    <h1>Voting</h1>
    <p>
      We want to make sure people can hear from
      fellow gamers what kind of PC's they would
      really want for gaming. Vote here what
      you would reccomend. 
    </p>

    <VotingTable :recs="graphicsCards" :title="GRAPHICS_CARD" @vote="voteOnRec" @newRec="postRecomendation" @deleteRec="deleteItem"></VotingTable>
    <VotingTable :recs="cpus" :title="CPU" @vote="voteOnRec" @newRec="postRecomendation" @deleteRec="deleteItem"></VotingTable>
    <VotingTable :recs="rams" :title="RAM" @vote="voteOnRec" @newRec="postRecomendation" @deleteRec="deleteItem"></VotingTable>
    <VotingTable :recs="storages" :title="STORAGE" @vote="voteOnRec" @newRec="postRecomendation" @deleteRec="deleteItem"></VotingTable>


  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import VotingTable from '@/components/VotingTable.vue'

export default {
  name: 'VoteView',
  components: {
    VotingTable
  },
  data() {
    return {
      recomendations: [],
      GRAPHICS_CARD: "Graphics Card",
      CPU: "CPU",
      RAM: "RAM",
      STORAGE: "Storage",
    }
  },
  created() {
    this.getRecomendations();
  },
  computed: {
    graphicsCards() {
      let gcs = this.recomendations.filter(recomendation => recomendation.type == "Graphics Card");
      return gcs.sort((a, b) => a.votes < b.votes);
      
      // return this.$root.$data.recommendedSpecs[0].recommendations;
    },
    cpus() {
      let cs = this.recomendations.filter(recomendation => recomendation.type == "CPU");
      return cs.sort((a, b) => a.votes < b.votes);
    },
    rams() {
      let rs = this.recomendations.filter(recomendation => recomendation.type == "RAM");
      return rs.sort((a, b) => a.votes < b.votes);
    },
    storages() {
      let ss = this.recomendations.filter(recomendation => recomendation.type == "Storage");
      return ss.sort((a, b) => a.votes < b.votes);
    },
  },
  methods: {
    async getRecomendations() {
      console.log("getRecomendations");
      try {
        let response = await axios.get("/api/recommendations");
        console.log(response.data)
        this.recomendations = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async postRecomendation(rec) {
      console.log("postRecomendation");
      console.log(rec);
      try {
        await axios.post('/api/recommendations', {
          type: rec.type,
          name: rec.name,
          dateCreated: rec.dateCreated,
          votes: rec.votes,
        });
        this.getRecomendations();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(recomendation) {
      console.log("deleteItem");
      console.log(recomendation);
      try {
        await axios.delete("/api/recommendations/" + recomendation._id);
        this.getRecomendations();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async voteOnRec(recomendation) {
      console.log("voteOnRec");
      console.log(recomendation);
      try {
        await axios.put("/api/recommendations/" + recomendation._id, {
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
