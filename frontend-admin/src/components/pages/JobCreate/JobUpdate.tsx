import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../../../hooks/useFetch";
import BackButton from "../../base/ButtonLink/BackButton";
import DefaultLayout from "../../layout/DefaultLayout";
import JobForm, { emptyJobDetail, FormData } from "./JobForm";
import useStyles from "./styles";

const JobUpdate = () => {
  const styles = useStyles();
  const [contentDetail, setContentDetail] = useState<FormData>(emptyJobDetail);

  const params = useParams();
  const id = params?.id;
  const { data: dataJobDetail, error } = useFetch<any>("jobs/" + id);

  useEffect(() => {
    if (!dataJobDetail && error) {
      toast.error(error || "Load Job Detail fail");
      return;
    }
    setContentDetail(dataJobDetail);
  }, [dataJobDetail, error]);

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
