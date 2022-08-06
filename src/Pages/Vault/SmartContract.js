const nearAPI = require("near-api-js");

const { Contract } = nearAPI;

const DEFAULT_GAS = "30000000000000"; // 30 Terra Gas = 30 * 10^12 Gas units

const NO_DEPOSIT = "0";

const RECORD_STORAGE_COST = "1000000000000000000000000"; // 1 Near

const contract_id = "carbonite_vault.testnet";

const setupContract = async (contractId) => {
  const networkConfig = {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };

  const near = await connect(networkConfig);

  const wallet = new WalletConnection(near);

  const signerAccount = wallet.account();
  const contract = new Contract(signerAccount, contractId, {
    viewMethods: [
      "metadata",
      "has_license",
      "is_above_18",
      "is_senior_citizen",
    ],
    changeMethods: [
      "new",
      "add_m_aadhaar_record",
      "add_m_driving_license_record",
    ],
  });

  return contract;
};

// View methods

const get_metadata = async (contract) => {
  const response = await contract.metadata();
  return response;
};

const has_license = async (contract) => {
  const networkConfig = {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };

  const near = await connect(networkConfig);

  const wallet = new WalletConnection(near);

  const id = new keyStores.BrowserLocalStorageKeyStore.getKey(
    "testnet",
    wallet.getAccountId()
  );

  const response = await contract.has_license({ id });
  return response;
};

const is_above_18 = async (contract) => {
  const networkConfig = {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };

  const near = await connect(networkConfig);

  const wallet = new WalletConnection(near);

  const id = new keyStores.BrowserLocalStorageKeyStore.getKey(
    "testnet",
    wallet.getAccountId()
  );

  const response = await contract.is_above_18({ id });
  return response;
};

const is_senior_citizen = async (contract) => {
  const networkConfig = {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };

  const near = await connect(networkConfig);

  const wallet = new WalletConnection(near);

  const id = new keyStores.BrowserLocalStorageKeyStore.getKey(
    "testnet",
    wallet.getAccountId()
  );

  const response = await contract.has_license({ id });
  return response;
};

// Change Methods

// Initialises the contract with given data

// Eg: const owner_id = "darshan3v.testnet"

const metadata = {
  name: "M_Aadhaar",
  icon: "dummy",
  description: "masked aadhaar service",
  reference: "some.gov.in",
};

const init = async (owner_id, contract) => {
  const response = await contract.new({
    args: {
      owner_id,
      metadata,
    },
    gas: DEFAULT_GAS,
    amount: NO_DEPOSIT,
  });

  return response;
};

const m_aadhaar = {
  is_above_18: true,
  is_senior_citize: false,
};

const add_m_aadhaar_record = async (contract, repo_url) => {
  const response = await contract.add_m_aadhaar_record({
    args: {
      id,
      m_aadhaar,
    },
    gas: DEFAULT_GAS,
    amount: RECORD_STORAGE_COST,
  });
  return response;
};

const m_driving_license = {
  has_license,
};

const add_m_driving_license_record = async (contract, repo_url) => {
  const response = await contract.add_m_driving_license_record({
    args: {
      id,
      m_driving_license,
    },
    gas: DEFAULT_GAS,
    amount: RECORD_STORAGE_COST,
  });
  return response;
};

// To get state of an account

// const new_account = await near.account(prefix + "." + contract_id);
// const state = await new_account.state();

const main = async () => {
  const signer_account = "codefi1.testnet";
  const contract_id = "codefi1.testnet";

  const contract = setup_contract(signer_account, contract_id);
  console.log(await init(signer_account, contract));
};

main();
