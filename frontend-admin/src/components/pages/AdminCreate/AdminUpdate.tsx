import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getAdminDetail } from "../../../requests/admin";
import BackButton from "../../base/ButtonLink/BackButton";
import DefaultLayout from "../../layout/DefaultLayout";
import AdminForm, { emptyAdmin, FormData } from "./AdminForm";
import useStyles from "./styles";

const AdminUpdate = () => {
  const styles = useStyles();
  const [contentDetail, setContentDetail] = useState<FormData>(emptyAdmin);

  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id) return;
    getAdminDetail(+id)
      .then(async (res: any) => {
        if (res.status !== 200) {
          toast.error(`Server Error: ${res.message || "Load admin fail !!!"}`);
          return false;
        }
        let data = res.data;

        setContentDetail(data);

        return data;
      })
      .catch((e) => {
        console.log("Error: ", e);
        toast.error("Admin load fail !!!");
      });
  }, [id]);

  return (
    <DefaultLayout>
      <div className={styles.listButton}>
        <BackButton />
      </div>
      <AdminForm isEdit={true} jobData={contentDetail} />
    </DefaultLayout>
  );
};

export default AdminUpdate;
