import Link from 'next/link'
import styles from '../styles/utils.module.css'
import ActiveIcon from '../components/ActiveIcon'

const Footer = () => {
  return (
    <footer className="px-2 sm:px-1 py-1 mt-2">
      <section className={styles.headingMd}>
        <div className={styles.horizLine} />
        <div className={styles.socialIconRow}>
          <ActiveIcon
            href="https://www.linkedin.com/in/cooper-reed/"
            imgSrc="/images/Linkedin.png"
            variant="social"
          />
          <ActiveIcon
            href="https://github.com/cooperability"
            imgSrc="/images/Github.png"
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
            imgSrc="/images/Youtube.png"
            variant="social"
          />
        </div>
        <div className={styles.footerLinks}>
          <a href="https://docs.google.com/document/d/15wtKG9juJMYQOI793LvNYMfmeu7hyErO4xWixkTrSHI/edit?usp=sharing">
            Resume
          </a>
          <Link href="/resources/linktree">All Links</Link>
        </div>
        <div className={styles.footerText}>
          {' '}
          Cooper Reed &copy; {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  )
}

export default Footer
