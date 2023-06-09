'use client'
import React from "react";
interface Props {
  show: boolean;
  user?: {
    id: number;
    Name: string;
    Sobrenome:string;
    Email: string;
    Observacao: string;
    Data: string;
    Hora: string;
    QTD_Pessoas: number;
    User_id: number;
    Mesa_id: number;
    Status: number;
    Telefone: string;
    created_at: string;
    updated_at: string;
  };
  handleCloseModal: () => void;
}

function ShowModal(props: Props) {

  const { user, show } = props;
    return(
        <div>
        {show ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center text-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl text-center  font-semibold">
                        {user?.Name}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={props.handleCloseModal}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <strong>  Telefone:</strong> {user?.Telefone}
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <strong> Email</strong> {user?.Email}
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <strong>  Observação:</strong> {user?.Observacao}
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <strong>  Data: </strong> {user?.Data}
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <strong>  Horario:</strong> {user?.Hora}
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <strong>  Status</strong> {user?.Status}
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <strong>  Data do Registro</strong> {user?.created_at}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={props.handleCloseModal}
                      >
                        Close
                      </button>
  
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          </div>
    );
}

export default ShowModal;