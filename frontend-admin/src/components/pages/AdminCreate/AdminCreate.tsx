import BackButton from "../../base/ButtonLink/BackButton";
import DefaultLayout from "../../layout/DefaultLayout";
import AdminForm from "./AdminForm";

const AdminCreate = () => {
  return (
    <DefaultLayout>
      <BackButton />
      <AdminForm isEdit={false} />
    </DefaultLayout>
  );
};

export default AdminCreate;
