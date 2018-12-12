# cmc-google-sheet
Script for loading data from coinmarketcap.com to google sheet.

How to set-up:
1. Create new Google sheet file.
2. Rename the sheet for data to cryptodata.
3. Run Tools - Script Editor...
4. Insert the code from cmc.gs file.
5. Change the line: `'X-CMC_PRO_API_KEY': 'INSERT-YOUR-API-KEY-HERE'`
6. Test with running `getCoinData` function.
7. Simply use within your sheet by creating button with script.