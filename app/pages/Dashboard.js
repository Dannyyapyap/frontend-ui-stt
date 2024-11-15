import "./index.css";
import FileUpload from "../components/FileUpload";

export default function Dashboard() {
  return (
    <div className="main-container">
      <div className="components-container">
        <FileUpload />
      </div>
    </div>
  );
}
