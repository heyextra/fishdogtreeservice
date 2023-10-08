import styles from './Services.module.css'

export default function Services() {
  return (
    <>
<h1>Our Arborist Services</h1>
<ul className={styles.services}>
        <li className="service-item">
            <h3>Tree Pruning and Trimming</h3>
            Regular pruning and trimming not only enhance the aesthetics of your trees but also promote their overall health. Our arborists use the latest techniques to ensure your trees receive the care they deserve.
        </li>
        <li className="service-item">
            <h3>Tree Removal</h3>
            Sometimes, tree removal is necessary for safety or aesthetic reasons. We have the equipment and expertise to safely remove trees of all sizes while minimizing disruption to your property.
        </li>
        <li className="service-item">
            <h3>Tree Health Assessments</h3>
            Our arborists can diagnose and treat a wide range of tree diseases and pests. We'll work to restore your trees to their optimal health.
        </li>
        <li className="service-item">
            <h3>Emergency Tree Services</h3>
            Storm damage can strike at any time. Our emergency tree services are available 24/7 to address fallen or damaged trees promptly.
        </li>
        <li className="service-item">
            <h3>Stump Grinding</h3>
            Don't let unsightly tree stumps detract from your property's beauty. We offer efficient stump grinding services to eliminate stumps and improve your landscape.
        </li>
        <li className="service-item">
            <h3>Tree Planting and Transplanting</h3>
            Enhance your property with the beauty of new trees or relocate existing ones. We'll help you choose the right species and ensure they are planted or transplanted correctly.
        </li>
        <li className="service-item">
            <h3>Tree Consultations</h3>
            If you have questions about your trees or need advice on tree care, our arborists are here to provide expert guidance and recommendations.
        </li>
</ul>
    </>
  );
}


