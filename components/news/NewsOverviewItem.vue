<template>
    <div class="news-overview-item">
        <nuxt-link :to="route">
            <div class="thumbnail"
                :style="backgroundImage">
            </div>
            <div class="title" :title="newsPreview.title">
                {{ newsPreview.title }}
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'NewsOverviewItem',
    props: {
        newsPreview: null
    },
    computed: {
        route() {
            return `/news/${this.newsPreview.id}`
        },
        backgroundImage() {
            return { backgroundImage: `url('${this.newsPreview.thumbnail}')` }
        }
    }
}
</script>

<style scoped>
.news-overview-item {
    width: 350px;
    height: 250px;
}

.thumbnail {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: calc(100% - 50px);
}

.title {
    line-height: 50px;
    font-size: 16pt;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

a {
    text-decoration: none;
    color: black;
}

</style>