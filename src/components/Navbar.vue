<style scoped>
	.custom-button {
		font-weight: 500;
	}
	header {
		animation: fade 500ms;
	}
	@keyframes fade {
		0% {
			-webkit-transform: translate(0rem, -100%);
		}
	}
</style>
<template>
	<div class="select-none z-20">
		<header class="w-full custom-header">
			<div class="max-w-7xl mx-auto px-4 flex justify-between lg:px-8">
				<nav class="flex py-2 space-x-4 lg:space-x-8" aria-label="Global navigation">
					<router-link
						v-for="link in links.to" :key="link"
						:to=link.to
						class="
							custom-button
							rounded-md
							py-2
							px-3
							inline-flex
							items-center
							focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black
							hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black
						"
					>
						{{ link.text }}
					</router-link>
					<a
						v-for="link in links.href" :key="link"
						:href=link.href
						class="
							custom-button
							rounded-md
							py-2
							px-3
							inline-flex
							items-center
							focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black
							hover:outline-none hover:ring-1 hover:ring-outset hover:ring-black
						"
						rel="noopener"
					>
						<span class="mr-2">{{ link.text }}</span><heroicons-outline-external-link class="h-5 w-5" />
					</a>
				</nav>
			</div>
		</header>
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				open: false,
				links: {
					to: [
						{
							text: "Home",
							to: "/"
						},
						{
							text: "Wallet",
							to: "/wallet"
						}
					]
				}
			}
		}
	}
</script>