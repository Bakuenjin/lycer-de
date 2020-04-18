<template>
	<div>
		<LycerHeader></LycerHeader>
		<div class="page-entrypoint">
			<nuxt />
		</div>
		<LycerFooter></LycerFooter>
	</div>
</template>

<script>
import LycerHeader from '@/components/LycerHeader'
import LycerFooter from '@/components/LycerFooter'

export default {
	components: {
		LycerHeader,
		LycerFooter
	}
}
</script>

<style>
html, body {
	/* width: 90%;
	margin: auto; */
	margin: 0;
	background-color: #e9e9eb;
	font-family: 'Open Sans', sans-serif;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.page-entrypoint {
	background-color: white;
}

@media (min-width: 1281px) {
	.page-entrypoint {
		min-height: calc(100vh - 430px);
		border-radius: 3px;
		width: 1280px;
		margin: 20px auto;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	}
}

@media (max-width: 1280px) {
	.page-entrypoint {
		min-height: calc(100vh - 390px);
		padding: 20px 0;
	}
}
</style>
