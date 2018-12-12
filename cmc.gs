function getCoinData() {
	var options = {
		"muteHttpExceptions": true,
		"headers" : {
			'X-CMC_PRO_API_KEY': 'INSERT-YOUR-FREE-API-KEY-HERE'
		},
	}

	var url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
	var param = "?limit=2500&convert=BTC";

	try {
		var response = UrlFetchApp.fetch(url + param, options);
	} catch(e) {
		Logger.log("message:" + e.message + "\nfileName:" + e.fileName + "\nlineNumber:" + e.lineNumber + "\nstack:" + e.stack);
		return false;
	}

	var results = JSON.parse(response.getContentText());
	var ss = SpreadsheetApp.getActiveSpreadsheet();
	var sheet = ss.getSheetByName("cryptodata");

	return setCryptocurrencyData(sheet, results);
}

function setCryptocurrencyData(sheet, results) {
		var num = results['data'].length;
		var coins = [];
        coins.push(['id', 'name', 'symbol', 'slug', 'rank', 'last updated', 'price BTC', 'volume 24h', 'percent change 1h', 'percent change 24h', 'percent change 7d']);
		for (var i = 0; i < results['data'].length; i++) {
				var id_cmc = results['data'][i]["id"];
				var name = results['data'][i]["name"];
				var symbol = results['data'][i]["symbol"];
				var slug = results['data'][i]["slug"];
				var cmc_rank = results['data'][i]["cmc_rank"];
				var last_updated = results['data'][i]["last_updated"];
                var price_btc = results['data'][i]["quote"]["BTC"]["price"];
				var volume_24h = results['data'][i]["quote"]["BTC"]["volume_24h"];
				var percent_change_1h = results['data'][i]["quote"]["BTC"]["percent_change_1h"];
				var percent_change_24h = results['data'][i]["quote"]["BTC"]["percent_change_24h"];
				var percent_change_7d = results['data'][i]["quote"]["BTC"]["percent_change_7d"];
				coins.push([id_cmc, name, symbol, slug, cmc_rank, last_updated, price_btc, volume_24h, percent_change_1h, percent_change_24h, percent_change_7d]);
		}

        var m = sheet.getMaxRows();
        if (m > 1) {
          sheet.deleteRows(1, m-1);
        }
        var range = sheet.getRange(1, 1, results['data'].length + 1, coins[0].length);
		range.setValues(coins);
}
