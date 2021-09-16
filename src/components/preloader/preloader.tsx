import { useSelector } from "react-redux";
import { RootReduxState } from "../../redux/redux-store";

let Preloader = () => {
  let darkTheme = useSelector<RootReduxState>((state) => state.app.darkBack);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {darkTheme ? (
        <img
          alt="preloader"
          src={"https://acegif.com/wp-content/uploads/loading-4.gif"}
        />
      ): (
        <img
          alt="preloader"
          src={"https://fixiteasy.ru/bitrix/templates/supertwo.scm/css/ajax-loader.gif"}
        />
      )}
    </div>
  );
};
export default Preloader;
