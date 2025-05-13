

const Footer = () => {
  return (
    <footer className="footer bg-pink-400">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Pavoyaa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;