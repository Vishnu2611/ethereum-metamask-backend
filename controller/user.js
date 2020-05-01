'use strict';
const eth = require('eth-sig-util');
const ethereumjs = require('ethereumjs-util');
const user = require('../model/user');

const register = async (publicAddress) => {
    return new Promise((resolve, reject) => {
        user.create({
            publicAddress: publicAddress,
            nounce :Math.floor(Math.random() * 10000)
        }).then((result) => {
            resolve(result.dataValues);
        }).catch((err) => {
            reject(err);
        });
    });
};

exports.checkSignature = async (body) => {
    return new Promise((resolve, reject) => {
        user.findAll({where:{publicAddress:body.publicAddress}}).then((result) => {
            if(result.length !== 0){
                let user = result[0].dataValues;
                const msg = `I am signing my one-time nonce: ${user.nounce}`;
                const msgBufferHex = ethereumjs.bufferToHex(Buffer.from(msg, 'utf8'));
                const address = eth.recoverPersonalSignature({
                    data: msgBufferHex,
                    sig: body.signature,
                });
                if (address.toLowerCase() === body.publicAddress.toLowerCase()) {
                    resolve(true);
                } else {
                    throw new Error('public address mismatched');
                }
            }
            else {
                throw new Error('public address invalid');
            }
        }).catch((err) => {
            reject(err);
        });
    });
};

exports.findPublicAddress = async (publicAddress) => {
    return new Promise((resolve, reject) => {
        user.findAll({where:{publicAddress:publicAddress}}).then((result) => {
            if(result.length !== 0){
                let nounce = Math.floor(Math.random() * 10000);
                result[0].update({nounce:nounce}).then((item)=>{
                    resolve(item.dataValues);});
            }
            else {
                register(publicAddress).then((result)=>{
                    resolve(result);
                });
            }
        }).catch((err) => {
            reject(err);
        });
    });

};
