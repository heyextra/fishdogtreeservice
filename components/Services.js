import styles from "./Services.module.css";
import { JetBrains_Mono } from "next/font/google";



const jetBrains = JetBrains_Mono({weight:'400', subsets: ['latin']})

export default function Services() {
  return (
    <>
      <section className="services-section">
        <div className="services-section-title">
        <div className="img">
          <h1 className={jetBrains.className}>Our Arborist Services</h1>
        </div>
        </div>
          <ul className="service-list">
            <li className="service-list-item">
              <h3 className={jetBrains.className}>Tree Pruning and Trimming</h3>
              Regular pruning and trimming not only enhance the aesthetics of
              your trees but also promote their overall health. Our arborists
              use the latest techniques to ensure your trees receive the care
              they deserve.
            </li>
            <li className="service-list-item">
            <h3 className={jetBrains.className}>Tree Removal</h3>
              Sometimes, tree removal is necessary for safety or aesthetic
              reasons. We have the equipment and expertise to safely remove
              trees of all sizes while minimizing disruption to your property.
            </li>
            <li className="service-list-item">
            <h3 className={jetBrains.className}>Tree Health Assessments</h3>
              Our arborists can diagnose and treat a wide range of tree diseases
              and pests. We'll work to restore your trees to their optimal
              health.
            </li>
            <li className="service-list-item">
            <h3 className={jetBrains.className}>Emergency Tree Services</h3>
              Storm damage can strike at any time. Our emergency tree services
              are available 24/7 to address fallen or damaged trees promptly.
            </li>
            <li className="service-list-item">
            <h3 className={jetBrains.className}>Stump Grinding</h3>
              Don't let unsightly tree stumps detract from your property's
              beauty. We offer efficient stump grinding services to eliminate
              stumps and improve your landscape.
            </li>
            <li className="service-list-item">
            <h3 className={jetBrains.className}>Tree Planting and Transplanting</h3>
              Enhance your property with the beauty of new trees or relocate
              existing ones. We'll help you choose the right species and ensure
              they are planted or transplanted correctly.
            </li>
            <li className="service-list-item">
            <h3 className={jetBrains.className}>Tree Consultations</h3>
              If you have questions about your trees or need advice on tree
              care, our arborists are here to provide expert guidance and
              recommendations.
            </li>
          </ul>
      </section>
    </>
  );
}
