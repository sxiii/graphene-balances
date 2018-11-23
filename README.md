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
