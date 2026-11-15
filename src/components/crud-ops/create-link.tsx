import React from "react";
import styles from "./crud.module.css";
import { Overlay } from "../overlay/overlay";
import { Button } from "../input/button";
import { X, Add } from "reicon-react";
import { Text } from "../text/text";
import { TextInput } from "../input/input-field";

type CreateLinkProps = {
  onClose: () => void;
  onSave: () => void;
  onAddTag: () => void;
  onRemoveTag: () => void;
  tags: string[];
};

export const CreateLink: React.FC<CreateLinkProps> = ({
  onClose,
  onSave,
  onAddTag,
  onRemoveTag,
  tags,
}) => {
  return (
    <Overlay>
      <div className={styles["create-container"]}>
        <div className={styles["heading-container"]}>
          <Text type="heading">New Link</Text>
          <Button oncClick={onClose} type="secondary">
            <X />
          </Button>
        </div>

        <div className={styles["input-container"]}>
          <TextInput
            type="text"
            label="Title"
            placeholder="Describe the link here"
          ></TextInput>
          <TextInput
            type="textarea"
            label="Description"
            placeholder="Describe the link here"
          ></TextInput>

          <TextInput
            type="link"
            label="Link"
            placeholder="Paste the URL here"
          ></TextInput>

          <div className={styles.tags}>
            <div className={styles["add-tags"]}>
              <TextInput
                type="text"
                label="Tag"
                placeholder="Type the tag name here"
              ></TextInput>
              <Button oncClick={onAddTag}>
                <Add />
              </Button>
            </div>

            <div className="display">
              {tags.map((tag) => {
                return (
                  <div className={styles.tag}>
                    {tag}
                    {"  "}
                    <Button oncClick={onRemoveTag}>
                      <X />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          <Button oncClick={onSave}>Save Link</Button>
        </div>
      </div>
    </Overlay>
  );
};
