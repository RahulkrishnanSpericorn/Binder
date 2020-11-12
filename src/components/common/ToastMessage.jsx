import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const toastFunction = (message) => {
    console.log('message', message)
    toast(message,
        //     {
        //     className: css({
        //         background: color,
        //         color:textColor
        //     })
        // }
    );

}

export default toastFunction;