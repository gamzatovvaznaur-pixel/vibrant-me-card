import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, ArrowRight, CheckCircle, Send, MessageCircle,
  Clock, Zap, ShieldAlert, XCircle, Stethoscope
} from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xzdkrlwj";
const TG_LINK = "https://t.me/gam1za";

const ContactForm = () => {
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
      <div className="text-center py-6 text-primary-foreground">
        <CheckCircle className="w-10 h-10 mx-auto mb-3 text-green-400" />
        <p className="font-bold text-lg">Заявка отправлена!</p>
        <p className="text-sm mt-1 text-primary-foreground/70">Свяжусь с вами в течение 2 часов</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        name="phone"
        required
        placeholder="Телефон или Telegram"
        className="flex-1 px-4 py-3.5 rounded-xl text-sm border-0 outline-none focus:ring-2 focus:ring-white/40 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 bg-white text-foreground py-3.5 px-6 rounded-xl text-sm font-extrabold transition-all hover:scale-105 hover:shadow-xl disabled:opacity-60"
      >
        <Send className="w-4 h-4" />
        {loading ? "..." : "Записаться"}
      </button>
    </form>
  );
};

const mistakes = [
  { icon: XCircle, text: "Не знали про внутренний конкурс — попали на нежеланный факультет" },
  { icon: Clock, text: "Пропустили дедлайн подачи оригинала — потеряли бюджет" },
  { icon: ShieldAlert, text: "Не учли разброс кафедр по Москве — 3 часа в дороге каждый день" },
  { icon: AlertTriangle, text: "Не подготовили нужные документы — развернули в приёмной" },
];

const SechenovSale = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* BLOCK 1: Hero */}
      <section
        className="min-h-screen flex items-center justify-center px-5 py-16 relative"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="relative max-w-2xl mx-auto text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-500/20 text-red-200 border border-red-400/30 px-4 py-2 rounded-full text-xs font-bold mb-8 backdrop-blur-sm"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Медвуз — это не только баллы ЕГЭ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] mb-6"
          >
            Уверен, что поступишь в&nbsp;Сеченова?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-6 max-w-xl mx-auto"
          >
            Студент с <span className="font-extrabold text-white">297 баллами ЕГЭ и БВИ</span>, выбиравший между
            Сеченова, Пирогова, Павлова и КубГМУ, расскажет{" "}
            <span className="underline decoration-red-300 decoration-2 underline-offset-4">
              всю правду о поступлении в мед
            </span>{" "}
            — за одну консультацию.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center gap-6 text-sm text-primary-foreground/70 mb-10"
          >
            <span className="flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-green-300" /> 3 курс Сеченова
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-300" /> 297 баллов + БВИ
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ContactForm />
            <p className="mt-4 text-xs text-primary-foreground/50">
              Или{" "}
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground/80 inline-flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                напишите в Telegram
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 2: Mistakes */}
      <section className="py-16 md:py-20 px-5 bg-card">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
              Вот что случилось с теми, кто{" "}
              <span className="text-destructive">«разберётся сам»</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Поступление в медицинский — это минное поле. Один неверный шаг стоит года жизни.
            </p>
          </motion.div>

          <div className="space-y-3 mb-10">
            {mistakes.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 bg-destructive/5 border border-destructive/15 rounded-xl p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <m.icon className="w-4.5 h-4.5 text-destructive" />
                </div>
                <p className="text-sm font-semibold">{m.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-foreground text-background rounded-2xl p-7 md:p-10 text-center"
          >
            <p className="font-display font-extrabold text-xl md:text-2xl mb-2">
              Одна консультация = защита от всех ошибок
            </p>
            <p className="text-background/60 text-sm mb-6 max-w-md mx-auto">
              3 490 ₽ за полный разбор поступления в мед. Это дешевле, чем год на платном из-за потерянного бюджетного места.
            </p>
            <a
              href="#final"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-extrabold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              Записаться сейчас
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 3: Final CTA */}
      <section id="final" className="py-16 md:py-20 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center rounded-3xl p-10 md:p-14 text-primary-foreground relative overflow-hidden"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
          <div className="relative">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/50 mb-4">
              Последний шанс
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
              Приёмная кампания не ждёт
            </h2>
            <p className="text-primary-foreground/75 text-sm mb-8 max-w-md mx-auto">
              Места на бюджете в мед ограничены. Запишитесь сейчас — узнайте всё, что не расскажут в приёмной комиссии.
            </p>
            <ContactForm />
            <p className="mt-5 text-xs text-primary-foreground/40">
              Свяжусь в течение 2 часов · Гарантия конфиденциальности
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SechenovSale;
