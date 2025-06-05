"use client";

import React from "react";
import { Button } from "@/components/ui/buttons";
import { Card, CardContent } from "@/components/ui/cards";
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
          <p className="text-lg mb-6">
            We deliver handpicked fruits, vegetables, and farm goods directly from our farms to your doorstep.
          </p>
          <Button className="bg-green-700 text-white px-6 py-3 text-lg">Shop Now</Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Leaf className="mx-auto text-green-600 mb-4
