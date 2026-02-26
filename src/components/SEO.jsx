import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image }) => {
  const siteTitle = "Stranum Energies";
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultDesc = "Stranum Energies is a performance-driven oil & gas company delivering reliable upstream participation and strong downstream execution.";
  const siteUrl = "https://stranumenergies.com";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || "energy, oil, gas, nigeria, downstream, upstream, logistics"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
