import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageTransition from "./components/PageTransition";
import ScrollVelocity from "./components/ScrollVelocity";
import TiltedCard from "./components/TiltedCard";
import Footer from "./components/Footer";
import img from "./assets/img.png";
import our1 from "./assets/our1.svg";
import our2 from "./assets/our2.svg";
import our3 from "./assets/our3.svg";
import Card from "./components/Card.jsx";

function App() {
  const homeCard = [
    {
      heading: "Product Development",
      image: our1,
      paragraph:
        "Transform your innovative ideas into fully realized software solutions. Our end-to-end product development approach combines technical excellence with creative problem-solving, delivering custom solutions precisely tailored to your unique business requirements",
      route: "/services/product-development",
    },
    {
      heading: "Third-Party Integrations",
      image: our2,
      paragraph:
        " Break down software silos and create a unified, powerful technological ecosystem. Our integration services enable seamless connectivity between diverse systems, leveraging advanced API development and library integration to enhance your operational capabilities",
      route: "/services/third-party-integration",
    },
    {
      heading: " Database Administration",
      image: our3,
      paragraph:
        "Take the complexity out of database management with our Virtual DBA expertise. We provide comprehensive, round-the-clock management of your critical database infrastructure, ensuring optimal performance, robust security, and seamless operational continuity",
      route: "/services/database-administration",
    },
  ];
  return (
    <>
      <div className="bg-linear-to-br from-blue-50 to-indigo-100 ">
        <PageTransition className="bg-linear-to-br from-blue-50 to-indigo-100 ">
          <div className="min-h-screen">
            <Navbar />
            <Hero />
          </div>
        </PageTransition>
        <div className="mt-10">
          <ScrollVelocity
            texts={[
              "Expelee Web3 Solution Productivity Hacks",
              "Trending : AI Tools Career Growth App Integration",
            ]}
            className="custom-scroll-text"
          />
        </div>

        <center className="bg-linear-to-br from-blue-50 to-indigo-100 ">
          <div className="md:flex md:justify-between max-w-6xl md:px-6 mt-14">
            {homeCard.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                heading={card.heading}
                paragraph={card.paragraph}
                showButton={true}
                onButtonClick={() => {
                  GoToTop(); // Scroll to top
                  navigate(card.route); // Navigate to the route
                }}
              />
            ))}
          </div>
        </center>
        <center className="bg-linear-to-br from-blue-50 to-indigo-100  ">
          <div className="mt-14 hidden lg:flex w-full lg:justify-between lg:px-2 lg:max-w-5xl">
            <TiltedCard
              imageSrc={img}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Expelee"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text pl-4">
                  Website Development
                </p>
              }
            />
            <TiltedCard
              imageSrc={img}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Expelee"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text md:pl-4">
                  Apps Integration
                </p>
              }
            />
            <TiltedCard
              imageSrc={img}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Expelee"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text pl-4">Web3 Solution</p>
              }
            />
          </div>
        </center>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
