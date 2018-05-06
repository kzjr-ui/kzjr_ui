<template>
    <transition name="fade">
        <div class="kzjr-loading-component" v-if="visible">
            <div class="loading-component--core">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data(){
        return {
            visible: false
        }
    }
}
</script>
