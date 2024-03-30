require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url:"https://polygon-mumbai.g.alchemy.com/v2/jV2jcybIx0Q367dJGxS3Bae1ipzcvUKJ",
      accounts: ["794355bc8f305ebe06a4018e55c6a31a19191ad098a6ed0e32e78f7559be3397"],
    },
  },
};



