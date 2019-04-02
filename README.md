This repo helps you to unify requests to different graphene-based blockchains

![Imgur](https://i.imgur.com/JLBO7RE.png)

# Why we need this
This script is aimed at few targets at the same time:
* Help you manage your different graphene blockchain accounts, including counting total amount of money there (saving time)
* This script also has good collection of graphene node connection information such as API/WSS urls, chain id's and other
* In the future it should allow you to do some more stuff, like cross-posting, etc

# Supported:
1. steemit.com
2. golos.io
3. whaleshares.io
4. vox.community
5. smoke.network
6. viz.world
7. weku.io
8. vit.tube
9. scorum.com
10. weyoume.io
11. serey.io
12. bearshares.com

# Work in progress:
* dpays.io (dsite.io) - I'm not sure if this website will be alive

# Requirements
* Linux
* git
* NodeJS
* Node modules:
** Steem
** Request
** Easy-table
** Optional node-fetch & cryptocompare (for crypto $ prices)

# Installing
```
sudo apt install git npm
sudo npm install easy-table steem request
git clone https://github.com/sxiii/graphene-balances
cd graphene-bal*
```

# Editing
Open recently downloaded folder and the single file. In the file, find `var names = ['sxiii']` and edit it to your nickname.

# Running
Run the file like `node st.js`

# Sample output
```
URL           Balance          VESTS or SHARES          SBD or Similar
------------  ---------------  -----------------------  --------------
whaleshares   0.000 WLS        313.404965 VESTS                       
vox           0.596 VOX        258896.134788 VESTS      0.499 GOLD    
smokenetwork  0.000 SMOKE      8.331664 VESTS                         
steemit       1.298 STEEM      240426.611388 VESTS      304.386 SBD   
golos         1236.360 GOLOS   185849900.849138 GESTS   407.817 GBG   
vizworld      93.656 VIZ       168.105704 SHARES                      
scorum        0.000000173 SCR                                         
weku          20.000 WEKU      10327471.678391 VESTS    4.213 WKD     
serey         0.000 SEREY      1630058462.797545 VESTS  0.000 SRD     
vit           0.000 VIT        1462.926377 VESTS                      
bearshares    0.000 BEARS      50.000998 COINS          0.000 BSD     
weyoume       0.000 TME                                                                                     
```

# How to look an node's config?
This can be used to check the CHAIN ID or other parameters of Graphene networks:
`curl --data '{"jsonrpc": "2.0", "method": "get_config", "params": [["1.2.0", "1.2.1"]], "id": 1}' https://serey.io/wss | jq`
Requirements to run this command are curl and jq (`sudo apt install curl jq`).
Another way could be using a Condenser API: `curl -s --data '{"jsonrpc":"2.0", "method":"condenser_api.get_accounts", "params":[["sxiii"]], "id":1}' https://api.bearshares.com | jq `

# Future
You can help to develop the script. For example, you might like to work with cross-posting or other tasks. 

# Help in contributing
Please let me know about your developments by publishing issues or pull requests.

# List of API & Chain IDs
Name of blockchain | Coin | API/HTTPS address | WSS address |	Chain_ID
| - | - | - | - | - |
Steemit.com | STEEM | https://api.steemit.com | | 0000000000000000000000000000000000000000000000000000000000000000
Golos.io | GLS | | wss://ws.golos.io | 782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12
Whaleshares.io | WLS | | https://wls.kennybll.com | de999ada2ff7ed3d3d580381f229b40b5a0261aec48eb830e540080817b72866
Vox.community | VOX	| https://vox.community/ws | | 88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd
Smoke.io | SMK | | wss://rpc.smoke.io | 1ce08345e61cd3bf91673a47fc507e7ed01550dab841fd9cdb0ab66ef576aaf0
Viz.world | VIZ | | https://rpc.viz.lexai.host | 2040effda178d4fffff5eab7a915d4019879f5205cc5392e4bcced2b6edda0cd
Deals.weku.io | WEKU | | https://standby.weku.io:8190 | b24e09256ee14bab6d58bfa3a4e47b0474a73ef4d6c47eeea007848195fa085e
Scorum.com | SCR | https://prodnet.scorum.com | | db4007d45f04c1403a7e66a5c66b5b1cdfc2dde8b5335d1d2f116d592ca3dbb1
Vit.tube | VIT | | wss://peer.vit.tube | 73f14dd4b7b07a8663be9d84300de0f65ef2ee7e27aae32bbe911c548c08f000
Serey.io | SRY | https://serey.io/wss | | 3b9a062c4c1f4338f6932ec8bfc083d99369df7479467bbab1811976181b0daf
WeYouMe.io | TWYM | https://node.weyoume.io | | 7d51ab195015bb72fa61f159fc91227d826a2c28fc718078356c18837d0ebbf5
Bearshares.com | SHR | https://api.bearshares.com | | b510834141c312c2aa8837040734605f2333f1ecc4f634576372f9c12dc7e8b2
Dpays.io* | DWB* | | wss://d.dpays.io* | 38f14b346eb697ba04ae0f5adcfaa0a437ed3711197704aa256a14cb9b4a8f26*

* old whaleshares node URL wss://whaleshares.io/ws no longer works - replaced with working one
* old VIZ node URL wss://api.viz.blckchnd.com/ws no longer works - replaced with working one
* old WeYouMe URL https://api.weyoume.io no longer works - replaced with working one
* WeYouMe also changed the chain_Id (NB: WeYouMe was Ezira earlier)
* old weku URL wss://one.weku.io:8190 no longer works - replaced with working one

* Currently Dpays.io doesen't work

# New blockchains to discover
* APPICS (https://appics.com)
* Dpay TestNet (https://djefferson.network; Node (HTTPS): https://net.djefferson.network; Node (WSS): wss://net.djefferson.network;  P2P Port: 6620; Jefferson API Node: https://api.djefferson.network, chain_id: f0cb578fca126f7fbd86bec9678b13c34f97237392280c72c32d34c059cbc630)

# Latest updates
I've added calculation of the crypto rates (in USD or BTC) to the know crypto's. Both for first and second tokens. Based on node-fetch & cryptocompare node api.
