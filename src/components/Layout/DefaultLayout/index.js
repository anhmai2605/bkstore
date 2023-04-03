import Header from "../components/Header";
import Body from "./Body";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <Body/>
        </div>
     );
}

export default DefaultLayout;
