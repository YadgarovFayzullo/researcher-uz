import Link from 'next/link';
import React from 'react'


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
];

const IssuesData = () => {
  return (
    <div>
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
  )
}

export default IssuesData