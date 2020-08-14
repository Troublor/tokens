const Web3 = require('web3');
const { networks } = require('../truffle-config.js')

let contract = artifacts.require("Dai");


module.exports = async function (deployer, network, accounts) {
    if ('development' === network) {
        const networkProperties = (networks[network] || {})
        if (!networkProperties) {
            throw new Error(`Unable to find provider for network: ${network}`)
        }

        const web3 = new Web3(`http://${networkProperties.host}:${networkProperties.port}`);

        // do stuff with web3 instance
        const chainId = await web3.eth.getChainId();
        await deployer.deploy(contract, chainId);
    }
};