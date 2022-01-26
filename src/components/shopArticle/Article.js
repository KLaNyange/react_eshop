import "./article.css"

function Article(props) {
    return (
        <div className={props.item.stock == 0 ? "itemShort" : "item "}>
            <div className={props.item.nom}>
                <div className="img">
                    <img src={props.item.url} alt={`image de ${props.item.nom}`} className="imgProduct"/>
                </div>
                <div className={props.item.stock == 1 ? "orange" : "info " && props.item.stock == 0 ? "red" : "info "}> 
                {/* CONDITION POUR LES COULEURS */}
                    <h2>{props.item.nom}</h2>
                    <p>{`Prix: ${props.item.price}€`}</p>
                    <p>{`Stock: ${props.item.stock} unités`}</p>
                    <div className="btn">
                        <button id={props.item.id} className={props.stock == 0 ? "hide" : props.btn} onClick={props.buy}>Acheter</button> 
                        {/* QUAND PAS DE STOCK LE BOUTON DISPARAIT */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;





