// @ts-ignore
import { CKEditor } from "ckeditor4-react";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";
import { ckeditorConfig } from "./Description";

function Requirements(props: any) {
  const classes = useStyles();
  const { setValue, errors, jobData, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Requirements</label>

        <Controller
          control={control}
          name="requirements"
          rules={{ required: true }}
          render={(field: any) => {
            return (
              <CKEditor
                {...field}
                config={ckeditorConfig}
                name="requirements"
                initData={jobData?.requirements}
                onReady={(editor: any) => {}}
                onChange={(event: any) => {
                  const data = event.editor.getData();
                  setValue("requirements", data);
                }}
              />
            );
          }}
        />
        {errors.requirements && <RequiredError />}
      </div>
    </>
  );
}

export default Requirements;
