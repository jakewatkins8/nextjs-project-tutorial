import Form from "./components/Form";
import Header from "./components/Header";

export default function reservationPage() {
    return (
        <div className='border-top h-screen'>
            <div className='py-9 w-3/5 m-auto'>
                <Header />
                <Form />
            </div>
        </div>
    );
}