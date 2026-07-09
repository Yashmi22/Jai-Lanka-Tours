import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// 📷 1. Galle Market Images
import kiribath from '../assets/kiribath.jpg';
import kevili from '../assets/kevili.jpg';
import achcharu1 from '../assets/achcharu1.jpg';
import achcharu2 from '../assets/achcharu2.jpg';
import achcharu3 from '../assets/achcharu3.jpg';
import fruits1 from '../assets/fruits1.jpg';
import fruits2 from '../assets/fruits2.jpg';
import rotti from '../assets/rotti.jpg';
import mainoc from '../assets/mainoc.jpg';
import pittu from '../assets/pittu.jpg';
import hoppers from '../assets/hoppers.jpg';

// 📷 2. Temple Etiquette Images
import sthupa from '../assets/sthupa.jpg';
import sadakadapahana from '../assets/sadakadapahana.jpg';
import muurthi from '../assets/muurthi.jpg';

// 📷 3. Ella Train Images
import travel1 from '../assets/travel1.jpg';
import travel2 from '../assets/travel2.jpg';
import travel3 from '../assets/travel3.jpg';

// 📷 4. Ratnapura Sapphires Images
import gems1 from '../assets/gems11.jpg';
import gems2 from '../assets/gems2.jpg';

// 📷 5. Kandyan Dance Images
import udarata from '../assets/udarata.jpg';
import pahatharata from '../assets/pahatharata.jpg';
import sabaragamu from '../assets/sabaragmu.jpg'

// 📷 6. Ethical Elephants Images
import cheeta from '../assets/cheeta.jpg';
import bear from '../assets/bear.jpg';
import birds from '../assets/birds1.jpg';
import deer from '../assets/deer.jpg';

// 📷 7. Bawa Architecture Images
import river from '../assets/river.jpg';
import waterfalls from '../assets/waterfalls.jpg';
import flowers3 from '../assets/flowers33.jpg';

// 📷 8. Puppets Masks Images
import puppet1 from '../assets/puppet1.jpg';
import pappet from '../assets/pappet.jpg';

