import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: "100vh" }}>
      <Viewer fileUrl="/test.pdf" plugins={[defaultLayoutPluginInstance]} />
    </div>
  );
};

export default PDFViewer;
