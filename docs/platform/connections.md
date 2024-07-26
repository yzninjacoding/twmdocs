---
sidebar_position: 1
---

# Connections

import connections from '/img/connectionsAdmin.png';
import connectionsW from '/img/connectionsWindow.png';
import binance from '/img/binanceAPIKeys.png';
import binanceTest from '/img/binanceAPIKeysTest.png';
import bybitAPI from '/img/bybitAPI.png';

### Setting Up a Connection

In order to download market data and/or trade user needs to configure a connection. Please proceed to `Admin Panel -> Connections - > Configure` to set up a new connection. 

<img src={connections} alt="Connections Window" style={{width: 600}} />

Existing connections will appear in the drop down menu demonstrated in the picture above after they have been set up. To set up a connection proceed with choosing the `configure` option. 

TWM is a multi connection platform and user can have numerous connections running simultaneously allowing data and trading from several exchanges. In order to connect to an existing connection use the toggle to the right hand side of the connection name right inside the menu.

After you are successfully connected to a provider a connection green light will appear in the TWM admin panel bottom toolbar and a success message wıll print in the log tab of the admin panel.


<img src={connectionsW} alt="Connections Window" style={{width: 500}} />

The connection configuration window will have available connections listed at the top. Each connection can only be added once by double clicking on it or by pressing the add button which will move the connection from the top list to the bottom list to be available for further configuration.

Some connections may have testnet and mainnet environments. If that is the case then you will see 2 appropriate connections addded/removed at the same time.

### Binance

Binance connection is available with two environments - testnet and mainnet. For market data API key and secret is not required however for placing orders and reading account information API key and secret is compulsory. If you only want to get market data you do not need a Binance account. Just set up a connection without any keys. 

#### Mainnet

In order to set up a mainnet API key you will need to log into your account and go to https://www.binance.com/en/my/settings/api-management which is located under `Account -> API Management`

<img src={binance} alt="Binance Window" style={{width: 600}} />

Copy the API key and secret from Binance API page to TWM connection set up parameters. Make sure you have provided the correct permissions for the API key. The minimum required permissions to trade spot and derivatives markets are `Enable Spot & Margin Trading` and `Enable Futures` for trading futures. 

It is highly recomended to restrict access to your trusted IP. You can see what you IP is here https://whatismyipaddress.com/. Make sure you are not using dynamic IP that can change a few times even during a single day.

#### Testnet

Binance provides testnet market data and trading testing environment. Please note that **testnet market data is not the same as real market data** you get from mainnet and is very different from real data. It is mainly used for technical testing purposes. Also please be aware that most instruments on testnet will not have data at all and will not have any liquidity even for testing. If you need to use testnet we suggest to go for the most famous instruments.

At the moment of writing this documentation Binance testnet orders were only available for the futures market. Below is a demonstration of where you can find the API keys for testnet futures orders. Please log in with your real account to here first: https://testnet.binancefuture.com/en/futures/BTCUSDT

<img src={binanceTest} alt="Binance Window" style={{width: 600}} />

You can find the API keys under the testnet chart by clicking on the API key tab.

### Bybit

Bybit connection is available with two environments - testnet and mainnet. For market data API key and secret is not required however for placing orders and reading account information API key and secret is compulsory. If you only want to get market data you do not need a Bybit account. Just set up a connection without any keys. 

#### Mainnet

In order to set up a mainnet API key you will need to log into your account and go to https://www.bybit.com/app/user/api-management which is located under `Account -> API`. Please make sure your Bybit account is configured to use **Unified Trading Account!!!**. Bybit classic account is not supported.

<img src={bybitAPI} alt="Connections Window" style={{width: 600}} />

Make sure you have set up appropriate permissions for spot and/or futures trading as shown in the illustration above. Also make sure you have selected Read and Write permissions as shown above as we need to post orders to the exchange in order to trade from within the TWM. Copy the provided API and Secret keys into TWM Bybit connection set up parameters.

It is highly recomended to restrict access to your trusted IP. You can see what you IP is here https://whatismyipaddress.com/. Make sure you are not using dynamic IP that can change a few times even during one day.

#### Testnet

In order to set up a testnet account please visit this link https://testnet.bybit.com/ and create a testnet user which can differ from your mainnet user. Do not get confused with mainnet demo trading!!! The API key set up process is identical to that of mainnet except it has to be done within the testnet domain.

Please note that **testnet market data is not the same as real market data** you get from mainnet and is very different from real data. It is mainly used for technical testing purposes.

### Important Information

- Please make sure that a chosen connection is available in your specific region or use a VPN if needed.
- When copying API keys and secrets make sure you do not copy any white space.
- Testnet market data will differ from mainnet market data.
- Testnet market data is not real market data, it should ony be used for testing purposes.
- Testnet download speed can be significantly slower.
- Mainnet download can take a long time especially for fast timeframes like 1 min.
- TWM will attempt to download all available data the first time you ask for data, stay patient and wait untill the process is over, if you terminate all downloaded data will be lost and you will have to start over.


