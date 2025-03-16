"use client";

import { ArrowDownToLine, Eye, File } from "lucide-react";
import Link from "next/link";
import React from "react";
import Navbar from "../ui/Navbar";

interface PdfFile {
  name: string;
  authors: string;
  year: string;
  link: string;
}

export const pdfFiles: PdfFile[] = [
  {
    name: "TENGLAMANING ILDIZINI KESMANI TENG IKKIGA BO‘LISH USULI BILAN TOPISH",
    authors: "Imomali Abirayev , Barno Ashurova",
    year: "2024",
    link: "IE&GS1.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
  {
    name: "BIR O‘LCHOVLI MUHITDA KO‘NDALANG TO‘LQIN JARAYONLARI, TENGLAMALARI VA ULARNING TAHLILI",
    authors: "Muxriddin Akram o‘g‘li Quzratov",
    year: "2024",
    link: "IE&GS2.pdf",
  },
  {
    name: "СHIZIQLI ALGEBRA ELEMENTLARI MATRITSA VA DETERMINANTLARNI HISOBLASH USULLARI.",
    authors:
      "Alisher Nematilloyevich Ubaydulloyev , Abdurahim Sobirjon o‘g‘li Odilov",
    year: "2024",
    link: "IE&GS3.pdf",
  },
];

const EachDoc: React.FC = () => {


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="flex flex-col items-center px-4 md:px-0">
        <div className="max-w-4xl w-full rounded-md p-6 font-Montserrat">
          <div className="flex flex-col md:flex-row items-start gap-6 mt-6">
            <img
              className="shadow-md w-40 md:w-28 self-start"
              src="https://cyberleninka.ru/journal/n/servis-v-rossii-i-za-rubezhom/cover/100"
              alt="Book Cover"
            />
            <div className="flex flex-col flex-1">
              <h2 className="font-base text-gray-800 text-lg">
                Сервис в России и за рубежом
              </h2>
              <h4 className="text-xs text-gray-600 mt-1">
                Научный журнал на тему: Экономика и бизнес, Социологические
                науки
              </h4>
              <div className="bg-[#d00000] mt-2 h-5 w-12   flex items-center justify-center">
                <h4 className="text-white text-center text-xs">ВАК</h4>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="mt-5 border-t mb-10">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-light text-gray-500">Статистика</h1>
              <h4 className="text-end font-light text-gray-500">
                Всего статей: 838
              </h4>
            </div>
            <div className="flex items-center justify-center mt-5 gap-2">
              <ArrowDownToLine className="text-gray-400" />
              <p className="font-light">453453</p>
              <Eye className="text-gray-400" />
              <p className="font-light">453453</p>
            </div>
          </div>

          {/* description */}
          <div className="mt-5 border-t">
            <h1 className="mt-3 text-xl font-light text-gray-500">
              Описание научного журнала
            </h1>
            <h3 className="text-gray-700 mt-2">
              «Сервис в России и за рубежом» – элект  ронный научный журнал,
              освещающий вопросы сервисологии как науки и общественной практики
              людей, а также социально-экономические аспекты развития сферы
              услуг. Журнал издаётся с 2007 года. Миссия журнала – расти и
              развиваться вместе с сервисом, быть его проводниками в современном
              обществе.
            </h3>
          </div>

          {/* about napravleniye */}
          <div className="mt-5 border-t grid grid-cols-2 gap-4">
            <div>
              <h1 className="mt-3 text-xl font-light text-gray-500 ">
                Издательство
              </h1>
              <h3 className="text-gray-700">
                Федеральное государственное бюджетное образовательное учреждение
                высшего профессионального образования «Российский
                государственный университет туризма и сервиса»
              </h3>
            </div>

            <div>
              <h1 className="text-xl font-light text-gray-500 mt-3">
                Область наук
              </h1>
              <h3 className="text-gray-700 mt-2 w-54">
                Экономика и бизнес Социологические науки
              </h3>
            </div>
          </div>

          {/* issn */}
          <div className="mt-5 border-t grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-xl font-light text-gray-500 mt-3">ISSN</h1>
              <h1 className="font-ligh">Печатный: 34N348-N34</h1>
              <h1 className="font-ligh">Электронный: 34N348-N34</h1>
            </div>
          </div>

          {/* filter header */}
          <div className="mt-5 border-t gap-4">
            <div className="flex justify-between mt-5">
              <h1 className="font-semibold text-gray-500 text-lg">2024 год</h1>
              <h1 className="bg-gray-200 px-2">Выбрать другой год</h1>
            </div>  
          </div>

          {/* filter 2 */}
          <div className="mt-5 border-b border-t gap-4">
            <div className="flex gap-3 pb-5 mt-5">
              <h1 className="bg-gray-200 px-2">2021</h1>
              <h1 className="bg-gray-200 px-2">2022</h1>
              <h1 className="bg-gray-200 px-2">2023</h1>
              <h1 className="bg-gray-200 px-2">2024</h1>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            {pdfFiles.map((pdf, index) => (
              <Link
                key={index}
                href={pdf.link}
                className={`p-5 hover:bg-gray-200 transition ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white text-black"
                }`}
              >
                <p className="font-medium">{pdf.name}</p>
                <div
                  className={`flex gap-1 ${
                    index % 2 === 0 ? "text-gray-600" : "text-gray-600"
                  }`}
                >
                  <p className="font-light">{pdf.year} /</p>
                  <h5 className="font-light">{pdf.authors}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EachDoc;
