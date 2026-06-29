import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Indian Baby Names — Baby Journey" };

interface NameItem {
  name: string;
  meaning: string;
  gender: "Boy" | "Girl" | "Unisex";
}

interface Group {
  eyebrow: string;
  title: string;
  names: NameItem[];
}

const GROUPS: Group[] = [
  {
    eyebrow: "Divine — boys",
    title: "Names of deities & the divine",
    names: [
      { name: "Aarav", meaning: "peaceful, calm; also a name for Lord Vishnu", gender: "Boy" },
      { name: "Ishaan", meaning: "the sun; a form of Lord Shiva, ruler of the northeast", gender: "Boy" },
      { name: "Krishna", meaning: "dark-complexioned; the beloved eighth avatar of Vishnu", gender: "Boy" },
      { name: "Aditya", meaning: "the sun; son of Aditi, a radiant solar deity", gender: "Boy" },
      { name: "Shiv", meaning: "the auspicious one; the great god Shiva", gender: "Boy" },
      { name: "Vihaan", meaning: "dawn, the first light of morning", gender: "Boy" },
      { name: "Hari", meaning: "one who removes sorrow; a name of Vishnu", gender: "Boy" },
      { name: "Govind", meaning: "protector of cows; a tender name for Krishna", gender: "Boy" },
      { name: "Rudra", meaning: "the fierce, storm-bringing form of Shiva", gender: "Boy" },
      { name: "Murari", meaning: "enemy of the demon Mura; a name of Krishna", gender: "Boy" },
    ],
  },
  {
    eyebrow: "Divine — girls",
    title: "Goddess & sacred feminine",
    names: [
      { name: "Saraswati", meaning: "goddess of knowledge, music and the arts", gender: "Girl" },
      { name: "Lakshmi", meaning: "goddess of fortune, beauty and abundance", gender: "Girl" },
      { name: "Parvati", meaning: "daughter of the mountain; consort of Shiva", gender: "Girl" },
      { name: "Gauri", meaning: "the fair one; a gentle form of Parvati", gender: "Girl" },
      { name: "Aadya", meaning: "the first, the primordial; a name of the Devi", gender: "Girl" },
      { name: "Durga", meaning: "the invincible; protector and warrior goddess", gender: "Girl" },
      { name: "Sita", meaning: "the furrow; the steadfast consort of Lord Rama", gender: "Girl" },
      { name: "Radha", meaning: "prosperity; Krishna's beloved companion", gender: "Girl" },
      { name: "Bhavani", meaning: "giver of life; a benevolent form of the goddess", gender: "Girl" },
      { name: "Ila", meaning: "of the earth; a goddess of speech and the land", gender: "Girl" },
    ],
  },
  {
    eyebrow: "The natural world",
    title: "Nature & the elements",
    names: [
      { name: "Vayu", meaning: "the wind; the deity of air and breath", gender: "Boy" },
      { name: "Megha", meaning: "rain cloud, herald of the monsoon", gender: "Girl" },
      { name: "Tarun", meaning: "young, fresh, like new growth", gender: "Boy" },
      { name: "Sarita", meaning: "a flowing river", gender: "Girl" },
      { name: "Parvat", meaning: "mountain, steadfast and grand", gender: "Boy" },
      { name: "Vanya", meaning: "of the forest; gracious", gender: "Girl" },
      { name: "Nabh", meaning: "the sky, the heavens", gender: "Boy" },
      { name: "Tulasi", meaning: "the sacred holy basil plant", gender: "Girl" },
      { name: "Samudra", meaning: "the ocean, vast and deep", gender: "Boy" },
      { name: "Pushpa", meaning: "a flower, in full bloom", gender: "Girl" },
    ],
  },
  {
    eyebrow: "Radiance",
    title: "Light & the sun",
    names: [
      { name: "Surya", meaning: "the sun; source of light and life", gender: "Boy" },
      { name: "Tejas", meaning: "brilliance, radiant energy", gender: "Boy" },
      { name: "Diya", meaning: "a lamp, a small flame of light", gender: "Girl" },
      { name: "Roshan", meaning: "bright, luminous", gender: "Boy" },
      { name: "Jyoti", meaning: "light, flame, radiance", gender: "Girl" },
      { name: "Arka", meaning: "ray of the sun; the sun itself", gender: "Boy" },
      { name: "Deepa", meaning: "a lamp, a glowing light", gender: "Girl" },
      { name: "Prabhat", meaning: "dawn, the breaking of light", gender: "Boy" },
      { name: "Kiran", meaning: "a ray of light", gender: "Unisex" },
      { name: "Ujwala", meaning: "bright, shining, splendid", gender: "Girl" },
    ],
  },
  {
    eyebrow: "Virtues in Sanskrit",
    title: "Sanskrit virtues",
    names: [
      { name: "Shanti", meaning: "peace, tranquillity", gender: "Girl" },
      { name: "Satya", meaning: "truth, the steadfast real", gender: "Unisex" },
      { name: "Dhairya", meaning: "patience, steady courage", gender: "Boy" },
      { name: "Karuna", meaning: "compassion, gentle mercy", gender: "Girl" },
      { name: "Vivek", meaning: "wisdom, the power of discernment", gender: "Boy" },
      { name: "Daya", meaning: "kindness, tenderness", gender: "Girl" },
      { name: "Dharma", meaning: "righteousness, the right path", gender: "Boy" },
      { name: "Prerna", meaning: "inspiration, gentle motivation", gender: "Girl" },
      { name: "Vinay", meaning: "humility, modesty", gender: "Boy" },
      { name: "Sahaj", meaning: "natural, at ease, effortless", gender: "Unisex" },
    ],
  },
  {
    eyebrow: "Short & current",
    title: "Modern & short",
    names: [
      { name: "Ira", meaning: "the earth; watchful", gender: "Girl" },
      { name: "Ved", meaning: "sacred knowledge, the Vedas", gender: "Boy" },
      { name: "Mira", meaning: "ocean; admirable; the saint-poet Mirabai", gender: "Girl" },
      { name: "Kabir", meaning: "great; after the beloved mystic poet", gender: "Boy" },
      { name: "Anvi", meaning: "a name of the goddess Lakshmi", gender: "Girl" },
      { name: "Reyansh", meaning: "a ray of light; part of Vishnu", gender: "Boy" },
      { name: "Tara", meaning: "a star", gender: "Girl" },
      { name: "Dev", meaning: "divine, god-like", gender: "Boy" },
      { name: "Riya", meaning: "singer; a graceful one", gender: "Girl" },
      { name: "Ayan", meaning: "path, journey; the right way", gender: "Boy" },
    ],
  },
  {
    eyebrow: "A treasured arrival",
    title: "Names meaning gift or blessing",
    names: [
      { name: "Dhruv", meaning: "constant, unshakeable; the steadfast pole star", gender: "Boy" },
      { name: "Daanya", meaning: "a gift, something graciously given", gender: "Girl" },
      { name: "Prasad", meaning: "a blessing, sacred offering received", gender: "Boy" },
      { name: "Aashirya", meaning: "blessing; full of good wishes", gender: "Girl" },
      { name: "Vardaan", meaning: "a boon, a granted blessing", gender: "Boy" },
      { name: "Daiwik", meaning: "by the grace of God", gender: "Boy" },
      { name: "Anugraha", meaning: "grace, divine favour", gender: "Girl" },
      { name: "Labdhi", meaning: "attainment, a thing gained", gender: "Girl" },
      { name: "Devansh", meaning: "a part of the divine", gender: "Boy" },
      { name: "Saugata", meaning: "a welcome gift, well-arrived", gender: "Unisex" },
    ],
  },
  {
    eyebrow: "For any child",
    title: "Unisex names",
    names: [
      { name: "Anand", meaning: "bliss, deep joy", gender: "Unisex" },
      { name: "Sham", meaning: "calm; dusk; also a name of Krishna", gender: "Unisex" },
      { name: "Nidhi", meaning: "treasure, a precious store", gender: "Unisex" },
      { name: "Jeevan", meaning: "life, the gift of living", gender: "Unisex" },
      { name: "Indu", meaning: "the moon, soft and cool", gender: "Unisex" },
      { name: "Amrit", meaning: "nectar of immortality", gender: "Unisex" },
      { name: "Shashi", meaning: "the moon", gender: "Unisex" },
      { name: "Lalit", meaning: "graceful, lovely", gender: "Unisex" },
      { name: "Sumi", meaning: "good, beautiful; tender", gender: "Unisex" },
      { name: "Harsh", meaning: "happiness, delight", gender: "Unisex" },
    ],
  },
  {
    eyebrow: "Soft on the ear",
    title: "Melodic names by sound",
    names: [
      { name: "Anaya", meaning: "caring; without a superior", gender: "Girl" },
      { name: "Aaryan", meaning: "noble, honourable", gender: "Boy" },
      { name: "Myra", meaning: "sweet; beloved; admirable", gender: "Girl" },
      { name: "Niral", meaning: "calm, still and serene", gender: "Boy" },
      { name: "Saanvi", meaning: "a name of the goddess Lakshmi", gender: "Girl" },
      { name: "Rehan", meaning: "sweet fragrance, basil", gender: "Boy" },
      { name: "Aaravi", meaning: "peace; melody", gender: "Girl" },
      { name: "Avi", meaning: "the sun, air, breeze", gender: "Boy" },
      { name: "Nila", meaning: "deep blue; the sapphire sky", gender: "Girl" },
      { name: "Ronav", meaning: "charming, pleasing", gender: "Boy" },
    ],
  },
  {
    eyebrow: "Across the regions",
    title: "Regional favourites",
    names: [
      { name: "Aadhya", meaning: "the first power; a popular South-Indian choice", gender: "Girl" },
      { name: "Arjun", meaning: "bright, shining; the great Mahabharata hero", gender: "Boy" },
      { name: "Ananya", meaning: "unique, matchless; a pan-Indian favourite", gender: "Girl" },
      { name: "Vivaan", meaning: "full of life; the rising morning sun", gender: "Boy" },
      { name: "Meera", meaning: "devoted one; loved across Rajasthan and beyond", gender: "Girl" },
      { name: "Aniket", meaning: "lord of all; one who belongs everywhere", gender: "Boy" },
      { name: "Keya", meaning: "the monsoon kewra flower; a Bengali favourite", gender: "Girl" },
      { name: "Tejal", meaning: "lustrous, radiant; popular in Gujarat and Maharashtra", gender: "Girl" },
      { name: "Harish", meaning: "lord of joy; loved in the south", gender: "Boy" },
      { name: "Navya", meaning: "ever new, fresh; cherished countrywide", gender: "Girl" },
    ],
  },
];

export default function BabyNamesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
              A name to grow into
            </p>
            <Badge tone="sage">Pan-Indian</Badge>
          </div>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Indian baby names
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A naming ceremony is one of the first gifts you’ll give your little
            one. Here are modern and timeless Indian names, gathered by theme —
            from the divine and the natural world to soft, melodic sounds — each
            with a short meaning to help you find the one that feels just right.
          </p>
        </header>
      </SectionReveal>

      <div className="space-y-6">
        {GROUPS.map((g, i) => (
          <SectionReveal key={g.title} delay={i * 0.05}>
            <GlassCard>
              <SectionTitle eyebrow={g.eyebrow} title={g.title} />
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {g.names.map((n) => (
                  <li
                    key={n.name}
                    className="flex items-start gap-2 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>
                      <span className="font-semibold text-plum">{n.name}</span>{" "}
                      <span className="text-xs text-muted">({n.gender})</span> —{" "}
                      {n.meaning}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          Meanings and origins listed here are commonly cited and may vary by region
          and language. Treat this as a gentle starting point — choose the name,
          spelling and pronunciation that feel right for your family.
        </p>
      </SectionReveal>
    </main>
  );
}
