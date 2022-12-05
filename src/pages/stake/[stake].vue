<template>
	<Stake :hash="this.$route.params.stake" />
</template>
<script>
export default {
    mounted() {
		document.title = this.$route.params.stake + " - Stake - Explorer - Pea";
    }
}
</script>