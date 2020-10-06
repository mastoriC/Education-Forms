<template>
    <div class="container-fluid bg-kmitl-linear py-5 vh-100">
        <div class="container rounded-lg shadow h-100 p-5 bg-white">
            <div class="text-center">
                <h1 class="mb-4">กรุณาเลือกคณะ</h1>
                <div class="col-6 offset-3">
                    <multiselect v-model="selected" :options="faculties" :custom-label="getNameTH" placeholder="คณะ"></multiselect>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import Multiselect from 'vue-multiselect'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            selected: '',
            faculties: [
                {id: "010", th: "วิศวกรรมศาสตร์"},
                {id: "020", th: "สถาปัตยกรรมศาสตร์"},
                {id: "030", th: "ครุศาสตร์อุตสาหกรรมและเทคโนโลยี"},
                {id: "040", th: "เทคโนโลยีการเกษตร"},
                {id: "050", th: "วิทยาศาสตร์"},
                {id: "070", th: "เทคโนโลยีสารสนเทศ"},
                {id: "080", th: "อุตสาหกรรมอาหาร"},
                {id: "100", th: "บริหารธุรกิจ"},
                {id: "110", th: "วิทยาลัยนาโนเทคโนโลยี"},
                {id: "125", th: "วิทยาลัยนวัตกรรมการผลิตขั้นสูง"},
                {id: "130", th: "วิทยาลัยอุตสาหกรรมการบินนานาชาติ"},
                {id: "140", th: "ศิลปศาสตร​์"},
                {id: "150", th: "แพทยศาสตร์"},
                {id: "160", th: "วิทยาลัยวิศวกรรมสังคีต"},
            ]
        }
    },
    methods: {
        getNameTH({id, th}) {
            return `[${id}] คณะ${th}`;
        }
    }
}
</script>