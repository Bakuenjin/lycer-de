<template>
    <div class="product-area">
        <h1 class="title">
            {{ productArea.name }}
        </h1>
        <div class="products">
            <ProductAreaItem
                v-for="product of productArea.products"
                :key="product.name"
                :product="product">
            </ProductAreaItem>
        </div>
        <Distancer height="20px"></Distancer>
    </div>
</template>

<script>
import ProductAreaItem from './ProductAreaItem'
import Distancer from '@/components/Distancer'

export default {
    name: 'ProductArea',
    components: { ProductAreaItem, Distancer },
    props: { productArea: null }
}
</script>

<style scoped>
.title {
    line-height: 80px;
    width: 100%;
    text-align: center;
}

.products {
    display: flex;
    justify-content: space-between;
}

@media (max-width: 768px) {
    .products {
        flex-direction: column;
    }
}
</style>