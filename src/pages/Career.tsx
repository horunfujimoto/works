import React from 'react';
import { Link } from 'react-router-dom';

const Career: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    color: '#333333',
    fontFamily: 'RocknRoll One, cursive',
    padding: '40px 20px'
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: isMobile ? '20px' : '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: isMobile ? '30px' : '40px',
    borderBottom: '2px solid #333333',
    paddingBottom: isMobile ? '15px' : '20px'
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: isMobile ? '25px' : '30px'
  };

  const experienceItemStyle: React.CSSProperties = {
    marginBottom: isMobile ? '15px' : '20px',
    paddingBottom: isMobile ? '15px' : '20px',
    borderBottom: '1px solid #e0e0e0'
  };

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
            💼 キャリア
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.2rem', 
            color: 'var(--color-tertiary-grey)', 
            margin: '15px 0 0 0',
            fontFamily: 'RocknRoll One, cursive',
            fontWeight: '400'
          }}>
            職歴と学歴
          </p>
        </header>

        <section style={sectionStyle}>
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>職歴</h2>
          
          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>シニアフルスタック開発者</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              TechFlow Solutions | 2023年 - 現在
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>React、Next.js、TypeScriptによるWebアプリケーション開発</li>
              <li>テトリス風ポートフォリオなどのインタラクティブUI構築</li>
              <li>チームリーダーとして3名のジュニア開発者を指導</li>
            </ul>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>フロントエンド開発者</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              Digital Innovation Labs | 2021年 - 2023年
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>React、Vue.js、AngularによるWebアプリケーション開発</li>
              <li>レスポンシブデザインシステムとコンポーネントライブラリ作成</li>
              <li>UXデザイナーとの連携によるUI実装</li>
            </ul>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>Web開発者</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              CreativeSpace Agency | 2020年 - 2021年
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>WordPressテーマ・プラグイン開発</li>
              <li>GSAPを使用したアニメーション開発</li>
              <li>レガシーコードの保守・最適化</li>
            </ul>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>ジュニア開発者</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              StartupHub Incubator | 2019年 - 2020年
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>実践的プロジェクトでのフルスタック開発学習</li>
              <li>JavaScript、HTML5、CSS3によるMVPアプリ構築</li>
              <li>スタートアップでのアイデア迅速プロトタイピング</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>学歴</h2>
          
          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>コンピュータサイエンス学士</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              東京工業大学 | 2015年 - 2019年
            </p>
            <p style={{ color: '#555555', lineHeight: '1.6' }}>
              ヒューマンコンピュータインタラクションとソフトウェアエンジニアリング専攻。
              卒業論文：「ポートフォリオサイト向けインタラクティブゲームインターフェース」
            </p>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>資格</h3>
            <div style={{ color: '#555555', lineHeight: '1.6' }}>
              <p><strong>AWS Certified Developer Associate</strong> (2023)</p>
              <p><strong>Google Cloud Professional Developer</strong> (2022)</p>
              <p><strong>React Advanced Certification</strong> - Meta (2022)</p>
              <p><strong>TypeScript Deep Dive Certification</strong> (2021)</p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>主要スキル</h2>
          
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#333333', margin: '0 0 10px 0', fontSize: '18px' }}>フロントエンド開発</h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: isMobile ? '8px' : '10px',
              marginBottom: '15px'
            }}>
              {[
                'React 18+', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5',
                'CSS3/SCSS', 'Tailwind CSS', 'Styled Components', 'GSAP', 'Framer Motion'
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    padding: isMobile ? '6px 10px' : '6px 12px',
                    backgroundColor: '#e8f4f8',
                    color: '#1a5f7a',
                    borderRadius: '20px',
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: '500',
                    border: '1px solid #b8daef'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#333333', margin: '0 0 10px 0', fontSize: '18px' }}>バックエンド・ツール</h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: isMobile ? '8px' : '10px',
              marginBottom: '15px'
            }}>
              {[
                'Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB',
                'AWS', 'Docker', 'Git', 'Webpack', 'Vite', 'Jest', 'Cypress'
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    padding: isMobile ? '6px 10px' : '6px 12px',
                    backgroundColor: '#f0f8f0',
                    color: '#2d5a2d',
                    borderRadius: '20px',
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: '500',
                    border: '1px solid #c8e6c8'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#333333', margin: '0 0 10px 0', fontSize: '18px' }}>ソフトスキル</h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: isMobile ? '8px' : '10px'
            }}>
              {[
                'Team Leadership', 'Code Review', 'Mentoring', 'Agile/Scrum',
                'Project Management', 'Technical Writing', 'Problem Solving'
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    padding: isMobile ? '6px 10px' : '6px 12px',
                    backgroundColor: '#fdf2e9',
                    color: '#8b4513',
                    borderRadius: '20px',
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: '500',
                    border: '1px solid #f4d1ae'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>主な実績</h2>
          <div style={{ color: '#555555', lineHeight: '1.6' }}>
            <ul>
              <li><strong>イノベーション賞</strong> - 最優秀クリエイティブ開発者ポートフォリオ (2024)</li>
              <li><strong>パフォーマンス優秀賞</strong> - チーム生産性35%向上</li>
              <li><strong>オープンソース貢献</strong> - Reactエコシステムへ50+貢献</li>
              <li><strong>技術講演</strong> - JavaScriptミートアップで講演</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;