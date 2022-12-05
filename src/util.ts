import { address, secret, transaction, stake } from "../pkg";
export default {
    generate_secret: () => {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return secret(array)
    },
    public: (secret: string) => {
        return address(secret)
    },
    transaction: (address: string, amount: string, fee: string, secret: string) => {
        return transaction(address, amount, fee, secret)
    },
    stake: (deposit: boolean, amount: string, fee: string, secret: string) => {
        return stake(deposit, amount, fee, secret)
    }
}