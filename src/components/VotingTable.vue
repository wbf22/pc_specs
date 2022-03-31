<template>
    <div class="table_section">
        

        <div class="table">
            <div class="row title">
                <h3 class="titleText">{{title}}</h3>
            </div>

            <div class="row">
                <div class="arrows">
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 12.5h16L9 4.5 1 12.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br>
                    <a>{{recommendations[0].count}}</a>
                    <br>
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 5.5h16L9 13.5 1 5.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="recommendationBox">
                    <a>{{recommendations[0].name}}</a>
                </div>
            </div>

            <div class="row dark">
                <div class="arrows">
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 12.5h16L9 4.5 1 12.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br>
                    <a>{{recommendations[1].count}}</a>
                    <br>
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 5.5h16L9 13.5 1 5.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="recommendationBox">
                    <a>{{recommendations[1].name}}</a>
                </div>
            </div>

            <div class="row">
                <div class="arrows">
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 12.5h16L9 4.5 1 12.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br>
                    <a>{{recommendations[2].count}}</a>
                    <br>
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 5.5h16L9 13.5 1 5.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="recommendationBox">
                    <a>{{recommendations[2].name}}</a>
                </div>
            </div>

            <div class="row dark">
                <div class="arrows">
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 12.5h16L9 4.5 1 12.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br>
                    <a>{{recommendations[3].count}}</a>
                    <br>
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 5.5h16L9 13.5 1 5.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="recommendationBox">
                    <a>{{recommendations[3].name}}</a>
                </div>
            </div>

            <div class="row">
                <div class="arrows">
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 12.5h16L9 4.5 1 12.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br>
                    <a>{{recommendations[4].count}}</a>
                    <br>
                    <span class="vote">
                        <svg width="18" height="18">
                            <path d="M1 5.5h16L9 13.5 1 5.5z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div class="recommendationBox">
                    <a>{{recommendations[4].name}}</a>
                </div>
            </div>

            <div class="row dark"></div>

        </div>

        


    </div>
</template>

<script>

export default ({
    computed: {
        title() {
            return "Graphics Cards"
        },
        recommendations() {
            return this.$root.$data.recommendedSpecs[0].recommendations.slice().sort((a, b) => b.count - a.count);
        },
    },
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