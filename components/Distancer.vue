<template>
    <div :style="style"></div>
</template>

<script>
export default {
    name: 'Distancer',
    props: { height: { type: String, required: true } },
    computed: { style() { return { minHeight: this.height } } }
}
</script>
