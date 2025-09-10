import React from 'react';
import { Link } from 'react-router-dom';

const Hobbies: React.FC = () => {
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


  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: isMobile ? '20px' : '24px',
    marginTop: '30px'
  };

  const hobbies = [
    {
      title: "🎮 インタラクティブゲーム開発",
      description: "クリエイティブなゲームやインタラクティブ体験をゼロから構築。レトロスタイルRPG「Pixel Quest」を開発中。テトリスポートフォリオではゲームメカニクスとWeb体験の融合を実現。",
      icon: "🎮",
      skills: ["JavaScript/TypeScript", "Reactゲームロジック", "Canvas API", "ゲームデザイン"],
      projects: ["テトリスポートフォリオ", "Pixel Quest RPG", "Webベーススネークゲーム"],
      featured: true
    },
    {
      title: "📸 ストリート・アーバン写真",
      description: "ストリート写真と建築探求で都市生活の本質を捉える。ゴールデンアワーの都市景観と自然な人間の瞬間を専門としています。日常シーンに美しさを見つけ、視覚的構成で物語を語ることに焦点。",
      icon: "📸",
      skills: ["Sony α7R IV", "Adobe Lightroom", "構図理論", "カラーグレーディング"],
      projects: ["東京ストリートシリーズ", "建築と光", "アーバンポートレート"],
      featured: false
    },
    {
      title: "🎵 エレクトロニックミュージック制作",
      description: "ゲームやメディア向けのアンビエントエレクトロニックミュージックやチップチューンサウンドトラックを作曲。ビンテージシンセサイザーサウンドとモダン制作技術を融合したサウンドスケープを創造。レトロゲーミング美学のアルバム「Digital Dreams」をリリース。",
      icon: "🎵",
      skills: ["Ableton Live", "アナログシンセサイザー", "オーディオマスタリング", "サウンドデザイン"],
      projects: ["Digital Dreamsアルバム", "ゲームサウンドトラックライブラリ", "アンビエントポッドキャストシリーズ"],
      featured: true
    },
    {
      title: "🎨 Pixel Art & Digital Illustration",
      description: "Creating detailed pixel art characters, environments, and animations for games and personal projects. Specializing in 16-bit and 32-bit art styles with modern flair. My work combines nostalgia with contemporary design principles to create visually striking digital art.",
      icon: "🎨",
      skills: ["Aseprite", "Color Theory", "Character Design", "Animation", "Pixel Art Techniques"],
      projects: ["Character Sprite Library", "Animated Game Assets", "Pixel Art Commissions"],
      featured: false
    },
    {
      title: "🚴‍♂️ Cycling & Urban Exploration",
      description: "Exploring cities and nature through long-distance cycling adventures. Passionate about discovering hidden gems, local culture, and scenic routes. Combining fitness with travel to experience destinations from a unique perspective. Love documenting these journeys through photography and travel logs.",
      icon: "🚴‍♂️",
      skills: ["Route Planning", "Bike Maintenance", "Travel Photography", "Navigation", "Endurance Training"],
      projects: ["Tokyo Bay Cycling Route", "Mountain Trail Adventures", "Urban Commute Optimization"],
      featured: false
    },
    {
      title: "📚 Tech Book Collecting & Review",
      description: "Curating a collection of influential programming and design books, both vintage and modern. Writing detailed reviews and summaries to help other developers discover valuable resources. Particularly interested in books that shaped software development history and emerging technology trends.",
      icon: "📚",
      skills: ["Technical Writing", "Book Curation", "Technology History", "Content Creation", "Research"],
      projects: ["Tech Book Review Blog", "Programming Classics Collection", "Monthly Reading Recommendations"],
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
            🎨 ホビー
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.2rem', 
            color: 'var(--color-tertiary-grey)', 
            margin: '15px 0 0 0',
            fontFamily: 'RocknRoll One, cursive',
            fontWeight: '400'
          }}>
クリエイティブな追求とコードを超えた人生
          </p>
        </header>

        <div style={{ marginBottom: isMobile ? '30px' : '40px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.1rem', 
            lineHeight: '1.7', 
            color: 'var(--color-secondary-grey)',
            maxWidth: '700px',
            margin: '0 auto',
            fontFamily: 'RocknRoll One, cursive'
          }}>
