import React from 'react';
import { TrendingUp, Brain, Target, Users, Star, CircleCheck as CheckCircle, ArrowRight, Zap, Shield, Clock, Sun, Moon } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const benefits = [
    {
      icon: Brain,
      title: "Stop the 3AM Money Spiral",
      description: "You know that feeling lying awake at night, your mind racing about bills, debt, or if you'll ever feel truly secure. This daily practice helps calm the mental noise and replace anxiety with a sense of clarity and control so you can rest easier, and wake up grounded."
    },
    {
      icon: TrendingUp,
      title: "Think Like Someone Who's Naturally Good With Money",
      description: "It's not about willpower or spreadsheets it's about mindset patterns. We help you build the same mental habits that confident, financially secure women use every day until it becomes second nature."
    },
    {
      icon: Target,
      title: "Actually See Your Progress",
      description: "If it always feels like you're behind, this will change everything. Earn badges, track streaks, and reflect on your growth daily. You'll stop wondering if it's working and start seeing your transformation."
    },
    {
      icon: Users,
      title: "Break Free From Old Money Stories",
      description: "\"I'm just bad with money.\" \"I'll never be wealthy.\" \"Money is selfish.\" These hidden beliefs are shaping your reality more than any strategy. We help you uncover and rewire them so your thoughts start working for you, not against you."
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Just 5 Minutes Daily",
      description: "Morning intention (2 min) + Evening reflection (3 min)"
    },
    {
      icon: Brain,
      title: "Psychology-Based",
      description: "Built on proven behavioral science and mindset research"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get personalized tips and actionable advice every day"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your thoughts and progress are completely private"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-ivory via-pale-moon to-warm-blush py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Feel calm and confident about<br />money every day
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A 5 minute mindset journal to quiet the noise, build clarity, and trust yourself with every financial decision
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              You've built success through hard work, intuition, and drive but money? Still feels like it should feel better.
              The quiet stress. The mental tabs always open. The "am I doing this right?" loop that never fully shuts off.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              The Mindful Money App is your daily pause.
              A guided journal designed for women professionals who want to feel aligned, intentional, and truly confident with their financial choices, one line at a time.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              No shame. No overwhelm. Just a simple daily rhythm that supports your peace of mind and your vision for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-muted-taupe hover:to-soft-clay transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Start Journaling Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-gray-500 text-sm">and build the kind of relationship with money that actually feels good</p>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-2xl mx-auto mb-16">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/ChatGPT Image Sep 20, 2025, 10_28_07 PM.png" 
                  alt="Woman peacefully using Money Mindset app on her phone in a cozy setting"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-greige/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-clay mb-1">5 min</div>
                  <div className="text-sm text-gray-600">daily practice</div>
                </div>
              </div>
            </div>

            {/* App Mockup */}
            <div className="relative max-w-5xl mx-auto mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Morning App Mockup */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-greige/30 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-golden-cream to-warm-blush rounded-2xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-soft-clay rounded-lg flex items-center justify-center">
                        <Sun className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">Morning Boost</span>
                    </div>
                    <div className="bg-white/90 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-600 mb-2">Today's inspiration:</p>
                      <p className="text-gray-900 italic font-serif">"The real measure of your wealth is how much you'd be worth if you lost all your money." Warren Buffett</p>
                    </div>
                    <div className="bg-white/90 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Your intention:</p>
                      <p className="text-gray-900 italic">"I will make one conscious spending decision that aligns with my values today."</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-soft-clay mb-1">Morning (2 minutes)</div>
                    <div className="text-xs text-gray-500">Set your daily intention</div>
                  </div>
                </div>

                {/* Evening App Mockup */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-greige/30 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-opal to-soft-sky rounded-2xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-muted-taupe rounded-lg flex items-center justify-center">
                        <Moon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">Evening Reflection</span>
                    </div>
                    <div className="bg-white/90 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-600 mb-2">Your reflection:</p>
                      <p className="text-gray-900 italic">"I chose to cook dinner instead of ordering takeout. Saved $25 and felt proud of my decision."</p>
                    </div>
                    <div className="bg-white/90 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Day rating:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-golden-cream fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-taupe mb-1">Evening (3 minutes)</div>
                    <div className="text-xs text-gray-500">Reflect on your progress</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Key Benefit */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-soft-clay mb-2">Just 5 Minutes Daily</div>
              <div className="text-lg text-gray-600">That's all it takes to transform your relationship with money</div>
              
              {/* CTA Button 1 */}
              <div className="mt-8">
                <button
                  onClick={onGetStarted}
                  className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-muted-taupe hover:to-soft-clay transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                >
                  Start Your 5 Minute Daily Practice
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-gray-500 text-sm mt-2">Free to begin No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>Shift Your Money Mindset<br />in 5 Minutes a Day</h2>
            <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-4">
              <p>
                You know that quiet tension when you check your bank account and it just feels off?
              </p>
              <p>
                Or those moments when you're lying in bed, running through money decisions in your head, wondering if you should be doing more?
              </p>
              <p className="font-medium">
                What if instead, you felt calm, clear, and in control?
              </p>
              <p>
                Here's how to make that shift one intentional line at a time:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-golden-cream rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-soft-clay font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Morning Intention (2 minutes)</h3>
                  <div className="text-gray-600">
                    <p className="font-medium mb-2">Start your day with clarity, not chaos.</p>
                    <p>Set a powerful intention and shift your mindset before the world starts pulling on your time and energy. It's your moment to ground, reset, and lead with purpose.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-opal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-muted-taupe font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Evening Reflection (3 minutes)</h3>
                  <div className="text-gray-600">
                    <p className="font-medium mb-2">End your day with pride, not pressure.</p>
                    <p