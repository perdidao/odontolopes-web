import Cookie from "js-cookie";

export default function ({ redirect }) {
  const loggedIn = Cookie.get("token") === undefined;
  if (!loggedIn) {
    return redirect("/auth/login");
  }
}
