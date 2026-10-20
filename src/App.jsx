import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Bell, Clock, Gift, Mail, MapPin, Menu, Music, Phone, Ticket, Users, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// ---------------------------------------------------------------- Content (from bardchuckwagon.com, checked 2026-10-20)
const COMPANY = "Bar D Chuckwagon Suppers";
const ABBR = "bdc";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "(970) 247-5753";
const PHONE_HREF = "tel:+19702475753";
const EMAIL = "info@bardchuckwagon.com";
const GROUPS_EMAIL = "groups@bardchuckwagon.com";
const ADDRESS = "8080 County Road 250, Durango, CO 81301";
const ORIGINAL = "https://bardchuckwagon.com/";
const RESERVE = "https://reservations.bardchuckwagon.com/bard/res2020.php";
const GIFTCERT = "https://bardchuckwagon.com/giftcert";
const WRANGLERS = "https://www.thebardwranglers.com";
const YOUTUBE = "https://www.youtube.com/@BarDChuckwagonDurango/videos";
const FACEBOOK = "http://www.facebook.com/bardchuckwagon";
const FEEDBACK = "http://bardchuckwagon.polldaddy.com/s/bar-d-chuckwagon-feedback";
const EMPLOYMENT = "https://bardchuckwagon.com/employment";

const SITE = "https://bardchuckwagon.com";
const LOGO = `${SITE}/graphics/bar-d-logo.png`;
const PHOTO = {
  hero: `${SITE}/graphics/bar-d-chuckwagon.jpg`,
  crowd: `${SITE}/graphics/bar-d-chuckwagon-supper.jpg`,
  band: `${SITE}/headers/WrangersHero2025b.jpg`,
  stage: `${SITE}/headers/WranglersJune2025.jpg`,
  plate: `${SITE}/gallery/Plate.jpg`,
  serving: `${SITE}/pictures/serving.jpg`,
  central: `${SITE}/headers/Central.jpg`,
  chapel: `${SITE}/pictures/new-chapel.jpg`,
  hayride: `${SITE}/pictures/hayride.jpg`,
  gold: `${SITE}/pictures/gold-panning.jpg`,
  blacksmith: `${SITE}/pictures/blacksmith.jpg`,
  record: `${SITE}/pictures/record-booth.jpg`,
  roping: `${SITE}/pictures/roping.jpg`,
  chocolate: `${SITE}/pictures/chocolate-shop.jpg`,
  train: `${SITE}/pictures/sand-box-train.jpg`,
  leather: `${SITE}/pictures/leather-shop.jpg`,
  gallery: `${SITE}/pictures/art-gallery.jpg`,
};

const EVENING = [
  { time: "4:30", label: "Gates, shops & ticket booth open", text: "Ride the train, pan for gold, rope a steer and browse the shops before supper.", icon: Clock },
  { time: "6:00", label: "Steaks go on the grill", text: "Rib eye steaks must be paid in advance or ordered at the ticket booth by 6:00.", icon: Ticket },
  { time: "6:30", label: "Supper", text: "The dinner bell rings by 6:45, and the serving line moves as fast as you can walk it.", icon: Bell },
  { time: "After supper", label: "The Bar D Wranglers", text: "Old west cowboy songs, comedy and lively instrumentals on the stage.", icon: Music },
];

const TICKETS = [
  { name: "Regular", price: "$44", note: "Roast beef or chicken: choose in the serving line" },
  { name: "Combo", price: "$49", note: "Roast beef and chicken" },
  { name: "Steak", price: "$63", note: "Flame-broiled rib eye, paid in advance or by 6:00" },
  { name: "Child 5–10", price: "$21", note: "Beef or chicken" },
  { name: "4 & under", price: "Free", note: "Shares from a parent's plate" },
];

const BAND = [
  ["Matt Palmer", "Hot fiddle"],
  ["Jeff Johnson", "Lead vocals, rhythm guitar, banjo and fiddle"],
  ["Hayley Victor", "Vocalist and American Idol finalist"],
  ["Gary Cook", "Guitar, two-time National Flatpick Champion"],
  ["Joel Racheff", "Upright bass, and keeps the crowd laughing"],
];

