<style scoped>
    input:hover {
        background-color: #f9f9f9;
    }
    input {
        border: none;
    }
</style>
<template>
    <div class="flex flex-col gap-2 my-2 w-full">
        <Description>
            <label for="endpoint" class="text-sm ml-1">Endpoint</label>
            <form on-submit="" class="flex gap-2">
                <input
                    v-model=endpoint
                    v-on:input="search"
                    name="endpoint"
                    class="
                        text-black
                        rounded
                        w-full
                        shadow
                    "
                    type="text" placeholder="localhost:9332">
                <input
                    type="submit"
                    value="Add"
                    class="
                        text-black
                        rounded
                        px-10
                        md:px-20
                        shadow
                        cursor-pointer
                    ">
            </form>
        </Description>
    </div>
</template>
<script>
export default {
	data() {
		return {
			endpoint: ""
		}
	},
	methods: {
		search() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                localStorage.setItem('api', this.api_value)
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
