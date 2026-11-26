import { ArrowDown, ArrowRight, Leaf, Menu, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const products = [
  { size: "250ml", price: "₦3,500", note: "A little everyday goodness" },
  { size: "350ml", price: "₦5,000", note: "Just right for your kitchen" },
  { size: "500ml", price: "₦7,500", note: "A family favourite size" },
  { size: "1 litre", price: "₦15,000", note: "For homes that love honey" }
];
const wa = "https://wa.me/2349079790073?text=Hello%20Amber%20Honey!%20I%20would%20like%20to%20make%20an%20order.%20Please%20send%20me%20more%20details%20about%20your%20available%20products.";

function HoneyJar({ large = false }: { large?: boolean }) {
  return <div className={large ? "jar jar-large" : "jar"} aria-label="Illustration of a jar of golden honey">
    <div className="jar-lid" /><div className="jar-neck" /><div className="jar-body">
      <div className="honey-glow" /><div className="jar-label">
        <span className="label-bee">✳</span><span className="label-brand">AMBER</span><span className="label-honey">HONEY</span>
        <span className="label-line" /><span className="label-tag">PURELY YOURS</span>
      </div>
    </div>
    <span className="jar-shadow" />
  </div>;
}

export default function Home() {
  return <main>
    <div className="announcement">A little golden goodness, delivered with care <span>✳</span></div>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Amber Honey home"><span className="brand-mark">✳</span><span>AMBER <b>HONEY</b><small>BY AMBER HARVEST VENTURES</small></span></a>
      <nav><a href="/about">Our story</a><a href="/products">Our honey</a><a href="/quality">Our approach</a><a href="/journal">Journal</a><a href="/wholesale">Wholesale</a></nav>
      <a className="header-cta" href={wa} target="_blank" rel="noreferrer">Order on WhatsApp <ArrowRight size={15}/></a>
      <a className="mobile-menu" href="#products" aria-label="Browse products"><Menu /></a>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span /> A GOLDEN KIND OF GOODNESS</div>
        <h1>Nature’s goodness.<br/><em>Purely yours.</em></h1>
        <p>Make room for a little golden goodness. Discover Amber Honey — thoughtfully brought to your table by Amber Harvest Ventures.</p>
        <div className="hero-actions"><a className="button button-dark" href="#products">Explore our honey <ArrowRight size={17}/></a><a className="text-link" href="#story">Get to know us <ArrowDown size={15}/></a></div>
        <div className="hero-note"><span className="note-icon"><Leaf size={17}/></span><span><b>From our hands to your home</b><small>Carefully sourced. Thoughtfully presented.</small></span></div>
      </div>
      <div className="hero-art">
        <div className="sun-disc" /><div className="art-leaf art-leaf-one">✦</div><div className="art-leaf art-leaf-two">✧</div>
        <div className="art-caption">THE GOLDEN<br/>GOODNESS</div><HoneyJar large/><div className="art-stamp"><span>✳</span> AMBER<br/>HARVEST</div>
      </div>
      <div className="hero-bottom"><span>01 / MADE FOR EVERYDAY MOMENTS</span><span>SCROLL TO DISCOVER ↓</span></div>
    </section>

    <section className="intro" id="story">
      <div className="intro-kicker">A BRAND ROOTED IN NATURE</div>
      <div><h2>Good things grow<br/>when <em>care comes first.</em></h2><p>Amber Honey is a honey brand from Amber Harvest Ventures. We work with beekeepers to source raw honey, then process and package it with care — bringing a naturally golden favourite closer to you.</p><a className="under-link" href="#quality">A little more about our approach <ArrowRight size={15}/></a></div>
      <div className="intro-flower">✳</div>
    </section>

    <section className="products-section" id="products">
      <div className="section-heading"><div><div className="eyebrow"><span/> FIND YOUR PERFECT POUR</div><h2>Golden goodness<br/><em>for every day.</em></h2></div><p>Choose the size that suits your table. Have a question or ready to order? We’re just a WhatsApp message away.</p></div>
      <div className="product-grid">{products.map((p, i) => <article className="product-card" key={p.size}>
        <div className={"product-visual visual-"+i}><span className="product-number">0{i+1}</span><HoneyJar/></div>
        <div className="product-info"><div><h3>{p.size}</h3><p>{p.note}</p></div><strong>{p.price}</strong></div>
        <a className="product-order" href={wa} target="_blank" rel="noreferrer">Enquire / order <ArrowRight size={15}/></a>
      </article>)}</div>
      <p className="price-note">Prices shown in Nigerian naira (₦). Please confirm availability and delivery details with our team.</p>
    </section>

    <section className="quality-section" id="quality">
      <div className="quality-art"><div className="quality-circle"><span>✳</span><b>THE AMBER<br/>PROMISE</b><small>CARE IN EVERY DETAIL</small></div><div className="quality-leaf">❧</div></div>
      <div className="quality-copy"><div className="eyebrow"><span/> OUR APPROACH</div><h2>Thoughtful from<br/><em>source to shelf.</em></h2><p>We believe good honey deserves careful handling at every step. Our work begins with beekeeper relationships and continues through processing and packaging.</p><div className="quality-points"><div><Leaf/><span><b>Beekeeper relationships</b><small>We source from honey producers.</small></span></div><div><Sparkles/><span><b>Careful presentation</b><small>Prepared and packaged by our team.</small></span></div><div><ShieldCheck/><span><b>Growing responsibly</b><small>We are working through the applicable product registration process.</small></span></div></div></div>
    </section>

    <section className="wholesale" id="wholesale"><div><div className="eyebrow"><span/> LET’S GROW TOGETHER</div><h2>Good business<br/>starts with <em>good things.</em></h2><p>Are you a retailer, wholesaler, distributor or corporate buyer? Tell us what you have in mind and let’s start a conversation.</p><a className="button button-light" href="https://wa.me/2349079790073?text=Hello%20Amber%20Honey%2C%20I%20would%20like%20to%20discuss%20a%20wholesale%20or%20corporate%20enquiry." target="_blank" rel="noreferrer">Discuss a partnership <ArrowRight size={17}/></a></div><div className="wholesale-orbit"><div className="orbit-ring"/><div className="orbit-center">✳</div><span className="orbit-word orbit-one">RETAIL</span><span className="orbit-word orbit-two">WHOLESALE</span><span className="orbit-word orbit-three">CORPORATE</span></div></section>

    <section className="contact" id="contact"><div><div className="eyebrow"><span/> WE’D LOVE TO HEAR FROM YOU</div><h2>Let’s make it<br/><em>a little sweeter.</em></h2><p>Questions, orders or partnership ideas — our team is happy to hear from you.</p></div><a className="contact-card" href={wa} target="_blank" rel="noreferrer"><span className="whatsapp-icon"><MessageCircle/></span><span><small>CHAT WITH AMBER HONEY</small><b>+234 907 979 0073</b><small>Tap to start a WhatsApp conversation</small></span><ArrowRight/></a></section>
    <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">✳</span><span>AMBER <b>HONEY</b><small>BY AMBER HARVEST VENTURES</small></span></a><span>Nature’s Goodness. Purely Yours.</span><span>© {new Date().getFullYear()} Amber Harvest Ventures</span></footer>
    <a className="floating-wa" href={wa} target="_blank" rel="noreferrer" aria-label="Chat with Amber Honey on WhatsApp"><MessageCircle/></a>
  </main>;
}