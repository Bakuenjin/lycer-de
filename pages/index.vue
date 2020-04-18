<template>
	<div class="landing-page">
		<h1 class="area-title">Unser Angebot</h1>
		<ProductList :productList="products"></ProductList>
		<Distancer height="20px"></Distancer>
		<h1 class="area-title">Neuigkeiten</h1>
		<NewsOverview :newsPreviewList="news"></NewsOverview>
		<Distancer height="20px"></Distancer>
	</div>
</template>

<script>
import Distancer from '@/components/Distancer'
import ProductList from '@/components/product-list/ProductList'
import NewsOverview from '@/components/news/NewsOverview'
import LycerAPI from '@/src/http/LycerAPI'

export default {
	components: {
		ProductList,
		NewsOverview,
		Distancer
	},
	async asyncData() {
		const api = new LycerAPI('key')
		return {
			products: await api.productList(),
			news: await api.latestNews()
		}
	},
	mounted() {
		console.log(this.products)
		console.log(this.news)
	}
}
</script>

<style scoped>
/* .landing-page {
	padding: 20px 0;
} */

.area-title {
	text-align: center;
	padding: 10px 0;
}

</style>
