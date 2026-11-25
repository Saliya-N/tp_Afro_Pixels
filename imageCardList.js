import {ImageCard} from './ImageCard.js'

export class imageCardList{
    constructor(donnees){
        this.imageCards=[];
         for (const donnee of donnees) {
            this.imageCards.push(new ImageCard(donnee.id, donnee.titre, donnee.prix, donnee.url,0))
        }
    }
    
    render(){
        let contenuMain=document.querySelector("#articlesDispo")
        for (const imageCard of this.imageCards) {
            contenuMain.innerHTML+=imageCard.render(imageCard.id)
        }
         for (const imageCard of this.imageCards) {
            document.getElementById("bPlus" + imageCard.id).addEventListener("click", () => imageCard.ajouterArticle());        
            document.getElementById( "bMoins" + imageCard.id).addEventListener("click", () => imageCard.retirerArticle());
        }
        
    }
}