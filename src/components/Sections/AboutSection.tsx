import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Globe, Star } from "lucide-react";
import Image from "next/image";

// const features = [
//   {
//     icon: CheckCircle,
//     title: "Quality Guaranteed",
//     description: "Every product is carefully selected and tested for quality",
//     color: "text-green-600 dark:text-green-400",
//   },
//   {
//     icon: Award,
//     title: "Award Winning",
//     description: "Recognized as the best ecommerce platform of 2024",
//     color: "text-yellow-600 dark:text-yellow-400",
//   },
//   {
//     icon: Users,
//     title: "Customer First",
//     description: "Our customers are at the heart of everything we do",
//     color: "text-blue-600 dark:text-blue-400",
//   },
//   {
//     icon: Globe,
//     title: "Global Reach",
//     description: "Serving customers in over 50 countries worldwide",
//     color: "text-purple-600 dark:text-purple-400",
//   },
// ]

// const stats = [
//   { value: "10K+", label: "Happy Customers" },
//   { value: "5K+", label: "Products Sold" },
//   { value: "50+", label: "Countries Served" },
//   { value: "4+", label: "Years Experience" },
// ]

const features = [
  {
    icon: CheckCircle,
    title: "Trusted Quality",
    description:
      "We carefully select reliable products so you can shop with confidence.",
    color: "text-blue-400",
  },
  {
    icon: Award,
    title: "Premium Selection",
    description:
      "Explore modern technology and carefully chosen products at great value.",
    color: "text-purple-400",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Your shopping experience matters to us, from browsing to delivery.",
    color: "text-cyan-400",
  },
  {
    icon: Globe,
    title: "Easy Shopping",
    description:
      "Discover products online with a simple, convenient, and secure experience.",
    color: "text-indigo-400",
  },
];

// const stats = [
//   { value: "10K+", label: "Happy Customers" },
//   { value: "5K+", label: "Tech Products" },
//   { value: "100+", label: "Trusted Brands" },
//   { value: "4.9★", label: "Customer Rating" },
// ]

const stats = [
  { value: "10K+", label: "Happy Shoppers" },
  { value: "5K+", label: "Products Available" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Online Support" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-6 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 text-primary"
          >
            About TechMart
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {/* Your Trusted Shopping Partner Since 2020 */}
            Your Trusted Destination for Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {/* We started with a simple mission: to make quality products
            accessible to everyone. Today, we&apos;re proud to serve thousands
            of happy customers worldwide. */}
            Discover quality tech products, smart devices, and everyday
            essentials designed to make your life easier. At TechMart, we bring
            trusted products and a simple shopping experience together in one
            place.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Content - Story */}
          <div className="lg:col-span-1 space-y-6 animate-in slide-in-from-left-10 duration-1000 delay-300">
            <Card className="bg-card/50 backdrop-blur-sm border-border dark:border-gray-400 p-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary-foreground" />
                  </div> */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {/* Our Mission */}
                      Our Promise
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {/* Excellence in every product */}
                      Technology you can trust
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  At TechMart, our goal is to make quality technology simple and
                  accessible. We carefully bring together reliable products,
                  modern devices, and great value so you can shop with
                  confidence. From everyday essentials to the latest tech, we
                  are here to make your shopping experience easier, smarter, and
                  more convenient.
                </p>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-background border-primary/10 animate-in slide-in-from-bottom-10 p-0 dark:border-gray-400"
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/70 border-slate-700/70 hover:border-blue-500/40 transition-all duration-300 animate-in slide-in-from-bottom-10 p-0"
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>

                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Center Content - Image */}
          <div className="lg:col-span-1 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-2xl p-0 ">
                <CardContent className="p-0">
                  <Image
                    // src="https://st.depositphotos.com/1038076/4908/i/450/depositphotos_49080337-stock-photo-about-us.jpg"
                    src="/about.jpeg"
                    alt="About TechMart"
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                </CardContent>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground p-4 rounded-xl shadow-lg">
                <div className="text-xl font-bold">4.9★</div>
                <div className="text-xs opacity-90">Customer Rating</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute top-1/2 -right-2 w-6 h-6 bg-accent/30 rounded-full animate-float delay-1000"></div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="lg:col-span-1 space-y-4 animate-in slide-in-from-right-10 duration-1000 delay-700">
            <h3 className="text-xl font-bold mb-4 text-center lg:text-left">
              {/* Why Choose Us? */}
                Why Shop With TechMart?
            </h3>
           
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg dark:border-gray-400 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border animate-in slide-in-from-right-10 p-0"
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-in slide-in-from-bottom-10 duration-1000 delay-1000">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>Trusted by thousands of customers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
