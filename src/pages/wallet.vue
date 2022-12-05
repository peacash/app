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
    input {
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
			public: null
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
		}
	}
}
</script>