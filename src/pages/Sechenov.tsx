import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, CheckCircle, MessageCircle, Star, ArrowRight,
  BookOpen, Users, Target, Clock, Building2, Award, MapPin,
  AlertTriangle, FileText, Shield, Lightbulb, Send, ExternalLink, Trophy, Stethoscope
} from "lucide-react";
import emirHero from "@/assets/emir-photo-1.jpg";
import emirPhoto2 from "@/assets/emir-photo-2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const dangers = [
  {
    icon: FileText,
    title: "Особенности приёма",
    desc: "Бюджет, целевое и платное — у каждого формата свои подводные камни и сроки.",
  },
  {
    icon: AlertTriangle,
    title: "Документы",
    desc: "Без полного пакета документов в вуз просто не поступить — а список неочевидный.",
  },
  {
    icon: Shield,
    title: "Формат обучения",
    desc: "Длительность пар, расписание, нагрузка — всё отличается от ожиданий.",
  },
  {
    icon: MapPin,
    title: "Кафедры по городу",
    desc: "Разброс кафедр по Москве — можно тратить часы на дорогу между корпусами.",
  },
  {
    icon: Clock,
    title: "Упущенные сроки",
    desc: "Жёсткие дедлайны на каждом этапе — одна ошибка, и год потерян.",
  },
  {
    icon: Users,
    title: "Скрытый конкурс",
    desc: "На факультете с «низким» проходным может быть неочевидно высокая конкуренция.",
  },
];

const whatYouGet = [
  "Честный разбор процедуры поступления шаг за шагом",
  "Опыт человека, который прошёл ЕГЭ, олимпиады, нервы и выбор между Сеченова, Пирогова, Павлова и КубГМУ",
  "Огромное количество инсайдов о поступлении и обучении",
  "Предупреждение о типичных ошибках — тех самых «опасностях», которые превращают поступление в хаос",
];

const plans = [
  {
    title: "Полное сопровождение",
    price: "5 000 ₽",
    description: "Индивидуальный план поступления от А до Я",
    features: [
      "Анализ ваших шансов на поступление",
      "Подбор факультета и специальности",
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
      "Знакомство с жизнью в Сеченова",
      "Советы по общежитию и быту",
      "Помощь с адаптацией на 1 курсе",
      "3 месяца менторства после поступления",
    ],
    popular: false,
  },
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

const Sechenov = () => {
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
          <Link to="/sechenov" className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg">ПоступиВСЕЧУ</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Обо мне</a>
            <a href="#university" className="hover:text-foreground transition-colors">О Сеченова</a>
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

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 pb-20 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4" />
              297 баллов ЕГЭ · БВИ · Выбор между топ-вузами
            </motion.div>
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display text-3xl md:text-4xl lg:text-[3.2rem] font-extrabold leading-[1.25] mb-6"
            >
              Поступление в{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
                Сеченова
              </span>
              : на что реально обратить внимание?
            </motion.h1>
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8"
            >
              Расскажу, как студент с 297 баллами ЕГЭ и БВИ с выбором между Сеченова, Пирогова, Павлова и КубГМУ.
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
                <CheckCircle className="w-4 h-4 text-accent" /> 297 баллов ЕГЭ
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> 3 курс Сеченова
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
                src={emirHero}
                alt="Эмир Алибеков"
                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
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
              Я — Эмир Алибеков, студент 3-го курса ПМГМУ имени Сеченова. Сдал ЕГЭ на 297 баллов, 
              имел БВИ и выбирал между Сеченова, Пирогова, Павлова и КубГМУ — и сознательно выбрал Сеченова.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Target,
                title: "Персональная стратегия",
                text: "Разберу вашу ситуацию — баллы, факультет, конкурс — и составлю пошаговый план поступления",
              },
              {
                icon: AlertTriangle,
                title: "Подводные камни",
                text: "Нюансы приёма на бюджет и целевое, документы, разброс кафедр — предупрежу обо всём",
              },
              {
                icon: Shield,
                title: "Инсайды изнутри",
                text: "Знаю Сеченова как студент: факультеты, проходные, общежития — то, чего нет в буклетах",
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
              src={emirPhoto2}
              alt="Эмир Алибеков"
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Эмир Алибеков</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Меня зовут Эмир Алибеков, я студент 3-го курса{" "}
                <strong className="text-foreground">ПМГМУ имени Сеченова</strong>,
                направление лечебное дело, бюджет.
              </p>
              <p>
                Три года назад я сдал ЕГЭ на <strong className="text-foreground">297 баллов</strong> и поступил.
                Но самое интересное не это. У меня был реальный выбор: меня приняли в{" "}
                <strong className="text-foreground">РНИМУ имени Пирогова</strong>,{" "}
                <strong className="text-foreground">Павлова</strong> и{" "}
                <strong className="text-foreground">КубГМУ</strong>.
                И я сознательно выбрал Сеченова.
              </p>
              <p>
                Сейчас я хорошо знаю университет изнутри. У нас очень много факультетов,
                и каждый отличается своей спецификой и особенностями поступления.
                Я лично знаком с ребятами с разных факультетов,
                поэтому понимаю, где реально низкий проходной балл, а где — неочевидные сложности.
              </p>
            </div>
            <div className="flex gap-8 mt-8">
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">297</div>
                <div className="text-xs text-muted-foreground mt-1">Баллов ЕГЭ</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">3-й</div>
                <div className="text-xs text-muted-foreground mt-1">Курс Сеченова</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">БВИ</div>
                <div className="text-xs text-muted-foreground mt-1">Олимпиады</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dangers */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-destructive font-semibold text-sm mb-2 tracking-wide uppercase">Внимание</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Нюансы поступления, о которых не говорят
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Поступление в Сеченова — достаточно непростая задача. Есть нюансы, которые обязательно изучить до подачи документов.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold">ПМГМУ имени Сеченова — первый мед России</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Первый Московский государственный медицинский университет имени И.М. Сеченова — старейший и один из самых престижных медицинских вузов страны
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Топ-1 медицинский вуз", desc: "Сеченовский университет стабильно занимает первое место среди медицинских вузов России" },
              { icon: Award, title: "260+ лет истории", desc: "Основан в 1758 году. Старейший медицинский вуз с вековыми традициями" },
              { icon: MapPin, title: "Кампус в центре Москвы", desc: "Исторические здания и современные клиники в самом сердце столицы" },
              { icon: Users, title: "15 000+ студентов", desc: "Крупнейшее медицинское сообщество будущих врачей, фармацевтов и исследователей" },
              { icon: BookOpen, title: "Множество факультетов", desc: "Лечебное дело, стоматология, фармация, биотехнологии, клиническая психология и многое другое" },
              { icon: Target, title: "Высокое трудоустройство", desc: "Выпускники работают в лучших клиниках России и за рубежом" },
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
            Готов поступить в Сеченова?
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
              Или напишите в Telegram
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
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-border px-7 py-3.5 rounded-xl text-sm font-bold hover:border-primary/40 transition-colors"
            >
              <Building2 className="w-5 h-5" />
              ПоступиВМГСУ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-display font-bold">
            <Stethoscope className="w-5 h-5 text-primary" />
            ПоступиВСЕЧУ
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Алибеков Эмир. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Sechenov;
