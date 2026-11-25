import {ImageCard} from './ImageCard.js'

export class imageCardList{
    constructor(donnees){
        this.imageCards=[];
         for (const donnee of donnees) {
            this.imageCards.push(new ImageCard(donnee.id, donnee.titre, donnee.prix, donnee.url,0))
        }
    }
    
    //Affichage de chaque imageCard avec ses boutons interactifs pour modifier sa quantite
    render(){
        let contenuMain=document.querySelector("#articlesDispo")
        for (const imageCard of this.imageCards) {
            contenuMain.innerHTML+=imageCard.render(imageCard.id)
        }

        contenuMain.addEventListener("click", (event) => {
            for (const imageCard of this.imageCards) {
                const boutonPlus = event.target.closest('#bPlus'+ imageCard.id);
                if (boutonPlus) 
                    imageCard.ajouterArticle()
                const boutonMoins=event.target.closest('#bMoins'+ imageCard.id)
                if (boutonMoins)
                    imageCard.retirerArticle()
            }
        });   
    }
}