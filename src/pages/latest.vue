<style scoped>
    tr:nth-child(4n) {
        background-color: #eef;
    }
	tr:nth-child(4n + 2) {
        background-color: #eff;
    }
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div v-if="((sync === null || dynamic === null || trusted === null) && timeout)" class="flex flex-col justify-center mx-auto my-4">
		<Unresponsive />
	</div>
	<div v-if="(sync !== null && dynamic !== null && trusted !== null)" class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
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
			interval: null,
			timeout: false
		}
	},
    mounted() {
		document.title = "Latest - Pea";
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
		fetchData() {
			let url = window.localStorage.getItem("url");
			if (!url) return
			fetch(url + "/dynamic").then(res => res.json()).then(data => {
				this.dynamic = data
			})
			fetch(url + "/trusted").then(res => res.json()).then(data => {
				this.trusted = data
			})
			fetch(url + "/sync").then(res => res.json()).then(data => {
				this.sync = data
			})
		}
	},
}
</script>