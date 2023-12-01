import React, {Fragment} from "react";
import { PerfilSocial } from "./PerfilSocial";
import Stadistics from "./Stadistic";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";



export const App = () => {
  return (
    <Fragment>
      <PerfilSocial />
      <Stadistics />
      <FriendList />
      <TransactionHistory />
    </Fragment>
  );
};
