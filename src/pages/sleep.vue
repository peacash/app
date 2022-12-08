<style scoped>
    div {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
        user-select: none;
        background-color: #000000;
    }
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 60rem;
        animation: img 10s infinite ease-in-out;
    }
    @keyframes img {
        0% {
            opacity: 0;
        }
        10% {
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
<script>
export default {
    mounted() {
        document.title = "Sleep - Pea"
    }
}
</script>