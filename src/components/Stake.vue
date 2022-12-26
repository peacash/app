<style scoped>
    tr:nth-child(odd) {
        background-color: #fef;
    }
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description>
            <div class="
                flex justify-center
                text-black
            ">Stake</div>
        </Description>
		<Description>
			<Table>
				<TableRow v-if="stake">
					<TD1 class="w-60">Hash</TD1>
					<TD2 v-if="shorten_hash" @click="(shorten_hash = false)">{{ shorten(stake.hash) }}</TD2>
					<TD2 v-else >{{ stake.hash }}</TD2>
				</TableRow>
				<TableRow v-if="stake">
					<TD1 class="w-60">Address</TD1>
					<TD2 v-if="shorten_address" @click="(shorten_address = false)">{{ shorten(stake.address) }}</TD2>
					<TD2 v-else >
        				<router-link class="link" :to="'/address/' + stake.address">{{ stake.address }}</router-link>
					</TD2>
				</TableRow>
				<TableRow v-if="stake">
					<TD1 class="w-60">Action</TD1>
					<TD2 v-if="stake.deposit">Deposit</TD2>
					<TD2 v-else >Withdraw</TD2>
				</TableRow>
				<TableRow v-if="stake">
					<TD1 class="w-60">Fee</TD1>
					<TD2 >{{ stake.fee }}</TD2>
				</TableRow>
				<TableRow v-if="stake">
					<TD1 class="w-60">Timestamp</TD1>
					<TD2 >{{ new Date(stake.timestamp * 1000).toLocaleString() }}</TD2>
				</TableRow>
				<TableRow v-if="stake">
					<TD1 class="w-60">Signature</TD1>
					<TD2 v-if="shorten_signature" @click="(shorten_signature = false)">{{ shorten(stake.signature) }}</TD2>
					<TD2 v-else>{{ stake.signature }}</TD2>
				</TableRow>
			</Table>
		</Description>
	</div>
</template>
<script>
export default {
    props: {
        hash: String
    },
    data() {
		return {
			stake: null,
			shorten_hash: true,
			shorten_address: true,
			shorten_signature: true
		}
	},
	methods: {
		fetchData() {
			if (!this.hash) return
			fetch(window.localStorage.getItem("url") + "/stake/" + this.hash).then(res => res.json()).then(data => {
				this.stake = data
			})
		},
		shorten(string) {
			return string.slice(0, 12) + "..." + string.slice(-8)
		}
	},
    mounted() {
		this.fetchData();
    },
	watch: {
		'hash': {
			handler() {
				this.fetchData()
			},
			immediate: true,
		}
	}
}
</script>