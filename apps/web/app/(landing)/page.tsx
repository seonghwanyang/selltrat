"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        padding: '80px 20px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '20px'
        }}>
          AI가 당신의 창업을 도와드립니다
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#666666',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          머릿속 번쩍이던 그 순간을 붙잡아 보세요<br />
          그 작은 빛이 두려움을 밝히고, 꿈이 현실이 되는 곳
        </p>
        
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center'
        }}>
          <Link 
            href="/dashboard"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: '#ff6b35',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            무료로 시작하기
          </Link>
          
          <Link 
            href="/pricing"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'white',
              color: '#1a1a1a',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            요금제 보기
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '80px 20px',
        backgroundColor: 'white',
        borderTop: '1px solid #e5e5e5'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '60px'
          }}>
            핵심 기능
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ padding: '20px' }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '20px'
              }}>🤖</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#1a1a1a'
              }}>
                5개 전문 AI 에이전트
              </h3>
              <p style={{
                color: '#666666',
                lineHeight: '1.6'
              }}>
                시장분석, 법무, 재무, 마케팅, 운영<br />
                전문가가 동시에 분석합니다
              </p>
            </div>
            
            <div style={{ padding: '20px' }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '20px'
              }}>⚡</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#1a1a1a'
              }}>
                30분 내 완성
              </h3>
              <p style={{
                color: '#666666',
                lineHeight: '1.6'
              }}>
                막연한 아이디어를 30분 만에<br />
                구체적인 사업계획서로 변환
              </p>
            </div>
            
            <div style={{ padding: '20px' }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '20px'
              }}>🛠️</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#1a1a1a'
              }}>
                실행 중심 도구
              </h3>
              <p style={{
                color: '#666666',
                lineHeight: '1.6'
              }}>
                OEM 매칭, 관세계산기 등<br />
                즉시 실행 가능한 도구 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}