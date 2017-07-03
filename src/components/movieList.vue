<template>
	<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">

	</div>
</template>

<script>
	data () {
		return {
			datas:[],
			busy:false,
		}
	},
	methods:{
		
	}
</script>

<style lang="scss">
	
</style>