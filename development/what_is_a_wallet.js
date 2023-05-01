const html = `<article>
<h3>What is a wallet?</h3>
<ol>
  <li>
    Wallet can mean a users "balance" on the blockchain. Like "I have
    300 RVN coins in my wallet". Usually you get a 12 words backup
    phrase that you can use with any software. Doesnt matter if you are
    on your Windows desktop computer or on your iPhone, the same 12
    words show the same balance.
  </li>
  <li>
    Wallet can mean the software, the app, used to interact with the
    blockchain. If someone asks, "which wallet do you recommend", they
    are referring to software.
  </li>
</ol>
</article>`;
class WhatIsAWallet extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html;
  }
}
customElements.define("what-is-a-wallet", WhatIsAWallet);
