<style scoped>
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div class="flex flex-col gap-10 my-10 w-full">
		<Description>
            <div class="
                flex justify-center
                text-black
            ">Block</div>
        </Description>
		<Description>
			<Table>
				<TableRow v-if="(height !== null)">
					<TD1 class="w-60">Height</TD1>
					<TD2>{{ height }}</TD2>
				</TableRow>
				<TableRow v-if="block">
					<TD1 class="w-60">Hash</TD1>
					<TD2 v-if="shorten_hash" @click="(shorten_hash = false)">{{ shorten(block.hash) }}</TD2>
					<TD2 v-else>{{ block.hash }}</TD2>
				</TableRow>
				<TableRow v-if="block">
					<TD1 class="w-60">Previous&nbsp;hash</TD1>
					<TD2 v-if="shorten_previous_hash" @click="(shorten_previous_hash = false)">{{ shorten(block.previous_hash) }}</TD2>
					<TD2 v-else-if="(block.previous_hash == '0000000000000000000000000000000000000000000000000000000000000000')">{{ block.previous_hash }}</TD2>
					<TD2 v-else>
						<router-link class="link" :to="'/block/' + block.previous_hash">{{ block.previous_hash }}</router-link>
					</TD2>
				</TableRow>
				<TableRow v-if="block">
					<TD1 class="w-60">Timestamp</TD1>
					<TD2>{{ new Date(block.timestamp * 1000).toLocaleString() }}</TD2>
				</TableRow>
				<TableRow v-if="block">
					<TD1 class="w-60">Public&nbsp;key</TD1>
					<TD2 v-if="shorten_public_key" @click="(shorten_public_key = false)">{{ shorten(block.public_key) }}</TD2>
					<TD2 v-else>
						<router-link class="link" :to="'/address/' + block.public_key">{{ block.public_key }}</router-link>
					</TD2>
				</TableRow>
				<TableRow v-if="block">
					<TD1 class="w-60">Signature</TD1>
					<TD2 v-if="shorten_signature" @click="(shorten_signature = false)">{{ shorten(block.signature) }}</TD2>
					<TD2 v-else>{{ block.signature }}</TD2>
				</TableRow>
				<TableRow v-if="block">
					<TD1 class="w-60">Transactions</TD1>
					<TD2>{{ block.transactions.length }}</TD2>
				</TableRow>
				<TableRow v-if="block">
					<TD1 class="w-60">Stakes</TD1>
					<TD2>{{ block.stakes.length }}</TD2>
				</TableRow>
			</table>
		</Description>
		<Description>
            <div class="
                flex justify-center
                text-black
            ">Transactions</div>
        </Description>
		<Description>
			<Table v-if="block">
				<div v-if="!block.transactions.length" class="text-center italic">This block does not include any transactions.</div>
				<TableRow v-for="(hash, index) in block.transactions" :key="(hash, index)">
					<TD1>#{{ index }}</TD1>
					<TD2 class="justify-center">
						<router-link class="link" :to="('/transaction/' + hash)">{{ hash }}</router-link>
					</TD2>
				</TableRow>
			</Table>
		</Description>
		<Description>
            <div class="
                flex justify-center
                text-black
            ">Stakes</div>
        </Description>
		<Description>
			<Table v-if="block">
				<div v-if="!block.stakes.length" class="text-center italic">This block does not include any stakes.</div>
				<TableRow v-for="(hash, index) in block.stakes" :key="(hash, index)">
					<TD1>#{{ index }}</TD1>
					<TD2 class="justify-center">
						<router-link class="link" :to="('/stake/' + hash)">{{ hash }}</router-link>
					</TD2>
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
			block: null,
			height: null,
			shorten_hash: true,
			shorten_previous_hash: true,
			shorten_public_key: true,
			shorten_signature: true
		}
	},
	methods: {
		fetchData() {
			if (!this.hash) return
			fetch(window.localStorage.getItem("endpoint") + "/block/" + this.hash).then(res => res.json()).then(data => {
				this.block = data
			})
			fetch(window.localStorage.getItem("endpoint") + "/height/" + this.hash).then(res => res.json()).then(data => {
				this.height = data
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