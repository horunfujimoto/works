import React from 'react';
import { Link } from 'react-router-dom';

const Career: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    color: '#333333',
    fontFamily: 'Arial, sans-serif',
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
    fontFamily: 'var(--font-family-primary)',
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
            💼 キャリア
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.2rem', 
            color: 'var(--color-tertiary-grey)', 
            margin: '15px 0 0 0',
            fontFamily: 'var(--font-family-primary)',
            fontWeight: '400'
          }}>
            Professional Experience & Education Journey
          </p>
        </header>

        <section style={sectionStyle}>
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>Work Experience</h2>
          
          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>Senior Full Stack Developer</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              TechFlow Solutions | 2023 - Present
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>Architected and developed scalable web applications using React 18+, Next.js, and TypeScript</li>
              <li>Built responsive game-like interfaces including Tetris-style portfolio websites</li>
              <li>Implemented real-time features using WebSocket APIs and server-sent events</li>
              <li>Led code reviews and mentored 3 junior developers on modern development practices</li>
              <li>Optimized application performance achieving 95+ Lighthouse scores across all metrics</li>
            </ul>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>Frontend Developer</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              Digital Innovation Labs | 2021 - 2023
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>Developed interactive web applications using React, Vue.js, and Angular frameworks</li>
              <li>Created responsive design systems and component libraries used across 10+ projects</li>
              <li>Collaborated with UX designers to implement pixel-perfect user interfaces</li>
              <li>Integrated RESTful APIs and GraphQL endpoints for data management</li>
              <li>Implemented automated testing strategies reducing production bugs by 60%</li>
            </ul>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>Web Developer</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              CreativeSpace Agency | 2020 - 2021
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>Built custom WordPress themes and plugins for client websites</li>
              <li>Developed interactive animations using GSAP and CSS3 transforms</li>
              <li>Maintained and optimized legacy codebases improving load times by 45%</li>
              <li>Participated in agile sprints and collaborated with cross-functional teams</li>
              <li>Contributed to open-source projects and internal tooling</li>
            </ul>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>Junior Developer</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              StartupHub Incubator | 2019 - 2020
            </p>
            <ul style={{ color: '#555555', lineHeight: '1.6' }}>
              <li>Learned full-stack development through hands-on projects</li>
              <li>Built MVP applications using JavaScript, HTML5, and CSS3</li>
              <li>Worked with startup teams to rapidly prototype ideas</li>
              <li>Gained experience with version control, deployment, and CI/CD pipelines</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>Education</h2>
          
          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>Bachelor of Computer Science</h3>
            <p style={{ color: '#666666', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              Tokyo Institute of Technology | 2015 - 2019
            </p>
            <p style={{ color: '#555555', lineHeight: '1.6' }}>
              Graduated Summa Cum Laude (GPA: 3.8/4.0). Specialized in Human-Computer Interaction and Software Engineering.
              Thesis: "Interactive Game Interfaces for Portfolio Websites" - developed early prototypes of game-based navigation systems.
              Completed advanced coursework in algorithms, data structures, and modern web technologies.
            </p>
          </div>

          <div style={experienceItemStyle}>
            <h3 style={{ color: '#333333', margin: '0 0 5px 0' }}>Certifications</h3>
            <div style={{ color: '#555555', lineHeight: '1.6' }}>
              <p><strong>AWS Certified Developer Associate</strong> (2023)</p>
              <p><strong>Google Cloud Professional Developer</strong> (2022)</p>
              <p><strong>React Advanced Certification</strong> - Meta (2022)</p>
              <p><strong>TypeScript Deep Dive Certification</strong> (2021)</p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>Core Skills</h2>
          
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#333333', margin: '0 0 10px 0', fontSize: '18px' }}>Frontend Development</h3>
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
            <h3 style={{ color: '#333333', margin: '0 0 10px 0', fontSize: '18px' }}>Backend & Tools</h3>
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
            <h3 style={{ color: '#333333', margin: '0 0 10px 0', fontSize: '18px' }}>Soft Skills</h3>
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
          <h2 style={{ color: '#333333', marginBottom: '20px' }}>Achievements</h2>
          <div style={{ color: '#555555', lineHeight: '1.6' }}>
            <ul>
              <li><strong>Innovation Award</strong> - Best Creative Developer Portfolio (TechFlow Solutions, 2024)</li>
              <li><strong>Performance Excellence</strong> - Improved team productivity by 35% through code optimization initiatives</li>
              <li><strong>Open Source Contributor</strong> - 50+ contributions to React ecosystem libraries</li>
              <li><strong>Tech Speaker</strong> - Presented at 3 local JavaScript meetups on modern React patterns</li>
              <li><strong>Mentorship Impact</strong> - Successfully mentored 8 junior developers who were promoted within 1 year</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;