import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";

export default function MainLayout(props: { children: any }) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