コーディング以外に、技術的な仕事にインスパイアを与えるクリエイティブな追求に情熱を注いでいます。
これらの趣味は技術、アート、個人的表現の交点であり、開発者とクリエイターとしての成長に貢献しています。🌟
          </p>
        </div>

        <div style={{
          ...gridStyle,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '20px' : '24px'
        }}>
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              style={{ 
                background: hobby.featured ? 'linear-gradient(135deg, #fff8f0 0%, #ffffff 100%)' : '#ffffff',
                border: hobby.featured ? '2px solid #ffe4cc' : '1px solid #e0e0e0',
                borderRadius: '16px',
                padding: isMobile ? '20px' : '24px',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                position: 'relative' as const,
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)'
              }}
              className="hobby-card hover-lift"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
              }}
            >
              {hobby.featured && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'linear-gradient(135deg, #ff9a56 0%, #ff6b35 100%)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ⭐ Active
                </div>
              )}
              
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '16px',
                textAlign: 'center'
              }}>
                {hobby.icon}
              </div>
              
              <h3 style={{ 
                color: 'var(--color-primary-grey)', 
                margin: '0 0 12px 0',
                fontSize: isMobile ? '1.2rem' : '1.3rem',
                fontFamily: 'RocknRoll One, cursive',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>
                {hobby.title}
              </h3>
              
              <p style={{ 
                color: 'var(--color-secondary-grey)', 
                lineHeight: '1.6',
                margin: '0 0 16px 0',
                fontSize: isMobile ? '14px' : '15px',
                fontFamily: 'RocknRoll One, cursive'
              }}>
                {hobby.description}
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ 
                  color: 'var(--color-primary-grey)',
                  fontSize: '14px',
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  🛠️ Skills & Tools
                </h4>
                <div>
                  {hobby.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        display: 'inline-block',
                        padding: '5px 10px',
                        background: `hsl(${(skillIndex * 137.5) % 360}, 25%, 95%)`,
                        color: `hsl(${(skillIndex * 137.5) % 360}, 45%, 45%)`,
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '500',
                        marginRight: '6px',
                        marginBottom: '6px',
                        border: `1px solid hsl(${(skillIndex * 137.5) % 360}, 25%, 85%)`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 style={{ 
                  color: 'var(--color-primary-grey)',
                  fontSize: '14px',
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  📁 Recent Projects
                </h4>
                <ul style={{ 
                  margin: '0',
                  padding: '0 0 0 16px',
                  color: 'var(--color-tertiary-grey)',
                  fontSize: '13px',
                  lineHeight: '1.5'
                }}>
                  {hobby.projects.map((project, projectIndex) => (
                    <li key={projectIndex} style={{ marginBottom: '4px' }}>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: isMobile ? '40px' : '50px',
          padding: isMobile ? '24px' : '32px',
          background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid #cce7ff',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ 
            fontSize: '3rem', 
            marginBottom: '16px'
          }}>🤝</div>
          <h3 style={{ 
            color: 'var(--color-primary-grey)', 
            margin: '0 0 16px 0',
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontFamily: 'RocknRoll One, cursive',
            fontWeight: '700'
          }}>
一緒にコラボレーションして作品を創造しましょう
          </h3>
          <p style={{ 
            color: 'var(--color-secondary-grey)', 
            margin: '0 0 24px 0',
            lineHeight: '1.7',
            fontSize: isMobile ? '15px' : '16px',
            fontFamily: 'RocknRoll One, cursive',
            maxWidth: '600px',
          }}>
クリエイティブプロジェクトでのコラボ、知識共有、同好者からの学びにいつも想狀しています。
新ゲームコンセプトのブレスト、音楽アイデアのジャムセッション、写真技法の探求など—
最高のクリエイティブ作品はコミュニティと共有インスピレーションから生まれます。🌟
          </p>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '12px' : '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center'
          }}>
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
                minWidth: isMobile ? '200px' : 'auto',
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
🎨 クリエイティブポートフォリオを見る
            </button>
            <button 
              style={{
                padding: isMobile ? '12px 24px' : '14px 28px',
                backgroundColor: 'transparent',
                color: 'var(--color-primary-grey)',
                border: '2px solid var(--color-primary-grey)',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                fontSize: isMobile ? '14px' : '16px',
                fontFamily: 'RocknRoll One, cursive',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                minHeight: '48px',
                minWidth: isMobile ? '200px' : 'auto',
                letterSpacing: '0.025em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-grey)';
                e.currentTarget.style.color = 'var(--color-primary-white)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-primary-grey)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
💬 連絡してみましょう
            </button>
          </div>
          <p style={{ 
            color: 'var(--color-quaternary-grey)', 
            margin: '16px 0 0 0',
            fontSize: '13px',
            fontStyle: 'italic'
          }}>
興味深いプロジェクトやクリエイティブなコラボレーションにいつでもオープン
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;