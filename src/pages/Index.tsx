import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, CheckCircle, MessageCircle, Star, ArrowRight,
  BookOpen, Users, Target, Clock, Building2, Award, MapPin,
  AlertTriangle, FileText, Shield, Lightbulb, Send, ExternalLink, Trophy
} from "lucide-react";
import AdmissionQuiz from "@/components/AdmissionQuiz";
import aznaurHero from "@/assets/aznaur-hero-cropped.jpg";
import aznaur2 from "@/assets/aznaur-photo-2.jpg";
import mgsuCampus from "@/assets/mgsu-campus-wiki.jpg";
import mgsuBuilding from "@/assets/mgsu-building.jpg";
import docAttestat from "@/assets/doc-attestat.jpg";
import docDiplomaBp from "@/assets/doc-diploma-bp.jpg";
import docBst from "@/assets/doc-bst.jpg";
import docRecDu from "@/assets/doc-rec-du.jpg";
import docRecCb from "@/assets/doc-rec-cb.jpg";
import docEge from "@/assets/doc-ege-results.png";

const achievements = [
  {
    image: docAttestat,
    pdf: "/docs/attestat.pdf",
    title: "Аттестат с отличием",
    description: "Окончил гимназию №18 г. Краснодара с отличием. Все предметы — «отлично».",
    badge: "Отличие",
    badgeColor: "bg-amber-500/10 text-amber-600",
  },
  {
    image: docDiplomaBp,
    pdf: "/docs/diploma-bp.pdf",
    title: "Победитель «Большая перемена»",
    description: "Победитель Всероссийского конкурса «Большая перемена» среди школьников 8–10 классов. МДЦ «Артек», 2023 г.",
    badge: "Всероссийский",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    image: docBst,
    pdf: "/docs/bst-journal.pdf",
    title: "Публикация в журнале БСТ (ВАК)",
    description: "Соавтор научной статьи в «Бюллетене строительной техники» — рецензируемом журнале из перечня ВАК, №2 (1098), 2026 г.",
    badge: "Наука",
    badgeColor: "bg-accent/10 text-accent",
  },
  {
    image: docRecDu,
    pdf: "/docs/recommendation-du.pdf",
    title: "Рекомендация от «Девелопмент-Юг»",
    description: "Рекомендательное письмо по итогам практики в планово-экономическом отделе строительной компании ООО СИК «Девелопмент-Юг».",
    badge: "Практика",
    badgeColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    image: docRecCb,
    pdf: "/docs/recommendation-cb.pdf",
    title: "Характеристика от Банка России",
    description: "Положительная характеристика по итогам производственной практики в Центральном банке Российской Федерации.",
    badge: "Практика",
    badgeColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    image: docEge,
    title: "Результаты ЕГЭ 2024",
    description: "Русский язык — 100 баллов, Математика профильная — 90 баллов. Высокие баллы, подтверждающие уровень подготовки.",
    badge: "ЕГЭ",
    badgeColor: "bg-blue-500/10 text-blue-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const plans = [
  {
    title: "Полное сопровождение",
    price: "3 490 ₽",
    description: "Индивидуальный план поступления от А до Я",
    features: [
      "Анализ ваших шансов на поступление",
      "Подбор направления и специальности",
      "Помощь со сбором документов",
      "Стратегия подачи заявлений",
      "Возможность задать вопросы в течение 2 недель после консультации",
    ],
    popular: true,
  },
  {
    title: "VIP-наставничество",
    price: "12 000 ₽",
    description: "Максимальная поддержка + подготовка к учёбе",
    features: [
      "Всё из «Полного сопровождения»",
      "Знакомство с жизнью в МГСУ",
      "Советы по общежитию и быту",
      "Помощь с адаптацией на 1 курсе",
      "3 месяца менторства после поступления",
    ],
    popular: false,
  },
];

const dangers = [
  {
    icon: FileText,
    title: "Ошибки в заявлении",
    desc: "Одна опечатка — и заявку могут отклонить без объяснений.",
  },
  {
    icon: AlertTriangle,
    title: "Ловушка с аттестатом",
    desc: "Оригинал подали не туда? Можно потерять бюджетное место.",
  },
  {
    icon: Shield,
    title: "Юридические нюансы",
    desc: "Приёмная комиссия не расскажет о правилах, которые работают против вас.",
  },
  {
    icon: Lightbulb,
    title: "Факультеты «не те»",
    desc: "В буклетах всё красиво, а реальность сильно отличается.",
  },
  {
    icon: Clock,
    title: "Упущенные сроки",
    desc: "Подача документов, согласие на зачисление — у каждого этапа жёсткий дедлайн.",
  },
  {
    icon: Users,
    title: "Конкурс не там, где ждали",
    desc: "На «лёгкое» направление конкурс может быть выше, чем на престижное.",
  },
];

const whatYouGet = [
  "Честный разбор процедуры поступления шаг за шагом",
  "Опыт человека с 290 баллами ЕГЭ, выбиравшего между ВШЭ, Финансовой академией и МГСУ",
  "Инсайды о факультетах от того, кто общается со студентами каждого из них",
  "Предупреждение о типичных ошибках, которые превращают поступление в хаос",
];


const FORMSPREE_URL = "https://formspree.io/f/xzdkrlwj";
const TG_LINK = "https://t.me/gam1za";

const ContactForm = ({ dark = false }: { dark?: boolean }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    await fetch(FORMSPREE_URL, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`text-center py-6 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
        <CheckCircle className="w-10 h-10 mx-auto mb-3 text-accent" />
        <p className="font-bold text-lg">Заявка отправлена!</p>
        <p className={`text-sm mt-1 ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          Я свяжусь с вами в ближайшее время
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        name="phone"
        required
        placeholder="Телефон или Telegram"
        className={`flex-1 px-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-primary ${
          dark
            ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            : "bg-background border-border text-foreground placeholder:text-muted-foreground"
        }`}
      />
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 disabled:opacity-60 ${
          dark
            ? "bg-primary-foreground text-foreground"
            : "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
        }`}
      >
        <Send className="w-4 h-4" />
        {loading ? "Отправка..." : "Оставить заявку"}
      </button>
    </form>
  );
};

const Index = () => {
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
            <span className="font-display font-bold text-lg">ПоступиВМГСУ</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Обо мне</a>
            <a href="#achievements" className="hover:text-foreground transition-colors">Достижения</a>
            <a href="#university" className="hover:text-foreground transition-colors">О МГСУ</a>
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            
          </div>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Записаться
          </a>
        </div>
      </motion.nav>

      {/* Hero — 100vh */}
      <section className="min-h-screen flex items-center pt-20 pb-20 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4" />
              290 баллов ЕГЭ · Выбор между ВШЭ, ФА и МГСУ
            </motion.div>
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display text-3xl md:text-4xl lg:text-[3.2rem] font-extrabold leading-[1.25] mb-6"
            >
              Поступи в{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
                МГСУ
              </span>
              {" "}без ошибок — консультация от студента с 290 баллами
            </motion.h1>
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8"
            >
              Расскажу как студент 3-го курса с 290 баллами ЕГЭ и осознанным выбором
              МГСУ вместо ВШЭ и Финансовой академии при Президенте.
            </motion.p>
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                Оставить заявку
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-border px-7 py-3.5 rounded-xl text-sm font-bold hover:border-primary/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Написать в Telegram
              </a>
            </motion.div>

            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center gap-6 mt-10 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> 50+ поступивших
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> 3 курс МГСУ
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-20" style={{ backgroundImage: "var(--gradient-hero)" }} />
              <img
                src={aznaurHero}
                alt="Азнаур Гамзатов"
                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary — What I Offer */}
      <section className="py-16 md:py-20 px-5 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">О консультации</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Всё, что нужно знать о поступлении — за одну встречу
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Я — Азнаур Гамзатов, студент 3-го курса МГСУ. Сдал ЕГЭ на 290 баллов, прошёл в ВШЭ и Финансовую академию — 
              но сознательно выбрал МГСУ. Теперь помогаю абитуриентам избежать ошибок, которые стоят нервов и года жизни.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Target,
                title: "Персональная стратегия",
                text: "Разберу вашу ситуацию — баллы, направление, конкурс — и составлю пошаговый план поступления",
              },
              {
                icon: AlertTriangle,
                title: "Подводные камни",
                text: "Ошибки в заявлениях, нюансы с аттестатами, разница между факультетами — предупрежу обо всём",
              },
              {
                icon: Shield,
                title: "Инсайды изнутри",
                text: "Знаю МГСУ как студент: реальные проходные, общежития, преподаватели — то, чего нет в буклетах",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-5 md:p-6 border border-border text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-sm md:text-base mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              Посмотреть тарифы
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quiz */}
      <AdmissionQuiz university="mgsu" />

      {/* About */}
      <section id="about" className="py-20 px-5 bg-card">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aznaur2}
              alt="Азнаур Гамзатов"
              loading="lazy"
              className="rounded-2xl object-cover w-full max-w-sm mx-auto shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Обо мне</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Азнаур Гамзатов</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Меня зовут Азнаур Гамзатов, я студент 3-го курса{" "}
                <strong className="text-foreground">Московского государственного строительного университета (МГСУ)</strong>,
                факультет ИЭУКСН.
              </p>
              <p>
                Три года назад я сдал ЕГЭ на <strong className="text-foreground">290 баллов</strong> и поступил.
                Но самое интересное не это. У меня был реальный выбор: меня приняли в{" "}
                <strong className="text-foreground">Высшую школу экономики</strong> и в{" "}
                <strong className="text-foreground">Финансовую академию при Президенте</strong>.
                И я сознательно выбрал МГСУ.
              </p>
              <p>
                Сейчас я хорошо знаю университет изнутри. У нас очень много факультетов,
                и каждый отличается своей спецификой. Я лично знаком с ребятами с разных факультетов,
                поэтому понимаю, где реально низкий проходной балл, а где — неочевидные сложности.
              </p>
            </div>
            <div className="flex gap-8 mt-8">
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">290</div>
                <div className="text-xs text-muted-foreground mt-1">Баллов ЕГЭ</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">3-й</div>
                <div className="text-xs text-muted-foreground mt-1">Курс МГСУ</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">50+</div>
                <div className="text-xs text-muted-foreground mt-1">Поступивших</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-destructive font-semibold text-sm mb-2 tracking-wide uppercase">Внимание</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              «Опасности» поступления, о которых не говорят
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              На первый взгляд поступление в МГСУ может показаться простым. Но это обманчиво.
              Есть нюансы, которые обязательно изучить до подачи документов.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {dangers.map((d, i) => (
              <motion.div
                key={d.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border hover:border-destructive/30 transition-colors"
              >
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-destructive/10 flex items-center justify-center mb-2 md:mb-4">
                  <d.icon className="w-4 h-4 md:w-6 md:h-6 text-destructive" />
                </div>
                <h3 className="font-display font-bold text-xs md:text-lg mb-1 md:mb-2">{d.title}</h3>
                <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-5 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Результат</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Что вы получите на консультации</h2>
          </motion.div>
          <div className="space-y-5">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-background rounded-2xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-14 text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Не откладывай поступление на потом
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto text-sm">
            Оставь заявку сейчас — и я помогу тебе избежать ошибок, которые совершают 90% абитуриентов
          </p>
          <ContactForm dark />
        </motion.div>
      </section>

      {/* About University */}
      <section id="university" className="py-20 px-5 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Университет</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">НИУ МГСУ — главный строительный вуз страны</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Московский государственный строительный университет — один из ведущих технических вузов России
              с более чем 100-летней историей
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl"
            >
              <img src={mgsuCampus} alt="Кампус МГСУ" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="overflow-hidden rounded-2xl"
            >
              <img src={mgsuBuilding} alt="Здание МГСУ" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Топ-5 технических вузов", desc: "МГСУ стабильно входит в пятёрку лучших инженерных университетов России" },
              { icon: Award, title: "100+ лет истории", desc: "Основан в 1921 году. За это время подготовлены десятки тысяч инженеров" },
              { icon: MapPin, title: "Кампус в Москве", desc: "Современный кампус с лабораториями, спортивными комплексами и общежитиями" },
              { icon: Users, title: "20 000+ студентов", desc: "Одно из крупнейших сообществ будущих строителей, архитекторов и инженеров" },
              { icon: BookOpen, title: "30+ направлений", desc: "От строительства до IT, экологии, архитектуры и управления недвижимостью" },
              { icon: Target, title: "95% трудоустройство", desc: "Выпускники востребованы в крупных строительных компаниях и госструктурах" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section id="services" className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Тарифы</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Выбери свой формат</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Два варианта помощи — от полного сопровождения до VIP-менторства
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-2xl p-7 border flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10 bg-card"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Популярный
                  </div>
                )}
                <h3 className="font-display font-bold text-xl mb-1">{plan.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>
                <div className="font-display font-extrabold text-3xl mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  Выбрать
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Подтверждено</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Мои достижения</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Результаты, которые подтверждают мою экспертизу — от аттестата с отличием до научных публикаций и практик в крупнейших организациях
            </p>
          </motion.div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => {
              const Wrapper = a.pdf ? motion.a : motion.div;
              const linkProps = a.pdf ? { href: a.pdf, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Wrapper
                  key={a.title}
                  {...linkProps}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {a.pdf && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="inline-flex items-center gap-1.5 bg-primary-foreground/90 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                          <ExternalLink className="w-3 h-3" />
                          Открыть документ
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${a.badgeColor}`}>
                        {a.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Mobile compact list */}
          <div className="sm:hidden space-y-3">
            {achievements.map((a, i) => {
              const Wrapper = a.pdf ? motion.a : motion.div;
              const linkProps = a.pdf ? { href: a.pdf, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Wrapper
                  key={a.title}
                  {...linkProps}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 bg-card rounded-xl border border-border p-3 hover:border-primary/40 transition-colors"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-14 h-14 rounded-lg object-cover object-top shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${a.badgeColor}`}>
                        {a.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm truncate">{a.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">{a.description}</p>
                  </div>
                  {a.pdf && <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-16 text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Готов поступить в МГСУ?
          </h2>
          <p className="text-primary-foreground/80 mb-4 max-w-md mx-auto">
            Записывайтесь. Я расскажу вам то, что не пишут в официальных брошюрах
            и о чём молчат на днях открытых дверей.
          </p>
          <div className="mb-8">
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Или напишите в Telegram: @gam1za
            </a>
          </div>
          <ContactForm dark />
        </motion.div>
      </section>

      {/* Cross-navigation */}
      <section className="py-14 px-5 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-6">Смотрите также консультации по другим вузам</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-border px-7 py-3.5 rounded-xl text-sm font-bold hover:border-primary/40 transition-colors"
            >
              <GraduationCap className="w-5 h-5" />
              Все университеты
            </Link>
            <Link
              to="/sechenov"
              className="inline-flex items-center justify-center gap-2 border-2 border-border px-7 py-3.5 rounded-xl text-sm font-bold hover:border-primary/40 transition-colors"
            >
              ПоступиВСЕЧУ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-display font-bold">
            <GraduationCap className="w-5 h-5 text-primary" />
            ПоступиВМГСУ
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Гамзатов Азнаур. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
