import React from "react";
import Link from "next/link";

function Links() {
  const links = [
    {
      title: "Homepage",
      url: "/",
    },

    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },

    {
      title: "Blog",
      url: "/blog",
    },
  ];

  return;
  <div>
    {links.map((link) => (
      <Link href={link.url}>{link.title}</Link>
    ))}
  </div>;
}

export default Links;
