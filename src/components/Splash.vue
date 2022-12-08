<style scoped>
    div {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 100;
        animation: a 2.5s;
        visibility: hidden;
        user-select: none;
    }
    img {
        width: 100%;
        max-width: 60rem;
    }
    @keyframes a {
        0% {
            opacity: 1;
            visibility: visible;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            visibility: hidden;
        }
    }
</style>
<template>
    <div class="flex jusfity-center bg-white">
        <img class="p-10 mx-auto" src="/peacash.svg" alt="">
    </div>
</template>