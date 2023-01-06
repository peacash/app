use sha2::{Digest, Sha256};
use wasm_bindgen::prelude::*;
fn timestamp() -> u32 {
    chrono::offset::Utc::now().timestamp() as u32
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
    let amount: u128 = match pea_int::from_str(amount) {
        Ok(x) => x,
        Err(err) => return err.to_string(),
    };
    let fee: u128 = match pea_int::from_str(fee) {
        Ok(x) => x,
        Err(err) => return err.to_string(),
    };
    let key = match pea_address::secret::decode(secret) {
        Ok(x) => pea_key::Key::from_slice(&x),
        Err(err) => return err.to_string(),
    };
    let transaction_a = pea_transaction::TransactionA::sign(output_address, amount, fee, timestamp(), &key).unwrap();
    match serde_json::to_string(&transaction_a.b()) {
        Ok(x) => x,
        Err(err) => err.to_string(),
    }
}
#[wasm_bindgen]
pub fn stake(deposit: bool, fee: &str, secret: &str) -> String {
    let fee: u128 = match pea_int::from_str(fee) {
        Ok(x) => x,
        Err(err) => return err.to_string(),
    };
    let key = match pea_address::secret::decode(secret) {
        Ok(x) => pea_key::Key::from_slice(&x),
        Err(err) => return err.to_string(),
    };
    let stake_a = pea_stake::StakeA::sign(deposit, fee, timestamp(), &key).unwrap();
    match serde_json::to_string(&stake_a.b()) {
        Ok(x) => x,
        Err(err) => err.to_string(),
    }
}
