# CoinMarketCap to Google Sheet
Script for loading data from https://coinmarketcap.com to google sheet.

How to set-up:
1. Create new Google sheet file.
2. Rename the sheet for data to *cryptodata*.
3. Run Tools - Script editor...

![Script Editor](tools.png)

4. Insert the code from cmc.gs file.
5. Change the line: `'X-CMC_PRO_API_KEY': 'INSERT-YOUR-FREE-API-KEY-HERE'` (get free API key here: https://coinmarketcap.com/api )
6. Select `getCoinData` function and test run.

![getCoinData function](getcoindata.png)

7. Check your *cryptodata* sheet.

Use within your sheet by creating button with script.
