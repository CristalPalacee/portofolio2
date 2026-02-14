import { useActionState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { sendEmail } from "./contact";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export  function useContactForm() {
  const MySwal = withReactContent(Swal);
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

 // --- LOGIKA ALERT POPUP ---
  useEffect(() => {
    if (state.success) {
      MySwal.fire({
        title: "Pesan Terkirim!",
        text: "Terima kasih, saya akan segera menghubungi Anda.",
        icon: "success",
        background: "#171717", // Warna dark mode (neutral-900)
        color: "#fff",         // Teks putih
        confirmButtonColor: "#3b82f6", // Warna biru
        confirmButtonText: "Mantap!",
          customClass: {
          popup: 'rounded-3xl border border-white/10 backdrop-blur-md',
        },
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `,
     
      });
    } else if (state.message && !state.success) {
      MySwal.fire({
        title: "Gagal Mengirim",
        text: state.message,
        icon: "error",
        background: "#0a0a0a",
        color: "#fff",
        confirmButtonColor: "#ef4444",
      });
    }
  }, [state]);


  return {formAction, isPending, state};
}