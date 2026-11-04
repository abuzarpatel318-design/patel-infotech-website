
import { useMemo, useState } from 'react'
import {
  Search, Menu, X, Cable, BookOpen, ArrowUpRight, MapPin, Phone,
  Languages, Cpu, HardDrive, Monitor, MemoryStick, ChevronRight
} from 'lucide-react'

type CableInfo = {
  id: string
  name: string
  hindi: string
  image: string
  intro: string
  introHi: string
  uses: string[]
  usesHi: string[]
  features: string[]
  featuresHi: string[]
  note?: string
}

const cables: CableInfo[] = [
  {
    id: 'laptop-power',
    name: 'Laptop Power Cord',
    hindi: 'लैपटॉप पावर कॉर्ड',
    image: 'https://megajaipur.com/uploads/products/laptop/laptop-adaptor/asus/asus-65w-box-19v-342a-with-3-type-pin/asus-65w-box-19v-342a-with-3-type-pin%20%285%29.webp',
    intro: 'The AC power cord connects a laptop power adapter to a wall socket and supplies mains electricity to the adapter.',
    introHi: 'AC पावर कॉर्ड लैपटॉप के चार्जर अडैप्टर को बिजली के सॉकेट से जोड़ती है। अडैप्टर इसके बाद लैपटॉप के लिए सही DC पावर देता है।',
    uses: [
      'Connects the charger adapter to a wall outlet.',
      'Carries AC mains power to the adapter.',
      'Commonly has a wall plug on one end and an adapter connector on the other.'
    ],
    usesHi: [
      'चार्जर अडैप्टर को बिजली के सॉकेट से जोड़ती है।',
      'अडैप्टर तक AC बिजली पहुँचाती है।',
      'एक तरफ दीवार का प्लग और दूसरी तरफ अडैप्टर के अनुसार कनेक्टर होता है।'
    ],
    features: [
      'Check plug type and adapter inlet before buying.',
      'Choose a cable with suitable current and voltage rating.',
      'Do not use a cable with cuts, loose pins or exposed wire.'
    ],
    featuresHi: [
      'प्लग और अडैप्टर के इनलेट का प्रकार मिलाएँ।',
      'सही करंट और वोल्टेज रेटिंग वाली केबल चुनें।',
      'कटी हुई या तार खुली हुई केबल इस्तेमाल न करें।'
    ]
  },
  {
    id: 'desktop-power',
    name: 'Desktop Power Cord',
    hindi: 'डेस्कटॉप पावर कॉर्ड',
    image: 'https://www.fedus.in/cdn/shop/products/desktopcable_a1736c6d-6b4a-4df6-95e7-377d6f657e08_470x.jpg?v=1675584880',
    intro: 'A desktop power cord connects a PC power supply (SMPS) or compatible monitor to an AC wall outlet.',
    introHi: 'डेस्कटॉप पावर कॉर्ड कंप्यूटर के SMPS या उपयुक्त मॉनिटर को AC बिजली के सॉकेट से जोड़ती है।',
    uses: [
      'Supplies mains power to a desktop PC power supply.',
      'Often uses an IEC C13 connector at the equipment end.',
      'Used with many desktop PCs, monitors and other equipment.'
    ],
    usesHi: [
      'डेस्कटॉप PC के SMPS तक बिजली पहुँचाती है।',
      'कई मॉडलों में उपकरण की तरफ IEC C13 कनेक्टर होता है।',
      'कई डेस्कटॉप कंप्यूटर और मॉनिटर में उपयोग होती है।'
    ],
    features: [
      'Confirm the connector shape before connecting.',
      'Check the cable current rating and product label.',
      'Never overload a socket or use damaged insulation.'
    ],
    featuresHi: [
      'लगाने से पहले कनेक्टर का आकार जाँचें।',
      'केबल की करंट रेटिंग और लेबल देखें।',
      'सॉकेट पर अधिक लोड न डालें और खराब इंसुलेशन वाली केबल न लगाएँ।'
    ]
  },
  {
    id: 'printer-cord',
    name: 'USB Printer Cable',
    hindi: 'USB प्रिंटर केबल',
    image: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/176/17613/17613648_2.jpeg',
    intro: 'A USB printer cable connects a computer to a compatible printer and transfers print data.',
    introHi: 'USB प्रिंटर केबल कंप्यूटर को प्रिंटर से जोड़ती है और प्रिंट डेटा भेजती है।',
    uses: [
      'Connects a computer to a compatible printer.',
      'Transfers print data between the computer and printer.',
      'Commonly uses USB-A and USB-B connectors.'
    ],
    usesHi: [
      'कंप्यूटर को प्रिंटर से जोड़ती है।',
      'कंप्यूटर से प्रिंटर तक प्रिंट डेटा भेजती है।',
      'आमतौर पर इसमें USB-A और USB-B कनेक्टर होते हैं।'
    ],
    features: [
      'Check the printer port before buying.',
      'USB-A connects to the computer and USB-B connects to the printer.',
      'Choose a suitable cable length and quality.'
    ],
    featuresHi: [
      'खरीदने से पहले प्रिंटर का पोर्ट जाँचें।',
      'USB-A कंप्यूटर में और USB-B प्रिंटर में लगता है।',
      'सही लंबाई और अच्छी गुणवत्ता वाली केबल चुनें।'
    ]
  },
  {
    id: 'usb-mf',
    name: 'USB Male to Female',
    hindi: 'USB मेल टू फीमेल केबल',
    image: 'https://i1.momoshop.com.tw/1692628385/goodsimg/0004/973/119/4973119_O_m.webp',
    intro: 'A USB male-to-female extension cable extends the reach of a compatible USB connection.',
    introHi: 'USB मेल-टू-फीमेल एक्सटेंशन केबल किसी संगत USB कनेक्शन की लंबाई बढ़ाने में मदद करती है।',
    uses: [
      'Extends a USB port for compatible devices.',
      'Can make it easier to connect a flash drive or USB accessory.',
      'Useful when the computer port is difficult to reach.'
    ],
    usesHi: [
      'USB पोर्ट की पहुँच बढ़ाती है।',
      'पेन ड्राइव या अन्य USB डिवाइस जोड़ने में सुविधा देती है।',
      'जब कंप्यूटर का पोर्ट दूर या मुश्किल जगह पर हो तब उपयोगी है।'
    ],
    features: [
      'Male connector plugs into the host; female port accepts a USB plug.',
      'USB version and cable quality affect speed and power.',
      'Long or low-quality extensions may cause connection issues.'
    ],
    featuresHi: [
      'मेल कनेक्टर कंप्यूटर/होस्ट में लगता है और फीमेल पोर्ट में USB प्लग लगता है।',
      'USB वर्जन और केबल की गुणवत्ता स्पीड व पावर पर असर डालते हैं।',
      'बहुत लंबी या कम गुणवत्ता वाली केबल से कनेक्शन की समस्या हो सकती है।'
    ]
  },
  {
    id: 'hdmi',
    name: 'HDMI Cord',
    hindi: 'HDMI केबल',
    image: 'https://images.pexels.com/photos/12997230/pexels-photo-12997230.jpeg',
    intro: 'HDMI carries digital video and audio through one cable between compatible devices.',
    introHi: 'HDMI केबल संगत डिवाइसों के बीच एक ही केबल से डिजिटल वीडियो और ऑडियो भेजती है।',
    uses: [
      'Connects a PC or laptop to a monitor, TV or projector.',
      'Carries video and supported audio together.',
      'Commonly used for presentations, movies and external displays.'
    ],
    usesHi: [
      'PC या लैपटॉप को मॉनिटर, TV या प्रोजेक्टर से जोड़ती है।',
      'वीडियो के साथ समर्थित ऑडियो भी भेजती है।',
      'प्रेजेंटेशन, मूवी और बाहरी डिस्प्ले के लिए उपयोग होती है।'
    ],
    features: [
      'HDMI versions and device support determine available resolution and refresh rate.',
      'Common connector is Standard HDMI Type-A.',
      'For best results, check both devices support the required display mode.'
    ],
    featuresHi: [
      'HDMI वर्जन और डिवाइस का सपोर्ट रिज़ॉल्यूशन व रिफ्रेश रेट तय करते हैं।',
      'आम कनेक्टर Standard HDMI Type-A है।',
      'ज़रूरी डिस्प्ले मोड के लिए दोनों डिवाइस का सपोर्ट जाँचें।'
    ]
  },
  {
    id: 'vga',
    name: 'VGA Cable',
    hindi: 'VGA केबल',
    image: 'https://i5.walmartimages.com/seo/Blue-15-Pin-SVGA-VGA-Adapter-Monitor-M-M-Male-To-Male-Cable-Cord-For-PC-TV-2-7M_ed3acca3-fd36-424b-a16e-50653dbb9ad4_1.8cd3f0f0108a2f280d72c0c7500d8454.jpeg',
    intro: 'The LS LAPSTER VGA cable is a 1.5 metre male-to-male cable with 15-pin connectors. It connects compatible computers to monitors, LCD or LED displays and projectors.',
    introHi: 'LS LAPSTER VGA केबल 1.5 मीटर लंबी Male-to-Male केबल है। इसमें 15-पिन कनेक्टर होते हैं और यह कंप्यूटर को VGA सपोर्ट वाले मॉनिटर, LCD, LED डिस्प्ले और प्रोजेक्टर से जोड़ती है।',
    uses: [
      'Connects a desktop PC to a compatible VGA monitor.',
      'Connects a computer to a projector with VGA input.',
      'Suitable for compatible LCD and LED displays with VGA ports.'
    ],
    usesHi: [
      'डेस्कटॉप कंप्यूटर को VGA मॉनिटर से जोड़ती है।',
      'कंप्यूटर को VGA इनपुट वाले प्रोजेक्टर से जोड़ती है।',
      'VGA पोर्ट वाले LCD और LED डिस्प्ले के लिए उपयोगी है।'
    ],
    features: [
      'LS LAPSTER model: LST-VGACBLE-1.5M.',
      'Cable length: 1.5 metres.',
      'Male-to-male VGA connectors with 15 pins at both ends.',
      'Both connected devices must have compatible VGA ports.'
    ],
    featuresHi: [
      'LS LAPSTER मॉडल: LST-VGACBLE-1.5M.',
      'केबल की लंबाई: 1.5 मीटर।',
      'दोनों सिरों पर 15-पिन Male VGA कनेक्टर होते हैं।',
      'दोनों डिवाइस में VGA पोर्ट होना चाहिए।'
    ]
  }
]

