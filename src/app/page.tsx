import { ToastContainer } from "react-toastify";
import { BackgroundEffect } from "./BackgroundEffect/BackgroundEffect";
import { Invitation } from "./components/Invitation";
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <main className="">
      <BackgroundEffect />
      <Invitation />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={9}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
