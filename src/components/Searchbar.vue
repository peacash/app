<template>
    <Description class="my-10">
        <input
            v-model=search_value
            ref="search"
            v-on:input="search"
            class="
                text-black
                rounded
                w-full
                ring-1 ring-black ring-opacity-20
            "
            type="text" placeholder="Search Blockchain, Transactions, Addresses, Blocks and Stakes">
    </Description>
</template>
<script>
export default {
	data() {
		return {
			search_value: this.$route.params.search || ""
		}
	},
	methods: {
		search() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                if (this.search_value.trim()) {
                    this.search_value = this.search_value.trim()
                    this.$router.push('/search/' + this.search_value)
                }
                else this.$router.push('/')
            }, 250)
		}
	},
	mounted() {
		this.$refs.search.focus()
	}
}
</script>
