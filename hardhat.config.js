require("@nomicfoundation/hardhat-toolbox");

const Infura_URL ='https://rinkeby.infura.io/v3/dda0ef21faa443dcad46b7a4b19a2253';
const PRIVATE_KEY = 'd0efdecfa5988839724dc276861780d3b7f9f19356ae153e3b9ad382fa12e9ac';

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  defaultNetwork:"rinkeby",
  networks: {
    rinkeby: {
      url: Infura_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};
