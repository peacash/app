<style scoped>
    div {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>
<template>
    <div class="flex justify-center w-full p-2 gap-10 sm:hidden">
        <router-link class="w-full" to="/">
            <Button class="h-32 w-full">Home</Button>
        </router-link>
        <router-link class="w-full" to="/explorer">
            <Button class="h-32 w-full">Explorer</Button>
        </router-link>
        <router-link class="w-full" to="/wallet">
            <Button class="h-32 w-full">Wallet</Button>
        </router-link>
    </div>
</template>