const futureParts = [
  { name: 'RAM', hi: 'रैम', icon: MemoryStick, desc: 'Temporary working memory for a computer.' },
  { name: 'SSD & HDD', hi: 'SSD और HDD', icon: HardDrive, desc: 'Storage devices for files and software.' },
  { name: 'Processor', hi: 'प्रोसेसर', icon: Cpu, desc: 'The main unit that executes instructions.' },
  { name: 'Motherboard', hi: 'मदरबोर्ड', icon: Monitor, desc: 'The main board connecting computer components.' },
]

function App() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<CableInfo | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const hi = language === 'hi'

  const filtered = useMemo(
    () => cables.filter(c =>
      `${c.name} ${c.hindi} ${c.intro}`.toLowerCase().includes(query.toLowerCase())
    ),
    [query]
  )

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="container strip-inner">
          <span>{hi ? 'कंप्यूटर पार्ट्स की जानकारी • आसान भाषा में' : 'Computer parts knowledge • explained simply'}</span>
          <span className="strip-contact"><Phone size={13}/> +91 96371 26666</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="PATEL INFOTECH home">
            <img src="/pi-logo.jpeg" alt="PATEL INFOTECH PI logo"/>
            <span>
              <strong>PATEL INFOTECH</strong>
              <small>{hi ? 'कंप्यूटर पार्ट्स गाइड' : 'COMPUTER PARTS GUIDE'}</small>
            </span>
          </a>

          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X/> : <Menu/>}
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <button onClick={() => scrollTo('home')}>{hi ? 'होम' : 'Home'}</button>
            <button onClick={() => scrollTo('cables')}>{hi ? 'केबल्स' : 'Cables'}</button>
            <button onClick={() => scrollTo('future')}>{hi ? 'अन्य पार्ट्स' : 'Other Parts'}</button>
            <button onClick={() => scrollTo('contact')}>{hi ? 'संपर्क' : 'Contact'}</button>
            <button className="language-btn" onClick={() => setLanguage(hi ? 'en' : 'hi')}>
              <Languages size={16}/>{hi ? 'English' : 'हिंदी'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot"/>
                {hi ? 'सीखें • समझें • सही पहचानें' : 'LEARN • UNDERSTAND • IDENTIFY'}
              </div>

              <h1>
                {hi
                  ? <>कंप्यूटर केबल्स को <em>आसानी से समझें।</em></>
                  : <>Understand computer cables. <em>One guide at a time.</em></>}
              </h1>

              <p>
                {hi
                  ? 'कंप्यूटर केबल के नाम, उपयोग, फीचर्स और कनेक्टर की जानकारी अब हिंदी और अंग्रेज़ी में।'
                  : 'Explore cable names, uses, features and connector basics in clear English and Hindi.'}
              </p>

              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollTo('cables')}>
                  {hi ? 'केबल्स देखें' : 'Explore Cables'} <ArrowUpRight size={18}/>
                </button>
                <button className="text-btn" onClick={() => scrollTo('contact')}>
                  {hi ? 'संपर्क करें' : 'Contact PATEL INFOTECH'} <ChevronRight size={17}/>
                </button>
              </div>

              <div className="hero-stats">
                <div><strong>06</strong><span>{hi ? 'केबल गाइड' : 'Cable guides'}</span></div>
                <div><strong>02</strong><span>{hi ? 'भाषाएँ' : 'Languages'}</span></div>
                <div><strong>100%</strong><span>{hi ? 'जानकारी के लिए' : 'For learning'}</span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-logo-card">
                <img src="/pi-logo.jpeg" alt="PATEL INFOTECH logo"/>
                <span>PI • COMPUTER KNOWLEDGE</span>
              </div>
              <div className="floating-tag tag-one"><Cable size={17}/> HDMI & USB</div>
              <div className="floating-tag tag-two"><BookOpen size={17}/> Learn in Hindi + English</div>
              <div className="hero-orbit orbit-one"/>
              <div className="hero-orbit orbit-two"/>
            </div>
          </div>
        </section>

        <section className="intro-band">
          <div className="container intro-inner">
            <div className="intro-icon"><BookOpen/></div>
            <div>
              <strong>{hi ? 'यह वेबसाइट किसलिए है?' : 'What is this website for?'}</strong>
              <p>
                {hi
                  ? 'यह एक जानकारी देने वाली वेबसाइट है। यहाँ कोई ऑनलाइन शॉपिंग, कार्ट या पेमेंट नहीं है।'
                  : 'This is an educational information website. No online shopping, cart or payment system.'}
              </p>
            </div>
            <span className="info-pill">{hi ? 'केवल जानकारी' : 'INFORMATION ONLY'}</span>
          </div>
        </section>

        <section className="section cables-section" id="cables">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-kicker">{hi ? 'मुख्य विषय' : 'MAIN TOPIC'}</div>
                <h2>{hi ? 'कंप्यूटर केबल्स' : 'Computer Cables'}</h2>
                <p>{hi ? 'हर केबल की पहचान, उपयोग और जरूरी बातें जानें।' : 'Know the identity, uses and important details of each cable.'}</p>
              </div>
              <div className="cable-count"><Cable size={18}/><span>06 {hi ? 'गाइड' : 'GUIDES'}</span></div>
            </div>

            <div className="search-box">
              <Search size={19}/>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={hi ? 'केबल का नाम खोजें...' : 'Search a cable by name...'}
              />
              <kbd>⌕</kbd>
            </div>

            <div className="cable-grid">
              {filtered.map((c, i) => (
                <article className="cable-card" key={c.id}>
                  <button className="card-image" onClick={() => setSelected(c)} aria-label={`Read about ${c.name}`}>
                    <img src={c.image} alt={`${c.name} product photo`} />
                    <span className="card-number">0{i + 1}</span>
                    <span className="image-open"><ArrowUpRight size={18}/></span>
                  </button>

                  <div className="card-content">
                    <div className="card-type">{hi ? 'कंप्यूटर केबल' : 'COMPUTER CABLE'}</div>
                    <h3>{hi ? c.hindi : c.name}</h3>
                    <p className="secondary-name">{hi ? c.name : c.hindi}</p>
                    <p className="card-desc">{hi ? c.introHi : c.intro}</p>
                    <button className="learn-link" onClick={() => setSelected(c)}>
                      {hi ? 'पूरी जानकारी पढ़ें' : 'Read full details'} <ArrowUpRight size={16}/>
                    </button>
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="no-results">
                  {hi ? 'कोई केबल नहीं मिली। दूसरा नाम खोजें।' : 'No cables found. Try another search.'}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="future-section" id="future">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-kicker">{hi ? 'आगे आने वाले विषय' : 'COMING NEXT'}</div>
                <h2>{hi ? 'अन्य कंप्यूटर पार्ट्स' : 'More Computer Parts'}</h2>
                <p>
                  {hi
                    ? 'इस वेबसाइट में आगे ये कंप्यूटर पार्ट्स भी जोड़े जा सकते हैं।'
                    : 'These computer parts can be added to the knowledge library next.'}
                </p>
              </div>
            </div>

            <div className="future-grid">
              {futureParts.map(part => {
                const Icon = part.icon
                return (
                  <div className="future-card" key={part.name}>
                    <div className="future-icon"><Icon size={23}/></div>
                    <div>
                      <h3>{hi ? part.hi : part.name}</h3>
                      <p>{part.desc}</p>
                      <span>{hi ? 'जल्द आ रहा है' : 'Coming soon'}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div className="contact-copy">
              <div className="section-kicker">{hi ? 'हमसे संपर्क करें' : 'GET IN TOUCH'}</div>
              <h2>PATEL INFOTECH</h2>
              <p>
                {hi
                  ? 'कंप्यूटर, लैपटॉप और केबल से जुड़ी जानकारी या सहायता के लिए संपर्क करें।'
                  : 'Contact us for computer, laptop and cable information or assistance.'}
              </p>
              <a className="contact-phone" href="tel:+919637126666">
                <Phone size={19}/> +91 96371 26666
              </a>
            </div>

            <div className="contact-address">
              <div className="address-icon"><MapPin/></div>
              <div>
                <strong>{hi ? 'हमारा पता' : 'Our Address'}</strong>
                <p>
                  Jawahar Nagar Police Station,<br/>
                  Garkheda Parisar, Chh. Sambhajinagar,<br/>
                  Aurangabad, Maharashtra – 431005
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jawahar+Nagar+Police+Station+Garkheda+Parisar+Chhatrapati+Sambhajinagar+Maharashtra+431005"
                  target="_blank"
                  rel="noreferrer"
                >
                  {hi ? 'मैप पर देखें' : 'View on map'} <ArrowUpRight size={15}/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/pi-logo.jpeg" alt="PI logo"/>
            <div>
              <strong>PATEL INFOTECH</strong>
              <small>{hi ? 'कंप्यूटर पार्ट्स की जानकारी' : 'Computer Parts Information'}</small>
            </div>
          </div>
          <span>© {new Date().getFullYear()} PATEL INFOTECH. {hi ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {hi ? 'ऊपर जाएँ ↑' : 'Back to top ↑'}
          </button>
        </div>
      </footer>

      {selected && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={e => {
            if (e.target === e.currentTarget) setSelected(null)
          }}
        >
          <section className="detail-modal" role="dialog" aria-modal="true" aria-label={selected.name}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <X/>
            </button>

            <img className="detail-image" src={selected.image} alt={`${selected.name} product photo`}/>

            <div className="detail-body">
              <div className="section-kicker">{hi ? 'केबल की पूरी जानकारी' : 'CABLE INFORMATION'}</div>
              <h2>{selected.name}</h2>
              <p className="detail-hindi">{selected.hindi}</p>
              <p className="detail-intro">{hi ? selected.introHi : selected.intro}</p>

              <div className="detail-columns">
                <div>
                  <h3>{hi ? 'उपयोग' : 'Common Uses'}</h3>
                  <ul>
                    {(hi ? selected.usesHi : selected.uses).map(x => <li key={x}>{x}</li>)}
                  </ul>
                </div>

                <div>
                  <h3>{hi ? 'फीचर्स और जरूरी बातें' : 'Features & Tips'}</h3>
                  <ul>
                    {(hi ? selected.featuresHi : selected.features).map(x => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>

              {selected.note && <div className="confirmation-note">{selected.note}</div>}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
