import { FriendList } from "./FriendList/FriendList";
import friends from 'friends.json';
import { GobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import user from 'user.json';
import { UserProfile } from "./Profile/Profile";
import data from 'data.json';
import { Statistics } from "./Statistics/Statistics";
import transactions from 'transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GobalStyle/>
    </Layout>
  );
};