const MENU = [
  ["Sliced roast beef or chicken breast", "Oven roasted, then slow simmered in barbecue sauce"],
  ["Rib eye steak", "Aged, hand cut from choice rib eye, flame broiled to medium"],
  ["Idaho baked potato", "A 6–8 oz russet"],
  ["Oven-baked beans", "Baked all day; vegetarian, no meat or animal products"],
  ["Buttermilk biscuits", "Baked just before serving, with butter and Honeyville wildflower honey from across the valley"],
  ["Chunky applesauce & spice cake", "Cake hand mixed and sliced just before serving"],
  ["Cowboy coffee or lemonade", "Lemonade made fresh daily from real lemon juice and cane sugar"],
];

const ACTIVITIES = [
  { img: PHOTO.train, name: "Bar D Train", text: "A short-line loop around the grounds" },
  { img: PHOTO.gold, name: "Gold panning", text: "Try your luck at the sluice" },
  { img: PHOTO.roping, name: "Roping", text: "Rope a steer dummy" },
  { img: PHOTO.hayride, name: "Wagon ride", text: "Pulled by a vintage tractor" },
  { img: PHOTO.blacksmith, name: "Blacksmith shop", text: "A working blacksmith, metal crafts, gemstones" },
  { img: PHOTO.chocolate, name: "Chocolate shop", text: "Local chocolate, craft beer and libations" },
  { img: PHOTO.record, name: "Record booth", text: "The Wranglers play requests" },
  { img: PHOTO.chapel, name: "Cowboy chapel", text: "Available for weddings" },
];

const MORE = ["Shooting gallery", "Leather shop", "Western art gallery", "Gift shop", "Horseshoes", "Playground & horse-go-round", "Boot Hill replica", "Hermit's Ruin trail"];

// ---------------------------------------------------------------- Motif
function Rope({ className = "" }) {
  // A twisted lariat, like the rope lettering in the Bar D logo.
  return (
    <svg className={`rope ${className}`} viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="twist" width="16" height="20" patternUnits="userSpaceOnUse">
          <rect width="16" height="20" className="r-base" />
          <path d="M-4 20 L12 0 M4 20 L20 0" className="r-line" />
        </pattern>
      </defs>
      <rect y="3" width="400" height="14" rx="7" fill="url(#twist)" />
    </svg>
  );
}

