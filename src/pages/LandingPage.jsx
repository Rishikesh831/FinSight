import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { ArrowRight, BarChart2, Shield, Zap } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-text-main overflow-hidden selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="font-bold text-white">F</span>
            </div>
            <span className="text-xl font-bold tracking-tight">FinSight</span>
          </div>
          <div className="flex gap-4">
            <Link to="/details">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link to="/details">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-medium text-accent">AI-Powered Finance v2.0</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Master Your Money with <br />
                <span className="text-gradient">Intelligent Insights</span>
              </h1>

              <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Stop guessing with your finances. FinSight uses advanced AI to track, analyze, and optimize your wealth in real-time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/details">
                  <Button size="lg" className="group">
                    Start Dashboard
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  View Live Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-surface/30 border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BarChart2}
              title="Smart Analytics"
              desc="Visualize your cash flow with interactive charts and AI-driven insights that actually make sense."
              delay={0.2}
            />
            <FeatureCard
              icon={Zap}
              title="Real-time Tracking"
              desc="Monitor your portfolio performance across stocks, crypto, and real estate with zero latency."
              delay={0.4}
            />
            <FeatureCard
              icon={Shield}
              title="Bank-Grade Security"
              desc="Your financial data is encrypted with military-grade protocols. We never sell your data."
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-primary h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-text-main">{title}</h3>
    <p className="text-text-muted leading-relaxed">{desc}</p>
  </motion.div>
);

export default LandingPage;
