const html = `<article>
<h3>How can I read information from Ravencoin blockchain?</h3>
<p>
You use Remote Procedure Calls (RPC) to read data from the Ravencoin blockchain.

  <ul>
  <li>You can RPC calls to an online service such as <a href="https://rpc.ting.finance/">https://rpc.ting.finance/</a>
  <li>OR, you can set it up yourself by installing a Raven core wallet and running it in server mode.l
  <a href="https://github.com/RavenProject/Ravencoin/releases"
    >Raven core wallet</a
  >
  </li>
</ul>
  
</p>
  <details>
    <summary>Configuration example for Ravencoin node</summary>
    <pre>
<code> 
server=1

listen=1
#Maintains the full transaction index on your node. Needed if you call getrawtransaction. Default is 0.
txindex=1

#Maintains the full Address index on your node. Needed if you call getaddress* calls. Default is 0.
addressindex=1

#Maintains the full Asset index on your node. Needed if you call getassetdata. Default is 0.
assetindex=1

#Maintains the full Timestamp index on your node. Default is 0.
timestampindex=1

#Maintains the full Spent index on your node. Default is 0.
spentindex=1

#Username and password - You can make this whatever you want.
rpcuser=secret
rpcpassword=secret

#What IP address is allowed to make calls to the RPC server. If youre running the wallet on the same machine youre
#developing on, this is fine. If not, you need to put the IP address of the machine CALLING the node here.
rpcallowip=127.0.0.1

dbcache=4096

upnp=1
</code></pre>
  </details>

</article>`;
class Asdf extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html;
  }
}
customElements.define("how-to-config", Asdf);
