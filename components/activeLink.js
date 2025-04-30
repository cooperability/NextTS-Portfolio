import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";

const ActiveLink = ({
  children,           // The content of the link (e.g., "Home")
  activeClassName,    // Class to add when active (e.g., styles.boldLink)
  className,          // Base class for the link (e.g., styles.navLink)
  href,               // Link destination
  ...props            // Any other props to pass to the underlying <a> tag
}) => {
  const { asPath } = useRouter();

  // Check if the current path matches the link's href
  const isExactlyActive = asPath === href;

  // Combine the base className with the activeClassName if the link is active
  const combinedClassName = isExactlyActive
    ? `${className || ""} ${activeClassName}`.trim()
    : className || "";

  return (
    // Use Next.js Link component for client-side navigation.
    // It automatically renders an <a> tag.
    // Pass the calculated className and other props directly to Link.
    <Link 
      href={href} 
      className={combinedClassName || undefined} 
      {...props}
    >
      {children}
    </Link>
  );
};

// Define prop types for the component
ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string.isRequired,
  className: PropTypes.string, // Optional base class name
  href: PropTypes.string.isRequired,
};

// Set default props
ActiveLink.defaultProps = {
  className: "",
};

export default ActiveLink;
