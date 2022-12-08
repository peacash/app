<style scoped>
    table {
        border-collapse: collapse;
        margin: 0 !important;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
    }
</style>
<template>
    <div class="p-2 rounded sm:ring-1 sm:ring-black sm:ring-opacity-20">
        <table>
            <slot></slot>
        </table>
    </div>
</template>