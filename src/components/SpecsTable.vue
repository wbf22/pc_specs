<template>
    <div class="table_section">
        <table class="table">
            <thead>
                <tr>
                    <th colspan="2">
                        <b>Gaming Pc Recommended Specs </b>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Graphics Card</td>
                    <td>{{topGPUs}}</td>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td>{{topProcessors}}</td>
                </tr>
                <tr>
                    <td>Ram</td>
                    <td>{{ram}}</td>
                </tr>
                <tr>
                    <td>Storage</td>
                    <td>{{storage}}</td>
                </tr>
                <tr>
                    <td>OS</td>
                    <td>Windows</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default ({
    storage: "",
    OS: "",
    computed: {
        topGPUs() {
            let amds = this.$root.$data.recommendedSpecs[0].recommendations.filter(gpu => gpu.name.toLowerCase().search("amd") >= 0)
            let nvidias = this.$root.$data.recommendedSpecs[0].recommendations.filter(gpu => gpu.name.toLowerCase().search("nvidia") >= 0)

            let rec_amd = amds[0]
            for (let current of amds) {
                if (current.count > rec_amd.count) rec_amd = current
            }
            let rec_nvidia = nvidias[0]
            for (let current of nvidias) {
                if (current.count > rec_nvidia.count) rec_nvidia = current
            }
            return rec_nvidia.name + ", " + rec_amd.name
        },
        topProcessors() {
            let intels = this.$root.$data.recommendedSpecs[1].recommendations.filter(cpu => cpu.name.toLowerCase().search("intel") >= 0)
            let amds = this.$root.$data.recommendedSpecs[1].recommendations.filter(cpu => cpu.name.toLowerCase().search("amd") >= 0)
            
            let rec_intel = intels[0]
            for (let current of intels) {
                if (current.count > rec_intel.count) rec_intel = current
            }
            let rec_amd = amds[0]
            for (let current of amds) {
                if (current.count > rec_amd.count) rec_amd = current
            }
            return rec_intel.name + ", " + rec_amd.name
        },
        ram() {
            let rams = this.$root.$data.recommendedSpecs[2].recommendations
            let ram = rams[0]
            for (let current of rams) {
                if (current.count > ram.count) ram = current
            }
            return ram.name
        },
        storage() {
            let storages = this.$root.$data.recommendedSpecs[3].recommendations
            let storage = storages[0]
            for (let current of storages) {
                if (current.count > storage.count) storage = current
            }
            return storage.name
        },
    },
})
</script>


<style scoped>
.table_section {
    width: 80%;
    margin-top: 5%;
}

.table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

thead {
    background-color: #e0e0e0;
}

th {
    padding: 8px;
}

td {
    border: 1px solid #e9e9e9;
    overflow: hidden;
    padding: 16px;
    text-align: left;
}


</style>