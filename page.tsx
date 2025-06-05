"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Leaf, Phone, ShoppingCart, MessageCircle } from "lucide-react";

export default function TamuFreshMarket() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-700 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tamu Fresh Market</h1>
          <a
            href="https://wa.me/263712560594"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 px-4 py-2 rounded shadow"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      <section className="bg-green-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Fresh. Local. Organic.</h2>
          <p className="text-lg mb-6">We deliver handpicked fruits, vegetables, and farm goods directly from our farms to your doorstep.</p>
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
          {["Tomatoes", "Fresh Carrots", "Spinach"].map((item, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <ShoppingCart className="text-green-600 mb-4 mx-auto" size={36} />
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="mb-4">$2.00 / kg</p>
                <Button className="bg-green-700 text-white w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
  );
}
