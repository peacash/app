import { address, secret } from "../pkg";
export default {
    generate_secret: () => {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return secret(array)
    },
    public: (secret: string) => {
        return address(secret)
    },
} 