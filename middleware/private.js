import Cookie from "js-cookie";

export default function ({ redirect }) {
  const notLoggedIn = Cookie.get("token") === undefined;
  if (notLoggedIn) {
    return redirect("/auth/login");
  }
}
