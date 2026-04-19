"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Zap, BarChart3, Lock, Share2, Clock } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (isLoaded && isSignedIn) {
    return null;
  }

  const features = [
    {
      icon: Zap,
      title: "Instant Shortening",
      description:
        "Convert long URLs into short, shareable links in seconds with our lightning-fast service.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description:
        "Track clicks, view geographic data, and monitor the performance of your shortened links in real-time.",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description:
        "Your links are protected with enterprise-grade security and backed by reliable infrastructure.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description:
        "Copy, share, or customize your short links for social media, emails, and any platform.",
    },
    {
      icon: Clock,
      title: "Link History",
      description:
        "Keep track of all your shortened links and manage them from a centralized dashboard.",
    },
    {
      icon: Link2,
      title: "Custom Domains",
      description: "Use your own domain for a branded experience that reflects your identity.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-20 px-4 sm:py-32">
        <div className="max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <Badge className="mx-auto" variant="outline">
              🚀 Launch Your Links Today
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
              Shorten, Share & Track
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
              Transform long URLs into powerful short links. Track performance, analyze engagement, and boost
              your online presence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="h-12 px-8 text-base">
                Get Started Free
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to manage, track, and optimize your links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-black border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-zinc-800 rounded-lg">
                        <IconComponent className="h-5 w-5 text-blue-400" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-white">Ready to shorten your links?</h2>
          <p className="text-xl text-blue-100">
            Join thousands of users who are optimizing their links and tracking their success with
            LinkShortener.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="h-12 px-8 text-base bg-white text-blue-900 hover:bg-gray-100"
              >
                Start for Free
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-white text-white hover:bg-blue-800"
              >
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 LinkShortener. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
