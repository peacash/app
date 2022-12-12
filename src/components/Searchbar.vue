<style scoped>
	.green {
		background-color: #efe;
	}
	.red {
		background-color: #fee;
	}
</style>
<template>
    <Description class="my-2 md:my-10">
        <input
            @input="search"
            @click="search"
            @keydown="search"
            v-model=search_value
            ref="search"
            class="
                text-black
                rounded
                w-full
                ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
            "
            :class="
                ip4 === 1 ? 'green' : ip4 === 2 ? 'red' : ''
            "
            :title="
                ip4 === 1 ? 'Success' : ip4 === 2 ? 'Fail' : ''
            "
            type="text" placeholder="Search Blockchain, Transactions, Addresses, Blocks and Stakes">
    </Description>
</template>
<script>
export default {
	data() {
		return {
            ip4: 0,
			search_value: this.$route.params.search || ""
		}
	},
	methods: {
		search(e) {
            if (e.type === "keydown" && e.key != "Enter") {
                return
            }
            if (e.type === "click" && !e.target.value) {
                return
            }
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.ip4 = 0
                if (this.search_value.trim()) {
                    this.search_value = this.search_value.trim()
                    if (this.search_value.startsWith("/ip4")) {
                        fetch(window.localStorage.getItem("url") + "/peer" + this.search_value).then(res => res.text()).then(data => {
                            this.ip4 = 1
                        }).catch(err => {
                            this.ip4 = 2
                        })
                        return
                    }
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
