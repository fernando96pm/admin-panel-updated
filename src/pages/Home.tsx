import { useEffect, useContext } from 'react';
import PacoMolla from "../assets/profile/paco-mollá.png";
import Company from '../entities/Company';
import useHttp from "../hooks/use-http";
import AdminPanelContext from '../store/AdminPanelContext';

const Home = () => {

  const ctx = useContext(AdminPanelContext);
  const company = ctx.company

  return (
    <div className="mx-auto p-2">
      <h2
        className={`text-3xl mt-6 text-gray-700 font-medium tracking-wider text-center lg:text-center mx-auto`}
      >
        Home
      </h2>
      <div className="mt-10 flex justify-center">
        <div className="flex-col p-5 rounded-md shadow-xl bg-gray-100">
          <div className="flex justify-between ">
            <div className="border-[2px] border-gray-300 rounded-2xl w-[120px] h-[120px] flex justify-center">
              <img src={PacoMolla} width="90px" height="90px" />
            </div>
            <div className="ml-8 mt-10">
              <p className="text-xl md:text-2xl font-semibold tracking-wider text-gray-800">
                {company?.name ? company!!.name : 'No se pudo cargar el nombre'}
              </p>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <div className="w-[100%] bg-gray-400 h-[1px]" />
          </div>
          <p className="text-lg font-medium text-gray-800">
          {company?.email ? company!!.email : 'No se pudo cargar el email'}
          </p>
          <div className="flex gap-2 mt-3">
            <p className="text-lg">Licencias activas:</p>
            <p className="text-lg font-bold">231</p>
          </div>
          <div className="flex gap-2 mt-3">
            <p className="text-lg">Conectados actualmente:</p>
            <p className="text-lg font-bold text-green-600">128</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
