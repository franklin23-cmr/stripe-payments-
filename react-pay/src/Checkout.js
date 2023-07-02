import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'


// a toi d'ecrire les produits a envoye a l'api de stripe
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

function Checkout() {
    useEffect(()=>{
        
        const initiateCheckout = async () => {
            const {publishableKey} = await fetch('/config-session').then((res)=>{return res.json()})
             const stripe = await  loadStripe(publishableKey)

            // const {id} = await fetch('/create-checkout-session', {method: 'POST',})
            // .then((res)=>{
            //     return res.json()
            // })

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Si vous envoyez des données en format JSON
                },
                body: JSON.stringify(produits)
                };

             const {id} = await fetch('/create-checkout-session', options)
                    .then(response => response.json())
                    .catch(error => console.error(error));

            const {error} = await stripe.redirectToCheckout({
                sessionId: id,
            })

            if(error){
                console.log("there was and error ")
            }
            }

    
        initiateCheckout()
    })

  return (
    <div>
       loading .... 
    </div>
  )
}

export default Checkout
