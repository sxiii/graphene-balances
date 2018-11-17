This repo helps you to unify requests to different graphene-based blockchains

![img](https://raw.githubusercontent.com/sxiii/graphene-balances/master/Screenshot_2018-10-05_00-18-21.png)

# Supported:
* steemit.com
* golos.io
* whaleshares.io
* vox.community
* smoke.network
* viz.world
* weku.io
* vit.tube
* scorum.com
* weyoume.io
* serey.io

# Work in progress:


# Installing
```
sudo npm install easy-table steem
git clone https://github.com/sxiii/graphene-balances
cd graphene-bal*
```

# Editing
Open recently downloaded folder and the single file. In the file, find `var names = ['sxiii']` and edit it to your nickname.

# Running
Run the file like `node st.js`

# Sample output
```
URL           Balance          VESTS                   SBD        
------------  ---------------  ----------------------  -----------
whaleshares   0.000 WLS        313.404965 VESTS                    
steemit       1.297 STEEM      240426.611388 VESTS      304.384 SBD
vox           0.596 VOX        256215.536347 VESTS      0.499 GOLD 
golos         1173.465 GOLOS   185704845.020042 GESTS   407.810 GBG
smokenetwork  0.000 SMOKE      8.251137 VESTS                      
scorum        0.000000173 SCR                                      
vizworld      82.446 VIZ       141.749417 SHARES                   
weku          20.000 WEKU      10327471.678391 VESTS    4.213 WKD  
vit           0.000 VIT        1462.926377 VESTS                   
weyoume       0.000 TME                                            
serey         0.000 SEREY      1593822904.540777 VESTS  0.000 SRD  
```
