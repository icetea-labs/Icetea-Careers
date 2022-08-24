// @ts-ignore
import { CKEditor } from "ckeditor4-react";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";
import { ckeditorConfig } from "./Description";

function Benefits(props: any) {
  const classes = useStyles();
  const { setValue, errors, jobData, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Benefits</label>

        <Controller
          control={control}
          name="benefits"
          rules={{ required: true }}
          render={(field: any) => {
            return (
              <CKEditor
                {...field}
                config={ckeditorConfig}
                name="benefits"
                initData={jobData?.benefits}
                onReady={(editor: any) => {}}
                onChange={(event: any) => {
                  const data = event.editor.getData();
                  setValue("benefits", data);
                }}
              />
            );
          }}
        />
        {errors.benefits && <RequiredError />}
      </div>
    </>
  );
}

export default Benefits;
