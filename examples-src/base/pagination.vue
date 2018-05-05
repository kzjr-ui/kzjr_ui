
<template>
	<div>
		<pagination @page-change="pageChange" :current="currrnt" :total="100" :limit="10"></pagination>
	</div>
</template>

<script>

	import pagination from "kzjr_ui/packages/pagination";
	
	export default {
		data () {
			return {
				currrnt: 1
			}
		},
		methods: {
			pageChange (n) {
				console.log(n)
				this.currrnt = n
			}
		},
		computed: {},
		components: {
			pagination
		},
		created () {

		}
	}
</script>

<style lang="scss">
	@import "../../style/src/pagination.scss";
</style>