// ---------------------------------------------------------------- Components
function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["#evening", "The Evening"], ["#tickets", "Tickets"], ["#show", "The Show"], ["#supper", "Supper"], ["#activities", "Activities"], ["#groups", "Groups"], ["#visit", "Map"]];
  return (
    <header className={`site-header${solid || open ? " is-solid" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}><img src={LOGO} alt="Bar D Chuckwagon Suppers, Durango, CO" className="logo" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#tickets" onClick={() => setOpen(false)}>Reservations</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="bill">
          <p className="bill-top"><span>★</span> Durango, Colorado · Since 1969 <span>★</span></p>
          <h1>Old West Cowboy Music Show <em>&amp;</em> Chuckwagon Supper</h1>
          <p className="bill-sub">Durango's favorite family entertainment, served on a tin plate under the ponderosas.</p>
        </div>
        <div className="hero-stage">
          <img src={PHOTO.hero} alt="The Bar D Wranglers on stage before a full crowd under the pines" />
          <div className="tonight">
            <p className="tonight-head">Every night of the season</p>
            <ul>
              <li><strong>4:30</strong> Gates, shops &amp; tickets</li>
              <li><strong>6:30</strong> Chuckwagon supper</li>
              <li><strong>After</strong> The Bar D Wranglers</li>
            </ul>
            <a className="btn btn-red full" href="#tickets">Tickets &amp; prices <ArrowRight size={18} /></a>
            <a className="tonight-phone" href={PHONE_HREF}><Phone size={15} /> {PHONE}</a>
          </div>
        </div>
        <div className="season-strip">
          <span>Open Memorial Day weekend through September</span>
          <span>Rain or shine</span>
          <span>Reservations required</span>
        </div>
      </div>
    </section>
  );
}

function Evening() {
  return (
    <section className="evening" id="evening">
      <div className="wrap">
        <p className="eyebrow">How the evening goes</p>
        <h2>Come hungry. Come early.</h2>
        <ol className="timeline">
          {EVENING.map((e) => {
            const Icon = e.icon;
            return (
              <li key={e.time}>
                <span className="t-icon"><Icon size={20} /></span>
                <span className="t-time">{e.time}</span>
                <h3>{e.label}</h3>
                <p>{e.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <Rope className="rope-divider" />
    </section>
  );
}

function Tickets() {
  return (
    <section className="tickets" id="tickets">
      <div className="wrap">
        <div className="tickets-head">
          <div>
            <p className="eyebrow light">Tickets</p>
            <h2>One ticket. Supper, show and the whole ranch.</h2>
            <p>Every price includes the stage show and chuckwagon supper, sales tax, the activities and shops, parking, gratuities and ticketing fees.</p>
          </div>
          <div className="notice">
            <strong>2027 season</strong>
            <p>Online ticket sales for 2027 open in early 2027. Reservations are required, and tickets are filed under your name at the ticket booth.</p>
          </div>
        </div>
        <div className="stubs">
          {TICKETS.map((t) => (
            <div className="stub" key={t.name}>
              <span className="stub-name">{t.name}</span>
              <span className="stub-price">{t.price}</span>
              <span className="stub-note">{t.note}</span>
            </div>
          ))}
        </div>
        <div className="tickets-actions">
          <a className="btn btn-rope" href={RESERVE} target="_blank" rel="noopener noreferrer"><Ticket size={18} /> Reserve online</a>
          <a className="btn btn-line" href={PHONE_HREF}><Phone size={18} /> Call {PHONE}</a>
        </div>
        <ul className="fine-list">
          <li>Cancel up to 24 hours ahead. Call to change an existing reservation; reservations can't be made by email.</li>
          <li>Parties of 9 or fewer are seated from the stage back as tickets are picked up. Parties of 10+ are pre-assigned in booking order.</li>
          <li>Wheelchair seating and groups of 20+: please confirm by phone a day ahead.</li>
        </ul>
      </div>
    </section>
  );
}

function Show() {
  return (
    <section className="show" id="show">
      <div className="wrap show-grid">
        <div className="show-photo">
          <img src={PHOTO.band} alt="The Bar D Wranglers in western shirts with fiddle, guitars and upright bass" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">The show</p>
          <h2>The Bar D Wranglers</h2>
          <p className="show-lede">Fun old west music, tight harmony and a good laugh for the whole family. One of the longest-running live music shows in Durango.</p>
          <ul className="band">
            {BAND.map(([n, r]) => <li key={n}><strong>{n}</strong><span>{r}</span></li>)}
          </ul>
          <div className="show-links">
            <a href={WRANGLERS} target="_blank" rel="noopener noreferrer">Wranglers website <ArrowUpRight size={16} /></a>
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
      <figure className="wrap quote">
        <blockquote>"...It's all here, it's all authentic, and when it's mixed in with the outstanding musicianship, tight harmony, and hilarious hijinks of the Bar D Wranglers it makes for a night of fun you won't soon forget. Take it from somebody who has been there and can't wait to go back again, there's nothing like an evening at the Bar D."</blockquote>
        <figcaption>Charlie Daniels, Nashville <span>· as quoted on bardchuckwagon.com</span></figcaption>
      </figure>
    </section>
  );
}

function Supper() {
  return (
    <section className="supper" id="supper">
      <div className="wrap supper-grid">
        <div>
          <p className="eyebrow">The supper</p>
          <h2>A supper Cookie could only dream about.</h2>
          <p className="supper-lede">Our servers fill your tin plate as fast as you walk the line. Tell them beef or chicken once your ticket is marked; steak tickets go to the meat server.</p>
          <dl className="menu">
            {MENU.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <p className="fine">Our barbecue sauce is gluten and corn syrup free. <a href="https://bardchuckwagon.com/ingredients" target="_blank" rel="noopener noreferrer">Full ingredient list</a></p>
        </div>
        <div className="plate-wrap">
          <div className="plate"><img src={PHOTO.plate} alt="A tin plate with rib eye steak, baked beans, potato, biscuit, applesauce and spice cake" loading="lazy" /></div>
          <img className="serving" src={PHOTO.serving} alt="Servers dishing up supper in the serving line" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section className="activities" id="activities">
      <div className="wrap">
        <div className="act-head">
          <div>
            <p className="eyebrow">Before the show</p>
            <h2>A whole western town to explore.</h2>
          </div>
          <p>Gates open at 4:30, two hours before supper. Bring the kids and plenty of curiosity.</p>
        </div>
        <div className="act-grid">
          {ACTIVITIES.map((a) => (
            <figure className="act" key={a.name}>
              <img src={a.img} alt={a.name} loading="lazy" />
              <figcaption><strong>{a.name}</strong><span>{a.text}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="more"><span>Also:</span>{MORE.map((m) => <span className="chip" key={m}>{m}</span>)}</div>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section className="groups" id="groups">
      <div className="wrap groups-grid">
        <div className="group-card">
          <Users size={28} />
          <h2>Bringing a crowd?</h2>
          <dl>
            <div><dt>10–20 people</dt><dd>Book online or by phone. Credit card required.</dd></div>
            <div><dt>21+ or wheelchair seating</dt><dd>Confirm by phone at least a day before. Seats are pre-assigned in booking order; buses and vans get reserved parking.</dd></div>
            <div><dt>Bus tours with a contract</dt><dd>Contact Krystal at <a href={`mailto:${GROUPS_EMAIL}`}>{GROUPS_EMAIL}</a>.</dd></div>
          </dl>
          <a className="btn btn-red" href={`mailto:${GROUPS_EMAIL}?subject=Group%20reservation`}><Mail size={18} /> Email Krystal</a>
        </div>
        <div className="gift-card">
          <Gift size={28} />
          <h2>Give a night at the Bar D.</h2>
          <p>Gift certificates are good as cash at the ticket booth and in any of our shops, and they never expire. We mail them within 5 business days.</p>
          <a className="btn btn-rope" href={GIFTCERT} target="_blank" rel="noopener noreferrer">Buy a gift certificate <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <div>
          <p className="eyebrow">Find us</p>
          <h2>Saddle up and ride north of Durango.</h2>
          <p>The Bar D sits on the Dalton Cattle Ranch, north of town.</p>
          <dl className="details">
            <div><dt><MapPin size={16} /> Address</dt><dd>{ADDRESS}</dd></div>
            <div><dt><Phone size={16} /> Reservations</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
            <div><dt><Mail size={16} /> Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            <div><dt><Clock size={16} /> Season</dt><dd>Memorial Day weekend through September · gates 4:30, supper 6:30</dd></div>
          </dl>
          <a className="btn btn-red" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> Get directions</a>
        </div>
        <div className="map"><iframe title="Map to the Bar D Chuckwagon" src={`https://maps.google.com/maps?q=${encodeURIComponent("Bar D Chuckwagon, " + ADDRESS)}&z=12&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Rope className="rope-divider top" />
      <div className="wrap footer-row">
        <div className="footer-logo-plate"><img src={LOGO} alt="Bar D Chuckwagon Suppers" className="footer-logo" /></div>
        <div className="footer-links">
          <a href="#tickets">Tickets</a><a href="#show">The Show</a><a href="#supper">Supper</a><a href="#groups">Groups</a>
          <a href={GIFTCERT} target="_blank" rel="noopener noreferrer">Gift Certificates</a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={YOUTUBE} target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href={FEEDBACK} target="_blank" rel="noopener noreferrer">Customer Feedback</a>
          <a href={EMPLOYMENT} target="_blank" rel="noopener noreferrer">Summer Employment</a>
        </div>
        <a className="footer-phone" href={PHONE_HREF}><Phone size={16} /> {PHONE}</a>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Bar D Chuckwagon. Independent concept · not for official use. Current site: <a href={ORIGINAL}>bardchuckwagon.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Evening />
        <Tickets />
        <Show />
        <Supper />
        <Activities />
        <Groups />
        <Visit />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
