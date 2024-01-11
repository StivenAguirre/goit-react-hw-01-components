import React, {Fragment} from "react";
import { PerfilSocial } from "./PerfilSocial";
import Stadistics from "./Stadistic";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transactions from "../transactions.json"



export const App = () => {
  return (
    <Fragment>
      <PerfilSocial
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stadistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Fragment>
  );
};