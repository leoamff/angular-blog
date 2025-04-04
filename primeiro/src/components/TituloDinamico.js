class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        
    
   
        //base componente <h1>Leonardo</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar compnente
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;


        //enviar para sahdow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);
