<template>
	<Navbar />
	<Searchbar />
	<router-view />
</template>
<script>
import init from "../pkg";
export default {
	mounted() {
		init().then((_exports) => console.log("init wasm"))
	}
}
</script>