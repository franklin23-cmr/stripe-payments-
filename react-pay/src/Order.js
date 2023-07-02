import React, { useEffect, useState } from 'react' 
import QRCode from 'qrcode.react';

function Order() {

    const [products, setProducts] = useState()
    const [qrcode, setQrcode] =useState(false)
    
    
    useEffect(() =>{
       const fetchProducts = async ()=>{
        const productsData = await fetch('/get-products').then((res)=>{
            return res.json()
        })
         setProducts(productsData)
       }
       fetchProducts()
        console.log(products)
    }, [])
   const handleClick = () => {
        setQrcode(true)
    }
    
    const ProductDisplay = () => {
        // ici c'est juste pour afficer les produits
        // fait attention il y'a pas de relation entre les produits ci et ceux envoyer
        // c'est juste pour le test
        // c'est a toi de defnir les produits selectionner par les clients et les produits a envoyes a l'api de stripe
        
        const produits = [
            {
                "image": "chemin/vers/image1.jpg",
                "prix": 10.99,
                "nom": "paracetamol",
                "quantite": 50,
                "description": "Ceci est le produit 1",
                "id": 101,
                "type": "medicaments",
            },
            
            {
                "image": "chemin/vers/image2.jpg",
                "prix": 5.99,
                "nom": "tshirt",
                "quantite": 100,
                "description": "Ceci est le produit 2",
                "id": 102,
                "type": "vetements",
            },
        ]
 
       return produits ? (<div>
            {produits.map((produit)=>{
                
                return <div key={produit.id}>
                            <h2>{produit.npm}</h2>
                            <p>description : {produit.description}</p>
                            <p>quantite: {produit.quantite}</p>
                            <p>prix unitaire : {produit.prix}</p>
                            <p>total: { parseFloat(produit.prix) * parseFloat(produit.quantite)  } euro</p>
                        </div>
            })}
            <button onClick={handleClick}>order by qr code</button>
        </div>) : <p> Wait .... </p>
    }
 
    const QrcodeDisplay = () => {
        // const qrcodeDestination =`${window.location.origin}/checkout`
        const qrCodeLocalNetwork = 'http://192.168.254.221:3000/checkout'
        return <QRCode
                    value={qrCodeLocalNetwork}
                    size={350}
                    includeMargin={true}
                />
    }

  return (
    qrcode ? <QrcodeDisplay/> : <ProductDisplay/> 
  )
}

export default Order
