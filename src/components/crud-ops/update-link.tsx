import React from "react";
import { Overlay } from "../overlay/overlay";
import { Button } from "../input/button";
import { Add, X } from "reicon-react";
import { TextInput } from "../input/input-field";
import { Text } from "../text/text";
import styles from "./crud.module.css";

type UpdateLinkProps = {
  onClose: () => void;
  onSave: () => {};
  onAddTag: () => void;
  onRemoveTag: () => {};
  tags: string[];
};

export const UpdateLink: React.FC<UpdateLinkProps> = ({
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
          <Text type="heading">Update Link</Text>
          <Button oncClick={onClose} type="secondary">
            <X />
          </Button>
        </div>

        <div className={styles["input-container"]}>
          <TextInput
            type="text"
            label="Title"
            value=""
            placeholder="Describe the link here"
          ></TextInput>
          <TextInput
            type="textarea"
            label="Description"
            value=""
            placeholder="Describe the link here"
          ></TextInput>

          <TextInput
            type="link"
            label="Link"
            placeholder="Paste the URL here"
            value=""
          ></TextInput>

          <div className={styles.tags}>
            <div className={styles["add-tags"]}>
              <TextInput
                type="text"
                label="Tag"
                placeholder="Type the tag name here"
                value=""
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
