import { useState } from 'react';
import './App.css';
import Panier from './components/panier/Panier';
import Article from './components/shopArticle/Article';

function App() {
  const [item, setItem] = useState([
    { nom: "Coca Cola", price: 1, stock: 5, unity: 0, url: "https://www.pngmart.com/files/1/Coca-Cola-PNG-Photos.png", id: 1 },
    { nom: "Fanta", price: 1.5, stock: 5, unity: 0, url: "https://pngimg.com/uploads/fanta/fanta_PNG54.png", id: 2 },
    { nom: "Iced Tea", price: 2, stock: 5, unity: 0, url: "https://www.hanaya-sushi.be/wp-content/uploads/2017/09/7-icetea-peach.png", id: 3 }
  ])


  const [money, setMoney] = useState(20);
  const [btn, setBtn] = useState("btnBuy");
  // const [estVide, setEstVide] = useState(" est vide")
  // const [basket, setBasket] = useState([])
  const buy = (product) => {
    // LE "IF" POUR VOIR SI ON A ASSEZ D'ARGENT
    if (money >= product.price) {
      setMoney(money - product.price) // L'ARGENT DIMUNUE EN FONCTION DE L'ARTICLE
      product.stock -= 1  // LE STOCK DIMINUE
      product.unity += 1 // LA QUANTITE ACHETEE AUGMENTE 
      // if (product.unity > 0) {
      //   setEstVide(" ")
      // }
    } else {
      setBtn("hide") // SI ON A PAS L'ARGENT LE BOUTON DISPARAIT
    }
  }
  const unbuy = (product) => {
    setMoney(money + product.price) // L'ARGENT AUGMENTE QUAND ON REMET UN PRODUIT
    product.stock += 1 // LE STOCK AUGMENTE
    product.unity -= 1 // LA QUANTITE ACHETEE DIMINUE
    // if (product.unity <= 0){
    //   setEstVide(" est vide")
    // }
  }
  


  return (
    <div className="App">
      <a href="#ancre"><img src="https://findicons.com/files/icons/2718/pretty_office_icon_set_part_11/512/shop.png" alt="logo" className= "logo" /></a>
      <a href="#ancre"><img src="https://findicons.com/files/icons/2718/pretty_office_icon_set_part_11/512/shop.png" alt="logo" className= "logoRight" /></a>
      {/* <div className='mode'>
        <div className='jour'></div>
        <div className='nuit'></div>
      </div> */}
      <h1 id='ancre'>{`Mon argent : ${money}€`}</h1>
      <div className="article">
        {item.map((item, index) => (<Article item={item} key={index} id={item.id} buy={() => buy(item)} stock={item.stock} money={money} btn={btn} />))} 
        {/* LA BOUCLE POUR LES 3 ARTICLES */}
      </div>
      <h1>Mon panier: </h1>
      <div>
        {item.map((item, index) => (<Panier item={item} key={index} unbuy={() => unbuy(item)} />))} 
        {/* LA BOUCLE POUR L'AJOUT DANS LE PANIER */}
      </div>
    </div>
  );
}

export default App;
