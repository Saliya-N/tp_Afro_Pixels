export class ImageCard{
    constructor(id, titre, prix, url, quantite){
        this.id=id;
        this.titre=titre;
        this.prix=prix;
        this.url=url;
        this.quantite=quantite;
    }

    render(){
        return `
             <div class="artcl" id="carte${this.id}">
                <img src="${this.url}" alt="${this.titre}">
                <p>${this.titre}</p>
                <p>${this.prix} FCFA</p>
                <div class="AjoutRetrait">
                    <button id="bPlus${this.id}">+</button>
                    <p id="nbrAjout${this.id}">${this.quantite}</p>
                    <button id="bMoins${this.id}">-</button>
                </div>
            </div>
        `
    }

    //Mise a jour des quantites des imageCards
    updateQuantite(){
        const carte =`
                <img src="${this.url}" alt="${this.titre}">
                <p>${this.titre}</p>
                <p>${this.prix} FCFA</p>
                <div class="AjoutRetrait">
                    <button id="bPlus${this.id}">+</button>
                    <p id="nbrAjout${this.id}">${this.quantite}</p>
                    <button id="bMoins${this.id}">-</button>
                </div>    
        `
        document.getElementById("carte" + this.id).innerHTML=carte      
    }

    ajouterArticle(){
        this.quantite+=1;
        this.updateQuantite()
    }

    retirerArticle(){
        if (this.quantite>0) {
            this.quantite-=1;
            this.updateQuantite()
        }
    }
}