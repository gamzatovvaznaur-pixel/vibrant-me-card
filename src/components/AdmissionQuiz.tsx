import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Send, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const QUIZ_FORMSPREE = "https://formspree.io/f/xwvwwzgy";

type QuizQuestion = {
  question: string;
  options: string[];
};

interface AdmissionQuizProps {
  university: "mgsu" | "sechenov";
}

const quizData: Record<string, QuizQuestion[]> = {
  mgsu: [
    {
      question: "Сколько баллов ЕГЭ вы набрали (или ожидаете)?",
      options: ["Менее 180", "180–220", "220–260", "Более 260"],
    },
    {
      question: "На какую форму обучения вы рассчитываете?",
      options: ["Только бюджет", "Бюджет или целевое", "Платное", "Пока не определился"],
    },
    {
      question: "Знаете ли вы, какой факультет МГСУ вам подходит?",
      options: ["Да, уже выбрал", "Есть несколько вариантов", "Нет, нужна помощь", "Не знаю факультеты"],
    },
    {
      question: "Когда вы планируете подавать документы?",
      options: ["Уже подал", "В ближайший месяц", "Летом 2026", "Ещё не решил"],
    },
  ],
  sechenov: [
    {
      question: "Сколько баллов ЕГЭ вы набрали (или ожидаете)?",
      options: ["Менее 220", "220–260", "260–290", "Более 290"],
    },
    {
      question: "На какую форму обучения вы рассчитываете?",
      options: ["Только бюджет", "Бюджет или целевое", "Платное", "Пока не определился"],
    },
    {
      question: "Какой факультет Сеченова вас интересует?",
      options: ["Лечебное дело", "Стоматология / Фармация", "Другой факультет", "Не определился"],
    },
    {
      question: "Когда вы планируете подавать документы?",
      options: ["Уже подал", "В ближайший месяц", "Летом 2026", "Ещё не решил"],
    },
  ],
};

const AdmissionQuiz = ({ university }: AdmissionQuizProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = quizData[university];
  const total = questions.length;
  const isContactStep = step === total;
  const progress = ((step) / (total + 1)) * 100;

  const selectAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("university", university === "mgsu" ? "МГСУ" : "Сеченова");
    questions.forEach((q, i) => {
      formData.append(`question_${i + 1}`, q.question);
      formData.append(`answer_${i + 1}`, answers[i] || "");
    });
    formData.append("contact", contact);

    await fetch(QUIZ_FORMSPREE, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-12 text-center"
          >
            <CheckCircle className="w-14 h-14 mx-auto mb-4 text-accent" />
            <h3 className="font-display text-2xl font-bold mb-2">Спасибо за ответы!</h3>
            <p className="text-muted-foreground">
              Мы свяжемся с вами и расскажем о ваших шансах на поступление
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 px-5">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Target className="w-4 h-4" />
            Бесплатный тест
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Узнай свои шансы на поступление
          </h2>
          <p className="text-muted-foreground text-sm">
            Ответь на 4 вопроса — и мы оценим твои шансы
          </p>
        </motion.div>

        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-lg">
          <div className="mb-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Вопрос {Math.min(step + 1, total)} из {total}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <AnimatePresence mode="wait">
            {!isContactStep ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-bold text-lg md:text-xl mb-6">
                  {questions[step].question}
                </h3>
                <div className="grid gap-3">
                  {questions[step].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectAnswer(option)}
                      className="w-full text-left px-5 py-4 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium flex items-center justify-between group"
                    >
                      {option}
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-bold text-lg md:text-xl mb-2">
                  Почти готово! 🎉
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Оставь контакт — мы расскажем о твоих шансах и дадим рекомендации
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    placeholder="Телефон или Telegram"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Отправка..." : "Узнать свои шансы"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AdmissionQuiz;
