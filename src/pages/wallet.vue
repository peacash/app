<style scoped>
	.link {
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
<template>
	<div class="flex flex-col gap-2 my-2 mt-12 w-full">
		<Description>
            <div class="flex gap-2 justify-center">
                <Button @click="generate_new()">Generate New</Button>
                <Button @clijck="import_secret()">Import</Button>
            </div>
		</Description>
		<Description>
            <div class="flex gap-2 justify-center">
                <Button>Send</Button>
                <Button>Stake</Button>
				<router-link v-if="public" class="link" :to="('/address/' + public)">
                    <Button>Balance</Button>
                </router-link>
            </div>
		</Description>
		<Description>
            <div class="flex flex-col gap-2 justify-center">
                <Button>{{ secret }}</Button>
                <Button>{{ public }}</Button>
            </div>
		</Description>
        <Address v-if="public" :address="public" />
	</div>
</template>
<script>
import { address, secret } from "../../pkg";
export default {
    data() {
		return {
            secret: "",
			public: "",
		}
	},
    mounted() {
		document.title = "Explorer - Pea";
    },
	unmounted() {
		clearInterval(this.interval)
	},
	methods: {
        generate_new() {
            const array = new Uint32Array(32);
            crypto.getRandomValues(array);
            let s = secret(array);
            this.secret = s;
            this.public = address(s);
        },
        import_secret() {

        }
	},
}
</script>