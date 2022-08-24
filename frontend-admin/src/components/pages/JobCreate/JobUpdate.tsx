import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getJobDetail } from "../../../requests/job";
import BackButton from "../../base/ButtonLink/BackButton";
import DefaultLayout from "../../layout/DefaultLayout";
import JobForm, { emptyJobDetail, FormData } from "./JobForm";
import useStyles from "./styles";

const JobUpdate = () => {
  const styles = useStyles();
  const [contentDetail, setContentDetail] = useState<FormData>(emptyJobDetail);

  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id) return;
    getJobDetail(+id)
      .then(async (res: any) => {
        if (res.status !== 200) {
          toast.error(`Server Error: ${res.message || "Load pool fail !!!"}`);
          return false;
        }
        let data = res.data;

        setContentDetail(data);

        return data;
      })
      .catch((e) => {
        console.log("Error: ", e);
        toast.error("Pool load fail !!!");
      });
  }, [id]);

  return (
    <DefaultLayout>
      <div className={styles.listButton}>
        <BackButton />
      </div>
      <JobForm isEdit={true} jobData={contentDetail} />
    </DefaultLayout>
  );
};

export default JobUpdate;
