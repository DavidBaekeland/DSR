(()=>{async function e(e){let n=await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/icons/${e}`);return await n.text()}!async function(){let n=`<a id="pijl2" href="#blue">${await e("pijl")}</a>`;document.getElementById("pijl").insertAdjacentHTML("beforeend",n)}(),async function(){let n=await e("money");document.getElementById("icons").insertAdjacentHTML("beforeend",n)}(),async function(){let n=await e("building");document.getElementById("icons").insertAdjacentHTML("beforeend",n)}(),async function(){let n=await e("travel");document.getElementById("icons").insertAdjacentHTML("beforeend",n)}()})();