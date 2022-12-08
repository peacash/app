<template>
	<Address :addres="this.$route.params.address">Address</Address>
</template>
<script>
import { format_int } from "../../../pkg";
export default {
    mounted() {
		document.title = this.$route.params.address + " - Address - Explorer - Pea";
    }
}
</script>