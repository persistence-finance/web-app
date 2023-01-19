import { PageLayout, Main, Aside, Search, Sidebar, GlobalStyle, AccountBar } from 'components';
import { Banner, HotCollections, RecommendedNFTs, Balances, Earnings, Transactions, BalanceActions } from 'sections';

function Home() {
  return (
    <PageLayout>
      <Main>
        <Search />
        <Banner />
        <HotCollections />
        <RecommendedNFTs />
        <HotCollections />
        <RecommendedNFTs />
      </Main>
      <Aside>
        <AccountBar />
        <Balances />
        <BalanceActions />
        <Earnings />
        <Transactions />
      </Aside>
    </PageLayout>
  );
}

export default Home;