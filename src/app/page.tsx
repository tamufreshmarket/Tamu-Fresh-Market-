"use client"; import React, { useState } from "react"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { ShoppingBag, Leaf, Phone, ShoppingCart, MessageCircle, Trash2 } from "lucide-react";

export default function TamuFreshMarket() { const products = [ { id: 1, name: "Tomatoes", price: 2.0, description: "Juicy, ripe tomatoes perfect for salads and cooking.", image: "/images/tomatoes.jpg", }, { id: 2, name: "Fresh Carrots", price: 2.0, description: "Crunchy and sweet carrots freshly harvested.", image: "/images/carrots.jpg", }, { id: 3, name: "Spinach", price: 2.0, description: "Fresh, leafy spinach rich in nutrients.", image: "/images/spinach.jpg", }, ];

const [cart, setCart] = useState([]); const [quantities, setQuantities] = useState({});

const addToCart = (product) => { const quantity = quantities[product.id] || 1; const existingItem = cart.find((item) => item.id === product.id); if (existingItem) { setCart( cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item ) ); } else { setCart([...cart, { ...product, quantity }]); } };

const removeFromCart = (id) => { setCart(cart.filter((item) => item.id !== id)); };

const updateQuantity = (id, value) => { const qty = Math.max(1, parseInt(value) || 1); setQuantities({ ...quantities, [id]: qty }); };

return ( <div className="min-h-screen bg-white text-gray-800"> <header className="bg-green-700 text-white p-6 shadow-md"> <div className="max-w-6xl mx-auto flex justify-between items-center"> <h1 className="text-3xl font-bold">Tamu Fresh Market</h1> <a
href="https://wa.me/263712560594"
target="_blank"
rel="noopener noreferrer"
className="bg-white text-green-700 px-4 py-2 rounded shadow"
> WhatsApp Us </a> </div> </header>

<section className="bg-green-100 py-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-4">Fresh. Local. Organic.</h2>
      <p className="text-lg mb-6">
        We deliver handpicked fruits, vegetables, and farm goods directly from our farms to your doorstep.
      </p>
      <Button className="bg-green-700 text-white px-6 py-3 text-lg">Shop Now</Button>
    </div>
  </section>

  <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card>
      <CardContent className="p-6 text-center">
        <Leaf className="mx-auto text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold">Farm-Fresh Quality</h3>
        <p>Our produce is grown with love and picked at peak freshness.</p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-6 text-center">
        <ShoppingBag className="mx-auto text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold">Easy Ordering</h3>
        <p>Order online with just a few clicks. We make fresh shopping simple.</p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-6 text-center">
        <Phone className="mx-auto text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold">Customer Support</h3>
        <p>We're here to help you with orders, deliveries, and more.</p>
      </CardContent>
    </Card>
  </section>

  <section className="max-w-6xl mx-auto py-12 px-6">
    <h2 className="text-3xl font-semibold mb-8 text-center">Online Store</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="mb-2 font-semibold">${product.price.toFixed(2)} / kg</p>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) => updateQuantity(product.id, e.target.value)}
              className="border px-2 py-1 rounded w-20 mb-2 text-center"
            />
            <Button className="bg-green-700 text-white w-full" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {cart.length > 0 && (
    <section className="max-w-4xl mx-auto py-10 px-6 bg-gray-50 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.quantity} kg × ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
            <Button variant="outline" size="icon" onClick={() => removeFromCart(item.id)}>
              <Trash2 className="text-red-500" />
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right font-bold">
        Total: ${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
      </div>
      <Button className="mt-4 bg-green-700 text-white">Checkout</Button>
    </section>
  )}

  <footer className="bg-green-700 text-white text-center p-4 mt-12">
    <p>&copy; {new Date().getFullYear()} Tamu Fresh Market. All rights reserved.</p>
    <a
      href="https://wa.me/263712560594"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-2 text-white underline"
    >
      <MessageCircle size={18} /> Chat with us on WhatsApp
    </a>
  </footer>
</div>

); }

