class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this .attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        const cardRight = document.createElement("div");

        const linkAutor = document.createElement("a");
        linkAutor.textContent = "By" + this.getAttribute("linkAutor");

        const tittle = document.createElement("h1");
        const newsContent = document.createElement("p");
        const newImage = document.createElement("img");

        cardLeft.appendChild(linkAutor);
        cardLeft.appendChild(title);
        cardLeft.appendChild(newsContent);
        
        cardRight.appendChild(newImage);
        
        componentRoot.appendChild(cardLeft);
        cardLeft.setAttribute("class", "card__left");

        componentRoot.appendChild(cardRight);
        cardRight.setAttribute("class", "card__right");

     

        return componentRoot;
    }

    style(){

    }

}

customElements.define("card-news", CardNews);