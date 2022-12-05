<style scoped>
	.link {
		text-decoration: none;
	}
	.public:hover {
        background-color: #cfc;
    }
	.secret:hover {
        background-color: #fcc;
    }
    input, textarea {
        border: none;
    }
</style>
<template>
	<Address v-if="public" :address="public" />
	<div class="flex flex-col gap-2 my-2 w-full">
		<Description>
			<div class="flex gap-2 justify-center">
				<Button @click="view = 'receive'">Receive</Button>
				<Button @click="view = 'send'">Send</Button>
				<Button @click="view = 'stake'">Stake</Button>
				<Button @click="view = 'secret'">Secret</Button>
			</div>
		</Description>
		<Description v-if="(view == 'receive' && public)" >
			<div class="flex flex-col gap-2 mx-auto">
				<input disabled v-model="public" type="text" class="
					public
                    text-black
                    rounded
                    w-full
                ">
			</div>
		</Description>
		<Description v-if="(view == 'send' && secret)" >
			<div class="flex flex-col gap-2 mx-auto">
				<input v-model="transaction_output" type="text" placeholder="output address" class="
                    text-black
                    rounded
                    w-full
                ">
				<input v-model="transaction_amount" type="text" placeholder="amount" class="
                    text-black
                    rounded
                    w-full
                ">
				<input v-model="transaction_fee" type="text" placeholder="fee" class="
                    text-black
                    rounded
                    w-full
                ">
				<div class="flex justify-center gap-2">
					<Button @click="transaction_sign()" v-if="!transaction_confirm">Sign Transaction</Button>
					<Button @click="transaction_send()" v-else>Confirm send Transaction</Button>
				</div>
				<textarea disabled v-if="transaction_confirm" v-model="transaction" cols="30" rows="7" class="
					text-black
                    rounded
                    w-full
				"></textarea>
			</div>
		</Description>
		<Description v-if="(view == 'stake' && secret)" >
			<div class="flex flex-col gap-2 mx-auto">
				<input v-model="stake_amount" type="text" placeholder="amount" class="
                    text-black
                    rounded
                    w-full
                ">
				<input v-model="stake_fee" type="text" placeholder="fee" class="
                    text-black
                    rounded
                    w-full
                ">
				<div class="flex justify-center gap-2">
					<Button @click="(stake_deposit = !stake_deposit)">{{ stake_deposit ? "Deposit" : "Withdraw" }}</Button>
					<Button @click="stake_sign()" v-if="!stake_confirm">Sign Stake</Button>
					<Button @click="stake_send()" v-else>Confirm send Stake</Button>
				</div>
				<textarea disabled v-if="stake_confirm" v-model="stake" cols="30" rows="5" class="
					text-black
                    rounded
                    w-full
				"></textarea>
				<textarea disabled v-if="stake_res" v-model="stake_res" cols="30" rows="5" class="
					text-black
                    rounded
                    w-full
				"></textarea>
			</div>
		</Description>
		<Description v-else-if="(view == 'secret' && secret)" >
			<div class="flex flex-col gap-2">
				<input disabled v-model="secret" type="text" class="
					secret
                    text-black
                    rounded
                    w-full
                ">
				<Button class="mx-auto" v-if="secret" @click="remove()">Remove</Button>
			</div>
		</Description>
	</div>
</template>
<script>
import util from "../util.ts"
export default {
	data() {
		return {
			view: "receive",
            secret: null,
			public: null,
			transaction: false,
			transaction_confirm: "",
			transaction_output: "",
			transaction_amount: "",
			transaction_fee: "",
			transaction_res: null,
			stake: "",
			stake_confirm: false,
			stake_deposit: true,
			stake_amount: "",
			stake_fee: "",
			stake_res: null
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
		remove() {
			window.localStorage.removeItem("secret")
			this.load()
		},
		transaction_sign() {
			this.transaction = util.transaction(this.transaction_output, this.transaction_amount, this.transaction_fee, this.secret)
			this.transaction_confirm = true
		},
		stake_sign() {
			this.stake = util.stake(this.stake_deposit, this.stake_amount, this.stake_fee, this.secret)
			this.stake_confirm = true
		},
		transaction_send() {
			this.transaction_sign()
			this.transaction_confirm = false
			fetch(window.localStorage.getItem("api") + "/transaction", {
				method: "POST",
				body: this.transaction
			}).then(res => res.text()).then(data => {
				this.transaction_res = data
			})
		},
		stake_send() {
			this.stake_sign()
			this.stake_confirm = false
			fetch(window.localStorage.getItem("api") + "/stake", {
				method: "POST",
				body: this.stake
			}).then(res => res.text()).then(data => {
				this.stake_res = data
			})
		}
	}
}
</script>