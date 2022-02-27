import * as S from "../../styles/adminMain";
import CensorshipBoard from "../../components/CensorshipBoard";
import ReportBoard from "../../components/ReportBoard";
import ReportComment from "../../components/ReportComment";

const AdminMain = () => {
  return (
    <S.MainPage>
      <CensorshipBoard />
      <ReportBoard />
      <ReportComment />
    </S.MainPage>
  );
};

export default AdminMain;
