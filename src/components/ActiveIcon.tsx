import Image from 'next/image'
import styles from '../styles/utils.module.css'

interface ActiveIconProps {
  href: string
  imgSrc: string
  variant?: 'default' | 'social'
}

const ActiveIcon: React.FC<ActiveIconProps> = ({
  href,
  imgSrc,
  variant = 'default',
}) => {
  // Extract filename from imgSrc for alt text
  const altText = imgSrc.substring(imgSrc.lastIndexOf('/') + 1)

  // Base class is always hoverImage
  let imageClassName = styles.hoverImage
  // Add socialsLink class if variant is social
  if (variant === 'social') {
    imageClassName = `${imageClassName} ${styles.socialsLink}`
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={imgSrc}
        alt={altText}
        className={imageClassName} // Apply combined class names
        width={50}
        height={50}
      />
    </a>
  )
}

export default ActiveIcon
