import MainContainer from "../components/Containers/MainContainer"
import { Title } from "../components/Titles/Titles"
import SearchBar from "../homeComponents/SearchBar";
import styles from "../styles/homeComponents/Home.module.scss";
import CategoryCard from "../components/Cards/CategoryCard";
import TransactionCard from "../components/Cards/TransactionCard";
import HomeProfile from "../homeComponents/HomeProfile";

const Home = () => {
  return (
    <MainContainer optionClass={styles.container}>
        <div className={styles.main}>
            {/* {search} */}
            <div className={styles.searchbar}>
                <SearchBar/>
            </div>

            <div className={styles.container}>
                <Title>Categories last 30 days</Title>
                <div className={styles.content}>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                </div>
            </div>
            
            <div className={styles.transactions}>
                <Title>Latest Transactions</Title>
                <div className={styles.content}>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                </div>
            </div>
        </div>

        <div className={styles.profile}>
            <HomeProfile/>
        </div>
    </MainContainer>
  )
}

export default Home