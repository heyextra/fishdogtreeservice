import styles from './FeedbackForm.module.css'

export default function Welcome() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-img">
          <div className="splash-banner">
            <h3>Enter your zip code below.</h3>
            <label htmlFor="zipcode">ZipCode</label>
        <input id="zipcode" className={styles['form-field']} type="text" name="name" />
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-description">
          <h1>Your Trusted Tree Care Experts in the Philadelphia Area!</h1>
          <p>
            At Fishdog Tree Service, we are passionate about trees and committed
            to their health and well-being. With years of experience in the
            arboriculture industry, our team of certified arborists is here to
            provide you with a comprehensive range of tree care services.
            Whether you're a homeowner, business owner, or municipality, we have
            the expertise and dedication to keep your trees thriving.
          </p>
        </div>
        <ul className="about-list">
          <li className="about-list-item">
            <h3>Certified Arborists</h3> Our team consists of certified
            arborists who are passionate about tree care and continually stay
            updated on industry best practices.
          </li>
          <li className="about-list-item">
            <h3>Safety First</h3> We prioritize safety in all our tree care
            services, using the latest safety equipment and techniques to
            protect your property and our team.
          </li>
          <li className="about-list-item">
            <h3>Environmentally Friendly</h3> We are committed to eco-friendly
            practices and tree preservation, minimizing our impact on the
            environment.
          </li>
          <li className="about-list-item">
            <h3>Customer Satisfaction</h3> Your satisfaction is our top
            priority. We strive for excellence in every service we provide and
            offer competitive pricing.
          </li>
        </ul>
      </section>
    </>
  );
}
