"use client";

import type React from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// const contactInfo = [
//   {
//     icon: MapPin,
//     title: "Visit Us",
//     detail: "123 Commerce St, NY 10001",
//     color: "text-blue-600 dark:text-blue-400",
//   },
//   {
//     icon: Phone,
//     title: "Call Us",
//     detail: "+1 (555) 123-4567",
//     color: "text-green-600 dark:text-green-400",
//   },
//   {
//     icon: Mail,
//     title: "Email Us",
//     detail: "support@techmart.com",
//     color: "text-purple-600 dark:text-purple-400",
//   },
//   {
//     icon: Clock,
//     title: "Hours",
//     detail: "Mon - Fri: 9 AM - 6 PM",
//     color: "text-orange-600 dark:text-orange-400",
//   },
//   {
//     icon: MessageCircle,
//     title: "Live Chat",
//     detail: "Available 24/7 for instant help",
//     color: "text-pink-600 dark:text-pink-400",
//   },
//   {
//     icon: Headphones,
//     title: "Support Center",
//     detail: "Browse FAQs & tutorials",
//     color: "text-indigo-600 dark:text-indigo-400",
//   },
// ]

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit TechMart",
    detail: "123 Commerce St, NY 10001",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Phone,
    title: "Call Our Team",
    detail: "+1 (555) 123-4567",
    color: "text-green-500 dark:text-green-400",
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "support@techmart.com",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "Mon - Fri: 9 AM - 6 PM",
    color: "text-indigo-500 dark:text-indigo-400",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    detail: "Get quick help from our team",
    color: "text-cyan-500 dark:text-cyan-400",
  },
  {
    icon: Headphones,
    title: "Help Center",
    detail: "Find answers, FAQs & guides",
    color: "text-pink-500 dark:text-pink-400",
  },
];
export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    to_subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (form.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
        );
        setTimeout(() => {
          toast.success("Message sent successfully!");
        }, 2000);
        setFormData({
          user_name: "",
          user_email: "",
          phone: "",
          to_subject: "",
          message: "",
        });
        form.current.reset();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2">
            <MessageCircle className="w-3 h-3 mr-1" />
            Contact Us
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Let&apos;s Connect</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Got questions? Reach out, and we&apos;ll get back to you quickly!
          </p>
        </div> */}

        <div className="text-center mb-8">
          <Badge
            variant="outline"
            className="mb-2 border-blue-400/30 text-blue-500 dark:text-blue-400"
          >
            <MessageCircle className="w-3 h-3 mr-1" />
            Get in Touch
          </Badge>

          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            We&apos;d Love to Hear From You
          </h2>

          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Have a question, suggestion, or need assistance? Our team is here to
            help and make your TechMart experience even better.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* <Card className="bg-background p-5 dark:border-gray-400">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">We&apos;re Here for You</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  At TechMart, we value your feedback and inquiries. Whether it&apos;s about our products, services, or just a friendly hello, we&apos;re excited to hear from you!
                </p>
                <Button variant="outline" className="text-sm">
                  <Mail className="mr-2 h-3 w-3" />
                  Email Support
                </Button>
              </CardContent>
            </Card> */}

            <Card className="bg-background/80 backdrop-blur-sm p-5 border-blue-500/10 dark:border-gray-400">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-blue-500" />
                </div>

                <h3 className="text-xl font-semibold mb-3">How Can We Help?</h3>

                <p className="text-sm text-muted-foreground mb-4">
                  Whether you have a question about a product, your order,
                  delivery, returns, or anything else, our support team is ready
                  to assist you.
                </p>

                <Button
                  variant="outline"
                  className="text-sm border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500"
                >
                  <Mail className="mr-2 h-3 w-3" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                // <Card key={index} className="hover:shadow-md transition-shadow duration-300 p-0 dark:border-gray-400">
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-0 border-blue-500/10 dark:border-gray-400 bg-card/80 backdrop-blur-sm"
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    {/* <div className={`p-1.5 rounded-lg bg-muted ${info.color}`}> */}
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        {info.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {info.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            {/* <Card className="p-0 dark:border-gray-400"> */}
            <Card className="p-0 border-blue-500/10 dark:border-gray-400 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium mb-1 block">
                      Name
                    </label>
                    <Input
                      name="user_name"
                      placeholder="John Doe"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium mb-1 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium mb-1 block">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium mb-1 block">
                      Subject
                    </label>
                    <Input
                      name="to_subject"
                      placeholder="Your inquiry"
                      value={formData.to_subject}
                      onChange={handleChange}
                      required
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium mb-1 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="text-sm"
                    />
                  </div>

                  {/* <Button type="submit" className="w-full group text-sm" disabled={isSubmitting}>
                    <Send className="mr-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button> */}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-md"
                  >
                    <Send className="mr-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
