import Image from 'next/image'
import styles from '../styles/utils.module.css'

interface ActiveIconProps {
  href: string
  imgSrc: string
  variant?: 'default' | 'social'
  size?: 'default' | 'small'
  width?: number
  height?: number
}

const ActiveIcon: React.FC<ActiveIconProps> = ({
  href,
  imgSrc,
  variant = 'default',
  size = 'default',
  width,
  height,
}) => {
  // Extract filename from imgSrc for alt text
  const altText = imgSrc.substring(imgSrc.lastIndexOf('/') + 1)

  // Base class is always hoverImage
  let imageClassName = styles.hoverImage
  let imageWidth = 50
  let imageHeight = 50

  if (width && height) {
    imageWidth = width
    imageHeight = height
  } else if (size === 'small') {
    imageWidth = 25
    imageHeight = 25
    imageClassName = styles.inlineIcon
  }

  if (variant === 'social') {
    imageClassName = `${imageClassName} ${styles.socialsLink}`
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={imgSrc}
        alt={altText}
        className={imageClassName}
        width={imageWidth}
        height={imageHeight}
      />
    </a>
  )
}

export default ActiveIcon
