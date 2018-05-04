<template>
  <div :class="[
    type === 'textarea' ? 'kzjr-textarea' : 'kzjr-input',
    inputSize ? 'kzjr-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'kzjr-input-group': $slots.prepend || $slots.append,
      'kzjr-input-group--append': $slots.append,
      'kzjr-input-group--prepend': $slots.prepend,
      'kzjr-input--prefix': $slots.prefix || prefixIcon,
      'kzjr-input--suffix': $slots.suffix || suffixIcon
    }
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="kzjr-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="kzjr-input__inner"
        v-bind="$attrs"
        :type="type"
        :disabled="inputDisabled"
        :autocomplete="autoComplete"
        :value="currentValue"
        ref="input"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
      >
      <!-- 前置内容 -->
      <span class="kzjr-input__prefix" v-if="$slots.prefix || prefixIcon" :style="prefixOffset">
        <slot name="prefix"></slot>
        <i class="kzjr-input__icon"
           v-if="prefixIcon"
           :class="prefixIcon">
        </i>
      </span>
      <!-- 后置内容 -->
      <span
        class="kzjr-input__suffix"
        v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon"
        :style="suffixOffset">
        <span class="kzjr-input__suffix-inner">
          <template v-if="!showClear">
            <slot name="suffix"></slot>
            <i class="kzjr-input__icon"
              v-if="suffixIcon"
              :class="suffixIcon">
            </i>
          </template>
          <i v-else
            class="kzjr-input__icon kzjr-icon-circle-close kzjr-input__clear"
            @click="clear"
          ></i>
        </span>
        <i class="kzjr-input__icon"
          v-if="validateState"
          :class="['kzjr-input__validateIcon', validateIcon]">
        </i>
      </span>
      <!-- 后置元素 -->
      <div class="kzjr-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      :tabindex="tabindex"
      class="kzjr-textarea__inner"
      :value="currentValue"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @input="handleInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    >
    </textarea>
  </div>
</template>
<script>
  import emitter from 'kzjr_ui/src/mixins/emitter';
  import Migrating from 'kzjr_ui/src/mixins/migrating';
  import calcTextareaHeight from './calcTextareaHeight';
  import merge from 'kzjr_ui/src/utils/merge';
  import { isKorean } from 'kzjr_ui/src/utils/shared';

  export default {
    name: 'KzjrInput',

    componentName: 'KzjrInput',

    mixins: [emitter, Migrating],

    inheritAttrs: false,

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    data() {
      return {
        currentValue: this.value === undefined || this.value === null
          ? ''
          : this.value,
        textareaCalcStyle: {},
        prefixOffset: null,
        suffixOffset: null,
        hovering: false,
        focused: false,
        isOnComposition: false
      };
    },

    props: {
      value: [String, Number],
      size: String,
      resize: String,
      form: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      validateEvent: {
        type: Boolean,
        default: true
      },
      suffixIcon: String,
      prefixIcon: String,
      label: String,
      clearable: {
        type: Boolean,
        default: false
      },
      tabindex: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      validateState() {
        return this.elFormItem ? this.elFormItem.validateState : '';
      },
      needStatusIcon() {
        return this.elForm ? this.elForm.statusIcon : false;
      },
      validateIcon() {
        return {
          validating: 'kzjr-icon-loading',
          success: 'kzjr-icon-circle-check',
          error: 'kzjr-icon-circle-close'
        }[this.validateState];
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize });
      },
      inputSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      inputDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      },
      isGroup() {
        return this.$slots.prepend || this.$slots.append;
      },
      showClear() {
        return this.clearable &&
          !this.disabled &&
          !this.readonly &&
          this.currentValue !== '' &&
          (this.focused || this.hovering);
      }
    },

    watch: {
      'value'(val, oldValue) {
        this.setCurrentValue(val);
      }
    },

    methods: {
      focus() {
        (this.$refs.input || this.$refs.textarea).focus();
      },
      blur() {
        (this.$refs.input || this.$refs.textarea).blur();
      },
      getMigratingConfig() {
        return {
          props: {
            'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
            'on-icon-click': 'on-icon-click is removed.'
          },
          events: {
            'click': 'click is removed.'
          }
        };
      },
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
        }
      },
      select() {
        (this.$refs.input || this.$refs.textarea).select();
      },
      resizeTextarea() {
        if (this.$isServer) return;
        const { autosize, type } = this;
        if (type !== 'textarea') return;
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          };
          return;
        }
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      handleFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      handleComposition(event) {
        if (event.type === 'compositionend') {
          this.isOnComposition = false;
          this.handleInput(event);
        } else {
          const text = event.target.value;
          const lastCharacter = text[text.length - 1] || '';
          this.isOnComposition = !isKorean(lastCharacter);
        }
      },
      handleInput(event) {
        if (this.isOnComposition) return;
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.$nextTick(_ => {
          this.resizeTextarea();
        });
        this.currentValue = value;
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', [value]);
        }
      },
      calcIconOffset(place) {
        const pendantMap = {
          'suf': 'append',
          'pre': 'prepend'
        };

        const pendant = pendantMap[place];

        if (this.$slots[pendant]) {
          return { transform: `translateX(${place === 'suf' ? '-' : ''}${this.$el.querySelector(`.kzjr-input-group__${pendant}`).offsetWidth}px)` };
        }
      },
      clear() {
        this.$emit('input', '');
        this.$emit('change', '');
        this.$emit('clear');
        this.setCurrentValue('');
        this.focus();
      }
    },

    created() {
      this.$on('inputSelect', this.select);
    },

    mounted() {
      this.resizeTextarea();
      if (this.isGroup) {
        this.prefixOffset = this.calcIconOffset('pre');
        this.suffixOffset = this.calcIconOffset('suf');
      }
    }
  };
</script>
