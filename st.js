var steem = require('steem');
var names = ["sxiii"];

var Table = require('easy-table');
var t = new Table;


function balancesread(rr) {

steem.api.getAccounts(names, function(err, result) {
	var data=result[0];
	var td = [ { url: rr, bal: data["balance"], vest: data["vesting_shares"], sbd: data["sbd_balance"] } ];

	td.forEach(function(rr) {
	t.cell('URL', rr.url)
	t.cell('Balance', rr.bal)
	t.cell('VESTS', rr.vest)
	t.cell('SBD', rr.sbd)
	t.newRow()
	})

process.stdout.write('\033c\033[3J');
console.log(t.toString());

	});
}

balancesread('steemit');

steem.api.setOptions({ url: 'wss://ws.golos.io' });
steem.config.set('address_prefix','GLS');
steem.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');
balancesread('golos');

steem.api.setOptions({ url: 'wss://whaleshares.io/ws' });
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

steem.api.setOptions({ url: 'wss://api.viz.blckchnd.com/ws' });
steem.config.set('address_prefix','VIZ');
steem.config.set('chain_id','2040effda178d4fffff5eab7a915d4019879f5205cc5392e4bcced2b6edda0cd');
balancesread('vizworld');

steem.api.setOptions({  url: 'wss://one.weku.io:8190' });
steem.config.set('address_prefix', "WEKU");
steem.config.set('chain_id', "b24e09256ee14bab6d58bfa3a4e47b0474a73ef4d6c47eeea007848195fa085e");
balancesread('weku');

// still need to implement:
// serey
// scorum

//steem.api.setOptions({ url: 'https://testnet.scorum.com/' });
//steem.api.setOptions({ url: 'https://blog-api-dev.scorum.com/ws', convert_url: 'https://converter-dev.scorum.com/' });
//steem.config.set('address_prefix', 'SCR');
//steem.config.set('chain_id', 'd3c1f19a4947c296446583f988c43fd1a83818fabaf3454a0020198cb361ebd2');
//steem.config.set('chain_id', 'db4007d45f04c1403a7e66a5c66b5b1cdfc2dde8b5335d1d2f116d592ca3dbb1');
//balancesread('scorum');

console.log(t.toString());

console.log('Showed all balances for '+names);

//process.exit();
