<style scoped>
	.link {
		text-decoration: none;
	}
	.green:hover {
        background-color: #ccffcc66;
		box-shadow: 0 0 1rem 1rem #ccffcc33;
    }
	.secret:hover {
        background-color: #fcc;
    }
    input, textarea {
        border: none;
    }
	.qr {
		transition: 150ms ease-in-out;
		cursor: pointer;
		user-select: none;
	}
</style>
<template>
	<Address v-if="public" :address="public" />
	<div class="flex flex-col gap-10 md:gap-20 my-10 md:my-20 w-full">
		<div v-if="big_qr" @click="big_qr = !big_qr" class="w-full h-full absolute top-0 left-0" style="background-color: #ffffffee;">
			<QR :text="'http://app.pea.cash/#/wallet?output=' + public" style="max-width: 40rem; position: absolute; cursor: pointer; user-select: none;" class="p-5 w-full sm:top-1/2 sm:-translate-y-1/2 left-1/2 -translate-x-1/2" />
		</div>
		<QR @click="big_qr = !big_qr" :text="'http://app.pea.cash/#/wallet?output=' + public" class="w-20 m-0 mx-auto green qr" />
		<Description>
			<form @submit="transaction_send" class="flex flex-col gap-2 sm:gap-2 md:gap-10">
				<input v-model="transaction_output" type="text" placeholder="tx output" class="
					text-black
					rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
					w-full
				">
				<input v-model="transaction_amount" type="text" placeholder="tx amount" class="
					text-black
					rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
					w-full
				">
				<input v-model="transaction_fee" type="text" placeholder="tx fee" class="
					text-black
					rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
					w-full
				">
				<input
					type="submit"
					value="Send Tx"
					class="
						text-black
						rounded
						text-sm md:text-lg
						w-24 sm:w-32 md:w-40
						h-10
						mx-auto
						ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
						cursor-pointer
					">
				<textarea disabled v-if="transaction" v-model="transaction" rows="2" class="
					text-black
					rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
					w-full
				"></textarea>
			</form>
		</Description>
		<Description>
			<form @submit="stake_send" class="flex flex-col gap-2 sm:gap-2 md:gap-10">
				<input v-model="stake_fee" type="text" placeholder="stake fee" class="
                    text-black
                    rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                    w-full
                ">
				<input
					@click="(stake_deposit = !stake_deposit)"
					@input="(stake_deposit = !stake_deposit)"
					:value="stake_deposit ? 'Deposit' : 'Withdraw'" type="text" placeholder="stake fee" class="
                    text-black
                    rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                    w-full
					cursor-pointer
                ">
				<input
					type="submit"
					value="Send Stake"
					class="
						text-black
						rounded
						text-sm md:text-lg
						w-24 sm:w-32 md:w-40
						h-10
						mx-auto
						ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
						cursor-pointer
					">
				<textarea disabled v-if="stake" v-model="stake" rows="2" class="
					text-black
                    rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                    w-full
				"></textarea>
			</form>
		</Description>
		<Description>
			<form @submit="remove" class="flex flex-col gap-2 sm:gap-2 md:gap-10">
				<input disabled v-model="secret" type="text" class="
					secret
                    text-black
                    rounded
					ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                    w-full
                ">
				<input
					type="submit"
					value="Remove"
					class="
						text-black
						rounded
						text-sm md:text-lg
						w-24 sm:w-32 md:w-40
						h-10
						mx-auto
						ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
						cursor-pointer
					">
			</form>
		</Description>
	</div>
</template>
<script>
import util from "../util.ts"
export default {
	data() {
		return {
            secret: null,
			public: null,
			transaction: "",
			transaction_output: this.$route.query.output,
			transaction_amount: this.$route.query.amount,
			transaction_fee: this.$route.query.fee,
			stake: "",
			stake_deposit: true,
			stake_fee: "",
			big_qr: false
		}
	},
	mounted() {
		document.title = "Wallet - Pea"
		this.load()
    },
	methods: {
		load() {
			this.secret = window.localStorage.getItem("secret")
			if (this.secret == null) {
				this.secret = util.generate_secret()
				window.localStorage.setItem("secret", this.secret)
			}
			this.public = util.public(this.secret)
		},
		remove(e) {
			e.preventDefault()
			window.localStorage.removeItem("secret")
			this.load()
		},
		transaction_sign() {
			this.transaction = util.transaction(this.transaction_output, this.transaction_amount, this.transaction_fee, this.secret)
		},
		stake_sign() {
			this.stake = util.stake(this.stake_deposit, this.stake_fee, this.secret)
			this.stake_confirm = true
		},
		transaction_send(e) {
            e.preventDefault()
			this.transaction_sign()
			fetch(window.localStorage.getItem("url") + "/transaction", {
				method: "POST",
				body: this.transaction
			}).then(res => res.json()).then(data => {
				this.transaction = data
			})
		},
		stake_send(e) {
			e.preventDefault()
			this.stake_sign()
			this.stake_confirm = false
			fetch(window.localStorage.getItem("url") + "/stake", {
				method: "POST",
				body: this.stake
			}).then(res => res.json()).then(data => {
				this.stake = data
			})
		}
	}
}
</script>