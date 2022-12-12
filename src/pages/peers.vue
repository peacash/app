<style scoped>
    tr:nth-child(4n + 1) {
        background-color: #fef;
    }
	tr:nth-child(4n + 3) {
        background-color: #ffe;
    }
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div v-if="(peers === null && timeout)" class="flex flex-col justify-center mx-auto my-4">
		<Unresponsive />
	</div>
	<div v-if="peers !== null" class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description>
			<Table>
				<TableRow v-for="(multiaddr, index) in peers" :key="(multiaddr, index)">
					<TD1>#{{ index }}</TD1>	
					<TD2 class="justify-center">{{ multiaddr }}</TD2>	
				</TableRow>
			</Table>
		</Description>
	</div>
</template>
<script>
export default {
    data() {
		return {
			peers: null,
			interval: null,
			timeout: false,
		}
	},
    mounted() {
		document.title = "Peers - Pea";
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
			fetch(url + "/peers").then(res => res.json()).then(data => {
				this.peers = data
			})
		}
	},
}
</script>