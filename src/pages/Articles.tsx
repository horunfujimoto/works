import React from 'react';
import { Link } from 'react-router-dom';

const Articles: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    color: '#333333',
    fontFamily: 'RocknRoll One, cursive',
    padding: '40px 20px'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '40px',
    borderBottom: '2px solid #333333',
    paddingBottom: '20px'
  };

  const articleStyle: React.CSSProperties = {
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e0e0e0'
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const backLinkStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: isMobile ? '15px' : '20px',
    padding: isMobile ? '12px 16px' : '12px 20px',
    backgroundColor: 'var(--color-primary-grey)',
    color: 'var(--color-primary-white)',
    textDecoration: 'none',
    borderRadius: 'var(--radius-lg)',
    fontSize: isMobile ? '14px' : '15px',
    fontFamily: 'RocknRoll One, cursive',
    fontWeight: '500',
    minHeight: '44px',
    touchAction: 'manipulation',
    transition: 'all 0.2s ease',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-tertiary-grey)'
  };

  const tagStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '3px 8px',
    backgroundColor: '#e0e0e0',
    color: '#666666',
    borderRadius: '12px',
    fontSize: '12px',
    marginRight: '8px',
    marginBottom: '5px'
  };

  const articles = [
    {
      title: "🎮 Reactでテトリスポートフォリオを作る",
      date: "2025-01-28",
      tags: ["React", "TypeScript", "ゲーム開発", "ポートフォリオ"],
      excerpt: "テトリスのゲームメカニクスを使ったインタラクティブポートフォリオの作成ガイド。ゲーム要素とプロフェッショナルなプレゼンテーションを融合したユニークな体験を実現。",
      readTime: "12分",
      featured: true
    },
    {
      title: "⚡ React 19 パフォーマンス最適化テクニック",
      date: "2025-01-20",
      tags: ["React 19", "パフォーマンス", "最適化"],
      excerpt: "React 19の新機能を活用したパフォーマンス最適化手法を解説。同時実行機能や状態管理パターンで高速アプリを構築。",
      readTime: "15分",
      featured: true
    },
    {
      title: "🚀 TypeScript 5.3 高度な型システムパターン",
      date: "2025-01-12",
      tags: ["TypeScript", "高度な型", "開発"],
      excerpt: "TypeScript 5.3の高度な型システム機能を探求。テンプレートリテラル型、条件型、マップ型などを実用例で学習。",
      readTime: "18分",
      featured: false
    },
    {
      title: "🎨 モダンCSS: コンテナクエリ & CSS Grid Subgrid",
      date: "2025-01-05",
      tags: ["CSS", "コンテナクエリ", "Grid", "レスポンシブデザイン"],
      excerpt: "レスポンシブデザインを革新する最新CSS機能。コンテナクエリとCSS Grid subgridでより高度なレイアウトを実現。",
      readTime: "10分",
      featured: false
    },
    {
      title: "🛠️ Building Scalable Design Systems with React & Storybook",
      date: "2024-12-28",
      tags: ["Design Systems", "React", "Storybook", "Component Library"],
      excerpt: "Learn how to create and maintain a scalable design system using React and Storybook. Covers component architecture, design tokens, testing strategies, and documentation best practices. Based on real-world experience building design systems for enterprise applications.",
      readTime: "20 min read",
      featured: false
    },
    {
      title: "🔧 Node.js Microservices: Architecture & Best Practices",
      date: "2024-12-20",
      tags: ["Node.js", "Microservices", "Architecture", "Backend"],
      excerpt: "Comprehensive guide to building microservices with Node.js. Covers service communication patterns, data consistency strategies, monitoring, and deployment. Includes practical examples using Express.js, Docker, and Kubernetes for production-ready microservice architectures.",
      readTime: "25 min read",
      featured: false
    },
    {
      title: "🎯 Web Accessibility: Beyond the Basics",
      date: "2024-12-15",
      tags: ["Accessibility", "a11y", "WCAG", "Inclusive Design"],
      excerpt: "Go beyond basic accessibility requirements to create truly inclusive web experiences. Covers advanced ARIA patterns, screen reader optimization, cognitive accessibility, and testing strategies. Includes real user testing insights and common accessibility pitfalls to avoid.",
      readTime: "14 min read",
      featured: false
    },
    {
      title: "⚙️ Webpack to Vite: Migration Guide & Performance Comparison",
      date: "2024-12-08",
      tags: ["Vite", "Webpack", "Build Tools", "Migration"],
      excerpt: "Complete guide to migrating from Webpack to Vite for better development experience and build performance. Includes configuration examples, plugin alternatives, and performance benchmarks showing 10x faster development builds and 3x faster production builds.",
      readTime: "16 min read",
      featured: false
    }
  ];

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <Link 
          to="/" 
          className="link"
          style={backLinkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-secondary-grey)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-primary-grey)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          }}
        >
          🎮 ← テトリスポートフォリオに戻る
        </Link>

        <header style={headerStyle}>
          <h1 className="font-display" style={{ 
            fontSize: isMobile ? '2.2rem' : '2.8rem', 
            margin: '0', 
            color: 'var(--color-primary-grey)',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}>
            📚 アーティクル
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.2rem', 
            color: 'var(--color-tertiary-grey)', 
            margin: '15px 0 0 0',
            fontFamily: 'RocknRoll One, cursive',
            fontWeight: '400'
          }}>
            技術や業界に関する洞察
          </p>
        </header>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <article 
              key={index} 
              style={{
                ...articleStyle,
                background: article.featured ? 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)' : '#ffffff',
                border: article.featured ? '2px solid #e3e8ff' : '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: isMobile ? '20px' : '24px',
                marginBottom: isMobile ? '20px' : '24px',
                transition: 'all 0.3s ease',
                position: 'relative' as const,
                cursor: 'pointer'
              }}
              className="article-card hover-lift"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              {article.featured && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ⭐ Featured
                </div>
              )}
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '12px' }}>
                <span style={{ 
                  color: 'var(--color-tertiary-grey)', 
                  fontSize: isMobile ? '13px' : '14px',
                  fontFamily: 'RocknRoll One, cursive'
                }}>
                  📅 {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <span style={{
                  color: 'var(--color-quaternary-grey)',
                  fontSize: isMobile ? '12px' : '13px',
                  fontWeight: '500'
                }}>
                  ⏱️ {article.readTime}
                </span>
              </div>

              <h2 style={{ 
                color: 'var(--color-primary-grey)', 
                margin: '0 0 15px 0',
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                fontFamily: 'RocknRoll One, cursive',
                fontWeight: '700',
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}>
                {article.title}
              </h2>

              <div style={{ marginBottom: '16px' }}>
                {article.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    style={{
                      ...tagStyle,
                      background: `hsl(${(tagIndex * 137.5) % 360}, 20%, 95%)`,
                      color: `hsl(${(tagIndex * 137.5) % 360}, 40%, 45%)`,
                      fontWeight: '500',
                      fontSize: isMobile ? '11px' : '12px',
                      border: `1px solid hsl(${(tagIndex * 137.5) % 360}, 20%, 85%)`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p style={{ 
                color: 'var(--color-secondary-grey)', 
                lineHeight: '1.7',
                margin: '0 0 20px 0',
                fontSize: isMobile ? '14px' : '15px',
                fontFamily: 'RocknRoll One, cursive'
              }}>
                {article.excerpt}
              </p>

              <button 
                style={{
                  padding: isMobile ? '10px 18px' : '12px 20px',
                  background: 'linear-gradient(135deg, var(--color-primary-grey) 0%, var(--color-secondary-grey) 100%)',
                  color: 'var(--color-primary-white)',
                  border: 'none',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  fontSize: isMobile ? '13px' : '14px',
                  fontFamily: 'RocknRoll One, cursive',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  minHeight: '40px',
                  letterSpacing: '0.025em'
                }}
                className="read-more-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
記事を読む →
              </button>
            </article>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: isMobile ? '30px' : '40px',
          padding: isMobile ? '24px' : '32px',
          background: 'linear-gradient(135deg, #f8f9ff 0%, #e3e8ff 100%)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid #d1d9ff',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ 
            fontSize: '3rem', 
            marginBottom: '12px'
          }}>📬</div>
          <h3 style={{ 
            color: 'var(--color-primary-grey)', 
            margin: '0 0 12px 0',
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontFamily: 'RocknRoll One, cursive',
            fontWeight: '700'
          }}>
            最新記事の更新を受け取る
          </h3>
          <p style={{ 
            color: 'var(--color-tertiary-grey)', 
            margin: '0 0 20px 0',
            fontSize: isMobile ? '14px' : '16px',
            fontFamily: 'RocknRoll One, cursive',
            lineHeight: '1.6'
          }}>
新しい技術記事や業界の洞察を通知で受け取りましょう。<br/>
500+開発者が読む週刊ニュースレターに参加。
          </p>
          <button 
            style={{
              padding: isMobile ? '12px 24px' : '14px 28px',
              background: 'linear-gradient(135deg, var(--color-primary-grey) 0%, var(--color-secondary-grey) 100%)',
              color: 'var(--color-primary-white)',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              fontSize: isMobile ? '14px' : '16px',
              fontFamily: 'RocknRoll One, cursive',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              minHeight: '48px',
              letterSpacing: '0.025em',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            📧 ニュースレター登録
          </button>
          <p style={{ 
            color: 'var(--color-quaternary-grey)', 
            margin: '12px 0 0 0',
            fontSize: '12px',
            fontStyle: 'italic'
          }}>
スパムなし、いつでも登録解除可能
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;