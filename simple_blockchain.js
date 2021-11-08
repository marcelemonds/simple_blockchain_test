/* ===== SHA256 with Crypto-js ===================================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js      |
|  =============================================================*/
const SHA256 = require('crypto-js/sha256');


/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/
class Block {
    constructor(data){
        this.hash = '';
        this.height = 0;
        this.body = data;
        this.timeStamp = 0;
        this.previousBlockHash = '';
    }
  }


/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - addBlock()                                     |
|     - createGenesisBlock()                           |
|  ====================================================*/
class Blockchain{
    constructor(){
        this.chain = [];
        this.addBlock(this.createGenesisBlock());
  }

  createGenesisBlock() {
    return new Block('Genesis Block');
  }

  addBlock(newBlock){
    if (this.chain.length>0) {
        newBlock.previousBlockHash = this.chain[this.chain.lenght-1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}