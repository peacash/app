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
	<div class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description>
            <div class="
                flex justify-center
                text-black
            ">Transaction</div>
        </Description>
		<Description>
			<Table>
				<TableRow v-if="transaction">
					<TD1 class="w-60">Hash</TD1>
					<TD2 v-if="shorten_hash" @click="(shorten_hash = false)">{{ shorten(transaction.hash) }}</TD2>
					<TD2 v-else>{{ transaction.hash }}</TD2>
				</TableRow>
				<TableRow v-if="transaction">
					<TD1 class="w-60">Input&nbsp;address</TD1>
					<TD2 v-if="shorten_input_address" @click="(shorten_input_address = false)">{{ shorten(transaction.input_address) }}</TD2>
					<TD2 v-else>
        				<router-link class="link" :to="'/address/' + transaction.input_address">{{ transaction.input_address }}</router-link>
					</TD2>
				</TableRow>
				<TableRow v-if="transaction">
					<TD1 class="w-60">Output&nbsp;address</TD1>
					<TD2 v-if="shorten_output_address" @click="(shorten_output_address = false)">{{ shorten(transaction.output_address) }}</TD2>
					<TD2 v-else>
        				<router-link class="link" :to="'/address/' + transaction.output_address">{{ transaction.output_address }}</router-link>
					</TD2>
				</TableRow>
				<TableRow v-if="transaction">
					<TD1 class="w-60">Amount</TD1>
					<TD2>{{ balance_to_string(transaction.amount) }}</TD2>
				</TableRow>
				<TableRow v-if="transaction">
					<TD1 class="w-60">Fee</TD1>
					<TD2>{{ balance_to_string(transaction.fee) }}</TD2>
				</TableRow>
				<TableRow v-if="transaction">
					<TD1 class="w-60">Timestamp</TD1>
					<TD2>{{ new Date(transaction.timestamp * 1000).toLocaleString() }}</TD2>
				</TableRow>
				<TableRow v-if="transaction">
					<TD1 class="w-60">Signature</TD1>
					<TD2 v-if="shorten_signature" @click="(shorten_signature = false)">{{ shorten(transaction.signature) }}</TD2>
					<TD2 v-else>{{ transaction.signature }}</TD2>
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
			transaction: null,
			shorten_hash: true,
			shorten_input_address: true,
			shorten_output_address: true,
			shorten_signature: true
		}
	},
	methods: {
		fetchData() {
			if (!this.hash) return
			fetch(window.localStorage.getItem("url") + "/transaction/" + this.hash).then(res => res.json()).then(data => {
				this.transaction = data
			})
		},
		shorten(string) {
			return string.slice(0, 12) + "..." + string.slice(-8)
		},
		balance_to_string(balance) {
			let decimals = 18
			let string = '0'.repeat(decimals)
			string += balance
			let index = string.length - decimals
			string = [string.slice(0, index), ".", string.slice(index)].join('')
			while (string.startsWith("0")) {
				string = string.slice(1)
			}
			if (string.startsWith(".")) {
				string = "0" + string
			}
			return string
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