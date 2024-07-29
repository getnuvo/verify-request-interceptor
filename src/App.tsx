import "./App.css";
import { NuvoImporter } from "nuvo-react";

function App() {
  return (
    <div className="App">
      <NuvoImporter
        licenseKey={"test"}
        onResults={(res, identifier, complete) => {
          complete();
          console.log(res);
        }}
        settings={{
          developerMode: true,
          identifier: "contact_data",
          allowManualInput: true,
          columns: [
            {
              key: "name",
              label: "Name",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              key: "email",
              label: "Email",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              key: "phone",
              label: "Phone",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              key: "date",
              label: "Date",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
