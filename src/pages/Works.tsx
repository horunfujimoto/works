import React from 'react';
import { Link } from 'react-router-dom';

const Works: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    color: '#333333',
    fontFamily: 'Arial, sans-serif',
    padding: '40px 20px'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1000px',
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
    fontFamily: 'var(--font-family-primary)',
    fontWeight: '500',
    minHeight: '44px',
    touchAction: 'manipulation',
    transition: 'all 0.2s ease',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-tertiary-grey)'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginTop: '30px'
  };

  const projectStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const contentStyle: React.CSSProperties = {
    padding: '20px'
  };

  const tagStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '3px 8px',
    backgroundColor: '#e0e0e0',
    color: '#666666',
    borderRadius: '12px',
    fontSize: '12px',
    marginRight: '6px',
    marginBottom: '8px'
  };

  const projects = [
    {
      title: "🎮 Tetris Portfolio Website",
      description: "An innovative interactive portfolio that transforms the classic Tetris game into a navigation system. Users can play Tetris while clicking on portfolio blocks (CAREER, ARTICLES, HOBBIES, WORKS) to explore different sections. Features custom game logic, smooth GSAP animations, full accessibility compliance, and responsive design. This project demonstrates the perfect blend of entertainment and functionality.",
      icon: "🎮",
      technologies: ["React 19", "TypeScript", "GSAP", "Custom Game Logic", "CSS Grid", "Accessibility"],
      status: "Featured",
      category: "Interactive Web App",
      year: "2025",
      featured: true,
      metrics: {
        performance: "95+",
        accessibility: "100",
        users: "Active"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "📊 TechFlow Analytics Dashboard",
      description: "A comprehensive real-time analytics platform for enterprise clients, featuring advanced data visualization, custom reporting, and predictive analytics. Built with modern React patterns and optimized for handling large datasets. Includes interactive charts, real-time WebSocket updates, and exportable reports in multiple formats.",
      icon: "📊",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
      status: "Production",
      category: "Enterprise Dashboard",
      year: "2024",
      featured: true,
      metrics: {
        performance: "1M+",
        uptime: "99.9%",
        users: "500+"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "🎨 Creative Studio Platform",
      description: "A collaborative platform for creative professionals including designers, artists, and content creators. Features project management, asset sharing, real-time collaboration tools, and integrated version control. Built with a focus on user experience and creative workflow optimization.",
      icon: "🎨",
      technologies: ["Next.js", "Prisma", "Socket.io", "AWS S3", "Stripe", "WebRTC"],
      status: "Live",
      category: "Creative Platform",
      year: "2024",
      featured: false,
      metrics: {
        users: "200+",
        projects: "1K+",
        satisfaction: "4.8/5"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "🚀 DevTools Extension Suite",
      description: "A comprehensive browser extension suite for web developers, including performance profilers, accessibility checkers, and debugging tools. Features real-time code analysis, performance metrics, and integration with popular development frameworks. Downloaded by 10K+ developers worldwide.",
      icon: "🚀",
      technologies: ["JavaScript", "Chrome Extension API", "Webpack", "Performance API"],
      status: "Published",
      category: "Developer Tools",
      year: "2024",
      featured: false,
      metrics: {
        downloads: "10K+",
        rating: "4.7/5",
        reviews: "500+"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "🤖 AI-Powered Code Assistant",
      description: "An intelligent code completion and refactoring tool that uses machine learning to understand coding patterns and suggest improvements. Features context-aware suggestions, automated refactoring, and integration with popular IDEs. Trained on millions of code samples for accurate suggestions.",
      icon: "🤖",
      technologies: ["Python", "TensorFlow", "React", "Electron", "Language Server Protocol"],
      status: "Beta",
      category: "AI/ML Tool",
      year: "2024",
      featured: false,
      metrics: {
        accuracy: "87%",
        users: "Beta",
        improvement: "30%"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "🌍 Open Source Component Library",
      description: "A modern, accessible React component library with 50+ components, comprehensive documentation, and Storybook integration. Features customizable themes, TypeScript support, and tree-shaking for optimal bundle sizes. Actively maintained with weekly releases and community contributions.",
      icon: "🌍",
      technologies: ["React", "TypeScript", "Storybook", "Rollup", "Jest", "Chromatic"],
      status: "Open Source",
      category: "Component Library",
      year: "2023-Present",
      featured: true,
      metrics: {
        downloads: "50K/month",
        stars: "2.5K",
        contributors: "25+"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "🎵 Audio Visualizer Web App",
      description: "An interactive audio visualization platform that creates stunning visual effects synchronized with music. Features multiple visualization modes, real-time audio analysis, and the ability to record and share visualizations. Built with Web Audio API and Canvas for high-performance graphics.",
      icon: "🎵",
      technologies: ["Web Audio API", "Canvas", "WebGL", "FFT Analysis", "React"],
      status: "Live",
      category: "Creative App",
      year: "2023",
      featured: false,
      metrics: {
        users: "5K+",
        visualizations: "50K+",
        engagement: "15min avg"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "💱 Cryptocurrency Portfolio Tracker",
      description: "A comprehensive crypto portfolio management application with real-time price tracking, profit/loss analysis, and advanced charting. Features portfolio rebalancing suggestions, tax reporting, and integration with major exchanges. Handles 1000+ cryptocurrencies with live market data.",
      icon: "💱",
      technologies: ["React", "Node.js", "PostgreSQL", "CoinGecko API", "Chart.js", "WebSocket"],
      status: "Completed",
      category: "FinTech App",
      year: "2023",
      featured: false,
      metrics: {
        users: "1K+",
        portfolios: "5K+",
        accuracy: "99.9%"
      },
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#4CAF50';
      case 'In Development':
        return '#FF9800';
      case 'Planning':
        return '#2196F3';
      default:
        return '#666666';
    }
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
          🎮 ← Back to Tetris Portfolio
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
            🚀 ワークス
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.2rem', 
            color: 'var(--color-tertiary-grey)', 
            margin: '15px 0 0 0',
            fontFamily: 'var(--font-family-primary)',
            fontWeight: '400'
          }}>
            Featured Projects, Open Source Contributions & Creative Experiments
          </p>
        </header>

        <div style={{ marginBottom: isMobile ? '30px' : '40px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.1rem', 
            lineHeight: '1.7', 
            color: 'var(--color-secondary-grey)',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'var(--font-family-primary)'
          }}>
            A curated collection of projects spanning web applications, developer tools, creative experiments, and open source contributions. 
            Each project represents a unique challenge solved, a new technology explored, or a creative vision brought to life. 
            From interactive experiences to enterprise solutions—here's what I've been building. ✨
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: isMobile ? '8px' : '12px', 
          justifyContent: 'center',
          marginBottom: isMobile ? '30px' : '40px',
          flexWrap: 'wrap'
        }}>
          {['All', 'Featured', 'Web Apps', 'Tools', 'Open Source'].map((filter, index) => (
            <button
              key={index}
              style={{
                padding: isMobile ? '8px 16px' : '10px 20px',
                backgroundColor: index === 0 ? 'var(--color-primary-grey)' : 'transparent',
                color: index === 0 ? 'var(--color-primary-white)' : 'var(--color-tertiary-grey)',
                border: index === 0 ? 'none' : '1px solid var(--color-quaternary-grey)',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                fontSize: isMobile ? '13px' : '14px',
                fontFamily: 'var(--font-family-primary)',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (index !== 0) {
                  e.currentTarget.style.backgroundColor = 'var(--color-quaternary-grey)';
                  e.currentTarget.style.color = 'var(--color-primary-grey)';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== 0) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-tertiary-grey)';
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div style={{
          ...gridStyle,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: isMobile ? '20px' : '24px'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={{
                ...projectStyle,
                background: project.featured ? 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)' : '#ffffff',
                border: project.featured ? '2px solid #e3e8ff' : '1px solid #e0e0e0',
                borderRadius: '16px',
                position: 'relative' as const,
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)'
              }}
              className="project-card hover-lift"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
              }}
            >
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  zIndex: 2
                }}>
                  ⭐ Featured
                </div>
              )}
              
              <div style={{
                height: '180px',
                background: `linear-gradient(135deg, ${project.featured ? '#667eea' : '#f8f9fa'} 0%, ${project.featured ? '#764ba2' : '#e9ecef'} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: project.featured ? 'white' : '#6c757d',
                position: 'relative' as const
              }}>
                {project.icon}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '16px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: '500'
                }}>
                  {project.year}
                </div>
              </div>
              
              <div style={{
                ...contentStyle,
                padding: isMobile ? '20px' : '24px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  marginBottom: '8px' 
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      color: 'var(--color-primary-grey)', 
                      margin: '0 0 4px 0',
                      fontSize: isMobile ? '1.2rem' : '1.3rem',
                      fontFamily: 'var(--font-family-display)',
                      fontWeight: '700',
                      lineHeight: '1.3'
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--color-quaternary-grey)',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {project.category}
                    </div>
                  </div>
                  <span style={{
                    padding: '6px 10px',
                    backgroundColor: getStatusColor(project.status),
                    color: '#ffffff',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '600',
                    marginLeft: '12px',
                    whiteSpace: 'nowrap'
                  }}>
                    {project.status}
                  </span>
                </div>

                <p style={{ 
                  color: 'var(--color-secondary-grey)', 
                  lineHeight: '1.6',
                  margin: '0 0 16px 0',
                  fontSize: isMobile ? '14px' : '15px',
                  fontFamily: 'var(--font-family-primary)'
                }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '16px' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      style={{
                        ...tagStyle,
                        background: `hsl(${(techIndex * 137.5) % 360}, 20%, 95%)`,
                        color: `hsl(${(techIndex * 137.5) % 360}, 40%, 45%)`,
                        fontWeight: '500',
                        fontSize: '11px',
                        border: `1px solid hsl(${(techIndex * 137.5) % 360}, 20%, 85%)`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.02)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '12px'
                }}>
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} style={{ textAlign: 'center', flex: 1 }}>
                      <div style={{ 
                        fontWeight: '700', 
                        color: 'var(--color-primary-grey)',
                        fontSize: '14px'
                      }}>
                        {value}
                      </div>
                      <div style={{ 
                        color: 'var(--color-quaternary-grey)',
                        textTransform: 'capitalize',
                        fontSize: '11px'
                      }}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    style={{
                      padding: isMobile ? '10px 16px' : '12px 18px',
                      background: 'linear-gradient(135deg, var(--color-primary-grey) 0%, var(--color-secondary-grey) 100%)',
                      color: 'var(--color-primary-white)',
                      border: 'none',
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '600',
                      flex: 1,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    👁️ View Demo
                  </button>
                  <button 
                    style={{
                      padding: isMobile ? '10px 16px' : '12px 18px',
                      backgroundColor: 'transparent',
                      color: 'var(--color-primary-grey)',
                      border: '2px solid var(--color-primary-grey)',
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '600',
                      flex: 1,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-grey)';
                      e.currentTarget.style.color = 'var(--color-primary-white)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--color-primary-grey)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    💻 Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: isMobile ? '40px' : '50px',
          padding: isMobile ? '24px' : '32px',
          background: 'linear-gradient(135deg, #e8f5e8 0%, #f0fff0 100%)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid #c8e6c8',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ 
            fontSize: '3rem', 
            marginBottom: '16px'
          }}>🚀</div>
          <h3 style={{ 
            color: 'var(--color-primary-grey)', 
            margin: '0 0 16px 0',
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontFamily: 'var(--font-family-display)',
            fontWeight: '700'
          }}>
            Ready to Build Something Amazing?
          </h3>
          <p style={{ 
            color: 'var(--color-secondary-grey)', 
            margin: '0 0 24px 0',
            lineHeight: '1.7',
            fontSize: isMobile ? '15px' : '16px',
            fontFamily: 'var(--font-family-primary)',
            maxWidth: '600px',
          }}>
            I'm always excited to discuss new projects, innovative ideas, and opportunities to collaborate. 
            Whether you need a technical partner, want to contribute to open source, or have a crazy idea that needs building—
            let's turn concepts into reality! 💡
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
                fontFamily: 'var(--font-family-primary)',
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
              💬 Let's Collaborate
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
                fontFamily: 'var(--font-family-primary)',
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
              📄 View Resume
            </button>
          </div>
          <p style={{ 
            color: 'var(--color-quaternary-grey)', 
            margin: '16px 0 0 0',
            fontSize: '13px',
            fontStyle: 'italic'
          }}>
            Open to freelance projects, full-time opportunities, and interesting collaborations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;