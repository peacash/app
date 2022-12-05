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
			<Table :bar="true" v-if="balance !== null && balance_staked !== null">
				<TableRow class="text-xl justify-center pb-2">Address</TableRow>
				<TableRow v-if="(public_key !== null)">
					<TD1 class="w-60">Public&nbsp;key</TD1>
					<TD2 v-if="shorten_public_key" @click="(shorten_public_key = false)">{{ shorten(public_key) }}</TD2>
					<TD2 v-else>{{ public_key }}</TD2>
				</TableRow>
				<TableRow v-if="(balance !== null)">
					<TD1 class="w-60">Balance</TD1>
					<TD2>{{ balance_to_string(balance) }}</TD2>
				</TableRow>
				<TableRow v-if="(balance_staked !== null)">
					<TD1 class="w-60">Balance&nbsp;staked</TD1>
					<TD2>{{ balance_to_string(balance_staked) }}</TD2>
				</TableRow>
			</Table>
		</Description>
	</div>
</template>
<script>
import { int_to_string } from "../../../pkg";
export default {
    data() {
		return {
            balance: null,
            balance_staked: null,
			public_key: this.$route.params.address,
            shorten_public_key: true
		}
	},
    mounted() {
		document.title = this.$route.params.address + " - Address - Explorer - Pea";
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
			if (!this.$route.params.address) return
			fetch(window.localStorage.getItem("api") + "/balance/" + this.$route.params.address).then(res => res.json()).then(data => {
				this.balance = data
			})
			fetch(window.localStorage.getItem("api") + "/balance_staked/" + this.$route.params.address).then(res => res.json()).then(data => {
				this.balance_staked = data
			})
		},
		balance_to_string(balance) {
			return int_to_string(BigInt(balance))
		},
		shorten(string) {
			return string.slice(0, 12) + "..." + string.slice(-8)
		}
	},
	watch: {
		'$route.params': {
			handler() {
				this.fetchData()
			},
			immediate: true,
		}
	}
}
</script>