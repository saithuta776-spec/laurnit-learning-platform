import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/ui/icons";
import { Award, BookOpen, Heart, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mt-4 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#74be97] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase">
            Our Story
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to {siteConfig.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-50 sm:text-xl">
            Empowering curious minds through craftsmanship, learning, and
            thoughtful design. We bridge quality furniture and modern knowledge
            under one roof.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-none shadow-md">
            <CardContent className="space-y-4 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-[#74be97]">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="leading-relaxed text-gray-600">
                At {siteConfig.name}, our goal is simple: to make comfort and
                craftsmanship accessible to everyone. Whether you're curating
                your ideal workspace or looking to expand your skills, we
                provide products and resources designed for growth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="space-y-4 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-[#74be97]">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="leading-relaxed text-gray-600">
                We envision spaces that inspire creativity and everyday living.
                By combining ergonomic wood, bamboo, and metal craftsmanship
                with seamless digital navigation, we redefine how people design
                their lifestyle.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="border-y border-gray-100 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose {siteConfig.name}?
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Built on trust, quality materials, and a commitment to continuous
              learning.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 rounded-2xl bg-slate-50 p-6 text-center transition-all hover:shadow-md">
              <div className="rounded-full bg-emerald-100 p-3 text-[#74be97]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Premium Quality
              </h3>
              <p className="text-sm text-gray-600">
                Carefully selected wooden, bamboo, and metal products crafted
                for durability and timeless aesthetics.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 rounded-2xl bg-slate-50 p-6 text-center transition-all hover:shadow-md">
              <div className="rounded-full bg-emerald-100 p-3 text-[#74be97]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Community Focused
              </h3>
              <p className="text-sm text-gray-600">
                We put our users and learners first, offering personal support,
                tutorials, and reliable partner networks.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 rounded-2xl bg-slate-50 p-6 text-center transition-all hover:shadow-md">
              <div className="rounded-full bg-emerald-100 p-3 text-[#74be97]">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Sustainably Crafted
              </h3>
              <p className="text-sm text-gray-600">
                Eco-conscious materials designed to minimize environmental
                impact while maximizing style and function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="rounded-3xl bg-[#74be97] p-10 text-white shadow-xl sm:p-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Explore Our Collection?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-50">
            Browse through our furniture categories or check out our latest blog
            posts to get inspired today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              <Link to="/courses">Courses</Link>
            </Button>
            <Button
              asChild
              //   variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
