// @ts-ignore
import { CKEditor } from "ckeditor4-react";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

export const ckeditorConfig = {
  language: "en",
  extraPlugins: "colorbutton",
  colorButton_colors:
    "D01F36,5EFF8B,6788FF,FFD058,B073FF," +
    "1ABC9C,2ECC71,3498DB,9B59B6,4E5F70,F1C40F," +
    "16A085,27AE60,2980B9,8E44AD,2C3E50,F39C12," +
    "E67E22,E74C3C,ECF0F1,95A5A6,DDD,FFF," +
    "D35400,C0392B,BDC3C7,7F8C8D,999,000",
};

function Description(props: any) {
  const classes = useStyles();
  const { setValue, errors, jobData, control } = props;

  useEffect(() => {}, []);

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Description</label>

        <Controller
          control={control}
          name="description"
          rules={{ required: true }}
          render={(field: any) => {
            return (
              <CKEditor
                {...field}
                config={ckeditorConfig}
                name="description"
                initData={jobData?.description}
                onReady={(editor: any) => {
                  console.log("editor loaded", editor);
                }}
                onChange={(event: any) => {
                  const data = event.editor.getData();
                  setValue("description", data);
                }}
              />
            );
          }}
        />
        {errors.description && <RequiredError />}
      </div>
    </>
  );
}

export default Description;
