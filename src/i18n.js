import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    resources:{
        en:{
            translation:{
                navbar_bathrooms: "BATHROOM RENOVATION",
                navbar_total_reno: "TOTAL RENOVATION",
                navbar_quote: "Quote",
                quote_start:"START DESIGNING",
                quote_name: "Your name",
                quote_surname: "Your surname",
                quote_email: "Your email address",
                quote_tel: "Your phone number",
                quote_message: "Message",
                quote_submit: "SUBMIT",
                discover_more: "Discover More",
                info_01: "UNIQUE DESIGNS",
                start_design_button: "start designing",
                prod_cat_bathroom: "BATHROOM RENOVATION",
                prod_cat_total: "Total Renovation",
                info_02_top:{
                    1: "Each project is a work of art.",
                    2: "We believe in high quality at an honest price.",
                    3: "Having worked all over the world, we now supervise bathroom renovations throughout the Netherlands and Flanders."
                },
                info_02_bottom:{
                    1: "Alexander Paul was born out of a passion for designing and building unique bathrooms.",
                    2: "Our goal is to take building to the next level, viewing each project as a new work of art that we help our clients design and build.",
                    3: "We work as much as possible with natural materials to create a relaxed and luxurious atmosphere."
                },
                newsletter_join:"JOIN OUR NEWSLETTER",
                newsletter_email:"E-mail address",
                footer_company:"Company",
                footer_home:"Home",
                footer_projects:"Projects",
                footer_blog:"Blog",
                footer_contact:"Contact",
                footer_website: "Website by",
                building_heading: "WHEN BUILDING BECOMES ART",
                process_heading: "OUR PROCESS",
                process_estimate_heading: "ESTIMATE",
                process_estimate_info: "In no time, we will estimate your required renovation budget with the labor and material costs!",
                process_dimensions_heading: "VISITS AND MEASUREMENTS",
                process_dimensions_info: "We will come to your home and measure everything precisely.",
                process_quote_heading: "QUOTE",
                process_quote_info: "We work hard to make a fair offer.",
                process_designs_heading: "DESIGNS",
                process_designs_info: "We meticulously design a beautiful and unique space for you based on your needs and wishes.",
                process_renovation_heading: "THE RENOVATION",
                process_renovation_info: "We bring our great team to renovate your old space into a new masterpiece.",
                process_enjoy_heading: "ENJOY YOUR NEW BATHROOM",
                process_enjoy_info: "Light the candles and enjoy your new bathroom.",
            }
        },
        nl:{
            translation:{
                navbar_bathrooms: "BADKAMER RENOVATIE",
                navbar_total_reno: "TOTALE RENOVATIE",
                navbar_quote: "Citeren",
                quote_name: "Uw naam",
                quote_surname: "Uw Achternaam",
                quote_email: "Uw e-mailadres",
                quote_tel: "Uw telefoon nummer",
                quote_message: "Boodschap",
                quote_start: "BEGIN MET ONTWERPEN",
                discover_more: "Ontdek Meer",
                info_01: "UNIEKE ONTWERPEN",
                services_button: "begin met ontwerpen",
                prod_cat_bathroom: "BADKAMER RENOVATIE",
                prod_cat_total: "TOTALE RENOVATIE",
                info_02_top:{
                    1: "Elk project is een kunstwerk.",
                    2: "We geloven in hoge kwaliteit tegen een eerlijke prijs.",
                    3: "Na over de hele wereld gewerkt te hebben, begeleiden we nu badkamerrenovaties door heel Nederland en Vlaanderen."
                },
                info_02_bottom:{
                    1: "Alexander Paul is ontstaan vanuit een passie voor het ontwerpen en bouwen van unieke badkamers.",
                    2: "Ons doel is om bouwen naar een hoger niveau te tillen, waarbij we elk project zien als een nieuw kunstwerk dat we onze klanten helpen ontwerpen en bouwen.",
                    3: "We werken zoveel mogelijk met natuurlijke materialen om een ontspannen en luxe sfeer te creëren."
                },
                newsletter_join:"SLUIT AAN BIJ ONZE NIEUWSBRIEF",
                newsletter_email:"E-mailadres",
                footer_company:"Bedrijf",
                footer_home:"Home",
                footer_projects:"Projecten",
                footer_blog:"Blog",
                footer_contact:"Contact",
                footer_website: "Website door",
                building_heading: "WHEN BUILDING BECOMES ART",
                process_heading: "ONS PROCES",
                process_estimate_heading: "Schatting",
                process_estimate_info: "In een mum van tijd schatten we uw benodigde renovatie budget in met de arbeids- en materiaalkosten!",
                process_dimensions_heading: "Bezoek en metingen",
                process_dimensions_info: "Wij komen bij u thuis om alles nauwkeurig op te meten.",
                process_quote_heading: "offerte",
                process_quote_info: "We werken er hard aan om een ​​eerlijke offerte te maken.",
                process_designs_heading: "Ontwerpen",
                process_designs_info: "We ontwerpen minutieus een mooie en unieke ruimte voor u op basis van uw behoeften en wensen.",
                process_renovation_heading: "de renovatie",
                process_renovation_info: "We brengen ons geweldige team om uw oude ruimte te renoveren tot een nieuw meesterwerk.",
                process_enjoy_heading: "Veel plezier met uw nieuwe badkamer",
                process_enjoy_info: "Steek de kaarsen aan en geniet van uw nieuwe badkamer.",
            }
        }
    }
})

export default i18n;