var steem = require('steem');
var names = ["sxiii"];
// if you don't want to get balances, comment out next three lines
global.fetch = require('node-fetch')
const cc = require('cryptocompare')
cc.setApiKey('af6a4b3ef065b0bb84d12e423c8adc40667ca7cefa5368c0d008d5280dfefe62')
// until here
var steemdatausd, steemdatabtc, sbddatausd, sbddatabtc, golosdatausd, golosdatabtc, gbgdatausd, gbgdatabtc, scorumdatausd, scorumdatabtc, vitdatausd, vitdatabtc;

const request = require('request');
let options = {url: "https://api.bearshares.com",body: JSON.stringify( {"jsonrpc":"2.0", "method":"condenser_api.get_accounts", "params":[["sxiii"]], "id":1} )};

var Table = require('easy-table');
var t = new Table;

// you can comment the following block if you don't want to get balances

cc.priceMulti(['STEEM', 'SBD*', 'GOLOS', 'GBG', 'SCR*', 'VIT'], ['USD', 'BTC']).then(prices => {
	steemdatausd = prices.STEEM.USD; 	steemdatabtc = prices.STEEM.BTC;
	sbddatausd = prices['SBD*'].USD; sbddatabtc = prices['SBD*'].BTC;
	golosdatausd = prices.GOLOS.USD; golosdatabtc = prices.GOLOS.BTC;
	gbgdatausd = prices.GBG.USD; gbgdatabtc = prices.GBG.BTC;
  scorumdatausd = prices['SCR*'].USD; scorumdatabtc = prices['SCR*'].BTC;
	vitdatausd = prices.VIT.USD; vitdatabtc = prices.VIT.BTC;

 console.log(sbddatausd)
	//console.log(prices);
	//var td = [ { coin: rr, usdprice: data["balance"], btcprice: data["vesting_shares"] } ];

} ).catch(console.error)

// until here

function balancesread(rr) {

steem.api.getAccounts(names, function(err, result) {
	var data=result[0];
	var td = [ { url: rr, bal: data["balance"], vest: data["vesting_shares"], sbd: data["sbd_balance"] } ];

	td.forEach(function(rr) {
  //name = eval(rr.url.toUpperCase());
	t.cell('URL', rr.url)
	t.cell('Main Token', rr.bal)
	t.cell('VESTS / SHARES / etc', rr.vest)
	t.cell('Second Token', rr.sbd)
	if (rr.url == 'steemit') { t.cell('Main Token $ Price', steemdatausd); t.cell('Main Token $', Math.round(parseFloat(rr.bal)*steemdatausd) ); t.cell('Second Token $ Price', sbddatausd); t.cell('Second Token $', Math.round(parseFloat(rr.sbd)*sbddatausd) ); }
	if (rr.url == 'golos') { t.cell('Main Token $ Price', golosdatausd); t.cell('Main Token $', Math.round(parseFloat(rr.bal)*golosdatausd) ); t.cell('Second Token $ Price', gbgdatausd); t.cell('Second Token $', Math.round(parseFloat(rr.sbd)*gbgdatausd) ); }
	if (rr.url == 'scorum') { t.cell('Main Token $ Price', scorumdatausd); t.cell('Main Token $', Math.round(parseFloat(rr.bal)*scorumdatausd)); };
	if (rr.url == 'vit') { t.cell('Main Token $ Price', vitdatausd); t.cell('Main Token $', Math.round(parseFloat(rr.bal)*vitdatausd) ) }
	t.newRow()
	})

//process.stdout.write('\033c\033[3J');
console.log(t.toString());
	});
}

function bearsharesread(rr) {

request(options, (error, response, body) => {
    if (error) {
        console.error('An error has occurred: ', error);
    } else {
	var rrr = JSON.parse(body)
	t.cell('URL', rr)
	t.cell('Main Token', rrr.result[0].balance)
	t.cell('VESTS / SHARES / etc', rrr.result[0].coining_shares)
	t.cell('Second Token', rrr.result[0].bsd_balance)
	t.newRow()
    }
});

//process.stdout.write('\033c\033[3J');

}

balancesread('steemit');

steem.api.setOptions({ url: 'wss://ws.golos.io' });
steem.config.set('address_prefix','GLS');
steem.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');
balancesread('golos');

