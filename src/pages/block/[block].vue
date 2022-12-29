<template>
    <Block :hash="this.$route.params.block" />
</template>
<script>
export default {
    mounted() {
        document.title = this.$route.params.block + " - Block - Explorer - Pea";
    }
}
</script>