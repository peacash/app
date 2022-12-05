<style scoped>
    table {
        border-collapse: collapse;
    }
</style>
<template>
    <div class="bg-white p-2 rounded">
        <Bar v-if="bar" />
        <table>
            <slot></slot>
        </table>
    </div>
</template>
<script>
export default {
    props: {
		bar: Boolean
	}
}
</script>