import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

export default function ContactHeader() {
  return (
    <div className="contact-heading">
      <h1 className={jetBrains.className}>
        302-867-5309 / 850 State St. Atlanta, GA
      </h1>
      <h1 className={jetBrains.className}>
        212-867-5309 / 350 Seigal St. Philadelphia, PA
      </h1>
    </div>
  );
}
