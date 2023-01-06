mod utils;
use pea_core::constants::DECIMAL_PLACES;
use sha2::{Digest, Sha256};
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
    let mut hasher = Sha256::new();
    hasher.update(input);
    let hash = hasher.finalize();
    let key = pea_key::Key::from_slice(&hash.into());
    pea_address::secret::encode(&key.secret_key_bytes())
}

#[wasm_bindgen]
pub fn address(secret: &str) -> String {
    let key = match pea_address::secret::decode(secret) {
        Ok(x) => pea_key::Key::from_slice(&x),
        Err(err) => return err.to_string(),
    };
    pea_address::address::encode(&key.address_bytes())
}

#[wasm_bindgen]
pub fn transaction(address: &str, amount: &str, fee: &str, secret: &str) -> String {
    let output_address = match pea_address::address::decode(address) {
        Ok(x) => x,
        Err(err) => return err.to_string(),
    };
    let amount: u128 = match pea_int::from_str(amount, DECIMAL_PLACES) {
        Ok(x) => x,
        Err(err) => return err.to_string(),
    };
    let fee: u128 = match pea_int::from_str(fee, DECIMAL_PLACES) {
        Ok(x) => x,
        Err(err) => return err.to_string(),
    };
    let key = match pea_address::secret::decode(secret) {
        Ok(x) => pea_key::Key::from_slice(&x),
        Err(err) => return err.to_string(),
    };
    let timestamp = pea_core::util::timestamp();
    let transaction_a =
        pea_transaction::TransactionA::sign(output_address, amount, fee, timestamp, &key).unwrap();
    match bincode::serialize(&transaction_a.b()) {
        Ok(x) => hex::encode(&x),
        Err(err) => err.to_string(),
    }
}

#[wasm_bindgen]
pub fn stake(deposit: bool, fee: &str, secret: &str) -> String {
    let fee: u128 = match pea_int::from_str(fee, DECIMAL_PLACES) {
        Ok(x) => x,
        Err(err) => return err.to_string(),
    };
    let key = match pea_address::secret::decode(secret) {
        Ok(x) => pea_key::Key::from_slice(&x),
        Err(err) => return err.to_string(),
    };
    let timestamp = pea_core::util::timestamp();
    let stake_a = pea_stake::StakeA::sign(deposit, fee, timestamp, &key).unwrap();
    match bincode::serialize(&stake_a.b()) {
        Ok(x) => hex::encode(&x),
        Err(err) => err.to_string(),
    }
}
