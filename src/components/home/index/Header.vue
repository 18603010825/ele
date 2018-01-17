<template>
	<header class="header">
		<div>福中三路深圳市民中心</div>
		<router-link class="search" to="/search">
			搜索商家 , 商品名称
		</router-link>
	</header>
</template>`

<script>
	export default {
		name: 'home-header'
	}
</script>

<style scoped>
	.header {
		width: 100%;
		height: 80px;
		background-image: linear-gradient(90deg, #0af, #0085ff);
		position: relative;
	}
	
	.header .search {
		display: inline-block;
		width: 80%;
		height: 40px;
		background: #fff;
		text-align: center;
		line-height: 40px;
		position: absolute;
		bottom: 5px;
		left: 50%;
		margin-left: -41%;
	}
</style>