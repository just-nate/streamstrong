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
 * StreamStrong Landing Page
 * Low-latency streaming company
 * Dark mode, black/white Vercel-style
 * Mobile responsive - no scrolling issues
 */

// Product sections data
const FEATURES = [
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    description: 'Sub-100ms latency worldwide with our global edge network.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description: '300+ edge locations ensuring your stream reaches everyone.',
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
    period: '/mo',
    features: ['1,000 viewers', '10GB storage', 'Basic analytics', 'Email support'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/mo',
    features: ['10,000 viewers', '100GB storage', 'Advanced analytics', 'Priority support', 'Custom branding'],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited viewers', 'Unlimited storage', 'Custom analytics', '24/7 dedicated support', 'SLA guarantee'],
    cta: 'Contact Sales',
    popular: false,
  },
]

const STATS = [
  { value: '300+', label: 'Edge Locations' },
  { value: '50M+', label: 'Streams' },
  { value: '99.999%', label: 'Uptime' },
  { value: '<100ms', label: 'Latency' },
]

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', overflowX: 'hidden' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5%', backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 1000,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Globe size={22} />
          <span style={{ fontSize: '18px', fontWeight: 600 }}>StreamStrong</span>
        </div>
        
        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#features" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>Features</a>
          <a href="#pricing" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>Pricing</a>
          <a href="#contact" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
          <button style={{
            backgroundColor: '#fff', color: '#000', border: 'none',
            padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, cursor: 'pointer',
          }}>
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="nav-mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '8px', display: 'none' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          backgroundColor: 'rgba(0,0,0,0.98)', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)',
          zIndex: 999,
        }}>
          <a onClick={() => setMobileMenuOpen(false)} href="#features" style={{ display: 'block', color: '#888', textDecoration: 'none', padding: '12px 0', fontSize: '16px' }}>Features</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#pricing" style={{ display: 'block', color: '#888', textDecoration: 'none', padding: '12px 0', fontSize: '16px' }}>Pricing</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#contact" style={{ display: 'block', color: '#888', textDecoration: 'none', padding: '12px 0', fontSize: '16px' }}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh', padding: '100px 5% 60px', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '80vw', height: '80vw', maxWidth: '600px', maxHeight: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: '1200px', margin: '0 auto', width: '100%', gap: '40px',
        }}>
          {/* Left: Text content */}
          <div style={{ flex: '1', minWidth: 0 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgba(255,255,255,0.05)', padding: '6px 12px',
              borderRadius: '20px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <Zap size={14} />
              <span style={{ fontSize: '12px', color: '#888' }}>WebRTC Ready</span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 600, lineHeight: '1.1',
              marginBottom: '16px', letterSpacing: '-1.5px',
            }}>
              Streaming at the{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                speed of thought
              </span>
            </h1>
            
            <p style={{
              fontSize: 'clamp(14px, 2vw, 17px)', color: '#888', lineHeight: '1.6',
              marginBottom: '28px', maxWidth: '480px',
            }}>
              Ultra-low latency streaming with global edge network. Built for developers who demand performance.
            </p>
            
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button style={{
                backgroundColor: '#fff', color: '#000', border: 'none',
                padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                Start Building <ArrowRight size={16} />
              </button>
              <button style={{
                backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
                padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <Play size={16} /> Demo
              </button>
            </div>
            
            {/* Stats */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {STATS.slice(0, 2).map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '24px', fontWeight: 600 }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: ASCII Globe */}
          <div style={{
            flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center',
            minWidth: '200px',
          }}>
            <AsciiGlobe size="medium" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: '12px' }}>
            Built for <span style={{ 
              background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>performance</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#888' }}>Engineered for minimal latency and maximum reliability.</p>
        </div>
        
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px',
        }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px', padding: '24px',
            }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <f.icon size={20} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5' }}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '50px 5%', backgroundColor: 'rgba(255,255,255,0.01)',
        borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600 }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '60px 5%', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: '12px' }}>
            Simple <span style={{ 
              background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>pricing</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#888' }}>No hidden fees. Cancel anytime.</p>
        </div>
        
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px',
        }}>
          {PRICING.map((plan, i) => (
            <div key={i} style={{
              backgroundColor: plan.popular ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
              border: plan.popular ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px', padding: '24px', position: 'relative',
            }}>
              {plan.popular && (
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)',
                  backgroundColor: '#fff', color: '#000', padding: '4px 12px', borderRadius: '10px', fontSize: '11px', fontWeight: 500 }}>
                  Popular
                </div>
              )}
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{plan.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                <span style={{ fontSize: '32px', fontWeight: 600 }}>{plan.price}</span>
                <span style={{ fontSize: '14px', color: '#666', marginLeft: '4px' }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                {plan.features.map((feat, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '13px', color: '#888' }}>
                    <CheckCircle size={14} style={{ color: '#22c55e' }} /> {feat}
                  </li>
                ))}
              </ul>
              <button style={{ width: '100%', backgroundColor: plan.popular ? '#fff' : 'transparent',
                color: plan.popular ? '#000' : '#fff', border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.2)',
                padding: '12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '60px 5%', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 600, marginBottom: '16px' }}>
          Ready to <span style={{ 
            background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>stream stronger</span>?
        </h2>
        <p style={{ fontSize: '15px', color: '#888', marginBottom: '28px' }}>Join thousands of developers building the future of live streaming.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
            Start Free Trial
          </button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '30px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={16} />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>StreamStrong</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Docs', 'API', 'Status', 'Privacy', 'Terms'].map(link => (
              <a key={link} href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>{link}</a>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#444' }}>© 2026 StreamStrong</div>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
          section > div {
            flex-direction: column !important;
            text-align: center !important;
          }
          section > div > div:first-child {
            order: 1 !important;
          }
          section > div > div:last-child {
            order: 0 !important;
          }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </div>
  )
}
