import React from "react";
import tw from "tailwind-styled-components";

// Styled Components
const NavbarContainer = tw.nav`
  flex items-center justify-between p-4 lg:px-16
`;

const Logo = tw.div`
  text-2xl font-bold text-orange-500 flex items-center gap-2
`;

const NavLinks = tw.ul`
  flex items-center gap-8 text-gray-800 font-medium
`;

const NavLink = tw.li`
  hover:text-blue-500 cursor-pointer transition text-[20px]
`;

const ContactButton = tw.button`
  bg-orange-500 text-white px-6 py-2 rounded-3xl hover:bg-orange-600 transition text-[20px] w-[173px] h-[53px]
`;

const Container = tw.div`
  flex flex-col lg:flex-row items-center lg:items-stretch p-8 lg:p-16 relative
`;

const LeftSection = tw.div`
  flex-1 text-center lg:text-left space-y-6 z-10
`;

const Heading = tw.h1`
  text-3xl lg:text-5xl font-bold text-gray-800
`;

const SubText = tw.p`
  text-gray-600 text-lg
`;

const Card = tw.div`
  bg-white shadow-lg p-6 rounded-lg
`;

const QuestionText = tw.p`
  text-gray-800 text-xl font-medium mb-4 text-center
`;

const ButtonContainer = tw.div`
  flex justify-center gap-4
`;

const Button = tw.button`
  px-6 py-2 rounded-3xl transition
  ${({ $variant }) =>
    $variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
`;

const InfoText = tw.p`
  text-gray-500 text-sm
`;

const RightSection = tw.div`
  flex-1 flex justify-center relative
`;

const QuoteSection = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${require("../../assets/_Layer_.jpg")})`, // Change to your desired background image path
        backgroundSize: "cover",
        width: "100%",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <NavbarContainer>
        <Logo>
          <img
            src={require("../../assets/Bitmaplogo.png")}
            alt="Logo"
            className="w-[180px] h-[80px]"
          />
        </Logo>
        <NavLinks>
          <NavLink>Services</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Blogs</NavLink>
          <NavLink>Case Studies</NavLink>
        </NavLinks>
        <ContactButton>Contact Us</ContactButton>
      </NavbarContainer>

      {/* Main Section */}
      <Container>
        {/* Left Section */}
        <LeftSection>
          <Heading>
            HOW MUCH <span className="">COULD YOU SAVE?</span>
          </Heading>
          <SubText>
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </SubText>
          <Card>
            <QuestionText>
              Is your turnover expected to be more than £85k?
            </QuestionText>
            <ButtonContainer>
              <Button $variant="primary">Yes</Button>
              <Button $variant="secondary">No</Button>
            </ButtonContainer>
          </Card>
          <InfoText>Takes less than 30 seconds</InfoText>
        </LeftSection>

        {/* Main Banner Image */}
        <RightSection>
          <img
            // src={require("../../assets/banner1.png")}
            // alt="Banner Illustration"
            className="z-10 max-w-full"
          />
        </RightSection>
      </Container>
    </div>
  );
};

export default QuoteSection;
