import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import useTheme from "../hooks/useTheme";
import { useState } from "react";
import { Button } from "../components";

export default function Home() {
  const { themes, setTheme, currentTheme } = useTheme();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const handleInput = (e) => {
    e.preventDefault();
    const id = currentTheme.id;

    if (!password || password[0] === " ") {
      alert("Please enter a password!");
      return;
    }
    if (password !== "02032001" && password !== "232001") {
      setError("Mật khẩu chưa đúng 🥱🥱 (gợi ý mật khẩu có dạng ngày tháng năm 🤐)")
    }
    else {
      if (id == 0) Router.push(password);
      // If the theme is default blue then push to '/{name}'
      else Router.push(`/${password}/${id}`); // If the theme is not default then will push to '/{name}?color={id}
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create a Birthday Wish</title>
        <meta name="description" content="An app to generate birthday wishes :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <h1 className={styles.title}>
          Secret <span className={styles.span}>Gift</span> 🥰🥳
          </h1>
        </div>
        {/* Theme Color  */}

        <div className={styles.themeWrapper}>
          <form
            className={styles.theme}
            id="theme-input"
            onChange={(e) => setTheme(e.target.id)}
          >
            {themes.map((item) => (
              <input
                key={item.id}
                type="radio"
                className={item.name}
                id={item.id}
                name="theme"
                value={item.color}
                defaultChecked={currentTheme.id === item.id}
              />
            ))}
          </form>
        </div>

        <div>
          <form className={styles.form} onSubmit={handleInput}>
            <input
              id="input"
              name="go"
              className={styles.input}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className={styles.button} type="submit" text="Go!" />
          </form>
          <div style={{color: "red", textAlign: "center"}}>{error}</div>
          <p className={styles.desc}>
            Crafted by{" "}
            <a
              className={styles.span}
              href="https://github.com/gouravkhunger"
              target="_blank"
              rel="noreferrer"
            >
              Me 🫣
            </a>
            .
          </p>
          <p className={styles.desc}>
            Hope <span className={styles.span}>Hong Ha</span> will like it{" "}
            <a
              className={styles.span}
              href="https://github.com/gouravkhunger/nextjs-birthday-wish/graphs/contributors"
              target="_blank"
              rel="noreferrer"
            >
              :))
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
