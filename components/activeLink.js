import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    asPath === props.href || asPath === props.as
      ? childClassName
      : "activeNavLink";

  return (
    <Link legacyBehavior {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.PropTypes = {
  activeClassName: PropTypes.string.isRequired,
};
export default ActiveLink;
