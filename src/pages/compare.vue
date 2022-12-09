<style scoped>
    tr:nth-child(2n) {
        background-color: #efe;
    }
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
	.red {
		background-color: #fee;
	}
</style>
<template>
	<div class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description v-for="(endpoint, index) in endpoints" :key="(endpoint, index)">
			<Table :class="endpoint?.sync ? '' : 'red'">
				<TableRow>
					<TD1 class="w-60">Endpoint</TD1>	
					<TD2>{{ endpoint?.endpoint }}</TD2>	
				</TableRow>
				<TableRow v-if="endpoint?.sync?.height != null">
					<TD1 class="w-60">Height</TD1>	
					<TD2>{{ endpoint.sync.height }}</TD2>	
				</TableRow>
				<TableRow v-if="endpoint?.sync?.last != null">
					<TD1 class="w-60">Last</TD1>	
					<TD2>{{ endpoint.sync.last }}</TD2>	
				</TableRow>
			</Table>
		</Description>
	</div>
</template>
<script>
export default {
    data() {
		return {
			endpoints: []
		}
	},
    mounted() {
		document.title = "Compare - Pea";
		this.loop();
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
			let endpoints = JSON.parse(window.localStorage.getItem("endpoints"))
			if (!endpoints?.length) return
			for (let i = 0; i < endpoints.length; i++) {
				let endpoint = endpoints[i]
				fetch(endpoint + "/sync").then(res => res.json()).then(data => {
					this.endpoints[i] = {
						endpoint,
						sync: data
					}
				}).catch(err => {
					this.endpoints[i] = {
						endpoint,
						sync: null
					}
				})
			}
		}
	},
}
</script>