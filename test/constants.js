const utils = require("./utils");

const token = {
  "ticker": "MYTKO",
  "name": "MyToken",
  "decimals": 18,
  "supply": 0,
  "isMintable": true,
  "globalmincap": 0
};

const reservedTokens = {
  number: utils.toFixed(10 * 10**token.decimals),
  percentageUnit: 205,
  percentageDecimals: 1,
  isReserved: true
};

const reservedTokens2 = {
  number: utils.toFixed(15 * 10**token.decimals),
  percentageUnit: 30,
  percentageDecimals: 0,
  isReserved: true
};

const whiteListItem = {
  status: true,
  minCap: utils.toFixed(1 * 10**token.decimals),
  maxCap: utils.toFixed(10 * 10**token.decimals),
};

const investments = [0.5, 11, 1, 0.5, 5.5, 4];

const startCrowdsale = parseInt(new Date().getTime()/1000);
let endCrowdsale = new Date().setDate(new Date().getDate() + 4);
endCrowdsale = parseInt(new Date(endCrowdsale).setUTCHours(0)/1000);

const crowdsale = {
  "start": startCrowdsale,
  "end": endCrowdsale,
  "minimumFundingGoal": 0,
  "maximumSellableTokens": utils.toFixed(1000 * 10**token.decimals),
  "isUpdatable": true,
  "isWhiteListed": true
}

const pricingStrategy = {
  "rate": 1000
};

module.exports = {
  token,
  reservedTokens,
  reservedTokens2,
  investments,
  whiteListItem,
  crowdsale,
  pricingStrategy
}