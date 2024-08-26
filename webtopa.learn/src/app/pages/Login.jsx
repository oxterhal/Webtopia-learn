// src/app/pages/Login.jsx
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";

export default function Login() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[70%] h-full bg-[#1a1a1a] bg-center bg-no-repeat bg-[url('https://cdni.iconscout.com/illustration/premium/thumb/woman-programmer-working-on-a-new-project-6765192-5607777.png')]">
        <a href="#" className="w-40 h-40">
          <Logo />
        </a>
      </div>
      <div className="w-[30%] bg-[#1a1a1a] h-full flex justify-center items-center">
        <div className="h-1/2 w-full flex flex-col justify-around items-center">
          <h1 className="text-3xl font-bold mb-8">Welcome to Webtopia</h1>
          <Input text="User name" />
          <Input text="Password" />
          <Button text="Login" />
        </div>
      </div>
    </div>
  );
}
