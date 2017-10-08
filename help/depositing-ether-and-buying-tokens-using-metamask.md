---
layout: page
title: Tutorial
subtitle: Depositing Ether and Buying Tokens using MetaMask
---

In this tutorial, we're going to deposit Ether into UbiTok.io and use it to buy OMG tokens.

This version of the tutorial assumes you've installed and are using the [MetaMask Chrome Extension](https://metamask.io/).

If you don't want to (or can't) use MetaMask, we have another [version for MyEtherWallet users](../depositing-ether-and-buying-tokens-using-myetherwallet).

### Choosing MetaMask

First, make sure you've unlocked your MetaMask account by entering your password and selected the address you want to use with UbiTok.io.

The address will need enough Ether for your deposit, plus a little extra (say 0.05 ETH) to cover gas fees.

Go to the UbiTok.io pair you want to buy - in our case [OMG-ETH](http://ubitok.io/exchange/?pairId=OMG-ETH) - and when asked "How should UbiTok.io send Ethereum transactions?", choose MetaMask.

You might need to reload the UbiTok.io web page after unlocking your MetaMask account - sometimes it doesn't detect it straight away.

Here's a little video showing what to do:

![Connecting with MetaMask Video](../connect-with-metamask.gif)

### Depositing Ether

Now UbiTok.io knows to use your MetaMask account, you should see your Ethereum address balance appear as an "External" ETH balance in UbiTok.io.

In order to use your Ether to buy tokens, you'll need to deposit it into the UbiTok.io book contract. Note that each pair is a separate contract.

Use the "[+ Dep]" button next to your ETH balance to bring up the Deposit ETH form.

When you click 'Deposit ETH', MetaMask will pop-up its "Confirm Transaction" dialog - check the details look sensible and click Confirm.

Here's a video:

![Depositing Ether with MetaMask Video](../buy-tokens-with-metamask.gif)

Tips:
 - Make sure you leave some Ether in your account since you'll need it to pay gas fees;
 - When the Ethereum network is busy, transactions can take a while - increasing the "gas price" on the Confirm Transaction dialog can help (at the cost of paying a higher fee);

After the transaction has completed, you should see your "Exchange" ETH balance on UbiTok.io increase (and your "External" balance decrease).

### Buying Tokens

Now we have an "Exchange" ETH balance, we're going to use it to buy 4 OMG tokens, taking the price of 0.0330 we can see offered in the "Ask" side of the book.

We'll make sure 'Buy OMG' is selected, enter the number of tokens we want to buy in the amount box, fill in the price box by clicking the price we want, then choose the default terms of "Good Till Cancel (no gas topup)".

"Good Till Cancel" means that even if the offer we saw disappears, our order to buy will still stand - it will be added to the book and (hopefully) filled by someone else. If we don't want that, we could choose "Immediate or Cancel". Full details of terms and order statuses are covered in our ![Trading Rules](../../trading-rules).

When we click 'Place Buy Order', MetaMask will pop-up its "Confirm Transaction" screen - check the details look sensible and click Confirm.

Here comes the video:

![Buy Tokens with MetaMask Video](../buy-tokens-with-metamask.gif)
