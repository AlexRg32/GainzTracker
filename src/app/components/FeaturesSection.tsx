import Tarjeta from "./Tarjeta";

const FeaturesSection = () => {
  //pecho, hombro, triceps, espalda, biceps, piernas
  return (
    <section id="features" className="p-10 bg-blue-900 md:pt-25">
  <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
    <Tarjeta 
      imageSrc="/pecho.webp"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      rotateAmplitude={20}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text"></p>
      }
    />
    <Tarjeta
       imageSrc="/pecho.webp"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      rotateAmplitude={20}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text"></p>
      }
    />
     <Tarjeta
       imageSrc="/pecho.webp"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      rotateAmplitude={20}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text"></p>
      }
    />
     <Tarjeta
       imageSrc="/pecho.webp"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      rotateAmplitude={20}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text"></p>
      }
    />
      <Tarjeta
       imageSrc="/pecho.webp"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      rotateAmplitude={20}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text"></p>
      }
    />
      <Tarjeta
       imageSrc="/pecho.webp"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      rotateAmplitude={20}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text"></p>
      }
    />
    
  </div>
</section>
  );
};
export default FeaturesSection;