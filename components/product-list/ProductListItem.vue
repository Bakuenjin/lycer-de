<template>
    <div class="product-list-item" :style="backgroundImage">
        <nuxt-link :to="product.route">
            <div class="dark-tint">
                <div class="title">
                    {{ product.name }}
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'ProductListItem',
    props: {
        product: null
    },
    computed: {
        backgroundImage() {
            return { backgroundImage: `url('${this.product.thumbnail}')` }
        }
    }
}
</script>

<style scoped>
.product-list-item {
    width: 350px;
    height: 250px;
    /* border-radius: 10px; */
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    /* margin: 20px; */
}

.product-list-item:hover .dark-tint {
    background-color: transparent;
    color: white !important;
}

.dark-tint {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    transition-duration: 0.3s;
    /* background-color: rgba(0, 0, 0, 0.3); */
}

.title {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 5px 10px;
}

a {
    text-decoration: none;
    color: #ccc;
}
</style>