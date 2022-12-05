<style scoped>
	.link {
		text-decoration: none;
	}
</style>
<template>
    <Description>
        <div class="flex gap-2 justify-center">
            <router-link class="link" to="/wallet/balance">
                <Button>Balance</Button>
            </router-link>
            <router-link class="link" to="/wallet/receive">
                <Button>Receive</Button>
            </router-link>
            <router-link class="link" to="/wallet/send">
                <Button>Send</Button>
            </router-link>
            <router-link class="link" to="/wallet/stake">
                <Button>Stake</Button>
            </router-link>
            <router-link class="link" to="/wallet/key">
                <Button>Key</Button>
            </router-link>
        </div>
    </Description>
</template>
<script>
export default {
	props: {
        show: Boolean
    }
}
</script>