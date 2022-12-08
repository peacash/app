<template>
    <vue-qr :dotScale=1 backgroundColor="#00000000" colorLight="#00000000" :text="'http://app.pea.cash/#/wallet?output=' + public" :size=1024 :correctLevel=0></vue-qr>
</template>
<script>
import VueQr from 'vue-qr/src/packages/vue-qr.vue'
export default {
    props: {
        text: String
    },
	components: {VueQr}
}
</script>