const BlogDetails = () => {
    const { id } = useParams();

    const blogContent = {
        "galle-market": {
            title: "A Culinary Expedition Through Galle: Spices, Rice, and Street Culture",
            readTime: "5 min read",
            category: "LOCAL FOOD",
            intro: "An immersive journey into the heartbeat of southern Sri Lanka's culinary traditions—where heritage recipes meet vibrant street food subcultures.",
            story: [
                {
                    type: "text",
                    title: "The Auspicious Heritage of Kiribath and Kevili",
                    paragraphs: [
                        "Kiribath, elegantly translated as milk rice, serves as the spiritual blueprint of Sri Lankan gastronomy. It is not merely food; it is an augury of goodwill, boiled meticulously with rich coconut milk until it reaches a velvety, dense consistency. For generations, the cutting of the diamond-shaped Kiribath blocks has signaled the birth of new beginnings, from dawn on the Sinhalese New Year to the foundational moments of building a new home.",
                        "No Kiribath platter is complete without the architectural marvels of traditional 'Kevili' (sweetmeats). The Konda Kevum, an oil-cake with a distinct central top-knot, requires immense patience and skill to fry using a single wooden skewer. Accompanying it is the ultra-crisp Kokis, a deep-fried rosette wheel influenced by Dutch colonial shapes but fiercely claimed by island locals through the heavy infusion of coconut milk and rice flour."
                    ]
                },
                {
                    type: "zigzag",
                    image: kiribath,
                    imageLeft: false,
                    title: "The Sacred Geometry of Feast Food",
                    text: "Kiribath arranged in its traditional layout, presenting a pristine cream-colored canvas that contrasts beautifully with the fiery reds of Lunu Miris (chili-onion relish)."
                },
                {
                    type: "zigzag",
                    image: kevili,
                    imageLeft: true,
                    title: "The Confectionery Craft of Kandy & South",
                    text: "Traditional Kevili sweetmeats laid out on a brass platter, showcasing the golden contours of Konda Kevum and crisp Kokis wheels."
                },
                {
                    type: "text",
                    title: "The Alchemical Balance of Sri Lankan Achcharu",
                    paragraphs: [
                        "True Sri Lankan Achcharu is an explosion of contrasting flavors—a spicy, sweet, and aggressively tangy pickle that anchors heavy rice meals. Rooted in the multi-ethnic culinary exchanges of historical sea traders, our local variant utilizes raw, un-ripened papayas, crisp green chilies, shallots, and baby carrots, all preserved in an intense liquor of ground mustard seeds, crushed black pepper, and pure coconut vinegar.",
                        "The secret to a remarkable Achcharu lies in its aging process and moisture elimination. Vegetables are meticulously sun-dried for hours before entering the clay pots, ensuring they retain a satisfying, audible crunch upon consumption."
                    ]
                },
                {
                    type: "zigzag",
                    image: achcharu1,
                    imageLeft: false,
                    title: "Curing in Clay: Spice Infusion",
                    text: "A deep dive into the pickling jars where raw tropical fruits absorb the ground mustard-vinegar paste, developing a distinct tangy glaze."
                },
                {
                    type: "zigzag",
                    image: achcharu2,
                    imageLeft: true,
                    title: "The Pungent Palette of Ceylon Condiments",
                    text: "Shallots and green chilies maturing inside the pickling matrix, releasing a sweet yet fiery aroma that complements any traditional rice feast."
                },
                {
                    type: "zigzag",
                    image: achcharu3,
                    imageLeft: false,
                    title: "The Finished Southern Masterpiece",
                    text: "A vibrant presentation of the final Sri Lankan Achcharu, perfectly balanced in color, moisture, and intense flavor concentration."
                },
                {
                    type: "text",
                    title: "Thambili and the Tropical Fruit Wealth",
                    paragraphs: [
                        "As the tropical sun climbs over the ramparts of the Galle Fort, locals turn to the King Coconut, known natively as Thambili. Indigenous solely to Sri Lanka, this bright orange nut contains clean, sterile water packed with electrolytes, offering a cool, sweet relief that commercial beverages can never replicate.",
                        "Alongside Thambili, the local markets overflow with seasonal treasures like Rambutan, Mangosteen, and sour-sweet wood apples, mapping out the rich agricultural landscape of the island."
                    ]
                },
                {
                    type: "zigzag",
                    image: fruits1,
                    imageLeft: true,
                    title: "Liquid Gold: Thambili Harvesting",
                    text: "Fresh King Coconuts stacked neatly at a local street side stall, their bright orange hues acting as a natural invitation for dehydration relief."
                },
                {
                    type: "zigzag",
                    image: fruits2,
                    imageLeft: false,
                    title: "The Exotic Orchard of Sri Lanka",
                    text: "A close-up of local tropical fruits showing the thick purple skins of Mangosteens contrasting against sweet seasonal berries."
                },
                {
                    type: "text",
                    title: "The Street Side Shorty Revolution",
                    paragraphs: [
                        "As evening approaches, the air fills with the sounds and smells of the street food subculture. This is the empire of 'Shorties'—led by the iconoclastic Hopper (Appa), a bowl-shaped pancake made from fermented rice batter and coconut milk, featuring a soft, spongy center and paper-thin, golden-brown crispy edges.",
                        "Alongside hoppers, you find dense cylinders of steamed Pittu, rustic Pol Rotti mixed with shredded coconut and chopped green chilies, and boiled Manioc roots served with freshly scraped coconut, mapping out the true working-class fuel of the nation."
                    ]
                },
                {
                    type: "zigzag",
                    image: rotti,
                    imageLeft: true,
                    title: "Rustic Simplicity: Pol Rotti",
                    text: "Flour dough kneaded with freshly scraped coconut and green chilies, flattened and toasted on flat iron griddles to create a dense, smoky breakfast bread."
                },
                {
                    type: "zigzag",
                    image: mainoc,
                    imageLeft: false,
                    title: "The Agrarian Root: Steamed Manioc",
                    text: "Boiled cassava roots breaking open cleanly, served hot alongside a traditional ground chili paste (Lunu Miris) and freshly scraped coconut meat."
                },
                {
                    type: "zigzag",
                    image: pittu,
                    imageLeft: true,
                    title: "The Cylindrical Wonder: Steamed Pittu",
                    text: "A combination of roasted rice flour and grated coconut steamed inside traditional bamboo or metal cylinders, creating a crumbly texture."
                },
                {
                    type: "zigzag",
                    image: hoppers,
                    imageLeft: false,
                    title: "The Art of the Perfect Hopper",
                    text: "A street chef swirling the seasoned iron hopper pans over glowing charcoal embers, showcasing the dynamic, fluid motion that creates the lace-like edges."
                }
            ]
        },
        "temple-etiquette": {
            title: "Sacred Sanctuaries: Deciphering the Architecture of Ancient Devotion",
            readTime: "4 min read",
            category: "CULTURE",
            intro: "An analytical exploration of Sri Lanka's historical Buddhist structures, where advanced structural engineering meets profound spiritual symbolism.",
            story: [
                {
                    type: "text",
                    title: "The Monolithic Majesty of Ancient Stupas",
                    paragraphs: [
                        "The horizon of Sri Lanka's cultural triangle is defined by its Stupas (Dagobas), structural marvels of brick and plaster that ranked among the largest engineering feats of the ancient world. These monuments were not built merely as static shrines; they are architectural representations of the cosmic order, designed to house sacred relics of the Buddha within their dark, heavy brick cores.",
                        "Ancient texts identify six classical shapes for stupas, each carrying distinct philosophical undertones: the bell-shape (Ghantakara) and the bubble-shape (Bubbulakara). The pristine white lime plaster reflecting the fierce tropical sun served as a beacon for pilgrims traversing vast wildernesses."
                    ]
                },
                {
                    type: "zigzag",
                    image: sthupa,
                    imageLeft: true,
                    title: "Monolithic Marvels Against the Heavens",
                    text: "The stark white dome of a historical stupa cutting into the deep blue sky, surrounded by weathered stone pillars that once supported vast wooden roof networks."
                },
                {
                    type: "text",
                    title: "Sandakadapahana: The Metaphorical Path to Liberation",
                    paragraphs: [
                        "Placed at the foot of monastic entrances, the Sandakadapahana, or Moonstone, is a unique semi-circular carved stone slab that maps out the intricate journey of the human soul. The outermost ring is engraved with fierce flames, representing worldly passion and desire (Raga).",
                        "Moving inward, a procession of four animals—the elephant (birth), the horse (old age), the lion (disease), and the bull (death)—symbolizes the relentless cycle of existence (Samsara). At the absolute center rests a sacred lotus petal, symbolizing the attainment of spiritual purity."
                    ]
                },
                {
                    type: "zigzag",
                    image: sadakadapahana,
                    imageLeft: false,
                    title: "The Circular Continuum of Existence",
                    text: "A low-angle shot of a classic Moonstone, showing the deep, crisp relief lines of the animal processions carved into heavy granite, worn smooth by centuries of devotees."
                },
                {
                    type: "text",
                    title: "Muurthi: Divine Expressions in Stone",
                    paragraphs: [
                        "Sri Lankan 'Muurthi' or stone sculptures represent the peak of ancient rock-carving art. Masterpieces found across Anuradhapura and Polonnaruwa show an incredible understanding of anatomical balance and emotional tranquility.",
                        "Artisans carved these statues directly out of massive living granite cliffs, using precise mathematical ratios to ensure the serene facial expressions of the Buddha remained perfectly balanced regardless of the viewer's angle."
                    ]
                },
                {
                    type: "zigzag",
                    image: muurthi,
                    imageLeft: true,
                    title: "Ethereal Serenity: The Rock Carvings",
                    text: "A profile view of a rock-cut Buddha statue, highlighting the smooth contours and peaceful expression carved directly into the hard granite face."
                }
            ]
        },
        "ella-train": {
            title: "The Highland Rail Odyssey: Journey Into the Emerald Mist",
            readTime: "7 min read",
            category: "TRAVEL TIPS",
            intro: "A definitive guide to experiencing Sri Lanka’s central mountain ranges via the iconic colonial-era rail systems.",
            story: [
                {
                    type: "text",
                    title: "The Engineering Wonders of the Main Line",
                    paragraphs: [
                        "Originally constructed by the British colonial government to transport premium Ceylon tea from the mountains to the coastal ports, the mountain railway line has evolved into one of the world's most romantic slow-travel experiences. The train chugs slowly along narrow cliff edges, cutting through dense eucalyptus forests and expansive, emerald-green tea plantations.",
                        "The journey climbs steadily through cool, mist-laden air masses, passing through hand-carved stone tunnels and over architectural masterpieces like the Nine Arch Bridge in Ella, providing deep rewards for intrepid explorers."
                    ]
                },
                {
                    type: "zigzag",
                    image: travel1,
                    imageLeft: false,
                    title: "The Iron Dragon of the Highlands",
                    text: "The iconic blue train navigating a sharp bend over an ancient stone viaduct, framed perfectly by towering tree ferns and layers of mist rolling over the tea bushes."
                },
                {
                    type: "zigzag",
                    image: travel2,
                    imageLeft: true,
                    title: "The Archways of Antiquity",
                    text: "A perspective view looking down the massive brick and stone pillars of the Nine Arch Bridge, showcasing the architectural brilliance of local builders during the colonial era."
                },
                {
                    type: "zigzag",
                    image: travel3,
                    imageLeft: false,
                    title: "Misty Vistas from the Carriage Window",
                    text: "The dramatic panorama of the Ella gap opening up through the clearing mist, revealing layers of deep blue mountain ridges stretching into the horizon."
                }
            ]
        },
        "ratnapura-sapphires": {
            title: "Ratnapura: Deep Earth Chronicles and the Sapphire Legacy",
            readTime: "8 min read",
            category: "GEMS",
            intro: "An inside look into the historic gem mining capital of Sri Lanka, exploring traditional extraction techniques and rare geological formations.",
            story: [
                {
                    type: "text",
                    title: "The Subterranean Wealth of the Floodplains",
                    paragraphs: [
                        "Ratnapura, translated literally as the City of Gems, sits atop an ancient alluvial floodplain that holds one of the highest concentrations of precious gemstones on planet earth. For over two millennia, the gravel beds of this valley have yielded spectacular specimens of corundum, including the legendary Cornflower Blue Sapphires and rare Padparadscha stones.",
                        "Unlike the mechanized open-pit mines found globally, Ratnapura preserves a highly sustainable, labor-intensive mining methodology. Deep vertical shafts are sunk into paddy fields, reinforced with timber logs and fern leaves, protecting the delicate topsoil of the surrounding ecosystem."
                    ]
                },
                {
                    type: "zigzag",
                    image: gems1,
                    imageLeft: true,
                    title: "The Illam Gatherers: Washing the Gravel",
                    text: "Miners standing waist-deep in muddy water, swirling large, conical bamboo baskets with a practiced rhythm to separate the heavy, precious gem gravel from silt."
                },
                {
                    type: "zigzag",
                    image: gems2,
                    imageLeft: false,
                    title: "Uncut Brilliance: From Alluvium to Luxury",
                    text: "A selection of raw, rough blue sapphire crystals resting in a miner's palm, showing the naturally geometric crystal structures before undergoing the precision cutting process."
                }
            ]
        },
        "kandyan-dance": {
            title: "Rhythms of the Cosmos: The Tripartite School of Sri Lankan Dance",
            readTime: "6 min read",
            category: "CULTURE",
            intro: "Deconstructing the athletic leaps, spiritual exorcisms, and intricate costuming of the island's three major classical dance schools.",
            story: [
                {
                    type: "text",
                    title: "The Triple Tradition: Udarata, Pahatharata, and Sabaragamu",
                    paragraphs: [
                        "Sri Lanka’s classical dance heritage is structurally divided into three regional traditions, each maintaining distinct rhythms, ritual purposes, and costumes. The 'Udarata' (Kandyan) dance represents the royal court heritage, utilizing athletic leaps and spinning movements. The 'Pahatharata' (Low Country) dance is deeply tied to coastal animist rituals, famous for its dramatic devil-mask dances used to heal illnesses.",
                        "The 'Sabaragamu' tradition bridges these two forms, focusing heavily on worship rituals dedicated to local deities, utilizing unique drum cadences that have been passed down orally through lineages of hereditary dancers."
                    ]
                },
                {
                    type: "zigzag",
                    image: udarata,
                    imageLeft: false,
                    title: "The Ves Dancer in Metallic Majesty",
                    text: "A master Kandyan dancer frozen mid-air during a dynamic leap, his polished silver breastplates and intricate headpieces catching the stage lights."
                },
                {
                    type: "zigzag",
                    image: pahatharata,
                    imageLeft: true,
                    title: "The Dramatic Exorcisms of the Coast",
                    text: "A low country dancer performing a fiery ritual, wearing an intricate wood-carved demon mask designed to expel negative spiritual forces from the community."
                },
                {
                    type: "zigzag",
                    image: sabaragamu,
                    imageLeft: false,
                    title: "The Ritual Cadence of Sabaragamu",
                    text: "Dancers performing the structural hand extensions and grounding footwork unique to the province of gems, accompanied by the deep tones of the Daula drum."
                }
            ]
        },
        "ethical-elephants": {
            title: "The Untamed Matrix: Biodiversity Hotspots and Wilderness Refuges",
            readTime: "5 min read",
            category: "NATURE",
            intro: "A scientific and ecological descent into Sri Lanka's national parks, examining endangered mammalian populations and avian life.",
            story: [
                {
                    type: "text",
                    title: "The Predators and Foragers of the Dry-Zone Scrublands",
                    paragraphs: [
                        "Despite its relatively small geographic footprint, Sri Lanka boasts an astonishing density of wildlife, acting as a critical refuge for several endangered mammalian species. In Yala, the Sri Lankan Leopard reigns as the undisputed apex predator, adapting to become bolder due to the lack of competing large carnivores.",
                        "Deep within the ancient, dense forests of Wilpattu, the endangered Sri Lankan Sloth Bear hides, while across the grassy plains of Minneriya, massive herds of Asian Elephants congregate around ancient reservoirs, showcasing one of the greatest wildlife gatherings on earth."
                    ]
                },
                {
                    type: "zigzag",
                    image: cheeta,
                    imageLeft: true,
                    title: "The Golden Shadow: Panthera Pardus Kotiya",
                    text: "A close-up portrait of an adult male Sri Lankan leopard camouflaged against dried tall grass, its intense amber eyes locked onto the horizon."
                },
                {
                    type: "zigzag",
                    image: bear,
                    imageLeft: false,
                    title: "The Shaggy Forager: Sri Lankan Sloth Bear",
                    text: "An elusive sloth bear navigating a fallen log matrix, using its long curved ivory claws to dig for hidden termite colonies."
                },
                {
                    type: "zigzag",
                    image: birds,
                    imageLeft: true,
                    title: "Avian Heavens: The Migratory Junctions",
                    text: "Flocks of vibrant tropical birds taking flight over the wetlands of Kumana, a crucial rest stop along the Central Asian Flyway."
                },
                {
                    type: "zigzag",
                    image: deer,
                    imageLeft: false,
                    title: "Gentle Herds of the Forest Openings",
                    text: "A group of spotted deer drinking from a natural water hole at dawn, alert to the slightest acoustic shift in the surrounding brush."
                }
            ]
        },
        "bawa-architecture": {
            title: "The Hydrological Fabric: Exploring Sri Lanka's Waterways and Flora",
            readTime: "5 min read",
            category: "TRAVEL TIPS",
            intro: "Tracing the rivers, cascading waterfalls, and endemic flora that form the foundational landscape of the island.",
            story: [
                {
                    type: "text",
                    title: "Liquid Arteries: Mountain Streams and Monsoonal Cascades",
                    paragraphs: [
                        "Sri Lanka’s geography is defined by its intricate network of 103 rivers that flow radially from the central highlands down to the coast. Along the steep drop-offs of the central hills, these rivers create over 400 waterfalls, giving the island one of the highest waterfall densities in the world.",
                        "The cool valleys are also home to spectacular flora, including the endemic Blue Water Lily (*Nil Manel*), which floats gracefully on calm lakes, its roots anchored deep in the mud while its violet petals open to greet the morning sun."
                    ]
                },
                {
                    type: "zigzag",
                    image: river,
                    imageLeft: false,
                    title: "The Winding Arteries of Civilization",
                    text: "An aerial perspective of a pristine river cutting cleanly through a dense canopy of tropical rainforest, feeding local agricultural networks."
                },
                {
                    type: "zigzag",
                    image: waterfalls,
                    imageLeft: true,
                    title: "The Roar of the Highlands",
                    text: "A dramatic long-exposure shot of a massive tiered waterfall deep in the mist forests, showing the clean water transforming into a soft silky veil."
                },
                {
                    type: "zigzag",
                    image: flowers3,
                    imageLeft: false,
                    title: "The Sacred Bloom: Nil Manel",
                    text: "The delicate violet-blue petals of Sri Lanka's national flower resting atop flat green pads on the calm surface of a historic monastic pond."
                }
            ]
        },
        "puppets-masks": {
            title: "The Living Shadows of Ambalangoda: Woodcarving and Mystical Puppetry",
            readTime: "6 min read",
            category: "HERITAGE",
            intro: "An analytical study of the traditional performance masks and string puppetry indigenous to the Southwestern coastline.",
            story: [
                {
                    type: "text",
                    title: "Masks, Demons, and Folk Satire",
                    paragraphs: [
                        "The coastal town of Ambalangoda holds a historical monopoly over the ancient craft of manufacturing traditional Sri Lankan masks. Carved exclusively from the lightweight, soft timber of the 'Kaduru' tree, these masks are categorized into Raksha (Demons), Sanni (Healing), and Kolam (Satire).",
                        "The artisans use traditional recipes for colors, combining crushed sea shells for pristine whites and local plant resins to ensure the masks retain their vivid, striking hues for decades on stage."
                    ]
                },
                {
                    type: "zigzag",
                    image: puppet1,
                    imageLeft: true,
                    title: "The Wooden Pantomime: String Puppetry",
                    text: "A close-up of a fully costumed royal string puppet hanging inside a workshop, showing the complex network of cotton strings that give it life on stage."
                },
                {
                    type: "zigzag",
                    image: pappet,
                    imageLeft: false,
                    title: "The Heritage Masterpieces of the Coast",
                    text: "A collection of finished wood-carved masks lined up on a dark wood wall, their bulging eyes and sharp tusks displaying traditional design elements."
                }
            ]
        }
    };

    const currentPost = blogContent[id] || blogContent["galle-market"];

    useEffect(() => {
        window.scrollTo(0, 0);
        const syncToDashboard = async () => {
            try {
                await axios.post('http://localhost:5000/api/dashboard/sync-blog', {
                    id: id,
                    title: currentPost.title,
                    category: currentPost.category,
                    readTime: currentPost.readTime
                });
            } catch (err) {
                // Silently fails in background
            }
        };
        syncToDashboard();
    }, [id, currentPost.title, currentPost.category, currentPost.readTime]);

    return (
        <div className="bg-[#030508] min-h-screen text-slate-300 font-sans pb-32 pt-36 selection:bg-amber-500/20 selection:text-amber-400">
            
            {/* Ambient Background Grid & Luxury Glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/[0.02] bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-amber-500/[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-blue-500/[0.03] blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                
                {/* Editorial Header */}
                <header className="max-w-4xl mb-24 border-b border-white/5 pb-16">
                    <Link to="/blog" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500 hover:text-white transition-all mb-12 group">
                        <span className="group-hover:-translate-x-1.5 transition-transform duration-300">←</span> Back to Journal
                    </Link>
                    
                    <div className="flex items-center gap-5 mb-8">
                        <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
                            {currentPost.category}
                        </span>
                        <div className="h-px w-8 bg-white/10"></div>
                        <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                            {currentPost.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-[1.08] mb-10">
                        {currentPost.title}
                    </h1>
                    
                    <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl border-l-2 border-amber-500/40 pl-8 italic">
                        {currentPost.intro}
                    </p>
                </header>

                {/* Magazine Layout Structure */}
                <div className="space-y-28">
                    {currentPost.story.map((element, idx) => {
                        if (element.type === "text") {
                            return (
                                <section key={idx} className="max-w-3xl mx-auto space-y-8">
                                    <h2 className="text-2xl font-serif text-white tracking-wide mt-4">
                                        {element.title}
                                    </h2>
                                    <div className="space-y-6 text-slate-300 text-base md:text-[17px] font-light leading-relaxed text-justify opacity-95">
                                        {element.paragraphs.map((p, pIdx) => (
                                            <p key={pIdx}>{p}</p>
                                        ))}
                                    </div>
                                </section>
                            );
                        }

                        if (element.type === "zigzag") {
                            return (
                                <section 
                                    key={idx} 
                                    className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${
                                        element.imageLeft ? "" : "md:direction-rtl"
                                    }`}
                                    style={{ direction: element.imageLeft ? 'ltr' : 'rtl' }}
                                >
                                    {/* Image Container with high quality configurations */}
                                    <div className="md:col-span-6 w-full" style={{ direction: 'ltr' }}>
                                        <div className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] aspect-[16/10] group shadow-2xl tracking-normal">
                                            <img 
                                                src={element.image} 
                                                alt={element.title}
                                                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out image-render-auto antialiased"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t bottom-0 from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                        </div>
                                    </div>

                                    {/* Text Content Container */}
                                    <div className="md:col-span-6 space-y-4" style={{ direction: 'ltr' }}>
                                        <h3 className="text-xl font-serif text-white tracking-wide">
                                            {element.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed text-justify opacity-90">
                                            {element.text}
                                        </p>
                                    </div>
                                </section>
                            );
                        }
                        return null;
                    })}
                </div>

            </div>
        </div>
    );
};

export default BlogDetails;