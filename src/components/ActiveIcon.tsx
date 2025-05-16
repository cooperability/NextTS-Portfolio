import Image from 'next/image'
import styles from '../styles/utils.module.css'

interface ActiveIconProps {
  href: string
  imgSrc: string
  variant?: 'default' | 'social'
  size?: 'default' | 'small'
}

const ActiveIcon: React.FC<ActiveIconProps> = ({
  href,
  imgSrc,
  variant = 'default',
  size = 'default',
}) => {
  // Extract filename from imgSrc for alt text
  const altText = imgSrc.substring(imgSrc.lastIndexOf('/') + 1)

  // Base class is always hoverImage
  let imageClassName = styles.hoverImage
  let imageWidth = 50
  let imageHeight = 50

  // Add socialsLink class if variant is social
  if (variant === 'social') {
    imageClassName = `${imageClassName} ${styles.socialsLink}`
  }

  // Adjust size and styles for 'small' variant
  if (size === 'small') {
    imageWidth = 20
    imageHeight = 20
    // Optionally, use a different class or modify existing for small icons
    // For now, we'll just adjust size. We can add specific small icon styles later if needed.
    imageClassName = styles.inlineIcon // Assuming you might want a different style, or just remove hover
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={imgSrc}
        alt={altText}
        className={imageClassName} // Apply combined class names
        width={imageWidth} // Use dynamic width
        height={imageHeight} // Use dynamic height
      />
    </a>
  )
}

export default ActiveIcon
