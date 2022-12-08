<style scoped>
    input {
        background-color: #ffffff;
    }
    input:hover {
        background-color: #f9f9f9;
    }
    input {
        border: none;
    }
</style>
<template>
    <div class="flex flex-col gap-2 w-full">
        <Description>
            <div class="
                flex justify-center
                text-black
                rounded
                w-full
            ">{{ endpoint ? "Now using - " + endpoint : "Configure an API endpoint to use." }}</div>
        </Description>
        <Description class="mb-8">
            <form @submit="add" class="flex gap-2">
                <input
                    v-model=endpoint_input
                    ref="endpoint_input"
                    class="
                        text-black
                        rounded
                        w-full
                        shadow
                    "
                    type="text" placeholder="http://0.0.0.0:9332">
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
                    @click="select(index)"
                    @keydown="select_enter($event, index)"
                    @input="update($event, index)"
                    :value=host
                    class="
                        text-black
                        rounded
                        w-full
                        shadow
                    "
                    type="text" placeholder="localhost:9332">
            </div>
        </Description>
    </div>
</template>
<script>
export default {
	data() {
		return {
			endpoint_input: "",
			endpoint: localStorage.getItem("endpoint"),
            endpoints: []
		}
	},
	methods: {
        add(e) {
            e.preventDefault()
            if (!this.endpoint_input || this.endpoints.includes(this.endpoint_input)) {
                this.$refs.endpoint_input.focus()
                return
            }
            this.endpoint = this.endpoint_input
            this.endpoints.unshift(this.endpoint)
            localStorage.setItem('endpoint', this.endpoint_input)
            localStorage.setItem('endpoints', JSON.stringify(this.endpoints))
            this.endpoint_input = ""
        },
        remove(index) {
            let endpoint = this.endpoints[index]
            this.endpoints.splice(index, 1)
            localStorage.setItem('endpoints', JSON.stringify(this.endpoints))
            if (this.endpoint == endpoint) {
                this.endpoint = null
                localStorage.removeItem('endpoint')
            }
        },
        select(index) {
            let endpoint = this.endpoints[index]
            localStorage.setItem('endpoint', endpoint)
            this.endpoint = endpoint
        },
        select_enter(e, index) {
            if (e.key != "Enter") {
                return
            }
            let endpoint = this.endpoints[index]
            localStorage.setItem('endpoint', endpoint)
            this.endpoint = endpoint
        },
        update(e, index) {
            if (!e.target.value) {
                this.remove(index)
                this.$refs.endpoint_input.focus()
                return
            }
            this.endpoints[index] = e.target.value
            localStorage.setItem('endpoints', JSON.stringify(this.endpoints))
        }
	},
	mounted() {
        console.log(this.endpoint)
        let endpoints = JSON.parse(localStorage.getItem("endpoints"))
        if (endpoints?.length) {
            this.endpoints = endpoints
        }
	}
}
</script>
