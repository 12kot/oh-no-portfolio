import React, { ReactElement } from "react";
import styles from "./item.module.scss";
import { linkType, projectType } from "types/types";
import { v4 } from "uuid";
import OpenPageSVG from "img/svg/openPage";
import GithubSVG from "img/svg/github";

const getTech = (tech: string[]): ReactElement[] => {
  return tech.map((item) => (
    <p className={styles.techItem} key={v4()}>
      <b className={styles.important}>{item}</b>
    </p>
  ));
};

const getLinks = (links: linkType[]): ReactElement[] => {
  return links.map((item) => (
    <a className={styles.link} href={item.link} key={v4()}>
      <p>{item.desc}</p>
      {item.image === "github" ? <GithubSVG /> : <OpenPageSVG />}
    </a>
  ));
};

const getImage = (path: string[]): ReactElement => {
  return (
    <img
      alt="img"
      className={styles.image}
      src={require(`img/projects/${path[0]}`)}
    ></img>
  );
};

const Item = (props: { item: projectType; imgLeft: boolean }) => {
  return (
    <section className={styles.item}>
      {props.imgLeft && getImage(props.item.image)}

      <div className={styles.description}>
        <header>
          <h3>
            <b className={styles.important}>{props.item.name}</b>
          </h3>
        </header>

        <p>{props.item.description}</p>
        <span className={styles.tech}>{getTech(props.item.tech)}</span>
        <span className={styles.links}>{getLinks(props.item.links)}</span>
      </div>

      {!props.imgLeft && getImage(props.item.image)}
    </section>
  );
};

export default Item;
