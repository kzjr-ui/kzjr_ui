
<template>
	<div class="container">
		<kzjr-switch active-text="开启" inactive-text="关闭" v-model="value2"></kzjr-switch>
	</div>
</template>

<script>
	import KzjrSwitch from "kzjr_ui/packages/switch";

	export default {
		data () {
			return {
				value2: true
			}
		},
		methods: {
		},
		components: {
			KzjrSwitch
		},
		computed: {},
		created () {

		}
	}
</script>

<style lang="scss">
	@import '../../style/src/switch.scss';
</style>
