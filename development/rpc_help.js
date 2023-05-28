import axios from "https://cdn.skypack.dev/axios";
class Asdf extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<article>
        <h4>RPC help</h4>
        <p>Here you find all RPC calls that Ravencoin support</p>
        <select>
        </select>
        <code>
        </code>
        </article>`;

    const select = this.querySelector("select");

    select.addEventListener("change", async function (event) {
      const value = event.target.value;
      console.log(value);
      const help = await rpc("help", [value]);
      event.target.parentNode.querySelector("code").innerText = help;
    });

    const data = await rpc("help", []);

    const lines = data.split("\n");
    lines.map((line) => {
      if (line) {
        const o = document.createElement("option");
        const value = line.split(" ")[0];
        o.innerText = value.startsWith("==") === false ? value : line;
        select.appendChild(o);
        o.setAttribute("value", value);
        if (line.startsWith("==")) {
          o.setAttribute("disabled", true);
          o.style.fontSize="1.5rem";
          o.style.marginTop="2rem";
        }
      }
    });
  }
}

customElements.define("rpc-help", Asdf);

async function rpc(method, params) {
  const URL = "https://rvn-rpc-mainnet.ting.finance/rpc";
  const axiosResponse = await axios.post(URL, { method, params });
  return axiosResponse.data.result;
}
