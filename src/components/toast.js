import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type) => {
    if (type === "success"){
        toast.success("you singned in ")
    }else{
        toast.error("Invalid data!")
    }
}

