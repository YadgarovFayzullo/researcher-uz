import { useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";
import { Eye } from "lucide-react"; // Используем иконку из Lucide

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js`;

const PDFPreview = ({ fileUrl }: { fileUrl: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<pdfjs.RenderTask | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadPDF = async () => {
      try {
        if (renderTaskRef.current) {
          await renderTaskRef.current.cancel();
          renderTaskRef.current = null;
        }

        if (!isMounted) return;

        const loadingTask = pdfjs.getDocument(fileUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const scale = 0.8;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas || !isMounted) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = { canvasContext: context, viewport };
        renderTaskRef.current = page.render(renderContext);
        await renderTaskRef.current.promise;

        renderTaskRef.current = null;
      } catch (err) {
        const error = err as Error;
        if (error.name !== "RenderingCancelledException") {
          console.error("Ошибка при загрузке PDF:", error.message);
        }
      }
    };

    loadPDF();

    return () => {
      isMounted = false;
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch (err) {
          console.warn("Ошибка при отмене рендеринга:", (err as Error).message);
        }
      }
    };
  }, [fileUrl]);

  return (
    <>
      {/* Превью PDF */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
          cursor: "pointer",
          border: "1px solid #ccc",
          overflow: "hidden",
          maxWidth: "150px",
          maxHeight: "200px",
          backgroundColor: isHovered ? "#f5f5f5" : "white",
          transition: "background-color 0.3s ease",
        }}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            filter: isHovered ? "brightness(80%)" : "none",
            transition: "filter 0.1s ease",
          }}
        />
        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "8px",
              borderRadius: "50%",
            }}
          >
            <Eye color="white" size={24} />
          </div>
        )}
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              height: "90%",
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                zIndex: 10,
              }}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Встроенный PDF */}
            <iframe
              src={fileUrl}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PDFPreview;
