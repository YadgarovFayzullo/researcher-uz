import { useState, useEffect } from "react";
import { create } from "zustand";
import { Clipboard, ClipboardCheck, X } from "lucide-react";

interface CitationModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useCitationModal = create<CitationModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

const citations = {
  ГОСТ: `Кангаспуро Лариса. Уголовный кодекс Финляндии 1889 г. как законодательный источник европейской интеграции // Петербургский исторический журнал. 2015. №4 (8). URL: https://cyberleninka.ru/article/n/ugolovnyy-kodeks-finlyandii-1889-g-kak-zakonodatelnyy-istochnik-evropeyskoy-integratsii (дата обращения: 15.03.2025).`,
  MLA: `Kangaspuro, Larisa. "The Criminal Code of Finland of 1889 as a Legislative Source of European Integration." St. Petersburg Historical Journal, no. 4 (8), 2015. URL: https://cyberleninka.ru/article/n/ugolovnyy-kodeks-finlyandii-1889-g-kak-zakonodatelnyy-istochnik-evropeyskoy-integratsii`,
  APA: `Kangaspuro, L. (2015). The Criminal Code of Finland of 1889 as a Legislative Source of European Integration. St. Petersburg Historical Journal, 4(8). Retrieved from https://cyberleninka.ru/article/n/ugolovnyy-kodeks-finlyandii-1889-g-kak-zakonodatelnyy-istochnik-evropeyskoy-integratsii`,
  Wiki: `"The Criminal Code of Finland of 1889 as a Legislative Source of European Integration" – Kangaspuro, Larisa, St. Petersburg Historical Journal, no. 4 (8), 2015. Available at: https://cyberleninka.ru/article/n/ugolovnyy-kodeks-finlyandii-1889-g-kak-zakonodatelnyy-istochnik-evropeyskoy-integratsii`,
};

export default function CitationModal() {
  const { isOpen, close } = useCitationModal();
  const [selectedFormat, setSelectedFormat] = useState<keyof typeof citations>("ГОСТ");
  const [copied, setCopied] = useState(false);
  const [particles, setParticles] = useState<{ id: number; left: number; top: number }[]>([]);

  // Сбросить состояние копирования при смене формата
  useEffect(() => {
    setCopied(false);
  }, [selectedFormat]);

  // Очистить частицы после анимации
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  // Создать эффект частиц
  const createParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: i,
        left: 20 + Math.random() * 15,
        top: 20 + Math.random() * 15,
      });
    }
    setParticles(newParticles);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(citations[selectedFormat]);
    setCopied(true);
    createParticles();
    
    // Сбросить состояние через 2 секунды
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/20 backdrop-blur-md text-white max-w-md w-full p-5 rounded-md relative border border-white/30 shadow-lg">
        {/* Закрыть модалку */}
        <button onClick={close} className="absolute top-2 right-2 hover:text-gray-300 transition-colors">
          <X size={24} />
        </button>

        {/* Заголовок */}
        <h2 className="text-lg font-semibold mb-3">Цитировать</h2>

        {/* Список форматов */}
        <div className="flex items-start">
          <div className="flex flex-col gap-2 border-r border-white/30 pr-4">
            {Object.keys(citations).map((format) => (
              <button
                key={format}
                className={`px-3 py-1 text-left rounded transition-colors ${
                  selectedFormat === format
                    ? "bg-white/30 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
                onClick={() =>
                  setSelectedFormat(format as keyof typeof citations)
                }
              >
                {format}
              </button>
            ))}
          </div>

          {/* Цитата */}
          <div className="flex-1 pl-4">
            <p className="text-sm bg-black/30 p-3 rounded-md border border-white/10">
              {citations[selectedFormat]}
            </p>

            {/* Кнопка копирования */}
            <div className="mt-3 relative">
              <button
                onClick={handleCopy}
                className={`relative px-3 py-1 rounded-md transition-all overflow-hidden ${
                  copied 
                    ? "bg-green-500/80 hover:bg-green-600/80" 
                    : "bg-blue-500/80 hover:bg-blue-600/80"
                } backdrop-blur-sm`}
              >
                {copied ? <ClipboardCheck /> : <Clipboard />}
              </button>
              
              {/* Частицы */}
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-green-400 rounded-full animate-particle opacity-0"
                  style={{
                    left: `${particle.left}px`,
                    top: `${particle.top}px`,
                    animation: `
                      particleUp 1s ease forwards,
                      fadeParticle 1s ease forwards
                    `,
                    animationDelay: `${Math.random() * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes particleUp {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(
              ${Math.random() > 0.5 ? "" : "-"}${10 + Math.random() * 20}px,
              -${20 + Math.random() * 30}px
            );
          }
        }
        
        @keyframes fadeParticle {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }
        
        .animate-particle {
          position: absolute;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}