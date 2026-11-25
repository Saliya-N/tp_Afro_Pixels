import {donneesArticles} from './donnees.js'
import {Panier} from './Panier.js'
import {imageCardList} from './imageCardList.js'



const monPanier= new Panier()
monPanier.render()
const maListe=new imageCardList(donneesArticles, monPanier)
maListe.render()
monPanier.afficherPanier()
const conteneurProduits = document.getElementById("articlesDispo"); 

conteneurProduits.addEventListener("click", (event) => {
    for (const imageCard of maListe.imageCards) {
        const boutonPlus = event.target.closest('#bPlus'+ imageCard.id);
    if (boutonPlus) {
            monPanier.ajouterAuPanier(imageCard);
    }
        const boutonMoins=event.target.closest('#bMoins'+ imageCard.id)
        if (boutonMoins) {
            monPanier.retirerDuPanier(imageCard);
    }
    }
    });
