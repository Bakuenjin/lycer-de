<template>
    <div class="news-overview">
        <div class="items">
            <NewsOverviewListItem
                v-for="preview of newsPreviewList"
                :key="preview.id"
                :newsPreview="preview">
            </NewsOverviewListItem>
        </div>
    </div>
</template>

<script>
import NewsOverviewListItem from './NewsOverviewItem'

export default {
    name: 'NewsOverview',
    components: { NewsOverviewListItem },
    props: {
        newsPreviewList: null
    }
}
</script>

<style scoped>
.news-overview {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
}

.items {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 350px);
    gap: 20px;
}
</style>