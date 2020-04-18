<template>
    <div class="product-list">
        <div class="items">
            <ProductListItem
                v-for="product of productList"
                :key="product.name"
                :product="product">
            </ProductListItem>
        </div>
    </div>
</template>

<script>
import ProductListItem from './ProductListItem'

export default {
    name: 'ProductList',
    components: { ProductListItem },
    props: {
        productList: null
    }
}
</script>

<style scoped>
.product-list {
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