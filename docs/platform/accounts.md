---
sidebar_position: 10
---

# Accounts

import acc from '/img/accounts.png';
import accBin from '/img/binanceAccount1.png';
import accBin2 from '/img/binanceAccount2.png';
import accBb from '/img/bybitAcc.png';

Most importantly please note that accounts will not always reflect overall balances of your total exchange assets. Below you can review what is reflected in particular for each individual exchange. This is due to architectural differences of exachanges and wallets inside exchanges.



### Binance

<img src={acc} alt="Data Series Window" style={{width: 800}} />

For Binance the realized will always reflect your USDT balance on the futures wallet. You can see the same balance inside the Binance web app in `Assets -> Futures` as well as inside the derivatives trading terminal in the bottom right hand corner. The unrealized value can also be seen next to it. TWM sources all unrealized positions PNL and sums them up before showing this particular total. The total value is the local TWM sum of these two values. Please do not expect 100% matches in the dynamic values as there are time delays and small discrepancies.

<img src={accBin} alt="Data Series Window" style={{width: 800}} />



<img src={accBin2} alt="Data Series Window" style={{width: 800}} />

### Bybit

We source data from Unified Trading Account.

***Realized*** - Total Equity is calculated by adding the fiat currency valuation of the equity of each coin in your account. In non-unified mode & unified (inverse), the field will be returned as an empty string.

***Unrealized*** - Unrealised P&L of Perpetuals and USDC Futures of account converted to usd：∑ Each Perp and USDC Futures upl by base coin. In non-unified mode & unified (inverse), the field will be returned as an empty string.

***Total*** - will be the sum of these two.

<img src={accBb} alt="Data Series Window" style={{width: 800}} />
