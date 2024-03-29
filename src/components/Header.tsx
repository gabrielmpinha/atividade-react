import { Button } from "./Button";
import { ButtonProps } from "./Button";

interface HeaderProps {
  titulo: string;
  btnHome: ButtonProps;
  btn2: ButtonProps;
  btn3: ButtonProps;
  btnCarrinho: ButtonProps;
}

export const Header: React.FC<HeaderProps> = ({
  titulo,
  btnHome,
  btn2,
  btn3,
  btnCarrinho
}) => {
  return (
    <header className="flex bg-gray-900 sticky top-0 items-center justify-between px-8 z-50">
      <span className="text-white font-sans">{titulo}</span>
      <div className="">
        <Button
          text={btnHome.text}
          onClick={btnHome.onClick}
          className={btnHome.className}
        />
        <Button
          text={btn2.text}
          onClick={btn2.onClick}
          className={btn2.className}
        />
        <Button
          text={btn3.text}
          onClick={btn3.onClick}
          className={btn3.className}
        />
      </div>
      <Button
          text={btnCarrinho.text}
          onClick={btnCarrinho.onClick}
          className={btnCarrinho.className}
        />
    </header>
  );
};

/*
export function Header() {
  return (
    <header className="header sticky top-0 bg-gray-800 shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">
        <a href="">
        <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Loja X
            </span>
          </div>
        </a>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="text-white p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
            <a href="">Home</a>
          </li>
          <li className="text-white p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
            <a href="">Empresa</a>
          </li>
          <li className="text-white p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end">
        <a href="">
          <svg
            className="text-white h-8 p-1 hover:text-blue-500 duration-200 svg-inline--fa fa-search fa-w-16 fa-9x"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              className=""
            ></path>
          </svg>
        </a>
        <a href="">
          <svg
            className="text-white h-8 p-1 hover:text-blue-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="shopping-cart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
              className=""
            ></path>
          </svg>
        </a>
      </div>
    </header>
  );
}
*/
