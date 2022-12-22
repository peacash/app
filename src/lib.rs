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
    pea_address::secret::encode(&key.secret_key())
}

#[wasm_bindgen]
pub fn address(secret: &str) -> String {
    let key = match pea_address::secret::decode(secret) {
        Ok(a) => pea_key::Key::from_secret_key_bytes(&a),
        Err(err) => return err.to_string(),
    };
    pea_address::address::encode(&key.address())
}

#[wasm_bindgen]
pub fn transaction(address: &str, amount: &str, fee: &str, secret: &str) -> String {
    let output_address = match pea_address::address::decode(address) {
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
    let key = match pea_address::secret::decode(secret) {
        Ok(a) => pea_key::Key::from_secret_key_bytes(&a),
        Err(err) => return err.to_string(),
    };
    let timestamp = pea_core::util::timestamp();
    let mut transaction =
        pea_transaction::Transaction::new(output_address, amount, fee, timestamp);
    transaction.sign(&key);
    match transaction.validate() {
        Ok(()) => {}
        Err(err) => return err.to_string(),
    }
    match bincode::serialize(&transaction) {
        Ok(a) => hex::encode(&a),
        Err(err) => err.to_string(),
    }
}

#[wasm_bindgen]
pub fn stake(deposit: bool, amount: &str, fee: &str, secret: &str) -> String {
    let amount: u128 = match pea_int::from_string(amount) {
        Ok(a) => a,
        Err(err) => return err.to_string(),
    };
    let fee: u128 = match pea_int::from_string(fee) {
        Ok(a) => a,
        Err(err) => return err.to_string(),
    };
    let key = match pea_address::secret::decode(secret) {
        Ok(a) => pea_key::Key::from_secret_key_bytes(&a),
        Err(err) => return err.to_string(),
    };
    let timestamp = pea_core::util::timestamp();
    let mut stake = pea_stake::Stake::new(deposit, amount, fee, timestamp);
    stake.sign(&key);
    match stake.validate() {
        Ok(()) => {}
        Err(err) => return err.to_string(),
    }
    match bincode::serialize(&stake) {
        Ok(a) => hex::encode(&a),
        Err(err) => err.to_string(),
    }
}

#[wasm_bindgen]
pub fn format_int(str: &str) -> String {
    let num: u128 = match str.parse() {
        Ok(a) => a,
        Err(err) => return err.to_string(),
    };
    pea_int::to_string(num as u128)
}
