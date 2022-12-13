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
	<div v-if="((sync === null || info === null) && timeout)" class="flex flex-col justify-center mx-auto my-4">
		<Unresponsive />
	</div>
	<div v-if="(sync !== null && info !== null)" class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description>
			<Table>
				<TableRow>
					<TD1 class="w-60">Synchronization</TD1>	
					<TD2>{{ sync.sync }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Last&nbsp;block&nbsp;seen</TD1>	
					<TD2>{{ sync.last }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Height</TD1>	
					<TD2>{{ sync.height }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Index</TD1>	
					<TD2>{{ sync.index }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Peers</TD1>	
					<TD2>{{ sync.peers }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Tree&nbsp;size</TD1>	
					<TD2>{{ info.tree_size }}</TD2>	
				</TableRow>
				<TableRow>
					<TD1 class="w-60">Public&nbsp;key</TD1>	
					<TD2 v-if="shorten_public_key" @click="(shorten_public_key = false)">{{ shorten(info.public_key) }}</TD2>	
					<TD2 v-else>
						<router-link class="link" :to="'/address/' + info.public_key">{{ info.public_key }}</router-link>
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
			interval: null,
			timeout: false,
			shorten_public_key: true
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
		}
	},
}
</script>