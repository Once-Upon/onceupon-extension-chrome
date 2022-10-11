function redirect() {
  const referrer = document.referrer;

  // If the user is on the index page of etherscan (https://etherscan.io/), do not redirect
  const location = window.location.href;
  if (
    location &&
    (location === "https://etherscan.io/" ||
      location === "https://etherscan.io")
  ) {
    return;
  }

  // if the referrer is etherscan, keep them on etherscan
  if (referrer && referrer.indexOf("etherscan.io") !== -1) {
    return;
  }

  // if the referrer is Once Upon, we'll add a querystring param ref=onceupon
  const querystring = window.location.search;
  if (querystring && querystring.indexOf("onceupon") !== -1) {
    return;
  }

  // Handle specific URLS

  // Blocks
  if (location && location.indexOf("https://etherscan.io/block/") !== -1) {
    const blockNumber = location.split("https://etherscan.io/block/")[1];
    window.location.href = `https://www.onceupon.gg/finder/b${blockNumber}`;
    return;
  }

  // Block Transactions
  if (location && location.indexOf("https://etherscan.io/txs?block=") !== -1) {
    const blockNumber = location.split("https://etherscan.io/txs?block=")[1];
    window.location.href = `https://www.onceupon.gg/finder/b${blockNumber}`;
    return;
  }

  // Transactions
  if (location && location.indexOf("https://etherscan.io/tx/") !== -1) {
    const txHash = location.split("https://etherscan.io/tx/")[1];
    window.location.href = `https://www.onceupon.gg/finder/${txHash}`;
    return;
  }

  // Address
  if (location && location.indexOf("https://etherscan.io/address/") !== -1) {
    const address = location.split("https://etherscan.io/address/")[1];
    window.location.href = `https://www.onceupon.gg/finder/${address}`;
    return;
  }

  // Token
  if (location && location.indexOf("https://etherscan.io/token/") !== -1) {
    const address = location.split("https://etherscan.io/token/")[1];
    window.location.href = `https://www.onceupon.gg/finder/${address}`;
    return;
  }
}

redirect();
