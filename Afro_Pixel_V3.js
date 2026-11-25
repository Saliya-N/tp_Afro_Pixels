import {donneesArticles} from './donnees.js'
import {imageCardList} from './ImageCardList.js'

const maListe=new imageCardList(donneesArticles)
maListe.render()