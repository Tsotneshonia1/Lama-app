import Link from "next/link";
import React from "react";

function NotFound() {
  return <div>
    <h2>NotFound</h2>
    <p>Sorry, the oage you are looking for does not exist.</p>
    <Link href="/">Return Home</Link>
  </div>;
}

export default NotFound;
