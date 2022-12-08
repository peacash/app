<template>
    <div class="text-center" style="color: #f00;">Endpoint <i>{{ endpoint }}</i> seems unresponsive.</div>
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
            endpoint: localStorage.getItem("endpoint"),
			https: window.location.protocol === "https:",
			host: window.location.host
		}
	}
}
</script>