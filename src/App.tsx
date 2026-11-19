import "./App.css";
import { TextInput } from "./components/input/input-field";
import { CreateLink } from "./components/crud-ops/create-link";
import { Sidebar } from "./components/side-bar.tsx/sidebar";
import { useState } from "react";
import { MostRecentItem } from "./components/most-recent/MostRecent";

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
      <MostRecentItem
        title="Touch Typing"
        url="keybr.com"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam
        ad repellendus libero reiciendis nihil perferendis minima maxime maiores
        perspiciatis."
      />

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
