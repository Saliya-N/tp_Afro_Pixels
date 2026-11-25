
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

    updateRendu(){
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
        document.getElementById("bPlus" + this.id).addEventListener("click", () => this.ajouterArticle());
        document.getElementById("bMoins" + this.id).addEventListener("click", () => this.retirerArticle());       

    }


    ajouterArticle(){
        this.quantite+=1;
        this.updateRendu()
    }

    retirerArticle(){
        if (this.quantite>0) {
            this.quantite-=1;
            this.updateRendu()
        }
    }
}