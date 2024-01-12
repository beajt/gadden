import Link from "next/link";

function CopyRightFooter() {
  return (
    <>
      <p>Copy© 2023 Gadden. All Rights Reserved.</p>
      <ul>
        <li>
          <Link href="/">Setting & Privacy</Link>
        </li>
        <li>
          <Link href="/">Faqs</Link>
        </li>
        <li>
          <Link href="/">Food Menu</Link>
        </li>
      </ul>
    </>
  );
}

export default CopyRightFooter;
