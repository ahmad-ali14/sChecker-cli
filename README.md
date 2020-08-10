# sChecker-cli

Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://nomics.com

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
sChecker -h

# Version
sChecker -V

# API Key Commands
sChecker key set
sChecker key show
sChecker key remove

# Crypto Check Commands
sChecker check price

# Check Specific Coins (default: BTN,ETH,XRP)
sChecker check --coin=BTC,ETH

# Choose Currency (Default: USD)
sChecker check --cur=EUR
```

### Version

1.0.0

### License

MIT









