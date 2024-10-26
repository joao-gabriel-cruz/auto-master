import { useAtom } from "jotai";
import { Login } from "../pages/login";
import { authAtom } from "../store/auth/auth.module";
import { Router } from "../pages/router";

export function Auth() {

const [auth, setAuth] = useAtom(authAtom)

  return <Router />
}