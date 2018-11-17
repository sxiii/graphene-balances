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

steem.api.setOptions({  url: 'https://api.weyoume.io' });
steem.config.set('address_prefix', "TWYM");
steem.config.set('chain_id', "ed8b34c6c348987271fa7128c1f89072ab07b832aa0d7057b165d83d513b461a");
balancesread('weyoume');

// dsite.io // dpays.io
// https://api.dpays.io
//steem.api.setOptions({  url: 'wss://d.dpays.io' });
//steem.config.set('address_prefix', "DWB");
//steem.config.set('chain_id', "38f14b346eb697ba04ae0f5adcfaa0a437ed3711197704aa256a14cb9b4a8f26");
//balancesread('dpays');

//steem.api.setOptions({ url: 'wss://bearshares.com' });
//steem.config.set('address_prefix', 'SHR');
//steem.config.set('chain_id', '0000000000000000000000000000000000000000000000000000000000000000');
//balancesread('bearshare');

console.log(t.toString());

console.log('Showed all balances for '+names);

//process.exit();
