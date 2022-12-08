<style scoped>
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
	<div v-if="dynamic !== null" class="flex flex-col gap-10 my-10 w-full">
		<Description>
            <div class="
                flex justify-center
                text-black
            ">Stakers Queue</div>
        </Description>
		<Description>
			<Table>
				<TableRow v-for="(public_key, index) in dynamic.stakers" :key="(hash, index)">
					<TD1>#{{ index }}</TD1>	
					<TD2 class="justify-center">
						<router-link class="link" :to="('/address/' + public_key)">{{ public_key }}</router-link>
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
			}, 3000);
		},
		fetchData() {
			let endpoint = window.localStorage.getItem("endpoint");
			if (!endpoint) return
			fetch(endpoint + "/dynamic").then(res => res.json()).then(data => {
				this.dynamic = data
			})
		}
	},
}
</script>