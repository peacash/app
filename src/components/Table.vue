<style scoped>
    table {
        border-collapse: collapse;
        margin: 0 !important;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
    }
</style>
<template>
    <div class="p-2 rounded ring-1 ring-black ring-opacity-20">
        <table>
            <slot></slot>
        </table>
    </div>
</template>