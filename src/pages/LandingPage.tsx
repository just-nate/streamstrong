import { AsciiGlobe } from '@/components/AsciiGlobe'
import { 
  Zap, 
  Globe, 
  Shield, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react'

/**
 * Landing page component for StreamStrong
 * Low-latency streaming company
 * Dark mode, black/white Vercel-style design
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
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
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
        padding: '0 48px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Globe size={28} color="#ffffff" />
          <span style={{ 
            fontSize: '20px', 
            fontWeight: 600,
            letterSpacing: '-0.5px',
          }}>
            StreamStrong
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
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
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          maxWidth: '1400px',
          width: '100%',
          alignItems: 'center',
        }}>
          {/* Left: Text */}
          <div className="animate-fade-in">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <Zap size={14} color="#ffffff" />
              <span style={{ fontSize: '12px', color: '#888' }}>
                Now with WebRTC support
              </span>
            </div>
            
            <h1 style={{
              fontSize: '56px',
              fontWeight: 600,
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-2px',
            }}>
              Streaming at the{' '}
              <span className="gradient-text glow">speed of thought</span>
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: '#888',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '480px',
            }}>
              Experience ultra-low latency streaming with our global edge network. 
              Built for developers who demand performance.
            </p>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-hover" style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
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
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
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
              gap: '40px',
              marginTop: '60px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              {STATS.slice(0, 2).map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div style={{ fontSize: '28px', fontWeight: 600, marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: '#666' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: ASCII Globe */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
            <AsciiGlobe size="large" showHotspots={true} />
            
            {/* Floating stats around globe */}
            <div style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '12px 16px',
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
                <span style={{ fontSize: '12px', color: '#888' }}>
                  50K+ connected
                </span>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '15%',
              left: '0%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '12px 16px',
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
                <span style={{ fontSize: '12px', color: '#888' }}>
                  Latency: 47ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '120px 48px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 600,
            marginBottom: '20px',
            letterSpacing: '-1px',
          }}>
            Built for{' '}
            <span className="gradient-text">performance</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#888',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Every component engineered for minimal latency and maximum reliability.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
        }}>
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '40px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <feature.icon size={24} color="#ffffff" />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '12px',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#888',
                lineHeight: '1.6',
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '100px 48px',
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '48px',
        }}>
          {STATS.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '-2px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#666',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '120px 48px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 600,
            marginBottom: '20px',
            letterSpacing: '-1px',
          }}>
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#888',
          }}>
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          maxWidth: '1200px',
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
                borderRadius: '16px',
                padding: '40px',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '4px 16px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500,
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
              }}>
                {plan.name}
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '32px' }}>
                <span style={{ fontSize: '48px', fontWeight: 600 }}>
                  {plan.price}
                </span>
                <span style={{ fontSize: '16px', color: '#666', marginLeft: '4px' }}>
                  {plan.period}
                </span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0' }}>
                {plan.features.map((feature, fIndex) => (
                  <li 
                    key={fIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                      fontSize: '14px',
                      color: '#888',
                    }}
                  >
                    <CheckCircle size={16} color="#22c55e" />
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
                padding: '14px',
                borderRadius: '8px',
                fontSize: '14px',
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
      <section id="contact" style={{
        padding: '120px 48px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: 600,
          marginBottom: '24px',
          letterSpacing: '-1px',
        }}>
          Ready to <span className="gradient-text">stream stronger</span>?
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#888',
          marginBottom: '48px',
        }}>
          Join thousands of developers building the future of live streaming.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-hover" style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Start Free Trial
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '16px 32px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 48px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Globe size={20} color="#ffffff" />
            <span style={{ fontSize: '16px', fontWeight: 500 }}>
              StreamStrong
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>
              Documentation
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>
              API Reference
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>
              Status
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>
              Privacy
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>
              Terms
            </a>
          </div>
          
          <div style={{ fontSize: '14px', color: '#444' }}>
            © 2026 StreamStrong. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
