import BackButton from "../../base/ButtonLink/BackButton";
import DefaultLayout from "../../layout/DefaultLayout";
import JobForm from "./JobForm";

const JobCreate = () => {
  return (
    <DefaultLayout>
      <BackButton />
      <JobForm isEdit={false} />
    </DefaultLayout>
  );
};

export default JobCreate;
