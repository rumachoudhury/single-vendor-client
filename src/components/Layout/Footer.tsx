// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Separator } from "@/components/ui/separator"
// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

// const footerLinks = {
//   company: [
//     { name: "About Us", href: "/about" },
//     { name: "Careers", href: "/careers" },
//     { name: "Press", href: "/press" },
//     { name: "Blog", href: "/blog" },
//   ],
//   support: [
//     { name: "Help Center", href: "/help" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Shipping Info", href: "/shipping" },
//     { name: "Returns", href: "/returns" },
//   ],
//   legal: [
//     { name: "Privacy Policy", href: "/privacy" },
//     { name: "Terms of Service", href: "/terms" },
//     { name: "Cookie Policy", href: "/cookies" },
//     { name: "Refund Policy", href: "/refunds" },
//   ],
//   categories: [
//     { name: "Electronics", href: "/categories/electronics" },
//     { name: "Fashion", href: "/categories/fashion" },
//     { name: "Home & Garden", href: "/categories/home" },
//     { name: "Sports", href: "/categories/sports" },
//   ],
// }

// const socialLinks = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Youtube, href: "#", label: "YouTube" },
// ]

// export function Footer() {
//   return (
//     <footer className="bg-background border-t">
//       {/* Main Footer */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
//           {/* Brand Section */}
//           <div className="lg:col-span-2 space-y-6">
//             <Link href="/" className="flex items-center space-x-2">
//               <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold text-lg">D</span>
//               </div>
//               <span className="font-bold text-xl">TechMart</span>
//             </Link>
//             <p className="text-muted-foreground max-w-sm">
//               Your trusted shopping partner since 2020. We provide quality products at unbeatable prices with
//               exceptional customer service.
//             </p>

//             {/* Contact Info */}
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4" />
//                 <span>123 Commerce Street, New York, NY 10001</span>
//               </div>
//               <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//                 <Phone className="h-4 w-4" />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//                 <Mail className="h-4 w-4" />
//                 <span>support@techMart.com</span>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <Button
//                   key={index}
//                   variant="ghost"
//                   size="icon"
//                   className="h-9 w-9 hover:bg-primary hover:text-primary-foreground"
//                   asChild
//                 >
//                   <Link href={social.href} aria-label={social.label}>
//                     <social.icon className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Company</h3>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Support</h3>
//             <ul className="space-y-3">
//               {footerLinks.support.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Categories Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Categories</h3>
//             <ul className="space-y-3">
//               {footerLinks.categories.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="font-semibold mb-4">Stay Updated</h3>
//             <p className="text-sm text-muted-foreground mb-4">Subscribe to get updates on new products and offers.</p>
//             <div className="space-y-3">
//               <Input type="email" placeholder="Enter your email" className="text-sm" />
//               <Button className="w-full" size="sm">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Separator />

//       {/* Bottom Footer */}
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
//             <p className="text-sm text-muted-foreground">© 2024 TechMart. All rights reserved.</p>
//             <div className="flex space-x-6">
//               {footerLinks.legal.map((link, index) => (
//                 <Link
//                   key={index}
//                   href={link.href}
//                   className="text-sm text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//             <span>Made with</span>
//             <Heart className="h-4 w-4 text-red-500 fill-current" />
//             <span>by TechMart Team</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


// ==================
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refunds" },
  ],
  categories: [
    { name: "Electronics", href: "/categories/electronics" },
    { name: "Fashion", href: "/categories/fashion" },
    { name: "Home & Garden", href: "/categories/home" },
    { name: "Sports", href: "/categories/sports" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    // <footer className="bg-background border-t border-blue-500/10">
  <footer className="bg-slate-950 text-white border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-extrabold text-xl">
                  T
                </span>
              </div>

              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                TechMart
              </span>
            </Link>

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Your trusted destination for quality products, great value, and
              a better shopping experience. Shop confidently with TechMart.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span>support@techmart.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>

            <ul className="space-y-3">
              {footerLinks.categories.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Get the latest products, exclusive offers, and TechMart news
              delivered to your inbox.
            </p>

            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-sm border-blue-500/20 focus:border-blue-500 focus:ring-blue-500/20"
              />

              <Button
                className="w-full text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p className="text-sm text-muted-foreground">
              © 2026 TechMart. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>

            <Heart className="h-4 w-4 text-pink-500 fill-current" />

            <span>
              for better shopping
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
