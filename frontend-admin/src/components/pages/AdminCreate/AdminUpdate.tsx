import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../../../hooks/useFetch";
import BackButton from "../../base/ButtonLink/BackButton";
import DefaultLayout from "../../layout/DefaultLayout";
import AdminForm, { emptyAdmin, FormData } from "./AdminForm";
import useStyles from "./styles";

const AdminUpdate = () => {
  const styles = useStyles();
  const [contentDetail, setContentDetail] = useState<FormData>(emptyAdmin);

  const params = useParams();
  const id = params?.id;
  const { data: dataAdminDetail, error } = useFetch<any>("admins/" + id);

  useEffect(() => {
    if (!dataAdminDetail && error) {
      toast.error(error || "Load Admin info fail");
      return;
    }
    setContentDetail(dataAdminDetail);
  }, [dataAdminDetail, error]);

  return (
    <DefaultLayout>
      <div className={styles.listButton}>
        <BackButton />
      </div>
      <AdminForm isEdit={true} adminData={contentDetail} />
    </DefaultLayout>
  );
};

export default AdminUpdate;
