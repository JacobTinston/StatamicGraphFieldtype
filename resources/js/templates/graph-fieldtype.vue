<template>
    <div>
        <text-input :value="value" v-model="updateVal" />
    </div>
</template>
<script>
export default {
    mixins: [Fieldtype],
    data() {
        return {
            show: false
        };
    },
    watch: {
        updateVal(val) {
            this.update('qwerty');
        }
    }
};
</script>
