import { AsciiGlobe } from '@/components/AsciiGlobe'
import { 
  Zap, 
  Globe, 
  Shield, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Play,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

/**
 * Landing page component for StreamStrong
 * Low-latency streaming company
 * Dark mode, black/white Vercel-style design
 * Mobile responsive
 */

const FEATURES = [
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    description: 'Sub-100ms latency worldwide with our global edge network.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description: '300+ edge locations ensuring your stream reaches everyone, everywhere.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption with SOC2 compliance and GDPR ready.',
  },
  {
    icon: Clock,
    title: '99.999% Uptime',
    description: 'Redundant infrastructure guarantees uninterrupted streaming.',
  },
]

const PRICING = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    features: [
      'Up to 1,000 viewers',
      '10GB storage',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    features: [
      'Up to 10,000 viewers',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited viewers',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const STATS = [
  { value: '300+', label: 'Edge Locations' },
  { value: '50M+', label: 'Streams Delivered' },
  { value: '99.999%', label: 'Uptime SLA' },
  { value: '<100ms', label: 'Latency' },
]

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-content {
            order: 1;
          }
          .hero-globe {
            order: 0;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .nav-links {
            display: none !important;
          }
          .nav-mobile {
            display: flex !important;
          }
          .footer-content {
            flex-direction: column !important;
            gap: 24px !important;
            text-align: center !important;
          }
          .footer-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .hero-title {
            font-size: 36px !important;
          }
          .section-title {
            font-size: 28px !important;
          }
          .hero-padding {
            padding: 100px 20px 60px !important;
          }
          .section-padding {
            padding: 60px 20px !important;
          }
          .stat-value {
            font-size: 32px !important;
          }
          .globe-floating {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .nav-mobile {
            display: none !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Globe size={24} color="#ffffff" />
          <span style={{ 
            fontSize: '18px', 
            fontWeight: 600,
            letterSpacing: '-0.5px',
          }}>
            StreamStrong
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#features" style={{ 
            color: '#888', 
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.2s',
          }}>
            Features
          </a>
          <a href="#pricing" style={{ 
            color: '#888', 
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.2s',
          }}>
            Pricing
          </a>
          <a href="#contact" style={{ 
            color: '#888', 
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.2s',
          }}>
            Contact
          </a>
          <button className="btn-hover" style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Get Started
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="nav-mobile">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#888', textDecoration: 'none', fontSize: '16px', padding: '8px 0' }}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#888', textDecoration: 'none', fontSize: '16px', padding: '8px 0' }}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#888', textDecoration: 'none', fontSize: '16px', padding: '8px 0' }}
          >
            Contact
          </a>
          <button className="btn-hover" style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            padding: '12px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            marginTop: '8px',
          }}>
            Get Started
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-padding" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          maxWidth: '1200px',
          width: '100%',
          alignItems: 'center',
        }}>
          {/* Left: Text */}
          <div className="hero-content animate-fade-in">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <Zap size={14} color="#ffffff" />
              <span style={{ fontSize: '12px', color: '#888' }}>
                Now with WebRTC support
              </span>
            </div>
            
            <h1 className="hero-title" style={{
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '1.1',
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}>
              Streaming at the{' '}
              <span className="gradient-text glow">speed of thought</span>
            </h1>
            
            <p style={{
              fontSize: '16px',
              color: '#888',
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '480px',
            }}>
              Experience ultra-low latency streaming with our global edge network. 
              Built for developers who demand performance.
            </p>
            
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <button className="btn-hover" style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                Start Building
                <ArrowRight size={16} />
              </button>
              <button className="btn-hover" style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <Play size={16} />
                Watch Demo
              </button>
            </div>
            
            {/* Stats preview */}
            <div style={{
              display: 'flex',
              gap: '32px',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              {STATS.slice(0, 2).map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: ASCII Globe */}
          <div className="hero-globe" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
            <AsciiGlobe size="medium" showHotspots={true} />
            
            {/* Floating stats around globe - desktop only */}
            <div className="globe-floating" style={{
              position: 'absolute',
              top: '10%',
              right: '0%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                }} />
                <span style={{ fontSize: '11px', color: '#888' }}>
                  50K+ connected
                </span>
              </div>
            </div>
            
            <div className="globe-floating" style={{
              position: 'absolute',
              bottom: '15%',
              left: '0%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                }} />
                <span style={{ fontSize: '11px', color: '#888' }}>
                  Latency: 47ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding" style={{
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="section-title" style={{
            fontSize: '36px',
            fontWeight: 600,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}>
            Built for{' '}
            <span className="gradient-text">performance</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Every component engineered for minimal latency and maximum reliability.
          </p>
        </div>
        
        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}>
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <feature.icon size={20} color="#ffffff" />
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '8px',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#888',
                lineHeight: '1.5',
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding" style={{
        padding: '60px 24px',
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
        }}>
          {STATS.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div className="stat-value" style={{
                fontSize: '36px',
                fontWeight: 600,
                marginBottom: '4px',
                letterSpacing: '-1px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding" style={{
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="section-title" style={{
            fontSize: '36px',
            fontWeight: 600,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}>
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#888',
          }}>
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>
        
        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {PRICING.map((plan, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: plan.popular 
                  ? 'rgba(255, 255, 255, 0.03)' 
                  : 'rgba(255, 255, 255, 0.01)',
                border: plan.popular 
                  ? '1px solid rgba(255, 255, 255, 0.2)' 
                  : '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '24px',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '4px 12px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: 500,
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '8px',
              }}>
                {plan.name}
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '36px', fontWeight: 600 }}>
                  {plan.price}
                </span>
                <span style={{ fontSize: '14px', color: '#666', marginLeft: '4px' }}>
                  {plan.period}
                </span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {plan.features.map((feature, fIndex) => (
                  <li 
                    key={fIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                      fontSize: '13px',
                      color: '#888',
                    }}
                  >
                    <CheckCircle size={14} color="#22c55e" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button style={{
                width: '100%',
                backgroundColor: plan.popular ? '#ffffff' : 'transparent',
                color: plan.popular ? '#000000' : '#ffffff',
                border: plan.popular 
                  ? 'none' 
                  : '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding" style={{
        padding: '80px 24px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 className="section-title" style={{
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '20px',
          letterSpacing: '-1px',
        }}>
          Ready to <span className="gradient-text">stream stronger</span>?
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#888',
          marginBottom: '32px',
        }}>
          Join thousands of developers building the future of live streaming.
        </p>
        
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-hover" style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Start Free Trial
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <div className="footer-content" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Globe size={18} color="#ffffff" />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>
              StreamStrong
            </span>
          </div>
          
          <div className="footer-links" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>
              Documentation
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>
              API Reference
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>
              Status
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>
              Privacy
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>
              Terms
            </a>
          </div>
          
          <div style={{ fontSize: '12px', color: '#444' }}>
            © 2026 StreamStrong
          </div>
        </div>
      </footer>
    </div>
  )
}
