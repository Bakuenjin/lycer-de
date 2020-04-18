<template>
    <div class="product-area-list">
        <ProductArea
            v-for="area of productAreas"
            :key="area.name"
            :productArea="area">
        </ProductArea>
    </div>
</template>

<script>
import ProductArea from './ProductArea'

export default {
    name: 'ProductAreaList',
    components: { ProductArea },
    props: { productAreas: null }
}
</script>

<style scoped>
.product-area-list {
    padding: 0 60px;
}
</style>