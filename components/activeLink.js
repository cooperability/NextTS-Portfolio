import { useRouter } from "next/router";
import propTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  
  const originalChildProps = child.props;
  const originalClassName = originalChildProps.className || "";
  const content = originalChildProps.children;

  const isActive = asPath === props.href || asPath === props.as;

  const finalClassName = isActive
    ? `${originalClassName} ${activeClassName}`.trim()
    : originalClassName;

  const { 
    activeClassName: _acn,
    children: _c,
    ...linkProps
  } = props;

  return (
    <Link {...linkProps} className={finalClassName || null}>
      {content}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
  href: propTypes.string.isRequired,
  as: propTypes.string,
};
export default ActiveLink;
