import React, {Fragment} from "react";
import perfil from "../css/perfilsocial.module.css"

/* */

export const PerfilSocial = ({ username, tag, location, avatar, stats}) => {
    return (
    <Fragment>
      <h2 className={perfil["title"]}>1 - Perfil de la red social</h2>
      <div className={perfil["contenedor-perfil"]}>
              <div class={perfil["profile"]}>
                <div class={perfil["description"]}>
                  <img
                    src={avatar}
                    alt={username}
                    className={perfil["avatar"]}
                  />
                  <p className={perfil["name"]}>{username}</p>
                  <p className={perfil["tag"]}>{tag}</p>
                  <p className={perfil["tag"]}>{location}</p>
                </div>

                <ul className={perfil["stats"]}>
                  <li className={perfil["li"]}>
                    <span className={perfil["label"]}>Followers</span>
                    <span className={perfil["quantity"]}>{stats.followers}</span>
                  </li>
                  <li className={perfil["li"]}>
                    <span className={perfil["label"]}>Views</span>
                    <span className={perfil["quantity"]}>{stats.views}</span>
                  </li>
                  <li className={perfil["li"]}>
                    <span className={perfil["label"]}>Likes</span>
                    <span className={perfil["quantity"]}>{stats.likes}</span>
                  </li>
                </ul>
              </div>
      </div>
    </Fragment>
    );
}