import Image from 'next/image';

const Footer = () => {

  return (
    <footer className="footer">
      <span className="logo">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
      </span>
      <small className="d-block">Copyright &copy; 2023</small>
    </footer>
  );
}

export default Footer;
