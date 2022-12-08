<style scoped>
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<Searchbar />
	<div v-if="((sync === null || info === null || dynamic === null || trusted === null) && timeout)" class="flex flex-col justify-center mx-auto my-4">
		<Unresponsive :endpoint=endpoint />
	</div>
	<div v-if="(sync !== null && info !== null && dynamic !== null && trusted !== null)" class="flex flex-col gap-10 my-10 w-full">
		<Description>
            <div class="
                flex justify-center
                text-black
            ">Latest Blocks</div>
        </Description>
		<Description>
			<Table>
				<TableRow v-for="(hash, index) in [...dynamic.latest_hashes, ...trusted.latest_hashes].concat()" :key="(hash, index)">
					<TD1>#{{ sync.height - index }}</TD1>	
					<TD2 class="justify-center">
						<router-link class="link" :to="('/block/' + hash)">{{ hash }}</router-link>
					</TD2>	
				</TableRow>
			</Table>
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
			let endpoint = window.localStorage.getItem("endpoint");
			if (!endpoint) return
			fetch(endpoint + "/dynamic").then(res => res.json()).then(data => {
				this.dynamic = data
			})
			fetch(endpoint + "/trusted").then(res => res.json()).then(data => {
				this.trusted = data
			})
			fetch(endpoint + "/sync").then(res => res.json()).then(data => {
				this.sync = data
			})
			fetch(endpoint + "/info").then(res => res.json()).then(data => {
				this.info = data
			})
		}
	},
}
</script>