import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageTransition from "./components/PageTransition";
import ScrollVelocity from "./components/ScrollVelocity";
import TiltedCard from "./components/TiltedCard";
import Footer from "./components/Footer";
import img from "./assets/img.png"
function App() {
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
          <div className="md:flex md:justify-between max-w-6xl  md:px-6 mt-14">
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
