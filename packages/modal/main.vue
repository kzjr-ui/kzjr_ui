<template>
	<transition name="msgbox-fade">
		<div class="kzjr-modal-component" v-show="visible">
			<div class="core" :class="sizeClass">
				<div class="head">
					<div class="left">
						<slot name="left"></slot>
					</div>
					<div class="middle">{{title}}</div>
					<div class="right">
						<span class="close" @click="shutClick">
							<img src="../../img/new_close2.png" alt="" class="border">
							<img src="../../img/new_close1.png" alt="" class="close">
						</span>
					</div>
				</div>
				<div class="main">
					<slot></slot>
				</div>
				<div class="foot">
					<el-button v-if="showCancelButton" size="medium" @click.native="shutClick" @keydown.enter="shutClick">
						{{ cancelButtonText || '取消' }}
					</el-button>
					<el-button class="kzjr-button--primary" v-show="showConfirmButton" size="medium" @click.native="sureClick" @keydown.enter="sureClick">
						{{ confirmButtonText || '确定'}}
					</el-button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import ElButton from 'kzjr_ui/packages/button';
	import Popup from 'kzjr_ui/src/utils/popup';


	export default {
		mixins: [Popup],
		name: 'KzjrModal',
		props: {
			modal: {
				default: true
			},
			visible: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: 'sm'
			},
			title: {
				type: String,
				default: '温馨提示'
			},
			showConfirmButton: {
				type: Boolean,
				default: true
			},
			confirmButtonText: {
				type: String,
				default: '确定'
			},
			showCancelButton: {
				type: Boolean,
				default: true
			},
			cancelButtonText: {
				type: String,
				default: '取消'
			},
		},
		data () {
			return {
				showCore: false
			}
		},
		watch: {
			visible (newVal) {
				this.showCore = newVal
			}
		},
		computed: {
			sizeClass () {
				let obj = {};
				obj[this.size] = true;
				return obj;
			}
		},
		components: {
			ElButton
		},
		methods: {
			sureClick () {
				this.$emit('modal-sure', {});
			},
			shutClick () {
				this.showCore = false
				setTimeout(() => {
					this.$emit('modal-shut', {});
				}, 200);
			}
		}
	}
</script>
