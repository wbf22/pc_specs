<template>
    <div class="table_section">
        

        <div class="table">
            <div class="row title">
                <h3 class="titleText">{{data[0].type}}</h3>
            </div>

            <div class="row" v-for="reccomendation in data">
                <div class="arrows">
                    <span @click="vote(1, reccomendation)">
                        <svg width="18" height="18">
                            <path d="M1 12.5h16L9 4.5 1 12.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br>
                    <a>{{reccomendation.votes}}</a>
                    <br>
                    <span  @click="vote(-1, reccomendation)">
                        <svg width="18" height="18">
                            <path d="M1 5.5h16L9 13.5 1 5.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="recommendationBox">
                    <a>{{reccomendation.name}}</a>
                    <a @click="deleteRec(reccomendation)">x</a>
                </div>
            </div>


            <div class="row">
                <div class="recommendationBox">
                    <svg width="18" height="18" @click="addRecommendation(newRecName)">
                        <path: 'M0,-1 V1 M-1,0 H1' fill="currentColor"></path>
                    </svg>
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
        props: ["data"],
        data {
            return {
                newRecName: "",
            }
        },
        computed: {
            title() {
                return this.data[0].type;
            },
            recommendations() {
                return data;
            },
        },
        methods: {
            vote(int, reccomendation) {
                reccomendation.votes += int;
                this.$emit("vote", reccomendation);
            },
            addRecommendation(name) {
                if (newRecName != ""){
                    let rec = {
                        type: this.title,
                        name: name,
                        dateCreated: Date.now(),
                        votes: 0,
                    }
                    this.$emit("newRec", rec);
                }
            },
            deleteRec(rec) {
                this.$emit("deleteRec", rec._id);
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


</style>