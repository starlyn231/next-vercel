import { DarkLayout } from "../../components/layout/DarkLayout";
import { MainLayout } from "../../components/layout/MainLayout";

export default function About() {
  return (
    <>
      <h1 className='title'>About</h1>
      <div>
        <p>Get started by editing&nbsp;</p>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
