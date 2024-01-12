import Link from "next/link";

function Footer() {
  return (
    <footer>
      <p>
        Quis autem eum reprehenderit volutate velit quam molestiae conseuatur
      </p>
      <ul>
        {"Get In Touch"}
        <li>558 Main Street, 2nd Block Melbourne, Australia</li>
        <li>support@gmail.com</li>
        <li>+000 (123) 456 88</li>
      </ul>
      <ul>
        {"Quick Link"}
        <li>
          <Link href="/">About Company</Link>
        </li>
        <li>
          <Link href="/">Popular Services</Link>
        </li>
        <li>
          <Link href="/">Need a Career ?</Link>
        </li>
        <li>
          <Link href="/">Meet Our Team</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
