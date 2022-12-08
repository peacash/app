<template>
    <div class="text-center">Endpoint <i>{{ endpoint }}</i> seems unresponsive.</div>
    <div v-if="https" class="text-center">
        Try the
        <a :href="'http://' + host">http version</a>
        of this website.
    </div>
</template>
<script>
export default {
    props: {
        endpoint: String
    },
    data() {
		return {
			https: window.location.protocol === "https:",
			host: window.location.host
		}
	}
}
</script>