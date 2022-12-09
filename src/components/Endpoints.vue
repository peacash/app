<style scoped>
    .green.blue {
        background-color: #eff;
    }
    .red.blue {
        background-color: #fef;
    }
	.green {
		background-color: #efe;
	}
	.red {
		background-color: #fee;
	}
    .blue {
        background-color: #eef;
    }
</style>
<template>
    <div class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
        <Description>
            <form @submit="add" class="flex gap-2 md:gap-2 md:gap-10">
                <input
                    v-model=url_input
                    ref="url_input"
                    class="
                        text-black
                        rounded
                        ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                        w-full
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
                        ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                        cursor-pointer
                    ">
            </form>
        </Description>
        <Description>
            <div class="
                flex justify-center
                text-black
            ">{{ url ? "Now using - " + url : "Configure an API endpoint to use." }}</div>
        </Description>
        <Description>
            <div class="flex flex-col gap-2 sm:gap-2 md:gap-10">
                <input v-for="(u, index) in urls" :key="(u, index)"
                    @click="select(index)"
                    @keydown="select_enter($event, index)"
                    @input="update($event, index)"
                    :value=u
                    class="
                        text-black
                        rounded
                        w-full
                        sm:ring-1 sm:ring-black sm:ring-opacity-20
                    "
                    :class="(map.get(u)?.sync ? 'green' : 'red') + ' ' + (u === url ? 'blue' : '')"
                    type="text">
            </div>
        </Description>
    </div>
</template>
<script>
export default {
	data() {
		return {
			url_input: "",
			url: "",
            urls: [],
            map: new Map()
		}
	},
	methods: {
        add(e) {
            e.preventDefault()
            let url = this.url_input
            if (!url || this.urls.includes(url)) {
                this.$refs.url_input.focus()
                return
            }
            this.url = url
            this.urls.unshift(url)
            localStorage.setItem('url', url)
            localStorage.setItem('urls', JSON.stringify(this.urls))
            this.url_input = ""
        },
        remove(index) {
            let url = this.urls[index]
            this.urls.splice(index, 1)
            localStorage.setItem('urls', JSON.stringify(this.urls))
            if (this.url == url) {
                this.url = null
                localStorage.removeItem('url')
            }
        },
        select(index) {
            let url = this.urls[index]
            localStorage.setItem('url', url)
            this.url = url
        },
        select_enter(e, index) {
            if (e.key != "Enter") {
                return
            }
            this.select(index)
        },
        update(e, index) {
            if (!e.target.value) {
                this.remove(index)
                this.$refs.url_input.focus()
                return
            }
            this.urls[index] = e.target.value
            localStorage.setItem('urls', JSON.stringify(this.urls))
        },
		loop() {
			this.fetchData();
			this.interval = setInterval(() => {
				this.fetchData()
			}, 3000);
		},
		fetchData() {
			let urls = JSON.parse(window.localStorage.getItem("urls"))
			if (!urls?.length) return
			for (let url of urls) {
                if (!this.map.has(url)) {
                    this.map.set(url, null)
                }
				fetch(url + "/sync").then(res => res.json()).then(data => {
                    this.map.set(url, data)
				}).catch(err => {
                    this.map.set(url, null)
				})
			}
		}
	},
	mounted() {
        this.url = localStorage.getItem("url")
        let urls = JSON.parse(localStorage.getItem("urls"))
        if (urls?.length) {
            this.urls = urls
        }
		this.loop();
    },
	unmounted() {
		clearInterval(this.interval)
	},
}
</script>
