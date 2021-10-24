import Footer from '../shared/Footer';
import Header from '../shared/Header';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.homeContainer}>
        <Header />
      </div>
      <Footer className={style.footerContainer} />
    </>
  );
};

export default Home;
