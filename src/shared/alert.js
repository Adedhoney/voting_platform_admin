import Swal from "sweetalert2"

const successMessage = (res) => {
    Swal.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "Continue",
    })
}
const errorMessage = (res) => {
    Swal.fire({
        title: "Error!",
        text: res.data.message,
        icon: "error",
        confirmButtonText: "Continue",
    })
}

const alert = (res) => {
    if (res.status === 201) {
        console.log(res.status)
        successMessage(res)
    } else {
        console.log(res.status)
        errorMessage(res)
    }
}

export default alert
