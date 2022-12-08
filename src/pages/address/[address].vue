<template>
	<Address :addres="this.$route.params.address" />
</template>
<script>
import { format_int } from "../../../pkg";
export default {
    mounted() {
		document.title = this.$route.params.address + " - Address - Explorer - Pea";
    }
}
</script>