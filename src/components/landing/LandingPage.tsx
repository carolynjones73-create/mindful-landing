import React from 'react';
import { TrendingUp, Brain, Target, Users, Star, CheckCircle, ArrowRight, Zap, Shield, Clock, Sun, Moon } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const benefits = [
    {
      icon: Brain,
      title: "Stop the 3 AM Money Panic",
      description: "You know that feeling - lying awake at 3 AM, mind racing about bills, debt, or whether you'll ever feel financially secure. Our daily practice helps 89% of users sleep peacefully within 2 weeks, replacing anxiety with calm confidence."
    },
    {
      icon: TrendingUp,
      title: "Think Like Someone Who's Good With Money",
      description: "Ever wonder why some people seem naturally good with money while you struggle? It's not about willpower or intelligence - it's about daily mental habits. We'll help you develop the same mindset patterns that wealthy people use automatically."
    },
    {
      icon: Target,
      title: "Finally See Your Progress",
      description: "Tired of feeling like you're not making progress? Our badge system and reflection timeline show you exactly how far you've come. You'll be amazed at your transformation when you can actually see it happening day by day."
    },
    {
      icon: Users,
      title: "Break Free From Your Money Story",
      description: "\"I'm just bad with money.\" \"I'll never be wealthy.\" \"Money is the root of all evil.\" Sound familiar? These unconscious beliefs are sabotaging your financial success. Daily reflection helps you identify and rewrite the stories that keep you stuck."
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
              Finally Feel Calm and Confident About Your Money
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              In just 5 minutes a day, a guided money mindset journal will help you think clearer, make better decisions, and move toward the future you want.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              You've built success in many areas of your life but does your money always feel aligned with your goals? Even the most capable professionals can feel hidden stress, second-guess decisions, or wonder if they should be "doing more." The Mindful Money App gives you a simple daily practice to reframe thoughts, strengthen confidence, and bring intention into every financial choice. One line at a time, you'll build a healthier relationship with money that supports the life you're creating.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-muted-taupe hover:to-soft-clay transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Start Journaling Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-gray-500 text-sm">Simple, effective, and designed for those who want clarity and confidence not more stress.</p>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-2xl mx-auto mb-16">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero-image.png" 
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
                      <p className="text-gray-900 italic font-serif">"The real measure of your wealth is how much you'd be worth if you lost all your money." - Warren Buffett</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>How It Works</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              You know that feeling when you check your bank account and your stomach drops? Or when you lie awake 
              worrying about bills? What if instead, you felt calm and in control? Here's how you can make that shift:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-golden-cream rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-soft-clay font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Morning Intention (2 minutes)</h3>
                  <p className="text-gray-600">Instead of starting your day with money anxiety, you'll begin with inspiration and set a clear intention. Transform that morning dread into purposeful action.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-opal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-muted-taupe font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Evening Reflection (3 minutes)</h3>
                  <p className="text-gray-600">End your day by celebrating progress (even small wins!) and learning from challenges. No more going to bed stressed about money, instead, feel proud of your growth.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sage-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-palm-green font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Growth</h3>
                  <p className="text-gray-600">Watch your confidence grow as you earn badges and build streaks. See proof that you're becoming the person who makes smart money decisions naturally.</p>
                </div>
              </div>
            </div>

            {/* App Mockups */}
            <div className="space-y-6">
              {/* Morning App Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-greige/30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-golden-cream to-warm-blush rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-soft-clay rounded-lg flex items-center justify-center">
                      <Sun className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Morning Boost</span>
                  </div>
                  <div className="bg-white/90 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Today's inspiration:</p>
                    <p className="text-gray-900 italic font-serif text-sm">"The real measure of your wealth is how much you'd be worth if you lost all your money." — Warren Buffett</p>
                  </div>
                  <div className="bg-white/90 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Your intention:</p>
                    <p className="text-gray-900 italic text-sm">"I will make one conscious spending decision that aligns with my values today."</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-soft-clay mb-1">Morning (2 minutes)</div>
                  <div className="text-xs text-gray-500">Set your daily intention</div>
                </div>
              </div>

              {/* Evening App Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-greige/30 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-opal to-soft-sky rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-muted-taupe rounded-lg flex items-center justify-center">
                      <Moon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Evening Reflection</span>
                  </div>
                  <div className="bg-white/90 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Your reflection:</p>
                    <p className="text-gray-900 italic text-sm">"I chose to cook dinner instead of ordering takeout. Saved $25 and felt proud of my decision."</p>
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

      {/* Benefits */}
      <section className="py-20 bg-warm-beige/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>Why This Works</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              You've tried budgeting apps, read finance books, maybe even worked with a financial advisor. 
              But if you're still stressed about money, you're missing the most important piece: your mindset. 
              Here's why our approach works when others don't:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-greige/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sage-green/20 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-palm-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No complicated spreadsheets. No overwhelming financial jargon. Just a simple, powerful tool that fits into your real life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-warm-blush to-golden-cream rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-soft-clay" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-gradient-to-br from-opal to-soft-sky">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>Backed by Leading Research</h2>
            <p className="text-xl text-gray-600">Built on proven principles from behavioral psychology and financial wellness experts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-greige/20">
              <div className="w-12 h-12 bg-soft-sky/50 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-muted-taupe" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Atomic Habits Methodology</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                James Clear's research shows that 1% daily improvements compound into remarkable results. Our 5-minute daily practice follows his proven habit-stacking framework.
              </p>
              <p className="text-sm text-gray-500 italic">"Atomic Habits" by James Clear</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-greige/20">
              <div className="w-12 h-12 bg-opal/70 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-muted-taupe" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mindset Psychology</h3>
              <p className="text-gray-600 leading-relaxed">
                Carol Dweck's growth mindset research proves that believing you can improve your financial situation is the first step to actually doing it. Daily intention-setting builds this crucial mindset.
              </p>
              <p className="text-sm text-gray-500 italic mt-4">"Mindset" by Carol Dweck, Stanford</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-greige/20">
              <div className="w-12 h-12 bg-sage-green/30 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-palm-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Behavioral Economics</h3>
              <p className="text-gray-600 leading-relaxed">
                Daniel Kahneman's Nobel Prize-winning research on decision-making shows that our financial choices are driven by psychology, not logic. Daily reflection helps you recognize and improve these patterns.
              </p>
              <p className="text-sm text-gray-500 italic mt-4">"Thinking, Fast and Slow" by Daniel Kahneman</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-greige/20">
              <div className="w-12 h-12 bg-golden-cream rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-soft-clay" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Mindset Mastery</h3>
              <p className="text-gray-600 leading-relaxed">
                "The most important investment you can make is in yourself. Your financial success is 80% psychology and 20% mechanics." Daily mindset work transforms your relationship with money from the inside out.
              </p>
              <p className="text-sm text-gray-500 italic mt-4">Warren Buffett and Tony Robbins</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-soft-clay to-muted-taupe">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Finally, Feel In Control of Your Money
          </h2>
          <p className="text-xl text-warm-blush mb-8 leading-relaxed max-w-3xl mx-auto">
            Imagine checking your accounts and seeing clarity instead of chaos. You make financial decisions with intention and confidence. You sleep soundly knowing your wealth is working toward your goals not against them. This isn't a dream. It's a system that takes just 5 minutes morning and evening.
          </p>
          
          <div className="space-y-6">
            <button
              onClick={onGetStarted}
              className="bg-white text-soft-clay px-8 py-4 rounded-xl font-semibold text-lg hover:bg-soft-ivory transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              Start Your Transformation Today
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-warm-blush">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free to begin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Just 5 minutes a day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Designed for high achievers ready for clarity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-grey text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">The Mindful Money App</h3>
            <p className="text-warm-beige">Transform your relationship with money one day at a time.</p>
          </div>
          
          <div className="border-t border-muted-taupe pt-8">
            <p className="text-warm-beige text-sm">
              © 2024 The Mindful Money App. Built with love for your financial transformation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}