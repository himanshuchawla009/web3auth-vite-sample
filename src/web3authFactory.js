import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";

export class Web3authFactory {
    web3authInstance = null
    static getWeb3AuthInstance() {
        
        if (this.web3authInstance) return this.web3authInstance
        const ethChainConfig = {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            // rpcTarget: `https://ropsten.infura.io/v3/776218ac4734478c90191dde8cae483c`,
            // displayName: "ropsten",
            // blockExplorer: "https://ropsten.etherscan.io/",
            ticker: "ETH",
            tickerName: "Ethereum",
          };
        this.web3authInstance = new Web3Auth({ chainConfig: ethChainConfig, clientId: "askslks", authMode: "DAPP" });
        return this.web3authInstance;
    }
}