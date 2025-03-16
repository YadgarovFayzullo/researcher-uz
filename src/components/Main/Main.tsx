"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sun, Moon, Eye, ArrowDownToLine } from "lucide-react";
import Navbar from "../ui/Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme) {
      setDarkMode(storedTheme === "true");
    }
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem("darkMode", checked.toString());
  };

  return (
    <div>
      <Navbar />
      <div
        className={cn(
          "min-h-screen p-6",
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        )}
      >
        <header className="flex justify-between items-center mb-6">
          <h1 className="md:text-2xl font-light text-left md:text-center w-full md:ml-5">
            Научная электронная библиотека "Researcher Uz"
          </h1>
        </header>

        <div className="flex flex-col items-center mb-6">
          <div className="flex w-full md:w-[40%] md:justify-center mb-4">
            <Input placeholder="Поиск..." className="flex-grow" />
            <Button className="ml-2">Искать</Button>
          </div>
          <h4 className="text-sm text-center md:text-left md:w-[40%]">
            ResearcherUz — это научная электронная библиотека, построенная на
            парадигме открытой науки (Open Science), основными задачами которой
            является популяризация науки и научной деятельности, общественный
            контроль качества научных публикаций, развитие междисциплинарных
            исследований, современного института научной рецензии, повышение
            цитируемости российской науки и построение инфраструктуры знаний.
          </h4>
        </div>

        <section>
          <div className="md:px-[10%] mt-12">
            <h2 className="text-xl font-semibold mb-4">Популярные статьи</h2>
            {articles.map((article, index) => (
              <Card
                key={article.title}
                className={cn(
                  "p-4 shadow-none transition-colors hover:bg-[#00000021] rounded-none border-none",
                  index % 2 !== 0 ? "bg-[#0000000A] dark:bg-blue-50" : ""
                )}
              >
                <CardContent className="px-0">
                  <div className="flex md:hidden items-center justify-end mb-2">
                    <div className="flex gap-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <Eye className="w-4 h-4" /> {article.views}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <ArrowDownToLine className="w-4 h-4" />{" "}
                        {article.installs}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="flex-1">{article.title}</h3>
                    <div className="hidden md:flex items-center">
                      <div className="flex gap-4 min-w-[140px] justify-end">
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 min-w-[70px] justify-end">
                          <Eye className="flex-shrink-0" />{" "}
                          <span className="w-full">{article.views}</span>
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 min-w-[70px] justify-end">
                          <ArrowDownToLine className="flex-shrink-0" />{" "}
                          <span className="w-full">{article.installs}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const articles = [
  {
    title: "К вопросу применения автомобильной электроники в автосервисе",
    views: 29782,
    installs: 103,
  },
  {
    title:
      "Уголовный кодекс Финляндии 1889 г. как законодательный источник европейской интеграции",
    views: 17985,
    installs: 54,
  },
  {
    title: " мысли о поле, заросшем сорняками",
    views: 5142,
    installs: 224,
  },
  {
    title:
      "Европейские путешествия Л. Н. Толстого (к 100-летию со дня смерти Л. Н. Толстого)",
    views: 4683,
    installs: 33,
  },
  {
    title: "FOTONASTIYA HAQIDA UMUMIY TUSHUNCHA VA XUSUSIYATLARI",
    views: 4446,
    installs: 138,
  },
  {
    title:
      "Организация летнего детского оздоровительного отдыха в условиях реализации национального проекта Образование",
    views: 3807,
    installs: 27,
  },
  {
    title: "Проблемы и перспективы развития лизинга в России",
    views: 3285,
    installs: 45,
  },
  {
    title: "NIZOLAR VA ULARNI BOSHQARISH TARTIBI",
    views: 3206,
    installs: 54,
  },
  {
    title: "Нумизматика: история науки, современное состояние",
    views: 1984,
    installs: 86,
  },
  {
    title: "Развитие робототехники и ее будущее",
    views: 1846,
    installs: 92,
  },
  {
    title:
      "Уголовный кодекс Финляндии 1889 г. как законодательный источник европейской интеграции",
    views: 17985,
    installs: 54,
  },
  {
    title: " мысли о поле, заросшем сорняками",
    views: 5142,
    installs: 224,
  },
  {
    title:
      "Европейские путешествия Л. Н. Толстого (к 100-летию со дня смерти Л. Н. Толстого)",
    views: 4683,
    installs: 33,
  },
  {
    title: "FOTONASTIYA HAQIDA UMUMIY TUSHUNCHA VA XUSUSIYATLARI",
    views: 4446,
    installs: 138,
  },
  {
    title:
      "Организация летнего детского оздоровительного отдыха в условиях реализации национального проекта Образование",
    views: 3807,
    installs: 27,
  },
  {
    title: "Проблемы и перспективы развития лизинга в России",
    views: 3285,
    installs: 45,
  },
  {
    title: "NIZOLAR VA ULARNI BOSHQARISH TARTIBI",
    views: 3206,
    installs: 54,
  },
  {
    title: "Нумизматика: история науки, современное состояние",
    views: 1984,
    installs: 86,
  },
  {
    title: "Развитие робототехники и ее будущее",
    views: 1846,
    installs: 92,
  },
  {
    title:
      "Уголовный кодекс Финляндии 1889 г. как законодательный источник европейской интеграции",
    views: 17985,
    installs: 54,
  },
  {
    title: " мысли о поле, заросшем сорняками",
    views: 5142,
    installs: 224,
  },
  {
    title:
      "Европейские путешествия Л. Н. Толстого (к 100-летию со дня смерти Л. Н. Толстого)",
    views: 4683,
    installs: 33,
  },
  {
    title: "FOTONASTIYA HAQIDA UMUMIY TUSHUNCHA VA XUSUSIYATLARI",
    views: 4446,
    installs: 138,
  },
  {
    title:
      "Организация летнего детского оздоровительного отдыха в условиях реализации национального проекта Образование",
    views: 3807,
    installs: 27,
  },
  {
    title: "Проблемы и перспективы развития лизинга в России",
    views: 3285,
    installs: 45,
  },
  {
    title: "NIZOLAR VA ULARNI BOSHQARISH TARTIBI",
    views: 3206,
    installs: 54,
  },
  {
    title: "Нумизматика: история науки, современное состояние",
    views: 1984,
    installs: 86,
  },
  {
    title: "Развитие робототехники и ее будущее",
    views: 1846,
    installs: 92,
  },
  {
    title:
      "Уголовный кодекс Финляндии 1889 г. как законодательный источник европейской интеграции",
    views: 17985,
    installs: 54,
  },
  {
    title: " мысли о поле, заросшем сорняками",
    views: 5142,
    installs: 224,
  },
  {
    title:
      "Европейские путешествия Л. Н. Толстого (к 100-летию со дня смерти Л. Н. Толстого)",
    views: 4683,
    installs: 33,
  },
  {
    title: "FOTONASTIYA HAQIDA UMUMIY TUSHUNCHA VA XUSUSIYATLARI",
    views: 4446,
    installs: 138,
  },
  {
    title:
      "Организация летнего детского оздоровительного отдыха в условиях реализации национального проекта Образование",
    views: 3807,
    installs: 27,
  },
  {
    title: "Проблемы и перспективы развития лизинга в России",
    views: 3285,
    installs: 45,
  },
  {
    title: "NIZOLAR VA ULARNI BOSHQARISH TARTIBI",
    views: 3206,
    installs: 54,
  },
  {
    title: "Нумизматика: история науки, современное состояние",
    views: 1984,
    installs: 86,
  },
  {
    title: "Развитие робототехники и ее будущее",
    views: 1846,
    installs: 92,
  },
];
