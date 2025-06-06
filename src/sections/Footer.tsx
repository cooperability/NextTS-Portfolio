import Link from 'next/link'
import styles from '../styles/utils.module.css'
import ActiveIcon from '../components/ActiveIcon'
import { useResponsive } from '../hooks/useResponsive'

const Footer = () => {
  const { isMobile } = useResponsive()

  return (
    <footer className="px-2 sm:px-1 py-4 mt-8">
      <section className={styles.headingMd}>
        <div className={styles.horizLine} />

        {/* Social Icons */}
        <div
          className={styles.socialIconRow}
          style={{ marginBottom: '1.5rem' }}
        >
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

        {/* Footer Links - Desktop only */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '1rem',
            }}
          >
            <a
              href="https://docs.google.com/document/d/15wtKG9juJMYQOI793LvNYMfmeu7hyErO4xWixkTrSHI/edit?usp=sharing"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
            >
              Resume
            </a>
            <Link
              href="/resources/linktree"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
            >
              All Links
            </Link>
            <Link
              href="/resources/PrivacyStatement"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
            >
              Privacy
            </Link>
            <Link
              href="/resources/AccessibilityStatement"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
            >
              Accessibility
            </Link>
          </div>
        )}

        {/* Copyright */}
        <div
          className={styles.footerText}
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '1rem' : '0',
          }}
        >
          Cooper Reed &copy; {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  )
}

export default Footer
