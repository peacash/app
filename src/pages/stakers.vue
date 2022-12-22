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
	<div v-if="(dynamic === null && timeout)" class="flex flex-col justify-center mx-auto my-4">
		<Unresponsive />
	</div>
	<div class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description>
			<Table v-if="dynamic !== null" >
				<div v-if="!dynamic.stakers.length" class="text-center italic">No stakers.</div>
				<TableRow v-for="(address, index) in dynamic.stakers" :key="(address, index)">
					<TD1>#{{ index }}</TD1>	
					<TD2 class="justify-center">
						<router-link class="link" :to="('/address/' + address)">{{ address }}</router-link>
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
			interval: null,
			timeout: false,
		}
	},
    mounted() {
		document.title = "Stakers - Pea";
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
		fetchData() {
			let url = window.localStorage.getItem("url");
			if (!url) return
			fetch(url + "/dynamic").then(res => res.json()).then(data => {
				this.dynamic = data
			})
		}
	},
}
</script>