import { useContext } from "react";
import CluckinContext from "../context/CluckinProvider";

const useCluckin = () => {
    return useContext(CluckinContext);
}

export default useCluckin 