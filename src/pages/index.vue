<style scoped>
    tr:nth-child(odd) {
        background-color: #efe;
    }
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div v-if="((sync === null || info === null || peers === null) && timeout)" class="flex flex-col justify-center mx-auto my-4">
		<Unresponsive />
	</div>
	<div v-if="(sync !== null && info !== null && peers !== null)" class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description>
			<Table>
				<TableRow>
					<TD1 class="w-60">Peers</TD1>
					<TD2>
						<router-link class="link" to="/peers">{{ peers.length }}</router-link>
					</TD2>
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Synchronization</TD1>	
					<TD2>{{ sync.status }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Last&nbsp;block&nbsp;seen</TD1>	
					<TD2>{{ sync.last_seen }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Height</TD1>	
					<TD2>{{ sync.height }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Tree&nbsp;size</TD1>	
					<TD2>{{ info.tree_size }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Address</TD1>	
					<TD2 v-if="shorten_address" @click="(shorten_address = false)">{{ shorten(info.address) }}</TD2>	
					<TD2 v-else>
						<router-link class="link" :to="'/address/' + info.address">{{ info.address }}</router-link>
					</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Time</TD1>	
					<TD2>{{ info.time }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Uptime</TD1>	
					<TD2>{{ info.uptime }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Tick</TD1>	
					<TD2>{{ info.lag }} ms</TD2>	
				</TableRow>
			</Table>
		</Description>
	</div>
</template>
<script>
export default {
    data() {
		return {
			sync: null,
			info: null,
			peers: null,
			interval: null,
			timeout: false,
			shorten_address: true
		}
	},
    mounted() {
		document.title = "Pea";
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
			}, 1000);
		},
		shorten(string) {
			return string.slice(0, 12) + "..." + string.slice(-8)
		},
		fetchData() {
			let url = window.localStorage.getItem("url");
			if (!url) return
			fetch(url + "/sync").then(res => res.json()).then(data => {
				this.sync = data
			})
			fetch(url + "/info").then(res => res.json()).then(data => {
				this.info = data
			})
			fetch(url + "/peers").then(res => res.json()).then(data => {
				this.peers = data
			})
		}
	},
}
</script>