<template>
	<div id="search">
		<router-link class="search" to="/home">
			返回
		</router-link>
	</div>
</template>

<script>
	export default {
		components: {
			
		}
	}
</script>

<style scoped>
#search{
	width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0px;
    z-index: 5;
    background: #00008B;
}
</style>