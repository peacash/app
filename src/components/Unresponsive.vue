<style scoped>
	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
<template>
    <div class="text-center" style="color: #f00;">Endpoint <a :href=url><i>{{ url }}</i></a> seems unresponsive!</div>
    <div v-if="https" class="text-center">
        Try the
        <a :href="'http://' + host">http version</a>
        of this website.
    </div>
</template>
<script>
export default {
    data() {
		return {
            url: localStorage.getItem("url"),
			https: window.location.protocol === "https:",
			host: window.location.host
		}
	}
}
</script>