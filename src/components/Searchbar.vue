<style scoped>
    input:hover {
        background-color: #efe;
    }
    input {
        border: none;
    }
</style>
<template>
    <div class="flex flex-col gap-2 my-2 w-full">
        <Description>
            <input
                v-model=search_value
                ref="search"
                v-on:input="search"
                class="
                    text-black
                    rounded
                    w-full
                    shadow
                "
                type="text" placeholder="Search Blockchain, Transactions, Addresses, Blocks and Stakes">
        </Description>
    </div>
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
