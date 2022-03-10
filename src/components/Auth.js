import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <main className={classes.Auth}>
      <section>
        <form>
          <div className={classes["Auth__input-wrapper"]}>
            <label htmlFor="email" className={classes["Auth__input__label"]}>
              Email
            </label>
            <input type="email" id="email" className={classes["Auth__input"]} />
          </div>
          <div className={classes["Auth__input-wrapper"]}>
            <label htmlFor="password" className={classes["Auth__input__label"]}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={classes["Auth__input"]}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
