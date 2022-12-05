mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn secret(input: &[u8]) -> String {
    let hash = pea_core::util::hash(input);
    let key = pea_key::Key::from_secret_key_bytes(&hash);
    key.secret()
}

#[wasm_bindgen]
pub fn address(secret_key: &str) -> String {
    let key = match pea_address::secret::decode(secret_key) {
        Ok(a) => pea_key::Key::from_secret_key_bytes(&a),
        Err(err) => return err.to_string(),
    };
    key.public()
}

#[wasm_bindgen]
pub fn transaction(address: &str, amount: &str, fee: &str, secret_key: &str) -> String {
    let public_key_bytes = match pea_address::public::decode(address) {
        Ok(a) => a,
        Err(err) => return err.to_string(),
    };
    let amount: u128 = match pea_int::from_string(amount) {
        Ok(a) => a,
        Err(err) => return err.to_string(),
    };
    let fee: u128 = match pea_int::from_string(fee) {
        Ok(a) => a,
        Err(err) => return err.to_string(),
    };
    let key = match pea_address::secret::decode(secret_key) {
        Ok(a) => pea_key::Key::from_secret_key_bytes(&a),
        Err(err) => return err.to_string(),
    };
    let timestamp = pea_core::util::timestamp();
    let mut transaction =
        pea_transaction::Transaction::new(public_key_bytes, amount, fee, timestamp);
    transaction.sign(&key);
    match serde_json::to_string(&transaction) {
        Ok(a) => a,
        Err(err) => err.to_string(),
    }
}
