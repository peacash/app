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
	<div v-if="((balance === null || balance_staked === null) && timeout)" class="flex flex-col justify-center mx-auto my-4">
		<Unresponsive />
	</div>
	<div v-if="(balance !== null && balance_staked !== null)" class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description>
			<Table>
				<TableRow v-if="(address !== null)">
					<TD1 class="w-60">Address</TD1>
					<TD2 v-if="shorten_address" @click="(shorten_address = false)">{{ shorten(address) }}</TD2>
					<TD2 v-else>{{ address }}</TD2>
				</TableRow>
				<TableRow v-if="(balance !== null)">
					<TD1 class="w-60">Balance</TD1>
					<TD2>{{ balance }}</TD2>
				</TableRow>
				<TableRow v-if="(balance_staked !== null)">
					<TD1 class="w-60">Balance&nbsp;staked</TD1>
					<TD2>{{ balance_staked }}</TD2>
				</TableRow>
			</Table>
		</Description>
	</div>
</template>
<script>
export default {
    props: {
        address: String
    },
    data() {
		return {
            balance: null,
            balance_staked: null,
            shorten_address: true,
			timeout: false
		}
	},
    mounted() {
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
			let url = window.localStorage.getItem("url")
			if (!url) return
			if (!this.address) return
			fetch(url + "/balance/" + this.address).then(res => res.json()).then(data => {
				this.balance = data
			})
			fetch(url + "/balance_staked/" + this.address).then(res => res.json()).then(data => {
				this.balance_staked = data
			})
		},
		shorten(string) {
			return string.slice(0, 12) + "..." + string.slice(-8)
		}
	},
	watch: {
		'address': {
			handler() {
				this.fetchData()
			},
			immediate: true,
		}
	}
}
</script>