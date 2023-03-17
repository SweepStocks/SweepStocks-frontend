import React, { useState } from 'react'
import Image from 'next/image'

function CreateBet({
  showCreateBet,
  setShowCreateBet,
  handleChange,
  payments,
  tokens,
  setTokens,
  tokenPrice,
  calculatePrice,
}) {
  return (
    <>
      {showCreateBet ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Bet</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowCreateBet(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="flex-auto justify-center items-center flex overflow-x-hidden  p-6 ">
                  <p className="my-4 text-slate-500 text-3xl leading-relaxed justify-center">
                    {`$ ${calculatePrice(tokens * tokenPrice)}`}
                    <span className="pl-2 text-sm leading-relaxed">Total</span>
                  </p>
                </div>

                {/* CARD */}
                <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                  {/* GRID */}

                  <div className="grid grid-cols-2">
                    <div className="justify items-center flex "></div>
                    <div className="flex">
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Token price: $2.00
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 p-6">
                    <div className="justify items-center flex ">
                      <p className="text-lg">Token amount</p>

                      <Image
                        style={{ width: '30px', height: '30px' }}
                        src="/coin.png"
                        alt="coin"
                        className="m-auto"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex">
                      <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <svg
                            className="h-5 w-5 fill-slate-300"
                            viewBox="0 0 20 20"
                          ></svg>
                        </span>
                        <input
                          className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                          placeholder="Number of tokens"
                          type="number"
                          name="tokens"
                          value={tokens}
                          onChange={(e) => setTokens(Number(e.target.value))}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Token amount */}
                  <div className="grid grid-cols-2 p-6">
                    <div className="justify items-center flex overflow-x-hidden overflow-y-auto">
                      <p className="text-lg">Pay with</p>

                      <Image
                        style={{ width: '25px', height: '25px' }}
                        src="/matic.png"
                        alt="coin"
                        className="m-auto"
                        width={400}
                        height={400}
                      />
                    </div>

                    <div>
                      <select className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                        {payments.map((option, idx) => (
                          <option value={option.value} key={idx}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowCreateBet(false)}
                  >
                    Never mind
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowCreateBet(false)}
                  >
                    Buy Tokens
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default CreateBet
