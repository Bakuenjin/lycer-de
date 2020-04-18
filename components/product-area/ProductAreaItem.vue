<template>
    <div class="product-area-item">
        <nuxt-link :to="product.route">
            <div class="thumbnail-cage">
                <div class="thumbnail" :style="backgroundImage"></div>
            </div>
            <h3 class="title">
                {{ product.name }}
            </h3>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'ProductAreaItem',
    props: { product: null },
    computed: {
        backgroundImage() {
            return { backgroundImage: `url('${this.product.thumbnail}')` }
        }
    }
}
</script>

<style scoped>
.product-area-item {
    position: relative;
    height: 290px;
    border-radius: 3px;
    transition: box-shadow 0.2s;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

/* .product-area-item:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
} */

.product-area-item:hover .thumbnail {
    transform: scale(1.05);
}

.product-area-item:hover .title {
    background-color: rgba(0, 0, 0, 0.1);
}

@media (min-width: 769px) {
    .product-area-item {
        width: calc((100% - 20px) / 3);
	}
}

@media (max-width: 768px) {
	.product-area-item {
        width: 100%;
        margin-bottom: 10px;
	}
}

a {
    text-decoration: none;
    color: black;
    display: block;
    width: 100%;
    height: 100%;
}

.thumbnail-cage {
    overflow: hidden;
    width: 100%;
    height: calc(100% - 40px);
}

.thumbnail {
    width: 100%;
    height: 100%;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    background-position: center;
    background-size: cover;
}

.title {
    text-align: center;
    line-height: 40px;
    font-size: 16pt;
    transition-duration: 0.2s;
    background-color: rgba(0, 0, 0, 0.05);
}
</style>