//steem.api.setOptions({ url: 'wss://whaleshares.io/ws' });
//steem.api.setOptions({ url: 'ws://188.166.99.136:8090' });
steem.api.setOptions({ url: 'https://wls.kennybll.com' });
steem.config.set('address_prefix', 'WLS');
steem.config.set('chain_id', 'de999ada2ff7ed3d3d580381f229b40b5a0261aec48eb830e540080817b72866');
balancesread('whaleshares');

steem.api.setOptions({ url: 'https://vox.community/ws' });
steem.config.set('chain_id','88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd');
balancesread('vox');

steem.api.setOptions({ url: 'wss://rpc.smoke.io' });
steem.config.set('address_prefix', 'SMK');
steem.config.set('chain_id', '1ce08345e61cd3bf91673a47fc507e7ed01550dab841fd9cdb0ab66ef576aaf0');
balancesread('smokenetwork');

//steem.api.setOptions({ url: 'wss://api.viz.blckchnd.com/ws' });
steem.api.setOptions({ url: 'https://rpc.viz.lexai.host' });
steem.config.set('address_prefix','VIZ');
steem.config.set('chain_id','2040effda178d4fffff5eab7a915d4019879f5205cc5392e4bcced2b6edda0cd');
balancesread('vizworld');

//steem.api.setOptions({  url: 'wss://deals.weku.io:8190' });
//steem.api.setOptions({  url: 'ws://one.weku.io:8190' });
//steem.api.setOptions({  url: 'https://deals.weku.io:8190' });

steem.api.setOptions({  url: 'https://standby.weku.io:8190' });
steem.config.set('address_prefix', 'WEKU');
steem.config.set('chain_id', "b24e09256ee14bab6d58bfa3a4e47b0474a73ef4d6c47eeea007848195fa085e");
balancesread('weku');

steem.api.setOptions({ url: 'https://prodnet.scorum.com' });
steem.config.set('address_prefix', 'SCR');
steem.config.set('chain_id', 'db4007d45f04c1403a7e66a5c66b5b1cdfc2dde8b5335d1d2f116d592ca3dbb1');
balancesread('scorum');

steem.api.setOptions({ url: 'wss://peer.vit.tube' });
steem.config.set('address_prefix', 'VIT');
steem.config.set('chain_id', '73f14dd4b7b07a8663be9d84300de0f65ef2ee7e27aae32bbe911c548c08f000');
balancesread('vit');

steem.api.setOptions({  url: 'https://serey.io/wss' });
steem.config.set('address_prefix', "SRY");
steem.config.set('chain_id', "3b9a062c4c1f4338f6932ec8bfc083d99369df7479467bbab1811976181b0daf");
balancesread('serey');

//steem.api.setOptions({  url: 'https://api.weyoume.io' });
steem.api.setOptions({  url: 'https://node.weyoume.io' });
steem.config.set('address_prefix', "TWYM");
steem.config.set('chain_id',"7d51ab195015bb72fa61f159fc91227d826a2c28fc718078356c18837d0ebbf5");
//steem.config.set('chain_id',"ed8b34c6c348987271fa7128c1f89072ab07b832aa0d7057b165d83d513b461a");
balancesread('weyoume');

// dsite.io // dpays.io // https://api.dpays.io
// this website is probably down
//steem.api.setOptions({  url: 'wss://d.dpays.io' });
//steem.config.set('address_prefix', "DWB");
//steem.config.set('chain_id', "38f14b346eb697ba04ae0f5adcfaa0a437ed3711197704aa256a14cb9b4a8f26");
//balancesread('dpays');

bearsharesread('bearshares');

// This code is not working - have to write separate function (bearshares)
//steem.api.setOptions({ url: 'https://api.bearshares.com' });
//steem.config.set('address_prefix', 'SHR');
//steem.config.set('chain_id', 'b510834141c312c2aa8837040734605f2333f1ecc4f634576372f9c12dc7e8b2');
//balancesread('bearshares');

console.log(t.toString());

console.log('Showed all balances for '+names);

maintokens = parseFloat(steemdatausd+golosdatausd+scorumdatausd+vitdatausd);
secondtokens = parseFloat(sbddatausd+gbgdatausd);
alltokens = parseFloat(maintokens+secondtokens);

console.log('Total main token: ' + maintokens + ', total second token: ' + secondtokens + ', and all tokens together: ' + alltokens);

//process.exit();
