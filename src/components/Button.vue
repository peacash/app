<style scoped>
    button {
        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: .25rem;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.2) 0 1px 4px,rgba(45, 35, 66, 0.1) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow 100ms,transform 100ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
    }
    button:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.2) 0 2px 4px, rgba(45, 35, 66, 0.1) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }
    button:hover {
        box-shadow: rgba(45, 35, 66, 0.2) 0 3px 8px, rgba(45, 35, 66, 0.1) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }
    button:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
</style>
<template>
    <button class="
        py-3 sm:py-4
        px-2 sm:px-6 lg:px-8
        text-xs sm:text-sm md:text lg:text-lg
    ">
        <slot></slot>
    </button>
</template>