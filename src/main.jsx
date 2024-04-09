import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'
import CheckoutStepper from "./components/CheckoutStepper"

const CHECKOUT__STEPS = [
  {
    name : "Customer Info",
    Component : ()=> <div>Provide Your contact details</div>
  },
  {
    name : "Shipping Info",
    Component : ()=> <div>Provide Your shipping address</div>
  },
  {
    name : "Payment",
    Component : ()=> <div>Complete payment for your order</div>
  },
  {
    name : "Delivered", 
    Component : ()=> <div>Your order has been delivered</div>
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CheckoutStepper checkoutSteps={CHECKOUT__STEPS}/>
  </React.StrictMode>,
)
