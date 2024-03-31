import Layout from "../Components/Layout/Layout";

import "./css/about.css";

export default function Contact() {
  return (
    <Layout  title="About-Ecommerce">
      <div className="continerabout ">
        <div className="about-space">
          <img className="img-about"
          
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
          />
        </div>
      
        <div className="about-space mobile-about" >
         <h1>About </h1>
          <p>
            Our e-commerce venture, established with a passion for delivering
            exceptional products and services, was founded in [year]. Since
            then, we been dedicated to providing our customers with top-quality
            products and an unparalleled shopping experience. Our journey began
            with a vision to redefine online shopping, driven by a commitment to
            innovation, customer satisfaction, and ethical business practices.
            At [Company Name], we believe in transparency, integrity, and
            fostering meaningful connections with our customers. With a diverse
            team of experts at the helm, we continually pushing boundaries to
            bring you the latest trends and finest selections in
            [industry/sector]. We take pride in our carefully curated collection
            of products, each handpicked for its quality, craftsmanship, and
            value. Our unwavering dedication to excellence has earned us the
            trust and loyalty of customers worldwide. As we continue to grow and
            evolve, our mission remains unchanged: to inspire confidence and
            delight our customers at every turn. Thank you for choosing [Company
            Name] – your trusted partner in [industry/sector].
          </p>
        </div>
      </div>
    </Layout>
  );
}
