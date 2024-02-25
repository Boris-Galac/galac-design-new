// graficki dizajn galerija

const projects = [
  {
    id: "zosak",
    nameOfProject: "Zošak Consulting",
    projectDescription:
      "Ovdje Vam predstavljamo projekt ‘Zošak consulting’, odnosno firmu koja se bavi održavanjem, higijenom i consultingom vezanom za zdravstvene i sve ostale poslovne objekte.",
    typeOfProject: "Brand dizajn",
    images: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  },
  {
    id: "insta-kuhinja",
    nameOfProject: "Insta Kuhinja",
    projectDescription:
      "'InstaKuhinja' je logo instagram brenda koji se prvenstveno bavi pripremom i prezentacijom hrane i svakojakih delicija, a nalazi se i na vlastitoj web stranici koja je namijenjena predstavljanju delicija i svega vezanog uz hranu. Pogledajte cijeli brand na  https://www.instagram.com/insta_kuhinja/",
    typeOfProject: "Brand dizajn",
    images: ["12", "13", "14"],
  },
  {
    id: "optimus",
    nameOfProject: "Udruga 'OPTIMUS'",
    projectDescription:
      "„Optimus“ je udruga mladih iz Tovarnika čiji je cilj promicati druženje i socijalizaciju mladih, ali i omogućavanje svakog oblika suradnje između članova.",
    typeOfProject: "Logo dizajn",
    images: ["15", "16"],
  },
  {
    id: "hq-informatika",
    nameOfProject: "HQ Informatika",
    projectDescription:
      "HQ informatika je fiktivni web shop baziran samo na čistim front-end tehnologijama, bez usluge plaćanja, samo korisničko sučelje.",
    typeOfProject: "Brand dizajn",
    images: ["17", "18", "19", "20"],
  },
  {
    id: "ladno",
    nameOfProject: "'Ladno'",
    projectDescription:
      "Ovdje predstavljamo domaće craft pivo pod nazivom ' ‘Ladno ' , brend je fiktivan i slobodan za prodaju.",
    typeOfProject: "Brand dizajn",
    images: ["21", "22", "23", "24", "25", "26", "27"],
  },
];

// web solution metode

const webMethods = [
  {
    id: "custom-code",
    text: `Custom code rješenje je rješenje koje naš tim prihvaća jedino ukoliko to izričito kupac želi, što zbog potrebnog transparentnog koda na Github u i daljnje, moguće aplikativne nadogradnje, a što zbog određenih detalja koje primjerice neki page builderi ne mogu izvesti.`,
    img: "src/assets/images/custom-code-tab.svg",
  },
  {
    id: "wordpress",
    text: `WordPress je najpoznatija platforma za izradu web stranica i blogova. Omogućava korisnicima lako prilagodljiv izgled i funkcionalnost svojih web stranica. WordPress je jednostavan za upotrebu i podržava upravljanje sadržajem putem CMS-a, uključujući blogove, galerije i e-trgovinu. Sa velikom zajednicom i bogatim ekosistemom, WordPress je popularan izbor za razvoj web stranica svih vrsta, od osobnih blogova do korporativnih sajtova i online shopova.`,
    img: "src/assets/images/wp-tab.svg",
  },
  {
    id: "webflow",
    text: `Webflow je visokokvalitetna platforma za izradu web stranica koja kombinira jednostavan vizualni dizajn s naprednim mogućnostima kodiranja. Sa svojim vizualnim alatom, korisnici mogu brzo kreirati privlačne web stranice, bez potrebe za pisanjem koda. Takođe pruža funkcionalnosti kao što su CMS za upravljanje sadržajem, responsivni dizajn za prilagodbu na različite uređaje, interaktivne animacije i hosting. Webflow takođe omogućava prilagodljivost i kontrolu putem pristupa kodu za one sa više tehničkog iskustva. Svi ovi elementi čine Webflow popularnim izborom za razvoj web stranica.`,
    img: "src/assets/images/wf-tab.svg",
  },
];

// paketi/cijene

const paketi = [
  {
    id: "single",
    text: `<h3 class="paketi-modal-heading">Single page website</h3><p> je web stranica namijenjena obrtima koji žele predstaviti svoje poslovanje jasno, fokusirano i konkretno. Stranica je vrlo jednostavnijeg, prezentacijskog tipa, usmjerena na poslovanje, idealna za početak.</p>`,
  },
  {
    id: "medium",
    text: `<h3 class="paketi-modal-heading">Medium page website</h3><p> je web stranica namijenjena obrtima i ostalima koji žele predstaviti svoje poslovanje jasno, fokusirano i konkretno. Stranica je lijepog modernog tipa koji prati trendove, prezentacijskog tipa, usmjerena proizvod i poslovanje, idealna za poslovanje i klijente koji znaju što žele.</p>`,
  },
  {
    id: "premium",
    text: `<h3 class="paketi-modal-heading">Premium page website</h3><p> je web stranica namijenjena poduzećima i obrtima koji žele predstaviti svoje poslovanje prošireno, složenije. Stranica je lijepog, modernog i animacijskog tipa koji prati zadnje trendove, usmjerena proizvod i poslovanje, bez da se izostavi marketinški benefit stranice, idealna je za poslovanje i klijente koji znaju što žele.</p>`,
  },
  {
    id: "shop",
    text: `<h3 class="paketi-modal-heading">Web shop stranica</h3><p> fokusirala bi se na osnovne aspekte kao što su dizajniranje korisničkog sučelja, implementacija sigurnog sustava plaćanja, organizacija inventara, kategorije proizvoda/usluga, postavljanje sustava za upravljanje narudžbama i isporukom, te osnovnu optimizaciju za tražilice. Ova ponuda bi se koncentrirala na pružanje funkcionalnog i dobrog web shopa koji omogućuje korisnicima jednostavno pregledavanje i kupovinu proizvoda/usluga.</p> <br><br>
    <p class="info-web-shop ui-wrapper-1">
    Cjenovno " 899,00€ + " znači da je 899,00€ početna cijena s kojom krećemo u izradu web shopa, te da po dogovoru i potrebama kupca budžet može ići znatno više, sve ovisi o veličini webshopa.
    </p>
    `,
  },
];
