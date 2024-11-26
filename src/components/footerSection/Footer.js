import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { fetchFooterDetails } from "../../services";

// Styled Components
const FooterContainer = tw.footer`
  bg-[#E7F1F2] p-20 lg:px-16 h-[500px] flex flex-col 
`;

const FooterContent = tw.div`
  flex flex-col lg:flex-row justify-between items-center lg:items-start
`;

const LeftSection = tw.div`
  flex-1 text-center lg:text-left space-y-4
`;

const Logo = tw.img`
  text-2xl font-bold text-orange-500 flex items-center justify-center lg:justify-start gap-2
`;

const Tagline = tw.p`
  text-gray-600 text-lg font-bold mb-8
`;

const Email = tw.a`
  text-[#00D5F8] font-blue-200 hover:text-blue-600 mt-10
`;

const RightSection = tw.div`
  flex-1 flex justify-center justify-between lg:pl-8 text-center lg:text-left
`;

const Address = tw.div`
  text-sm text-gray-600 mt-5
`;

const ContactInfo = tw.div`
  text-sm text-gray-600 mt-5
`;

const FooterLinks = tw.div`
  mt-8 flex justify-center gap-6 text-gray-600 text-sm
`;

const FooterLink = tw.a`
  hover:text-blue-500 cursor-pointer transition
`;

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFooterDetails();
      setFooterData(data);
    };

    fetchData();
  }, []);

  if (!footerData) return <div>Loading...</div>; // Display loading while data is being fetched

  return (
    <FooterContainer>
      <FooterContent>
        {/* Left Section */}
        <LeftSection>
          <Tagline>
            Your reliable partner for all your accounting needs.
          </Tagline>
          <Email
            href={`mailto:${footerData.contact_mail}`}
            className="text-lg "
          >
            {footerData.contact_mail}
          </Email>
        </LeftSection>
        <div className=" w-[1px] h-[150px] bg-black mr-10"></div>
        {/* Right Section */}
        <RightSection>
          <div>
            <h4 className="font-semibold">Address</h4>
            <Address>{footerData.address}</Address>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ContactInfo>
              <a
                href={`tel:${footerData.contact_no}`}
                className="text-blue-500 text-black"
              >
                {footerData.contact_no}
              </a>
            </ContactInfo>
            <ContactInfo>
              <Email
                href={`mailto:${footerData.inquiry_mail}`}
                style={{ color: "black" }}
              >
                {footerData.inquiry_mail}
              </Email>
            </ContactInfo>
          </div>
        </RightSection>
      </FooterContent>

      <div className="flex flex-row justify-between mt-10 items-end">
        <Logo src={require("../../assets/Bitmaplogo.png")} alt="logo" />

        {/* Footer Links */}
        <FooterLinks>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/blog">Blogs</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
        </FooterLinks>

        {/* Footer Copyright */}
        <div className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
