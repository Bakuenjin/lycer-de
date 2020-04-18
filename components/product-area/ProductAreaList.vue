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
@media (min-width: 769px) {
    .product-area-list {
        padding: 0 60px;
    }
}

@media (max-width: 768px) {
    .product-area-list {
        padding: 0 10px;
    }
}
</style>