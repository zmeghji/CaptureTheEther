const { ethers } = require("ethers");

//find a private key of an EOA such that when deploying with a particular nonce less than 10, a contract address including `badc0de` is produced.
let addressesChecked = 0;
while (true){
    const wallet = ethers.Wallet.createRandom();
    const from=  wallet.address;
    for(let nonce = 0; nonce < 11; nonce++){
        const contractAddr = ethers.utils.getContractAddress({
            from,
            nonce,
          });
        if (contractAddr.toLowerCase().includes(`badc0de`)){
            console.log(`contract address: ${contractAddr}`);
            console.log(`deployer address: ${wallet.address}`);
            console.log(`private key: ${wallet.privateKey}`);
            console.log(`nonce: ${nonce}`);
            break;
        }
    }

    addressesChecked++;
    if (addressesChecked %1000 == 0){
        console.log(`addressesChecked: ${addressesChecked}`)
    }
}