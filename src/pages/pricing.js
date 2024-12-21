import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, Building, Zap } from 'lucide-react';
import './Pricing.css';

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: '0',
      period: 'forever',
      features: [
        'Up to 100 notes storage',
        'Basic AI features',
        'Community note connections',
        'Personal use only',
        'Web access'
      ],
      cta: 'Get Started',
      icon: <Zap className="h-6 w-6" />,
      popular: false
    },
    {
      name: 'Pro',
      description: 'Best for power users',
      monthlyPrice: '10',
      yearlyPrice: '100',
      features: [
        'Unlimited note storage',
        'Advanced AI features',
        'Priority support',
        'Collaboration tools',
        'Custom organization',
        'API access',
        'Desktop apps'
      ],
      cta: 'Start Free Trial',
      icon: <Star className="h-6 w-6" />,
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For teams and organizations',
      price: 'Custom',
      features: [
        'Everything in Pro',
        'Unlimited AI credits',
        'Custom AI model training',
        'Enterprise SSO',
        'Advanced security',
        'Dedicated support',
        'Custom contracts'
      ],
      cta: 'Contact Sales',
      icon: <Building className="h-6 w-6" />,
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <nav className="landing-nav">
        <motion.div 
          className="nav-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="nav-logo">Notely</Link>
          <div className="nav-links">
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/app" className="nav-cta">Get Started</Link>
          </div>
        </motion.div>
      </nav>

      <motion.div 
        className="pricing-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Simple, Transparent <span className="pricing-text">Pricing</span></h1>
        <p>Choose the perfect plan for your note-taking journey</p>
      </motion.div>

      <motion.div 
        className="pricing-toggle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className={`monthly ${!isYearly ? 'active' : ''}`}>Monthly</span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className="slider"></span>
        </label>
        <span className={`yearly ${isYearly ? 'active' : ''}`}>
          Yearly <span className="savings">Save 17%</span>
        </span>
      </motion.div>

      <motion.div 
        className="pricing-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {plans.map((plan, index) => (
          <motion.div 
            key={plan.name}
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {plan.popular && <span className="popular-badge">Most Popular</span>}
            <div className="plan-icon">{plan.icon}</div>
            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="price-tag">
              {plan.price === 'Custom' ? (
                <span className="amount">Custom</span>
              ) : plan.monthlyPrice ? (
                <>
                  <span className="currency">$</span>
                  <span className="amount">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="period">/{isYearly ? 'year' : 'month'}</span>
                </>
              ) : (
                <>
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </>
              )}
            </div>
            {plan.monthlyPrice && isYearly && (
              <p className="yearly-price">
                <span className="monthly-comparison">${plan.monthlyPrice}/mo when paying monthly</span>
                <span className="savings-label">Save ${plan.monthlyPrice * 2}</span>
              </p>
            )}
            <ul className="feature-list">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <Check className="feature-check" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link 
              to={plan.name === 'Enterprise' ? '/contact' : '/app'} 
              className={`pricing-cta ${plan.popular ? 'primary' : 'secondary'}`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-content">
            <div className="faq-item">
              <h3>Can I switch plans later?</h3>
              <p>Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of the next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and offer special payment arrangements for Enterprise customers.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>Yes! You can try our Pro plan free for 14 days. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h3>What are AI credits?</h3>
              <p>AI credits determine how many AI-powered operations you can perform. Free users get limited credits, while Pro users get more, and Enterprise users get unlimited credits.</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        className="pricing-cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Transform Your Note-Taking?</h2>
        <p>Join thousands of users who have already revolutionized their workflow with Notely.</p>
        <Link to="/app" className="primary-button">
          Start Free Trial
          <span className="button-icon">→</span>
        </Link>
      </motion.div>
    </div>
  );
}

export default Pricing; 