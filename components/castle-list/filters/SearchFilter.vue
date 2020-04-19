<template>
    <div class="search-filter">
        <div class="title">
            {{ searchTitle }}
        </div>
        <input type="text" class="search-input" v-model="text" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'SearchFilter',
    data() {
        return { text: '' }
    },
    props: {
        searchTitle: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    },
    watch: {
        text(newText) {
            this.$emit('textChanged', newText)
        }
    }
}
</script>

<style scoped>
.search-filter {
    display: flex;
    padding: 5px 0;
    line-height: 32px;
}

.title {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 60px;
    text-align: center;
}

.search-input {
    font-family: 'Open Sans', sans-serif;
    border: none;
    width: calc(100% - 60px);
    max-width: 416px;
    padding: 0 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>