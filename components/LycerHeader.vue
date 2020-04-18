<template>
    <div class="full-size header">
        <div class="full-size dark-tint">
            <nuxt-link to="/">
                <div class="title"></div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LycerHeader'
}
</script>

<style scoped>
.full-size {
    width: 100%;
    height: 120px;
}

.header {
    background-color: #313847;
    /* background-image: url('~assets/images/header/background.jpg'); */
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
}

.dark-tint {
    /* background-color: rgba(0, 0, 0, 0.4); */
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    /* display: block; */
    height: 100%;
}

.title {
    height: 120px;
    width: 297px;
    background-image: url('~assets/images/header/title.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>