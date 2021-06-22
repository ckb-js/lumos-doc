import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';


function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <header className="masthead">
	<div className="row">
       <div className="col">
        <h1>{siteConfig.title}</h1>

        <Link
          to={useBaseUrl("docs/introduction/about")}
          className="button button--primary button--outline button--lg"
        >
          Get Started
        </Link>
      </div>
	  <div className="col"><h1></h1><object type="image/svg+xml" data={useBaseUrl("img/lumos.svg")}><img src={useBaseUrl("img/lumos.svg")} /></object></div>
	</div>
    </header>
  );
}
       /* <h3>{siteConfig.tagline}</h3>*/
function Feature({ title, children, color = "primary" }) {
  const h2 = "text";
  return (
    <div className="col">
      <h2 className={"text--center text--" + color} style={{ color }}>
        {title}
      </h2>
      <p className="text--center">{children}</p>
    </div>
  );
}

function Body() {
  return (

    <main className="container">
	  
      <div className="row">

        <Feature title="Powerful">
          The <b>Lumos</b> framework with powerful modules saves you the hassle of creating code for CKB queries and transactions.
        </Feature>
        <Feature title="Easy Integration" color="#BA00AC">
         The functions, or more complicated sets and combinations of components make smart contracts integration on CKB much simpler.
        </Feature>
        <Feature title="Easy to Use" color="#00B100">
          The <b>Lumos</b> framework is open source, and can be used on Mac, Linux and windows machines.
        </Feature>
      </div>
	  
    </main>
  );
}
export default function Home() {
  return (
    <Layout>
	<Head>
</Head>
      <Hero />
      <Body />
	  
    </Layout>
  );
}
