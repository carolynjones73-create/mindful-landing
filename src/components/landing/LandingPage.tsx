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
      description: "Morning intention (2 min) + Evening reflection (3 min) — a sustainable rhythm that actually fits your life"
    },
    {
      icon: Brain,
      title: "Psychology-Based",
      description: "Rooted in behavioral science and mindset research, so you're not just tracking — you're transforming"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Personalized prompts and reflections that spark clarity and action — with no guesswork"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your thoughts, reflections, and progress stay completely private, so you can be honest and real with yourself"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-soft-ivory via-pale-moon to-warm-blush">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Feel calm and confident about money every day
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              A 5-minute mindset journal to quiet the noise, build clarity, and trust yourself with every financial decision
            </p>
            <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-4 mb-8">
              <p>
                You've built success in so many areas of your life, but money? It still feels a little out of sync.
              </p>
              <p>
                That quiet pressure. The second-guessing. The sense that you should feel more in control by now.
              </p>
            </div>
            <div className="text-lg text-gray-700 max-w-4xl mx-auto space-y-4 mb-8">
              <p className="font-semibold">
                Mindful Money is your daily reset.
              </p>
              <p>
                A guided journaling app that helps you reframe thoughts, feel more grounded, and bring intention into every choice, one line at a time.
              </p>
              <p>
                No shame. No spreadsheets. Just a simple practice to support your peace of mind and your goals.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-12 py-5 rounded-xl font-semibold text-xl hover:from-muted-taupe hover:to-soft-clay transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                Start journaling today
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-sm text-gray-600 max-w-md text-center md:text-left">
                and build a healthier relationship with money that supports the life you're creating
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sage-green" />
                <span>Free to begin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sage-green" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sage-green" />
                <span>Just 5 minutes a day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sage-green" />
                <span>Built for high-achieving women who want clarity, not complexity</span>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-20 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Shift Your Money Mindset<br />in 5 Minutes a Day
            </h2>
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

          {/* Lifestyle Image Section */}
          <div className="max-w-2xl mx-auto px-4 mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/ChatGPT Image Sep 20, 2025, 10_28_07 PM copy.png" 
                alt="Woman peacefully using phone on cozy couch with candle and book"
                className="w-full h-auto object-contain"
              />
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
                    <p>Reflect on your wins, learn from your choices, and celebrate your progress. This isn't about perfection it's about awareness and growth.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-soft-clay rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Growth</h3>
                  <div className="text-gray-600">
                    <p className="font-medium mb-2">Confidence builds when you see it.</p>
                    <p>Earn badges, build streaks, and watch yourself shift from second-guessing to self-trust. You'll have real proof that you're becoming the kind of woman who makes aligned, empowered money decisions naturally.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* App Mockup */}
            <div className="relative">
              <div className="grid gap-8">
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
              What Changes When You Start
            </h2>
            <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-4">
              <p>
                This isn't about becoming perfect with money. It's about becoming peaceful with it.
              </p>
              <p>
                Here's what shifts when you commit to just 5 minutes a day:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-soft-ivory to-pale-moon rounded-2xl p-8">
                  <div className="w-16 h-16 bg-soft-clay rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-soft-ivory via-pale-moon to-warm-blush">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Simple. Powerful. Transformative.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build a healthier relationship with money, without the overwhelm.
                This isn't about becoming perfect with money. It's about becoming peaceful with it.
              </p>
              <p>
                Here's what shifts when you commit to just 5 minutes a day:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-soft-ivory to-pale-moon rounded-2xl p-8">
                  <div className="w-16 h-16 bg-soft-clay rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  
      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Your relationship with money can feel different starting today
          </h2>
          <div className="text-xl text-gray-600 space-y-4 mb-8">
            <p>
              No more 3AM spirals. No more second-guessing every purchase. No more feeling behind.
            </p>
            <p>
              Just 5 minutes a day to build the confidence and clarity you've been looking for.
            </p>
          </div>
          
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-12 py-5 rounded-xl font-semibold text-xl hover:from-muted-taupe hover:to-soft-clay transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto mb-6"
          >
            Start your journey today
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <div className="text-xl text-gray-600 space-y-4 mb-8">
            Start your journey today
              No more 3AM spirals. No more second-guessing every purchase. No more feeling behind.
            </p>
            <p>
              Just 5 minutes a day to build the confidence and clarity you've been looking for.
            Free to begin • No credit card required • Transform your money mindset in just 5 minutes a day
          </div>
        </div>
      </section>
    </div>
  );
}