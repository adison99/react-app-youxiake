import Loadable from "react-loadable";
import Loading from "@common/loading";

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
const Order  = Loadable({
    loader:()=>import("./order"),
    loading:Loading
})
const Mine  = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})
const Login  = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Register  = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})
const Search  = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
const InCountry  = Loadable({
    loader:()=>import("./inCountry"),
    loading:Loading
})

const IndexCity  = Loadable({
    loader:()=>import("./city"),
    loading:Loading
})

export {
    Home,
    Order,
    Mine,
    Login,
    Register,
    Search,
    InCountry,
    IndexCity
}
