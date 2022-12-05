<style scoped>
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div class="flex flex-col gap-2 my-2 w-full">
		<Description>
            <WalletNew>
                hello
            </WalletNew>
		</Description>
	</div>
</template>
<script>
import { address, secret } from "../../pkg";
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
			api: null,
			shorten_public_key: true
		}
	},
    mounted() {
		document.title = "Explorer - Pea";
		this.loop();
		setTimeout(() => {
			this.timeout = true
		}, 1000)
        const array = new Uint32Array(10);
        crypto.getRandomValues(array);
        let s = secret(array);
        console.log(s)
        console.log(address(s))
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
			this.api = window.localStorage.getItem("api");
			fetch(this.api + "/dynamic").then(res => res.json()).then(data => {
				this.dynamic = data
			})
			fetch(this.api + "/trusted").then(res => res.json()).then(data => {
				this.trusted = data
			})
			fetch(this.api + "/sync").then(res => res.json()).then(data => {
				this.sync = data
			})
			fetch(this.api + "/info").then(res => res.json()).then(data => {
				this.info = data
			})
		}
	},
}
</script>