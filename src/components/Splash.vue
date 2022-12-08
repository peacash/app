<style scoped>
    div {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 100;
        animation: div 1s;
        user-select: none;
        background-color: #ffffff;
        visibility: hidden;
    }
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        animation: img 750ms 250ms;
        max-width: 60rem;
    }
    @keyframes div {
        0% {
            opacity: 1;
            visibility: visible;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes img {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        60% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
<template>
    <div>
        <img class="p-10" src="/peacash-green.svg" alt="">
    </div>
</template>