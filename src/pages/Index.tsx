import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const services = [
  { title: "Стратегия", desc: "Разработка бизнес-стратегий и планирование роста" },
  { title: "Дизайн", desc: "UI/UX дизайн продуктов и брендинг" },
  { title: "Разработка", desc: "Веб и мобильные приложения под ключ" },
];

const socials = [
  { label: "Telegram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <span className="font-display text-lg tracking-wide text-primary">А.И.</span>
        <a
          href="mailto:hello@example.com"
          className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
        >
          hello@example.com
        </a>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4 font-body"
            >
              Креативный директор
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl md:text-7xl leading-[1.1] mb-6"
            >
              Александр
              <br />
              <span className="text-primary italic">Иванов</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-md mb-8"
            >
              Помогаю компаниям создавать запоминающиеся цифровые продукты.
              Более 10 лет опыта в дизайне и стратегии.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Связаться
              </a>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-body">
                <MapPin className="w-3.5 h-3.5" />
                Москва, Россия
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src={heroImage}
                alt="Портрет"
                width={640}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-12 font-body"
          >
            Услуги
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-6 border border-border rounded-sm hover:border-primary/40 transition-colors"
              >
                <h3 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="font-display text-2xl mb-2">Давайте работать вместе</h2>
            <p className="text-sm text-muted-foreground font-body">
              Открыт для новых проектов и сотрудничества
            </p>
          </div>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                {s.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Александр Иванов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
