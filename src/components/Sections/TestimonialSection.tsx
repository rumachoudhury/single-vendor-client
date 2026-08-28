"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight, Smile } from "lucide-react";
import Image from "next/image";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Fashion Blogger",
//     avatar: "https://picsum.photos/seed/user1/80/80",
//     rating: 5,
//     content:
//       "TechMart has completely transformed my shopping experience. The quality of products is exceptional, and the customer service is outstanding. I've been a loyal customer for over 2 years now!",
//     verified: true,
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Tech Enthusiast",
//     avatar: "https://picsum.photos/seed/user2/80/80",
//     rating: 5,
//     content:
//       "As someone who's very particular about electronics, I'm impressed by TechMart's product selection and authenticity. Fast shipping and great prices make it my go-to store.",
//     verified: true,
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Small Business Owner",
//     avatar: "https://picsum.photos/seed/user3/80/80",
//     rating: 5,
//     content:
//       "The variety and quality of products available on TechMart is amazing. I've furnished my entire office through their platform. Highly recommend to anyone looking for reliable shopping.",
//     verified: true,
//   },
//   {
//     id: 4,
//     name: "James Patel",
//     role: "Freelance Designer",
//     avatar: "https://picsum.photos/seed/user4/80/80",
//     rating: 5,
//     content:
//       "TechMart's user-friendly platform and carefully vetted products make shopping a breeze. Their support team is always ready to help, making every purchase a pleasure!",
//     verified: true,
//   },
//   {
//     id: 5,
//     name: "Lisa Thompson",
//     role: "Marketing Manager",
//     avatar: "https://picsum.photos/seed/user5/80/80",
//     rating: 5,
//     content:
//       "I love the curated selection at TechMart. The products are high-quality, and the attention to detail aligns perfectly with my expectations. Highly recommend!",
//     verified: true,
//   },
// ]

const testimonials = [
  {
    id: 1,
    name: "Olivia Martin",
    role: "Tech Enthusiast",
    avatar: "https://picsum.photos/seed/techuser1/80/80",
    rating: 5,
    content:
      "TechMart made shopping for electronics incredibly easy. The products arrived quickly, exactly as described, and the quality was excellent.",
    verified: true,
  },
  {
    id: 2,
    name: "Daniel Wilson",
    role: "Business Owner",
    avatar: "https://picsum.photos/seed/techuser2/80/80",
    rating: 5,
    content:
      "I have purchased several products from TechMart and every experience has been smooth. Great selection, competitive prices, and reliable delivery.",
    verified: true,
  },
  {
    id: 3,
    name: "Sophia Anderson",
    role: "Digital Creator",
    avatar: "https://picsum.photos/seed/techuser3/80/80",
    rating: 5,
    content:
      "I love how easy it is to find what I need on TechMart. The website is simple to navigate and my orders always arrive safely and on time.",
    verified: true,
  },
  {
    id: 4,
    name: "Ethan Brown",
    role: "Software Developer",
    avatar: "https://picsum.photos/seed/techuser4/80/80",
    rating: 5,
    content:
      "TechMart has become one of my favorite online stores. The product quality, secure checkout, and fast shipping make the entire experience excellent.",
    verified: true,
  },
  {
    id: 5,
    name: "Ava Thompson",
    role: "Marketing Specialist",
    avatar: "https://picsum.photos/seed/techuser5/80/80",
    rating: 5,
    content:
      "The customer service is fantastic and the product selection keeps getting better. I would definitely recommend TechMart to friends and family.",
    verified: true,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Create infinite loop by duplicating testimonials
  const extendedTestimonials = [
    ...testimonials.slice(-slidesToShow), // Add last items at the beginning
    ...testimonials,
    ...testimonials.slice(0, slidesToShow), // Add first items at the end
  ];

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(4); // Large screens
      } else if (width >= 768) {
        setSlidesToShow(3); // Medium screens
      } else if (width >= 640) {
        setSlidesToShow(2); // Small-medium screens
      } else {
        setSlidesToShow(1); // Small screens
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Reset current index when slidesToShow changes
  useEffect(() => {
    setCurrentIndex(slidesToShow);
  }, [slidesToShow]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle infinite loop transitions
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // Reset position for infinite loop
      if (currentIndex >= testimonials.length + slidesToShow) {
        setCurrentIndex(slidesToShow);
      } else if (currentIndex <= 0) {
        setCurrentIndex(testimonials.length);
      }
    }, 500); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, slidesToShow]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // const toggleAutoPlay = () => {
  //   setIsAutoPlaying(!isAutoPlaying)
  // }

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex(index + slidesToShow);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
  };

  const slideWidth = 100 / slidesToShow;
  const actualIndex =
    (((currentIndex - slidesToShow) % testimonials.length) +
      testimonials.length) %
    testimonials.length;

  return (
    <section className="py-6 bg-muted/30">
      {/* <section className="py-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden"> */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 animate-in slide-in-from-bottom-10 duration-1000">
          <Badge
            variant="outline"
            className="mb-4 text-primary border-primary/20"
          >
            {/* Testimonials */}
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {/* What Our Customers Say */}
            Loved by Our Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience */}
            Discover why thousands of shoppers choose TechMart for quality
            products, great value, and a reliable shopping experience.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${currentIndex * slideWidth}%)`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full p-0 dark:border-gray-400">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      {/* <div className="mb-4">
                        <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                       
                      </div> */}

                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                        <Smile className="h-6 w-6 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        &ldquo;{testimonial.content}&ldquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center space-x-4 mt-auto">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">
                              {testimonial.name}
                            </h4>
                            {testimonial.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                // index === actualIndex
                //   ? "bg-primary scale-125 w-8"
                //   : "bg-muted-foreground/30 hover:bg-muted-foreground/50"

                index === actualIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125 w-8"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-4 animate-in slide-in-from-bottom-10 duration-1000 delay-1000">
          <p className="text-muted-foreground mb-2">
            {/* Join thousands of satisfied customers */}
            Join thousands of happy TechMart customers
          </p>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 font-semibold">
              {/* 4.9/5 from 10,000+ reviews */}
              4.9/5 from 10,000+ customer reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
