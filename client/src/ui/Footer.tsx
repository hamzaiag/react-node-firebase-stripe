import Container from "./Container";
import { payment } from "../assets";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>@2024 E-commerce solutions. All rights reserved.</p>
        <img src={payment} alt="payment" className="object-cover" />
      </Container>
    </div>
  );
};

export default Footer;
