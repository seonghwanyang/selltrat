"use client";

export default function DashboardPage() {
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#fafafa',
      fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
    },
    chatPanel: {
      width: '440px',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e5e5e5',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column' as const
    },
    chatHeader: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#1a1a1a'
    },
    chatPlaceholder: {
      backgroundColor: '#f5f5f5',
      padding: '16px',
      borderRadius: '8px',
      color: '#666666',
      fontSize: '14px'
    },
    mainContent: {
      flex: 1,
      padding: '24px',
      overflowY: 'auto' as const
    },
    pageTitle: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '24px',
      color: '#1a1a1a'
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid #e5e5e5',
      marginBottom: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#1a1a1a'
    },
    progressBar: {
      backgroundColor: '#e5e5e5',
      height: '8px',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '8px'
    },
    progressFill: {
      backgroundColor: '#ff6b35',
      height: '100%',
      width: '45%',
      transition: 'width 0.3s ease'
    },
    sidebar: {
      width: '280px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '16px'
    },
    notificationCard: {
      backgroundColor: '#ffffff',
      padding: '16px',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
    },
    recommendationCard: {
      backgroundColor: '#ff6b35',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '12px'
    },
    recommendationTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '12px'
    },
    recommendationValue: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px'
    }
  };

  return (
    <div style={styles.container}>
      {/* 좌측 채팅 패널 */}
      <div style={styles.chatPanel}>
        <h2 style={styles.chatHeader}>AI 채팅</h2>
        <div style={styles.chatPlaceholder}>
          채팅 인터페이스가 여기에 들어갑니다
        </div>
      </div>
      
      {/* 중앙 대시보드 */}
      <div style={styles.mainContent}>
        <h1 style={styles.pageTitle}>창업 로드맵</h1>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>진행률</h2>
          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>
          <div style={{ fontSize: '13px', color: '#666666' }}>
            전체 진행률: 45%
          </div>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>실행 도구</h2>
          <p style={{ color: '#666666', fontSize: '14px' }}>
            도구 목록이 여기에 표시됩니다
          </p>
        </div>
      </div>
      
      {/* 우측 사이드바 */}
      <div style={styles.sidebar}>
        <div style={styles.notificationCard}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
            알림
          </h3>
          <p style={{ fontSize: '14px', color: '#666666' }}>
            새로운 알림이 없습니다
          </p>
        </div>
        
        <div style={styles.recommendationCard}>
          <h3 style={styles.recommendationTitle}>AI 추천</h3>
          <div style={styles.recommendationValue}>92%</div>
          <div style={{ fontSize: '14px', opacity: 0.9 }}>적합도</div>
        </div>
      </div>
    </div>
  );
}