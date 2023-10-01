import Swal from "sweetalert2";

function SuccessAlert(title, alerts, message){
        Swal.fire({  
            title: title,  
            text: message,
            icon: alerts
          }); 
    
}
export default SuccessAlert