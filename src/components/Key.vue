<template>
	<div class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
        <input v-model="public" type="text">
        <input v-model="secret" type="text">
	</div>
</template>
<script>
import util from "../util.ts"
export default {
    props: {
        secret: String
    },
    data() {
        return {
            public: null
        }
    }
	methods: {
		public() {
            this.public = util.public(secret)
		}
	}
}
</script>