import "./App.css";
import { TextInput } from "./components/input/input-field";
import { CreateLink } from "./components/crud-ops/create-link";
import { Sidebar } from "./components/side-bar.tsx/sidebar";
import { TitleBar } from "./components/title-bar/TitleBar";
import { useState } from "react";
import { UpdateLink } from "./components/crud-ops/update-link";

function App() {
  const [overlayOn, setOverlayOn] = useState(false);
  const handleCreate = () => {
    setOverlayOn(true);
  };
  const dismissOverlay = () => {
    setOverlayOn(false);
  };
  const tags: string[] = [];
  return (
    <>
      {overlayOn ? (
        <CreateLink
          onClose={dismissOverlay}
          onSave={() => {}}
          onAddTag={() => {}}
          onRemoveTag={() => {}}
          tags={tags}
        ></CreateLink>
      ) : (
        ""
      )}
      {/* {overlayOn ? <UpdateLink onClose={dismissOverlay}></UpdateLink> : ""} */}
      <TitleBar />
      <br />
      <TextInput
        type="textarea"
        label="description"
        placeholder="Enter the description for the link"
      />

      <br />
      <TextInput
        type="text"
        label="Practice"
        placeholder="Enter practice title"
      />

      <br />
      <Sidebar
        onSearch={() => {}}
        onCreate={handleCreate}
        onSelection={() => {}}
        onDelete={() => {}}
        selectionState={false}
      ></Sidebar>
      <br />
    </>
  );
}

export default App;
