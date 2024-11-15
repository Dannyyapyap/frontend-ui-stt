import "./index.css";
import FileUpload from "../components/FileUpload";
import SearchRecord from "../components/SearchRecord";

export default function Dashboard() {
  return (
    <div className="main-container">
      <div className="components-container">
        <FileUpload />
        <SearchRecord />
      </div>
    </div>
  );
}
