<template>
	<Navbar />
	<Searchbar />
	<router-view />
	<div class="my-80"></div>
</template>
<script>
import init from "../pkg";
export default {
	mounted() {
		init().then((_exports) => console.log("init wasm"))
	}
}
</script>