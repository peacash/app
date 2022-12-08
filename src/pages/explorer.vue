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
			<div v-if="(!sync && !info && !dynamic && !trusted && timeout)" class="flex flex-col justify-center mx-auto my-4">
				<Unresponsive :api="api" />
			</div>
			<Table v-if="(sync && info)">
				<TableRow class="text-xl justify-center pb-2">General information about Node</TableRow>
				<TableRow v-if="sync">
					<TD1 class="w-60">Synchronization</TD1>	
					<TD2>{{ sync.sync }}</TD2>	
				</TableRow>
				<TableRow v-if="sync">
					<TD1 class="w-60">Last&nbsp;block&nbsp;seen</TD1>	
					<TD2>{{ sync.last }}</TD2>	
				</TableRow>
				<TableRow v-if="sync">
					<TD1 class="w-60">Height</TD1>	
					<TD2>{{ sync.height }}</TD2>	
				</TableRow>
				<TableRow v-if="info">
					<TD1 class="w-60">Tree&nbsp;size</TD1>	
					<TD2>{{ info.tree_size }}</TD2>	
				</TableRow>
				<TableRow v-if="info">
					<TD1 class="w-60">Public&nbsp;key</TD1>	
					<TD2 v-if="shorten_public_key" @click="(shorten_public_key = false)">{{ shorten(info.public_key) }}</TD2>	
					<TD2 v-else>
						<router-link class="link" :to="'/address/' + info.public_key">{{ info.public_key }}</router-link>
					</TD2>	
				</TableRow>
				<TableRow v-if="info">
					<TD1 class="w-60">Time</TD1>	
					<TD2>{{ info.time }}</TD2>	
				</TableRow>
				<TableRow v-if="info">
					<TD1 class="w-60">Uptime</TD1>	
					<TD2>{{ info.uptime }}</TD2>	
				</TableRow>
				<TableRow v-if="info">
					<TD1 class="w-60">Tick</TD1>	
					<TD2>{{ info.lag }} ms</TD2>	
				</TableRow>
			</Table>
		</Description>
		<Description>
			<Table v-if="dynamic">
				<TableRow class="text-xl justify-center pb-2">Stakers Queue</TableRow>
				<TableRow v-for="(public_key, index) in dynamic.stakers" :key="(hash, index)">
					<TD1>#{{ index }}</TD1>	
					<TD2 class="justify-center">
						<router-link class="link" :to="('/address/' + public_key)">{{ public_key }}</router-link>
					</TD2>	
				</TableRow>
			</Table>
		</Description>
		<Description>
			<Table v-if="(dynamic && trusted && sync)">
				<TableRow class="text-xl justify-center pb-2">Latest Blocks</TableRow>
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