import Link from 'next/link'
import styles from '../styles/utils.module.css'
import ActiveIcon from '../components/ActiveIcon'
import { useResponsive } from '../hooks/useResponsive'

const Footer = () => {
  const { isMobile } = useResponsive()

  const desktopLinkStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
  }

  const statementLinkStyle: React.CSSProperties = {
    fontSize: '0.75em',
  }

  return (
    <footer className="px-2 sm:px-1 py-1 mt-2">
      <section className={styles.headingMd}>
        <div className={styles.horizLine} />
        <div className={styles.socialIconRow}>
          <ActiveIcon
            href="https://www.linkedin.com/in/cooper-reed/"
            imgSrc="/images/linkedin.png"
            variant="social"
          />
          <ActiveIcon
            href="https://github.com/cooperability"
            imgSrc="/images/github.png"
            variant="social"
          />
          <ActiveIcon
            href="https://bsky.app/profile/cooperability.com"
            imgSrc="/images/bluesky.png"
            variant="social"
          />
          <ActiveIcon
            href="https://cooperability.substack.com/"
            imgSrc="/images/substack.png"
            variant="social"
          />
          <ActiveIcon
            href="https://www.youtube.com/@cooperability"
            imgSrc="/images/youtube.png"
            variant="social"
          />
        </div>
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.05rem',
              marginTop: '0.3rem',
            }}
          >
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}
            >
              <a
                href="https://docs.google.com/document/d/15wtKG9juJMYQOI793LvNYMfmeu7hyErO4xWixkTrSHI/edit?usp=sharing"
                style={desktopLinkStyle}
              >
                Resume
              </a>
              <Link href="/resources/linktree" style={desktopLinkStyle}>
                All Links
              </Link>
            </div>
            <div
              className={styles.footerText}
              style={{
                fontSize: '0.9em',
                marginTop: '0.15rem',
                marginBottom: '0.15rem',
              }}
            >
              Cooper Reed &copy; {new Date().getFullYear()}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: '1.5rem',
                paddingLeft: '2rem',
              }}
            >
              <Link
                href="/resources/PrivacyStatement"
                style={statementLinkStyle}
              >
                Privacy Statement
              </Link>
              <Link
                href="/resources/AccessibilityStatement"
                style={statementLinkStyle}
              >
                Accessibility Statement
              </Link>
            </div>
          </div>
        )}
        {isMobile && (
          <div className={styles.footerText} style={{ marginTop: '1rem' }}>
            Cooper Reed &copy; {new Date().getFullYear()}
          </div>
        )}
      </section>
    </footer>
  )
}

export default Footer
