import nav from "../generic/Nav";
import header from "../generic/Header";


const links = [
    "/Home",
    "/Adopt", 
    "/Food",
    "/Groomer",
    "/Beach",
    "/Lost",
    "/Sitter",
    "/Restaurants"

]

const get = {
    petHeader: () =>{
        return header.nav(get._header())
    },
    _header : () => {
        return nav.Nav.Bar([nav.Nav.Menu('/', links[0].substring(1)),
        nav.Nav.Menu(links[1], links[1].substring(1)),
        nav.Nav.Menu(links[2], links[2].substring(1)),
        nav.Nav.Menu(links[3], links[3].substring(1)),
        nav.Nav.Menu(links[4], links[4].substring(1)),
        nav.Nav.Menu(links[5], links[5].substring(1)),
        nav.Nav.Menu(links[6], links[6].substring(1)),
        nav.Nav.Menu(links[7], links[7].substring(1))
        ])
    }
}

export default{
    get
}