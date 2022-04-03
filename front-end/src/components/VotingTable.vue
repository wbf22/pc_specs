<template>
    <div class="table_section">
        

        <div class="table">
            <div class="row title">
                <h3 class="titleText">{{getTitle}}</h3>
            </div>

            <div class="row" v-for="reccomendation in recommendations" :key="reccomendation.id">
                <div class="arrows">
                    <button @click="vote(1, reccomendation)">
                        <svg width="18" height="18">
                            <path d="M1 12.5h16L9 4.5 1 12.5z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <br>
                    <a>{{reccomendation.votes}}</a>
                    <br>
                    <button  @click="vote(-1, reccomendation)">
                        <svg width="18" height="18">
                            <path d="M1 5.5h16L9 13.5 1 5.5z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                <div class="recommendationBox">
                    <a>{{reccomendation.name}}</a>
                    <button @click="deleteRec(reccomendation)">x</button>
                </div>
            </div>


            <div class="row">
                <div class="bottomAddBox">
                   
                    <button @click="addRecommendation">add</button>
                    <input v-model="newRecName" type="text" placeholder="Enter Your Recomendation">
                </div>
            </div>
            

            <div class="row dark"></div>

        </div>

        


    </div>
</template>

<script>

    export default ({
        name: "VotingTable",
        props: ['recs', 'title'],
        data () {
            return {
                newRecName: "",
            }
        },
        computed: {
            getTitle() {
                return this.title;
            },
            recommendations() {
                console.log(this.recs)
                return this.recs;
            },
        },
        methods: {
            vote(int, reccomendation) {
                console.log("voteArrow");
                reccomendation.votes += int;
                this.$emit("vote", reccomendation);
            },
            addRecommendation() {
                console.log("add");
                if (this.newRecName != ""){
                    let rec = {
                        type: this.title,
                        name: this.newRecName,
                        dateCreated: Date.now(),
                        votes: 0,
                    }
                    this.$emit("newRec", rec);
                    this.newRecName = "";
                }
            },
            deleteRec(rec) {
                console.log("del");
                this.$emit("deleteRec", rec);
            },

        }
    })
</script>


<style scoped>
*{
    box-sizing: border-box;
}

.table_section {
    width: 70%;
}

.table {
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
}

.title {
    background-color: #dadada;  
} 

.titleText {
    font-weight: 900;
    padding: 2%;
}

.dark {
    background-color: #f2f2f2;
}

.row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #e9e9e9;
    margin-right: 0;
    margin-left: 0;
}

.arrows {
    width: 20%;
    border-right: 1px solid #e9e9e9;
}


.recommendationBox {
    width: 80%;
    display: flex;
    justify-content: start;
}

.recommendationBox a {
    padding-left: 10%;
}

.tableEnd {
    border-bottom: 1px solid #e9e9e9;
}

.bottomAddBox {
    width: 80%;
    display: flex;
    justify-content: center;
}

button {
    border: none;
}

</style>