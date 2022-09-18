import { config } from "../../config";

export const Navbar = () => {
    const {navHeight} = config;
    return (
        <div style={{
            height: `${navHeight}px`
        }}>
            Navbar
        </div>
    );
}

export default Navbar;