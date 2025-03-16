"use client";

import {
  ArrowDownToLine,
  ArrowDownToLineIcon,
  Eye,
  Quote,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Navbar from "../ui/Navbar";

import { useCitationModal } from "../../store/useCitationModal";
import PDFPreview from "../../lib/PDFViewer";
import CitationModal from "../../store/useCitationModal";
import IssuesData from "@/lib/IsuesData";
import PdfSinglePage from "@/lib/PdfSinglePage";

const EachDoc: React.FC = () => {
  const { open } = useCitationModal();

  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center px-4 md:px-0">
        <div className="max-w-4xl w-full rounded-md p-6 font-Montserrat">
          <div className="flex flex-col md:flex-row items-start gap-6 mt-6">
            <PDFPreview fileUrl="/test.pdf" />

            <div className="flex flex-col flex-1">
              <h2 className="font-base text-lg">
                Уголовный кодекс Финляндии 1889 г. как законодательный источник
                европейской интеграции
              </h2>
              <h4 className="text-xs text-gray-600 mt-1">
                Текст научной статьи по специальности «Право»
              </h4>
              <h4 className="text-xs font-medium mt-4">
                <span className="bg-blue-200 px-2 py-1 font-light">
                  Кангаспуро Лариса
                </span>
              </h4>
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="items-end flex gap-3 absolute bottom-0 right-0 p-4">
              <h2 className="text-right text-gray-500">CC BY</h2>
              <h2 className="text-gray-500">DOI</h2>
              <div className="flex">
                <Eye className="text-gray-500 mr-1" />
                <h2 className="text-gray-500">238748</h2>
              </div>
              <div className="flex">
                <ArrowDownToLine className="text-gray-500 mr-1" />
                <h2 className="text-gray-500">3248</h2>
              </div>
            </div>
          </div>

          {/* Like & Quote Section */}
          <div className="mt-5 border-t mb-5 justify-items-center">
            <div className="flex gap-4 items-center mt-4">
              <div className="flex items-center bg-[#e5e5e5] px-5 py-3 rounded-sm w-[150px]">
                <div className="flex items-center gap-1 w-1/2 justify-center cursor-pointer hover:text-green-600 transition">
                  <ThumbsUp size={"20px"} />
                  <p className="text-lg">10</p>
                </div>
                <div className="h-6 w-[1px] bg-gray-400"></div>
                <div className="flex items-center gap-1 w-1/2 justify-center cursor-pointer hover:text-red-600 transition">
                  <ThumbsDown size={"20px"} />
                  <p className="text-lg">2</p>
                </div>
              </div>

              <button
                onClick={open}
                className="bg-[#e5e5e5] px-4 py-3 rounded-md hover:bg-[#d6d6d6]"
              >
                <Quote size={24} />
              </button>

              <button className="bg-[#e5e5e5] px-4 py-3 rounded-md hover:bg-[#d6d6d6]">
                <ArrowDownToLineIcon size={24} />
              </button>

              <button className="bg-[#5b99d7] hover:bg-[#5c88b4] px-8 py-3 rounded-md  text-white text-lg">
                ЧИТАТЬ
              </button>
            </div>
          </div>

          {/* Publication Info */}
          <div className="mt-5 border-t grid grid-cols-2 gap-4">
            <div>
              <h1 className="mt-3 small-caps text-gray-500 text-xl font-light">
                Журнал
              </h1>
              <h3 className="text-gray-700">Сервис в России и за рубежом</h3>
              <div className="flex gap-3">
                <div className="bg-[#e5e5e5] mt-2 h-5 w-12 flex items-center justify-center">
                  <h4 className="text-center text-xs">2022</h4>
                </div>
                <div className="bg-[#d00000] mt-2 h-5 w-12 flex items-center justify-center">
                  <h4 className="text-white text-center text-xs ">ВАК</h4>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xl small-caps text-gray-500 mt-3 font-light">
                Область наук
              </h1>
              <h3 className="text-gray-700 mt-2 w-54">
                Экономика и бизнес, Социологические науки
              </h3>
            </div>
          </div>

          {/* key words */}
          <div className="mt-5 border-t grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-gray-500 mt-3 text-xl small-caps font-light">
                Ключевые слова
              </h1>
              <div className="flex flex-wrap items-center mt-2">
                {["АВТОМОБИЛЬ", "ЭЛЕКТРОНИКА", "СИСТЕМА"].map(
                  (keyword, index, array) => (
                    <React.Fragment key={index}>
                      <h1 className="small-caps bg-[#e5e5e5] px-1">
                        {keyword}
                      </h1>
                      {index < array.length - 1 && (
                        <span className="mx-2 text-gray-500">/</span>
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </div>

          {/* annotation */}
          <div className="mt-5 border-b">
            <div>
              <h1 className="mt-3 small-caps text-gray-500 text-xl font-light">
                Аннотация
              </h1>
              <h3 className="text-gray-700 mb-4">
                В статье проведен анализ автомобильной электроники, используемой
                при эксплуатации и обслуживании автотранспортных средств
                отечественного и импортного производства на предприятиях
                автосервиса. Проведен анализ систем управления, применяемых при
                эксплуатации автомобилей. Рассмотрена необходимость применения и
                рекомендованы отдельные системы электронного управления для
                транспортных средств различной модификации.
              </h3>
            </div>
          </div>

          {/* Year Selection */}
          {/* <div className="mt-5 border-t gap-4">
            <div className="flex justify-between mt-5">
              <h1 className="font-semibold text-gray-500 text-lg">2024 год</h1>
              <h1 className="bg-gray-200 px-2">Выбрать другой год</h1>
            </div>
          </div> */}

          {/* Year Filter */}
          {/* <div className="mt-5 border-b border-t gap-4">
            <div className="flex gap-3 pb-5 mt-5">
              {[2021, 2022, 2023, 2024].map((year) => (
                <h1 key={year} className="bg-gray-200 px-2">
                  {year}
                </h1>
              ))}
            </div>
          </div> */}

          {/* PDF Links */}

          <h1 className="mt-3 text-2xl small-caps font-light">Похожие темы</h1>

          <IssuesData />
          <div className="mt-24">
          <PdfSinglePage />
        </div>
        </div>
      </section>

      {/* modal screen */}
      <CitationModal />
    </div>
  );
};

export default EachDoc;
