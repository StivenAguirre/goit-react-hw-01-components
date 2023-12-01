import React, {Fragment} from "react";
import { user } from "index";
import perfil from "../css/perfilsocial.module.css"

/* */

export const PerfilSocial = () => {
    return (
    <Fragment>
      <h2 className={perfil["title"]}>1 - Perfil de la red social</h2>
      <div className={perfil["contenedor-perfil"]}>
              <div class={perfil["profile"]}>
                <div class={perfil["description"]}>
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className={perfil["avatar"]}
                  />
                  <p className={perfil["name"]}>{user.username}</p>
                  <p className={perfil["tag"]}>{user.tag}</p>
                  <p className={perfil["tag"]}>{user.location}</p>
                </div>

                <ul className={perfil["stats"]}>
                  <li className={perfil["li"]}>
                    <span className={perfil["label"]}>Followers</span>
                    <span className={perfil["quantity"]}>{user.stats.followers}</span>
                  </li>
                  <li className={perfil["li"]}>
                    <span className={perfil["label"]}>Views</span>
                    <span className={perfil["quantity"]}>{user.stats.views}</span>
                  </li>
                  <li className={perfil["li"]}>
                    <span className={perfil["label"]}>Likes</span>
                    <span className={perfil["quantity"]}>{user.stats.likes}</span>
                  </li>
                </ul>
              </div>
      </div>
    </Fragment>
    );
}