
<template>
	<div class="container">
			<el-button @click="openAlert">alert</el-button>
			<el-button @click="openConfirm">confirm</el-button>
			<el-button @click="openPrompt">prompt</el-button>			
	</div>
</template>

<script>
	import MessageBox from "kzjr_ui/packages/message-box";
	import ElButton from "kzjr_ui/packages/button";
	
	export default {
		data () {
			return {
			}
		},
		methods: {
			openAlert() {
				MessageBox.alert('这是一段内容', 'alert')
			},
			openConfirm() {
				MessageBox.confirm('这是一段内容', 'confirm',{
					confirmButtonText: '确定',
          			cancelButtonText: '取消',
          			type: 'warning',
          			center: true
				})				
			},
			openPrompt() {
				MessageBox.prompt('这是一段内容', 'prompt')				
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
	@import "../../style/src/message-box.scss";
</style>
