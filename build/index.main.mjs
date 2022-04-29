// Automatically generated with Reach 0.1.9 (2fb7c59c)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (2fb7c59c)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function AddPhoto(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AddPhoto expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AddPhoto expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc1 = stdlib.T_UInt;
  
  
  const v45 = stdlib.protect(ctc0, interact.comment, 'for AddPhoto\'s interact field comment');
  const v46 = stdlib.protect(ctc0, interact.ipfsHash, 'for AddPhoto\'s interact field ipfsHash');
  const v47 = stdlib.protect(ctc1, interact.photoId, 'for AddPhoto\'s interact field photoId');
  
  const txn1 = await (ctc.sendrecv({
    args: [v47, v46, v45],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v51, v52, v53], secs: v55, time: v54, didSend: v31, from: v50 } = txn1;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v51, v52, v53], secs: v55, time: v54, didSend: v31, from: v50 } = txn1;
  ;
  return;
  
  
  };
export async function ViewPhoto(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ViewPhoto expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ViewPhoto expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v51, v52, v53], secs: v55, time: v54, didSend: v31, from: v50 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.getPhotoId(v51), {
    at: './index.rsh:30:24:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'getPhotoId',
    who: 'ViewPhoto'
    });
  stdlib.protect(ctc2, await interact.getIpfsHash(v52), {
    at: './index.rsh:31:25:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'getIpfsHash',
    who: 'ViewPhoto'
    });
  stdlib.protect(ctc2, await interact.getComment(v53), {
    at: './index.rsh:32:24:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'getComment',
    who: 'ViewPhoto'
    });
  
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEAxihkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaARc2GgIXNQQ2GgM1BSISRCI0ARJENARJIhJMNAISEUQ0BSJbNf80BVcIgDX+NAVXiIA1/YAEWaf4gjT/FlA0/lA0/VCwNABJIwg1AIGgjQZLATgIEkQjSwE4EBJEMgpLATgHEkRIsSKyASKyCCOyEDIJsgkyCrIHszEZgQUSREIAACg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
  appClear: `Bg==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v52",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v53",
                "type": "tuple"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v52",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v53",
                "type": "tuple"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610523380380610523833981016040819052610022916101b2565b60008055436003556040517f8e51148f017960cab979b846b5b3156357ee669b381a50c08600a883402e854c9061005a908390610254565b60405180910390a161006e3415600761008a565b60008080556001819055610084906002906100b3565b5061030f565b816100af5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546100bf906102d4565b6000825580601f106100cf575050565b601f0160209004906000526020600020908101906100ed91906100f0565b50565b5b8082111561010557600081556001016100f1565b5090565b604051606081016001600160401b038111828210171561013957634e487b7160e01b600052604160045260246000fd5b60405290565b60006080828403121561015157600080fd5b604051608081016001600160401b038111828210171561018157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008183036101408112156101c657600080fd5b604080519081016001600160401b03811182821017156101f657634e487b7160e01b600052604160045260246000fd5b60405283518152610120601f198301121561021057600080fd5b610218610109565b91506020840151825261022e856040860161013f565b60208301526102408560c0860161013f565b604083015260208101919091529392505050565b6000610140820190508251825260208301518051602084015260208101516102a06040850182805182526020810151602083015260408101516040830152606081015160608301525050565b50604090810151805160c0850152602081015160e08501529081015161010084015260608101516101208401525092915050565b600181811c908216806102e857607f821691505b6020821081141561030957634e487b7160e01b600052602260045260246000fd5b50919050565b6102058061031e6000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122072f3677acebcdcecc4fcdf44ac89a4caacdbb4efccae60e7ee00674275829ab964736f6c634300080c0033`,
  BytecodeLen: 1315,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "AddPhoto": AddPhoto,
  "ViewPhoto": ViewPhoto
  };
export const _APIs = {
  };
