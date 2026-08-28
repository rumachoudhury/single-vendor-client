"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, Bell, Zap } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    setTimeout(() => {
      toast.success("Successfully subscribed!");
    }, 2000);
  };

  // const benefits = [
  //   {
  //     icon: Gift,
  //     text: "Exclusive deals & offers",
  //   },
  //   {
  //     icon: Bell,
  //     text: "New product alerts",
  //   },
  //   {
  //     icon: Zap,
  //     text: "Early access to sales",
  //   },
  // ];


  const benefits = [
  {
    icon: Gift,
    text: "Exclusive discounts",
  },
  {
    icon: Bell,
    text: "Latest product updates",
  },
  {
    icon: Zap,
    text: "Early access to deals",
  },
];


  return (
    // <section className="py-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden ">
    <section className="py-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-float delay-2000"></div>

      <div className="container mx-auto px-4 relative ">
        <div className="max-w-4xl mx-auto text-center ">
          {/* Section Header */}
          <div className="mb-12 animate-in slide-in-from-bottom-10 duration-1000">
            {/* <Badge variant="secondary" className="mb-4"> */}
            <Badge className="mb-4 bg-white/15 text-white border border-white/30 hover:bg-white/20">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter
            </Badge>
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Stay in the Loop
            </h2>
            <p className="text-lg text-primary-foreground/80 dark:text-white max-w-2xl mx-auto mb-4">
              Subscribe to our newsletter and be the first to know about new
              products, exclusive deals, and special offers. Join our community
              of smart shoppers!
            </p> */}

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
  Get the Latest from TechMart
</h2>

<p className="text-lg text-white/80 max-w-2xl mx-auto mb-4">
  Subscribe for the latest products, exclusive deals, special discounts,
  and early access to our best offers.
</p>
          </div>

          {/* Benefits */}
          <div 
          className="flex flex-wrap justify-center gap-6 mb-6 animate-in slide-in-from-bottom-10 duration-1000 delay-300"
          // className="flex-1 bg-white text-slate-900 border-white placeholder:text-slate-400 focus:border-white focus:ring-2 focus:ring-white/30"
          
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-primary-foreground/90 dark:text-white"
              >
                <benefit.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto animate-in slide-in-from-bottom-10 duration-1000 delay-500">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20 dark:text-white"
              />
              {/* <Button
                type="submit"
                variant="secondary" 
                className="whitespace-nowrap group"
              >
                Subscribe Now
                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </Button> */}

              <Button
  type="submit"
  className="whitespace-nowrap group bg-white text-blue-600 hover:bg-blue-50"
>
  Subscribe Now
  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
</Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-4 dark:text-white">
              {/* We respect your privacy. Unsubscribe at any time. */}
               We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
