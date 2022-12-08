<style scoped>
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div class="flex flex-col justify-between" style="min-height: calc(100% - 8rem);">
		<Endpoint />
		<Description>
			<div class="flex justify-center gap-4 my-12">
				<router-link class="link" to="/explorer">
					<Button class="text-lg sm:text-lg md:text-lg w-40 md:w-60 h-16">Explorer</Button>
				</router-link>
				<router-link class="link" to="/wallet">
					<Button class="text-lg sm:text-lg md:text-lg w-40 md:w-60 h-16">Wallet</Button>
				</router-link>
			</div>
		</Description>
	</div>
</template>
<script>
export default {
    mounted() {
		document.title = "Pea";
    },
}
</script>