
<template>
	<div class="container">
			<el-button @click="openModal">modal</el-button>	
			<modal @modal-shut="shut" :visible="visible"></modal>		
	</div>
</template>

<script>
	import modal from "kzjr_ui/packages/modal";
	import ElButton from "kzjr_ui/packages/button";
	
	export default {
		data () {
			return {
				visible: false
			}
		},
		methods: {
			openModal() {
				this.visible = true
			},
			shut() {
				this.visible = false
			}
		},
		components:{
			ElButton,
			modal
		},
		computed: {},
		created () {

		}
	}
</script>

<style lang="scss">
	@import "../../style/src/modal.scss";
</style>
