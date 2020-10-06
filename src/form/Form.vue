<template>
    <div class="container-fluid bg-kmitl-linear py-5 vh-100">
        <div class="container rounded-lg shadow h-100 p-5 bg-white">
            <div class="text-center">
                <div class="col-8 col-md-6 col-lg-4 offset-2 offset-md-3 offset-lg-4 px-5 mb-5">
                    <img class="w-100" src="../../imgs/KMITL_logo.png" alt="">
                </div>
                <h1 class="font-weight-lighter">ระบบรายงานรายละเอียดรายวิชา</h1>
                <h5>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h5>
                <h4 class="mb-4 mt-5">กรุณาเลือกคณะและสาขา</h4>
                <div class="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                    <multiselect
                        v-model="selectedFaculty"
                        :options="getFaculties()"
                        :custom-label="getFacTH"
                        select-label="เลือก"
                        deselect-label="ยกเลิก"
                        selected-label=""
                        maxHeight="200"
                        placeholder="คณะที่เลือก"
                        class="my-3">
                    </multiselect>
                    <multiselect
                        v-model="selectedMajor"
                        :options="getMajors()"
                        select-label="เลือก"
                        deselect-label="ยกเลิก"
                        selected-label=""
                        maxHeight="200"
                        placeholder="สาขาที่เลือก"
                        class="my-3">
                        <span slot="noOptions" class="text-secondary">ไม่สามารถเลือกสาขาได้</span>
                    </multiselect>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import Multiselect from 'vue-multiselect'

import JSON_faculties from '../../json/faculties.json'

export default {
    components: {
        Multiselect
    },
    data() {
        return {
            selectedFaculty: '',
            selectedMajor: '',
        }
    },
    methods: {
        getFacTH({id, th}) {
            return `[${id}] คณะ${th}`;
        },

        getFaculties() {
            var facs = [];
            for (const [id, details] of Object.entries(JSON_faculties)) {
                facs.push({"id": id, "th": details.th});
            }
            facs.sort((a, b) => {
                return parseInt(a.id) - parseInt(b.id);
            });
            return facs;
        },

        getMajors() {
            var facId = this.selectedFaculty.id;
            var majNames = [];
            if (facId !== undefined) {
                var majors = JSON_faculties[facId].majors;
                if (majors !== undefined) {
                    majors.forEach(maj => {
                        majNames.push(maj.th);
                    })
                }
            }
            return majNames;
        }
    }
}
</script>