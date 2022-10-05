import Swal from "sweetalert2";

export function spinner() {
    return Swal.fire({
        title: 'Please wait...',
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => { return },
        allowEscapeKey: false,
        allowOutsideClick: false

    });
}

export function success(message = "") {
    return Swal.fire({
        title: message,
        icon: 'success',
        timer: 2000,
        showCloseButton: false,
    });
}

export function error(message = "Error please try again") {
    if (Array.isArray(message)) {
        message = message.join('\n');
    }

    return Swal.fire({
        title: message,
        icon: 'error'
    });
}