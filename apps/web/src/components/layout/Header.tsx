"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "대시보드" },
  { href: "/reports", label: "보고서" },
  { href: "/community", label: "커뮤니티" },
  { href: "/education", label: "교육" },
  { href: "/settings", label: "설정" },
];

export function Header() {
  const pathname = usePathname();

  const styles = {
    header: {
      height: '64px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e5e5',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: '#ff6b35',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '700',
      fontSize: '18px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1a1a1a',
    },
    nav: {
      display: 'flex',
      gap: '32px',
    },
    navLink: {
      color: '#666666',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      position: 'relative' as const,
      padding: '20px 0',
      transition: 'color 0.3s ease',
    },
    navLinkActive: {
      color: '#1a1a1a',
    },
    activeIndicator: {
      position: 'absolute' as const,
      bottom: '-1px',
      left: '0',
      right: '0',
      height: '2px',
      backgroundColor: '#ff6b35',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    notificationBtn: {
      position: 'relative' as const,
      width: '40px',
      height: '40px',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      backgroundColor: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color 0.3s ease',
    },
    notificationDot: {
      position: 'absolute' as const,
      top: '8px',
      right: '8px',
      width: '8px',
      height: '8px',
      backgroundColor: '#ff6b35',
      borderRadius: '50%',
    },
    userMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 16px',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'border-color 0.3s ease',
    },
    userAvatar: {
      width: '28px',
      height: '28px',
      backgroundColor: '#ff6b35',
      color: 'white',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: '600',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* 로고 */}
        <Link href="/" style={styles.logoSection}>
          <div style={styles.logoIcon}>S</div>
          <span style={styles.logoText}>Selltrat</span>
        </Link>

        {/* 네비게이션 */}
        <nav style={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                ...styles.navLink,
                ...(pathname === item.href ? styles.navLinkActive : {}),
              }}
              onMouseEnter={(e) => {
                if (pathname !== item.href) {
                  e.currentTarget.style.color = '#1a1a1a';
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== item.href) {
                  e.currentTarget.style.color = '#666666';
                }
              }}
            >
              {item.label}
              {pathname === item.href && <span style={styles.activeIndicator} />}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div style={styles.rightSection}>
          <button 
            style={styles.notificationBtn}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#666666'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
          >
            🔔
            <span style={styles.notificationDot} />
          </button>
          
          <div 
            style={styles.userMenu}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#666666'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
          >
            <div style={styles.userAvatar}>김</div>
            <span style={{ fontSize: '14px' }}>김창업</span>
          </div>
        </div>
      </div>
    </header>
  );
}