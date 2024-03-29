const html = `<article>
<h3>How can I interact with Ravencoin blockchain?</h3>
<p>
You use Remote Procedure Calls (RPC) to read data from the Ravencoin blockchain.

  <ol>
  <li>You can make RPC calls to an online service such as <a href="https://rpc.ting.finance/">https://rpc.ting.finance/</a>.
  This will drastically <em>kick start</em> your development.</li>
  <li>OR, you can set it up yourself by installing a Raven core wallet and running it in server mode. 
    <a href="https://github.com/RavenProject/Ravencoin/releases"
    >Raven core wallet</a>.<br/>
  Installing Raven core QT wallet and syncing the blockchain with all the indexes needed can take a day.
  See section <a href="#how-to-configure">How to configure</a> for configuration.

  </li>
</ol>
  
</p>
<p >To get the balance of one ore many addresses use the RPC call <code>getaddressbalance</code>
<p><label>Popular RPC calls</label>
<pre><code>getaddressdeltas
getaddressbalance
getaddressmempool
getaddressutxos
getrawmempool
getrawtransaction

getblockhash
getblock
</code></pre>
</p>    
</article>
<article>
<h5 id="how-to-configure">How to configure your own Ravencoin node</h5>  
<p>On windows, download Raven core QT wallet from ravencoin.org.
Start it, after some minutes close the app. Locate your raven.conf file (in your wallet data directory).</p>
<p>
Change the configuration to get all indexes needed (see "Configuration example for Ravencoin node").
Start Raven QT again and let it sync.
</p>

<p>This is a good tutorial by Tron Black describing how to run Raven on linux on a Virtual Private Server.
<a href="https://tronblack.medium.com/ravencoin-how-to-run-full-nodes-85f92d2ebc1a">Ravencoin — How to Run Full Nodes</a>
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
  </article>
`;
class Asdf extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html;
  }
}
customElements.define("how-to-config", Asdf);
