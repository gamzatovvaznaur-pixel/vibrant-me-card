import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, MessageCircle, Star, ArrowRight, BookOpen, Users, Target, Clock, Phone, Building2, Award, MapPin } from "lucide-react";
import aznaur from "@/assets/aznaur-portrait.jpg";
import mgsu1 from "@/assets/mgsu-campus-1.jpg";
import mgsu2 from "@/assets/mgsu-campus-2.jpg";

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
    title: "Экспресс-консультация",
    price: "Бесплатно",
    description: "Быстрые ответы на основные вопросы о поступлении",
    features: [
      "30-минутный созвон",
      "Обзор направлений МГСУ",
      "Ответы на ваши вопросы",
      "Рекомендации по подготовке",
    ],
    popular: false,
    accent: false,
  },
  {
    title: "Полное сопровождение",
    price: "5 000 ₽",
    description: "Индивидуальный план поступления от А до Я",
    features: [
      "Анализ ваших шансов на поступление",
      "Подбор направления и специальности",
      "Помощь со сбором документов",
      "Стратегия подачи заявлений",
      "Поддержка до зачисления",
      "Чат для вопросов 24/7",
    ],
    popular: true,
    accent: false,
  },
  {
    title: "VIP-наставничество",
    price: "12 000 ₽",
    description: "Максимальная поддержка + подготовка к учёбе",
    features: [
      "Всё из «Полного сопровождения»",
      "Подготовка к внутренним экзаменам",
      "Знакомство с жизнью в МГСУ",
      "Советы по общежитию и быту",
      "Помощь с адаптацией на 1 курсе",
      "3 месяца менторства после поступления",
    ],
    popular: false,
    accent: true,
  },
];

const advantages = [
  { icon: BookOpen, title: "Знаю изнутри", desc: "Я сам прошёл через поступление и знаю все подводные камни" },
  { icon: Target, title: "Точные советы", desc: "Только актуальная информация, никакой воды из интернета" },
  { icon: Users, title: "Личный подход", desc: "Разбираю каждую ситуацию индивидуально, без шаблонов" },
  { icon: Clock, title: "На связи", desc: "Отвечаю быстро и всегда готов помочь в чате" },
];

const steps = [
  { num: "01", title: "Оставьте заявку", desc: "Напишите мне в Telegram или заполните форму" },
  { num: "02", title: "Бесплатный созвон", desc: "Обсудим вашу ситуацию и подберём план" },
  { num: "03", title: "Работаем вместе", desc: "Следуем стратегии и готовимся к поступлению" },
  { num: "04", title: "Вы в МГСУ!", desc: "Поздравляю — вы студент лучшего строительного вуза" },
];

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
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#about" className="hover:text-foreground transition-colors">Обо мне</a>
            <a href="#how" className="hover:text-foreground transition-colors">Как это работает</a>
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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4" />
              Набор 2026 уже открыт
            </motion.div>
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6"
            >
              Поступи в{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
                МГСУ
              </span>
              {" "}без стресса
            </motion.h1>
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8"
            >
              Я — Азнаур Гамзатов, студент МГСУ. Помогу тебе разобраться в поступлении, 
              выбрать направление и пройти весь путь от заявки до зачисления.
            </motion.p>
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                Смотреть тарифы
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-border px-7 py-3.5 rounded-xl text-sm font-bold hover:border-primary/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Бесплатная консультация
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
                <CheckCircle className="w-4 h-4 text-accent" /> Личный опыт
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
                src={aznaur}
                alt="Азнаур Гамзатов"
                width={640}
                height={800}
                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-5 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Преимущества</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Почему стоит обратиться ко мне</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <a.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section id="services" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Тарифы</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Выбери свой формат</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Три варианта помощи — от быстрой консультации до полного сопровождения с менторством
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                    ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
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
              src={aznaur}
              alt="Азнаур Гамзатов"
              width={640}
              height={800}
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
                Привет! Я студент <strong className="text-foreground">НИУ МГСУ</strong> — главного строительного 
                университета страны. Когда я сам поступал, столкнулся с кучей вопросов: какое направление выбрать, 
                как правильно подать документы, на что обратить внимание.
              </p>
              <p>
                Сейчас я помогаю абитуриентам пройти этот путь проще и увереннее. Я знаю, как устроен 
                приёмный процесс изнутри, какие направления востребованы и как выделиться среди конкурентов.
              </p>
              <p>
                Моя цель — чтобы каждый, кто мечтает учиться в МГСУ, получил чёткий план действий 
                и поддержку на каждом этапе.
              </p>
            </div>
            <div className="flex gap-8 mt-8">
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">50+</div>
                <div className="text-xs text-muted-foreground mt-1">Поступивших</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">98%</div>
                <div className="text-xs text-muted-foreground mt-1">Довольных</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-primary">2+</div>
                <div className="text-xs text-muted-foreground mt-1">Года опыта</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Процесс</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Как это работает</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 flex gap-5"
              >
                <div className="font-display font-extrabold text-4xl text-primary/20">{s.num}</div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Напиши мне — обсудим твою ситуацию и составим план действий. Первая консультация бесплатно!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-7 py-3.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Написать в Telegram
            </a>
            <a
              href="tel:+79001234567"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Позвонить
            </a>
          </div>
        </motion.div>
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
