<template>
	<div class="flex flex-col gap-2 md:gap-10 my-2 md:my-10 w-full">
		<Description class="text-center">
			<h2 style="font-weight: 300;">Search</h2>
			<h4 class="uppercase pb-12" style="font-weight: 600;">{{ $route.params.search }}</h4>
			<div v-if="failed" class="italic">We couldn’t find what you are looking for.</div>
		</Description>
	</div>
</template>
<script>
export default {
    data() {
		return {
			failed: false,
			url: null,
			timeout: false
		}
	},
	methods: {
		fetchData() {
			let url = window.localStorage.getItem("url");
			if (!url) return
			let search = this.$route.params.search
			if (!search) {
				return
			}
			search = search.toLowerCase()
			if (["h", "ho", "hom", "home"].includes(search)) {
				this.$router.replace('/')
				return
			}
			if (["w", "wa", "wal", "wall", "walle", "wallet"].includes(search)) {
				this.$router.replace('/wallet')
				return
			}
			if (["se", "set", "sett", "setti", "settin", "setting", "settings"].includes(search)) {
				this.$router.replace('/settings')
				return
			}
			if (["l", "la", "lat", "late", "lates", "latest", "recent", "blocks"].includes(search)) {
				this.$router.replace('/latest')
				return
			}
			if (["st", "sta", "stak", "stake", "staker", "stakers"].includes(search)) {
				this.$router.replace('/stakers')
				return
			}
			if (["p", "pe", "pee", "peer", "peers"].includes(search)) {
				this.$router.replace('/peers')
				return
			}
			if (["r", "ra", "ran", "rand", "rando", "random"].includes(search)) {
				this.$router.replace('/random')
				return
			}
			if (search === parseInt(search).toString() && parseInt(search) !== NaN) {
				fetch(url + "/hash/" + search).then(res => res.json()).then(data => {
					this.$router.replace('/block/' + data)
				}).catch(() => {
					this.failed = true
				})
				return
			}
			if (search.toLowerCase().startsWith('0x')) {
				fetch(url + "/balance/" + search).then(res => res.json()).then(data => {
					this.$router.replace('/address/' + search)
				}).catch(() => {
					this.failed = true
				})
				return
			}
			fetch(url + "/block/" + search).then(res => res.json()).then(data => {
				this.$router.replace('/block/' + search)
			}).catch(() => {
				fetch(url + "/transaction/" + search).then(res => res.json()).then(data => {
					this.$router.replace('/transaction/' + search)
				}).catch(() => {
					fetch(url + "/stake/" + search).then(res => res.json()).then(data => {
						this.$router.replace('/stake/' + search)
					}).catch(() => {
						this.failed = true
					})
				})
			})
		}
	},
    mounted() {
		document.title = "Search - Explorer - Pea";
		this.fetchData();
		setTimeout(() => {
			this.timeout = true
		}, 200)
    },
	watch: {
		'$route.params': {
			handler() {
				this.fetchData()
			},
			immediate: true,
		}
	}
}
</script>