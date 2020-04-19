<template>
    <div class="profi-page">
        <h1>Unsere Hüpfburgen!</h1>
        <CastleFilter
            @filtersChanged="handleFiltersChanged">
        </CastleFilter>
    </div>
</template>

<script>
import CastleFilter from '@/components/castle-list/CastleFilter'

export default {
    components: {
        CastleFilter
    },
    methods: {
        handleFiltersChanged(newFilters) {
            console.log(newFilters)
        }
    }
}
</script>

<style scoped>

</style>