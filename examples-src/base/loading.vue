
<template>
	<div class="container">
			<el-button @click="loading">loading</el-button>		
	</div>
</template>

<script>
	import Loading from "kzjr_ui/packages/loading";
	import ElButton from "kzjr_ui/packages/button";
	
	export default {
		data () {
			return {
			}
		},
		methods: {
			loading() {
				Loading.open()
				setTimeout(() => {
					Loading.close()
				}, 3000);
			}
		},
		components:{
			ElButton
		},
		computed: {},
		created () {

		}
	}
</script>

<style lang="scss">
	@import "../../style/src/loading.scss";
</style>
