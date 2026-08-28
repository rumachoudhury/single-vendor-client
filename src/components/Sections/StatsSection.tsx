"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Package, Star } from "lucide-react";

// const stats = [
//   {
//     icon: Users,
//     value: 10000,
//     suffix: "+",
//     label: "Happy Customers",
//     description: "Satisfied customers worldwide",
//     color: "text-blue-600",
//   },
//   {
//     icon: Package,
//     value: 50000,
//     suffix: "+",
//     label: "Orders Delivered",
//     description: "Successfully completed orders",
//     color: "text-green-600",
//   },
//   {
//     icon: Star,
//     value: 4.9,
//     suffix: "/5",
//     label: "Customer Rating",
//     description: "Average customer satisfaction",
//     color: "text-yellow-600",
//     isDecimal: true,
//   },
//   {
//     icon: TrendingUp,
//     value: 99,
//     suffix: "%",
//     label: "Success Rate",
//     description: "Order fulfillment rate",
//     color: "text-purple-600",
//   },
// ]

// const stats = [
//   {
//     icon: Users,
//     value: 10000,
//     suffix: "+",
//     label: "Happy Customers",
//     description: "Customers who trust TechMart",
//     color: "text-blue-400",
//   },
//   {
//     icon: Package,
//     value: 50000,
//     suffix: "+",
//     label: "Orders Delivered",
//     description: "Orders successfully delivered",
//     color: "text-purple-400",
//   },
//   {
//     icon: Star,
//     value: 4.9,
//     suffix: "/5",
//     label: "Customer Rating",
//     description: "Average customer satisfaction",
//     color: "text-yellow-400",
//     isDecimal: true,
//   },
//   {
//     icon: TrendingUp,
//     value: 99,
//     suffix: "%",
//     label: "Customer Satisfaction",
//     description: "Committed to quality service",
//     color: "text-cyan-400",
//   },
// ];

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Customers",
    description: "Customers who trust TechMart",
    color: "text-blue-300",
  },
  {
    icon: Package,
    value: 50000,
    suffix: "+",
    label: "Orders Delivered",
    description: "Orders successfully delivered",
    color: "text-purple-300",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Customer Rating",
    description: "Average customer satisfaction",
    color: "text-yellow-300",
    isDecimal: true,
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "Committed to quality service",
    color: "text-cyan-300",
  },
];

interface CounterProps {
  end: number;
  duration?: number;
  isDecimal?: boolean;
  suffix?: string;
  isVisible: boolean;
  delay?: number;
}

function Counter({
  end,
  duration = 2000,
  isDecimal = false,
  suffix = "",
  isVisible,
  delay = 0,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp + delay;
      }

      if (timestamp < startTimeRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = end * easeOutCubic;

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    },
    [end, duration, delay],
  );

  useEffect(() => {
    if (isVisible) {
      // Reset values
      setCount(0);
      startTimeRef.current = null;

      // Start animation
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Reset when not visible
      setCount(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startTimeRef.current = null;
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, animate]);

  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    return Math.floor(num)?.toLocaleString();
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update visibility based on intersection
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-50px 0px -50px 0px", // Add some margin for better UX
      },
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      // className="py-6 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden"
      className="py-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-10 w-12 h-12 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-4 right-10 w-8 h-8 bg-white/10 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-6 h-6 bg-white/5 rounded-full animate-float delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        {/* Compact Header */}
        <div className="text-center mb-8">
          {/* <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
            Our Achievements
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Numbers That Speak</h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Our success measured by customer satisfaction and service quality
          </p> */}

          <Badge
            variant="secondary"
            className="mb-3 bg-white/10 text-white border-white/30"
          >
            TechMart By The Numbers
          </Badge>

          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by Thousands
          </h2>

          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Real numbers from our growing community of customers and successful
            orders.
          </p>

          {/* <Badge
            variant="secondary"
            className="mb-3 bg-blue-500/10 text-blue-300 border-blue-400/30"
          >
            TechMart By The Numbers
          </Badge>

          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by Thousands
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Real numbers from our growing community of customers and successful
            orders.
          </p> */}
        </div>

        {/* Compact Stats Grid */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}

              className="text-center group animate-in slide-in-from-bottom-10 bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 border border-blue-400/10 hover:border-purple-400/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
            
              <div className="mb-4">
                <div 

                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 group-hover:scale-110"
                
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>

         
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                <Counter
                  end={stat.value}
                  isDecimal={stat.isDecimal}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  duration={1500}
                  delay={index * 200}
                />
              </div>

            
              <div className="text-lg font-semibold mb-1">{stat.label}</div>

            
              <div className="text-xs text-white/70 leading-tight">
                {stat.description}
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-in slide-in-from-bottom-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 border border-white/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>

              {/* Counter */}
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                <Counter
                  end={stat.value}
                  isDecimal={stat.isDecimal}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  duration={1500}
                  delay={index * 200}
                />
              </div>

              {/* Label */}
              <div className="text-lg font-semibold mb-1">{stat.label}</div>

              {/* Description */}
              <div className="text-xs text-white/70 leading-tight">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Accent */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-white/60">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            <span>Powering a better shopping experience</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
