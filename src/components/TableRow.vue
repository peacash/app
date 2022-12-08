<style scoped>
    tr:nth-child(4n + 2) {
        background-color: #f3fff3;
    }
    tr:nth-child(4n) {
        background-color: #fff6ff;
    }
</style>
<template>
    <tr class="flex w-full">
        <slot></slot>
    </tr>
</template>