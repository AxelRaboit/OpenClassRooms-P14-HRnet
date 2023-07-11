import style from "./Error.module.scss";

export const Error = ({ errorMsg }) => {
  return (
    <div className={style.container}>
      <p>{errorMsg}</p>
    </div>
  );
};
