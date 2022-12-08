<style scoped>
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<Endpoint />
	<div class="flex flex-col gap-2 justify-center">
		<Description>
			<div class="flex justify-center gap-2 my-40">
				<router-link class="link" to="/explorer">
					<Button class="text-lg px-10 py-5">Explorer</Button>
				</router-link>
				<router-link class="link" to="/wallet">
					<Button class="text-lg px-10 py-5">Wallet</Button>
				</router-link>
			</div>
		</Description>
	</div>
</template>
<script>
export default {
    data() {
		return {
			dynamic: null,
			trusted: null,
			sync: null,
			info: null,
			interval: null,
			timeout: false,
			https: window.location.protocol === "https:",
			host: window.location.host,
			endpoint: null,
			shorten_public_key: true
		}
	},
    mounted() {
		document.title = "Explorer - Pea";
		this.loop();
		setTimeout(() => {
			this.timeout = true
		}, 1000)
    },
	unmounted() {
		clearInterval(this.interval)
	},
	methods: {
		loop() {
			this.fetchData();
			this.interval = setInterval(() => {
				this.fetchData()
			}, 3000);
		},
		shorten(string) {
			return string.slice(0, 12) + "..." + string.slice(-8)
		},
		fetchData() {
			this.endpoint = window.localStorage.getItem("endpoint");
			fetch(this.endpoint + "/dynamic").then(res => res.json()).then(data => {
				this.dynamic = data
			})
			fetch(this.endpoint + "/trusted").then(res => res.json()).then(data => {
				this.trusted = data
			})
			fetch(this.endpoint + "/sync").then(res => res.json()).then(data => {
				this.sync = data
			})
			fetch(this.endpoint + "/info").then(res => res.json()).then(data => {
				this.info = data
			})
		}
	},
}
</script>