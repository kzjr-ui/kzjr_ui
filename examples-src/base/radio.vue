
<template>
	<div class="container">
		<kzjr-radio :showRadio="false" v-model="radio" label="1" border>备选项</kzjr-radio>
		<kzjr-radio :showRadio="false" v-model="radio" label="2" border>备选项</kzjr-radio>
	</div>
</template>

<script>
	import KzjrRadio from "kzjr_ui/packages/radio";
	import KzjrRadioGroup from "kzjr_ui/packages/radio-group";
	import KzjrRadioButton from "kzjr_ui/packages/radio-button";

	export default {
		data () {
			return {
				radio: 3
			}
		},
		methods: {
		},
		components: {
			KzjrRadio,
			KzjrRadioGroup,
			KzjrRadioButton
		},
		computed: {},
		created () {

		}
	}
</script>

<style lang="scss">
	@import '../../style/src/radio.scss';
	@import '../../style/src/radio-group.scss';
	@import '../../style/src/radio-button.scss';
</style>
