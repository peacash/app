<template>
	<Transaction :hash="this.$route.params.transaction" />
</template>
<script>
export default {
    mounted() {
		document.title = this.$route.params.transaction + " - Transaction - Explorer - Pea";
    },
}
</script>