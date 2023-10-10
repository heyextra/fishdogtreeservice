import { useState } from "react";
import styles from "./FeedbackForm.module.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

export default function Welcome() {
  const [zipcode, setZipcode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    try {
      setLoading(true);

      // Make a request to the Netlify function using fetch.
      const response = await fetch(`/api/zipcode?zipcode=${zipcode}`);
      const data = await response.json();

      if (response.ok) {
        setResult(
          data.result
            ? `We serve the ${zipcode} area`
            : `${zipcode} is out of our zone.`
        );
      } else {
        setResult("Error: " + data.error);
      }
    } catch (error) {
      setResult("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-section-title">
          <div className="hero-img">
            <h1 className="hero-title">Something urgent?</h1>
            <p>Give us a call now!</p>
          </div>
        </div>

        <div className="splash-banner">
          <div className="splash-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="zipcode">Enter your zip code below.</label>
              <input
                id="zipcode"
                className={styles["form-field"]}
                type="text"
                name="name"
                placeholder={"90210"}
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
              <button
                type="submit"
                className={styles["button"]}
                disabled={loading}
              >
                Enter
              </button>
            </form>
            <div>{loading ? "Loading..." : result}</div>
          </div>
         <h2>Check to see if we serve your zip code!</h2>
        </div>
      </section>

      <section className="about">
      <div className="about-description">
            <h1 className={jetBrains.className}>
              Your Trusted Tree Care Experts in the Philadelphia Area!
            </h1>
            <p>
              At Fishdog Tree Service, we are passionate about trees and
              committed to their health and well-being. With years of experience
              in the arboriculture industry, our team of certified arborists is
              here to provide you with a comprehensive range of tree care
              services. Whether you're a homeowner, business owner, or
              municipality, we have the expertise and dedication to keep your
              trees thriving.
            </p>
          </div>
        <ul className="about-list">
          <li className="about-list-item">
            <h3 className={jetBrains.className}>Certified Arborists</h3> Our
            team consists of certified arborists who are passionate about tree
            care and continually stay updated on industry best practices.
          </li>
          <li className="about-list-item">
            <h3 className={jetBrains.className}>Safety First</h3> We prioritize
            safety in all our tree care services, using the latest safety
            equipment and techniques to protect your property and our team.
          </li>
          <li className="about-list-item">
            <h3 className={jetBrains.className}>Environmentally Friendly</h3> We
            are committed to eco-friendly practices and tree preservation,
            minimizing our impact on the environment.
          </li>
          <li className="about-list-item">
            <h3 className={jetBrains.className}>Customer Satisfaction</h3> Your
            satisfaction is our top priority. We strive for excellence in every
            service we provide and offer competitive pricing.
          </li>
        </ul>
      </section>
    </>
  );
}
