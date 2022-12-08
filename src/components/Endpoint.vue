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
            <form @submit="add" class="flex gap-2">
                <input
                    v-model=endpoint
                    v-on:input="search"
                    name="endpoint"
                    ref="endpoint"
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
                        text-sm md:text-lg
                        w-24 sm:w-32 md:w-40
                        shadow
                        cursor-pointer
                    ">
            </form>
        </Description>
        <Description v-for="(host, index) in endpoints" :key="(host, index)">
            <div class="flex gap-2">
                <input
                    @input="update($event, index)"
                    :value=host
                    class="
                        text-black
                        rounded
                        w-full
                        shadow
                    "
                    type="text" placeholder="localhost:9332">
                <input
                    type="submit"
                    value="Remove"
                    @click="remove(index)"
                    class="
                        text-black
                        rounded
                        text-sm md:text-lg
                        w-24 sm:w-32 md:w-40
                        shadow
                        cursor-pointer
                    ">
            </div>
        </Description>
    </div>
</template>
<script>
export default {
	data() {
		return {
			endpoint: "",
            endpoints: []
		}
	},
	methods: {
        add(e) {
            e.preventDefault()
            if (!this.endpoint) {
                this.$refs.endpoint.focus()
                return
            }
            this.endpoints.unshift(this.endpoint)
            localStorage.setItem('endpoint', this.endpoint)
            localStorage.setItem('endpoints', JSON.stringify(this.endpoints))
            this.endpoint = ""
        },
        remove(index) {
            this.endpoints.splice(index, 1)
            localStorage.setItem('endpoints', JSON.stringify(this.endpoints))
        },
        update(e, index) {
            if (!e.target.value) {
                this.remove(index)
                return
            }
            this.endpoints[index] = e.target.value
            localStorage.setItem('endpoints', JSON.stringify(this.endpoints))
        },
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
        let endpoints = JSON.parse(localStorage.getItem("endpoints"))
        if (endpoints?.length) {
            this.endpoints = endpoints
        }
	}
}
</script>
