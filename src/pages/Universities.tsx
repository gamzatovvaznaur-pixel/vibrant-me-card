import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Building2, Stethoscope, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const universities = [
  {
    icon: Building2,
    name: "МГСУ",
    fullName: "Московский государственный строительный университет",
    consultant: "Азнаур Гамзатов",
    score: "290 баллов ЕГЭ",
    course: "3-й курс",
    description: "Консультация от студента с 290 баллами ЕГЭ, выбиравшего между ВШЭ, Финансовой академией и МГСУ.",
    link: "/mgsu",
    brand: "ПоступиВМГСУ",
  },
  {
    icon: Stethoscope,
    name: "Сеченова",
    fullName: "ПМГМУ имени И.М. Сеченова",
    consultant: "Эмир Алибеков",
    score: "297 баллов ЕГЭ + БВИ",
    course: "3-й курс",
    description: "Консультация от студента с 297 баллами ЕГЭ и БВИ, выбиравшего между Сеченова, Пирогова, Павлова и КубГМУ.",
    link: "/sechenov",
    brand: "ПоступиВСЕЧУ",
  },
];

const Universities = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg">Университеты</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center pt-24 pb-16 px-5">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <GraduationCap className="w-4 h-4" />
            Консультации по поступлению
          </motion.div>
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-3xl md:text-5xl font-extrabold leading-[1.2] mb-6"
          >
            Выберите{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              университет
            </span>
          </motion.h1>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Консультации от реальных студентов, которые прошли через поступление и знают свои вузы изнутри.
          </motion.p>
        </div>
      </section>

      {/* University Cards */}
      <section className="pb-20 px-5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          {universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to={uni.link}
                className="group block bg-card rounded-2xl border border-border p-7 md:p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <uni.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">
                  {uni.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">{uni.fullName}</p>
                <p className="text-foreground leading-relaxed mb-6 text-sm">{uni.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{uni.score}</span>
                  <span className="bg-secondary px-3 py-1 rounded-full font-semibold">{uni.course}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Перейти к {uni.brand}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-display font-bold">
            <GraduationCap className="w-5 h-5 text-primary" />
            Консультации по поступлению
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Все права защищены.</p>
        </div>
        <div className="max-w-6xl mx-auto mt-6 text-center">
          <Link to="/s" className="text-[10px] text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">кратко</Link>
        </div>
      </footer>
    </div>
  );
};

export default Universities;
