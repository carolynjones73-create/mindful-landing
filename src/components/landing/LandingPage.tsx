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
      description: "Replace late-night money anxiety with clarity and control. Sleep better, wake up grounded."
    },
    {
      icon: TrendingUp,
      title: "Think Like Someone Who's Naturally Good With Money",
      description: "Build the mental habits that confident, financially secure women use daily until it becomes second nature."
    },
    {
      icon: Target,
      title: "Actually See Your Progress",
      description: "Earn badges, track streaks, and see your transformation. Stop wondering if it's working."
    },
    {
      icon: Users,
      title: "Break Free From Old Money Stories",
      description: "Uncover and rewire hidden beliefs that limit you. Make your thoughts work for you, not against you."
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
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A simple daily ritual to build clarity, confidence, and calm, one line at a time
            </p>
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
                  <span className="text-muted-taupe font-bold text-lg">1</span>
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
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Evening Reflection (3 minutes)</h3>
                  <div className="text-gray-600">
                    <p className="font-medium mb-2">End your day with pride, not pressure.</p>
                    <p>Celebrate what went well — even the small stuff — and reflect on lessons without judgment. You'll stop carrying financial stress into the next day and start sleeping better, too.</p>
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

          <div className="text-center mt-16">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-12 py-5 rounded-xl font-semibold text-xl hover:from-muted-taupe hover:to-soft-clay transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              Begin Your Daily Reset
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Why This Works (When Nothing Else Has)
            </h2>
            <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-4">
              <p>
                You've downloaded the budgeting apps.<br />
                Read the finance books.<br />
                Maybe even worked with a financial advisor.
              </p>
              <p>
                But if money still feels like a source of stress, it's not because you're missing information — it's because you're missing integration.
              </p>
              <p>
                <strong>Mindset is the missing piece.</strong><br />
                Until you shift the way you think and feel about money, even the best strategies won't stick. That\'s why this isn\'t just another tool — it\'s a guided daily practice.
              </p>
              <p>
                You're not here to crunch more numbers.<br />
                You're here to feel in control, trust your choices, and finally experience peace of mind with money.
              </p>
              <p>
                Here's what makes that possible — and why this actually works:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className={`bg-gradient-to-br from-soft-ivory to-pale-moon rounded-2xl p-8 ${
                  index % 2 === 0 ? 'md:flex md:items-center md:gap-8' : 'text-center'
                }`}>
                  <div className={`w-16 h-16 bg-soft-clay rounded-full flex items-center justify-center mb-6 ${
                    index % 2 === 0 ? 'md:mb-0 md:flex-shrink-0' : 'mx-auto'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={index % 2 === 0 ? 'md:flex-1' : ''}>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
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
              Everything You Need — Without the Guess work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, powerful tools designed for ambitious women who want to feel calm, confident, and in control of their money.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {features.slice(0, 3).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <div className="w-16 h-16 bg-soft-clay rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
            
            {/* Single feature card for the last item */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-soft-clay rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{features[3].title}</h3>
                    <p className="text-gray-600 leading-relaxed">{features[3].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Finally Feel In Control of Your Money
          </h2>
          <div className="text-xl text-gray-600 space-y-4 mb-8">
            <p>
              Imagine opening your accounts and feeling clear — not chaotic.
            </p>
            <p>
              You make decisions with confidence. You trust yourself. You sleep well, knowing your money is aligned with the life you're building.
            </p>
            <p>
              <strong>This isn't a dream — it's a mindset shift.</strong>
            </p>
            <p>
              And it starts with a 5-minute daily practice that fits into your real life.
            </p>
          </div>
          
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-12 py-5 rounded-xl font-semibold text-xl hover:from-muted-taupe hover:to-soft-clay transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto mb-6"
          >
            Start Journaling Today
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p className="text-gray-500">
            Free to begin • No credit card required • Just 5 minutes a day • Built for high-achieving women who want clarity, not complexity
          </p>
        </div>
      </section>
    </div>
  );
}