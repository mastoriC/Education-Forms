<template>
    <div class="container-fluid bg-kmitl-linear py-5 vh-100">
        <div class="container rounded-lg shadow h-100 p-5 bg-white">
            <div class="text-center">
                <h3 class="mb-4">กรุณาเลือกคณะและสาขา</h3>
                <div class="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                    <multiselect
                        v-model="selected"
                        :options="faculties"
                        :custom-label="getNameTH"
                        select-label="เลือก"
                        deselect-label="ยกเลิก"
                        selected-label=""
                        placeholder="เลือกคณะ">
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
            selected: '',
            faculties: JSON_faculties
        }
    },
    methods: {
        getNameTH({id, th}) {
            return `[${id}] คณะ${th}`;
        }
    }
}
</script>