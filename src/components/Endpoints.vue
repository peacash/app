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
            <input
                :value="url ? url : 'Configure an API endpoint to use.'"
                disabled
                class="
                    text-black
                    rounded
                    mx-auto
                    w-full
                    flex
                    ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                    text-center
                "
                :class="
                    (map.get(url)?.status ? 'green' : 'red')
                " style="font-weight: 600; max-width: 20rem;"
                type="text" placeholder="http://0.0.0.0:9332">
        </Description>
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
            <div class="flex flex-col gap-2 sm:gap-2 md:gap-10">
                <div v-for="(u, index) in urls" :key="(u, index)">
                    <input
                        @click="select(index)"
                        @keydown="select_enter($event, index)"
                        @input="update($event, index)"
                        :value=u
                        :name=u
                        class="
                            text-black
                            rounded
                            w-full
                            ring-1 ring-black ring-opacity-10 sm:ring-opacity-20
                        "
                        :class="(map.get(u)?.status ? 'green' : 'red') + ' ' + (u === url ? 'blue ring-opacity-50 sm:ring-opacity-60' : '')"
                        type="text">
                    <label v-if="map.get(u)?.status" :for=u class="
                        text-xs lg:text-sm
                        h-1 lg:h-2
                        ml-1
                    ">Synchronization {{ map.get(u).status }}. Block {{ map.get(u).height }} seen {{ map.get(u).last_seen }}.</label>
                </div>
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
			}, 1000);
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
                    this.map.set(url, err.toString())
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
