import React, { useState } from 'react'
import Image from 'next/image'
import BuyToken from '../components/BuyToken'
import CreateBet from '../components/CreateBet'

function NftDetails({}) {
  const [showModal, setShowModal] = useState(false)
  const [showCreateBet, setShowCreateBet] = useState(false)
  const [selectedToken, setSelectedToken] = useState(false)
  const [total, setTotal] = useState(0)
  const [tokens, setTokens] = useState(0)
  const tokenPrice = 2

  const calculatePrice = (num) => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  const handleChange = (e) => {
    setSelectedToken(e.target.value)
  }

  const payments = [
    {
      label: 'Matic',
      value: 'Matic',
    },
    {
      label: 'USDC',
      value: 'USDC',
    },
  ]

  return (
    <>
      <BuyToken
        showModal={showModal}
        setShowModal={setShowModal}
        handleChange={handleChange}
        payments={payments}
        tokens={tokens}
        setTokens={setTokens}
        tokenPrice={tokenPrice}
        calculatePrice={calculatePrice}
      />
      <CreateBet
        showCreateBet={showCreateBet}
        setShowCreateBet={setShowCreateBet}
        handleChange={handleChange}
        payments={payments}
        tokens={tokens}
        setTokens={setTokens}
        tokenPrice={tokenPrice}
        calculatePrice={calculatePrice}
      />

      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2 gap-1 pl-2">
          <div className="flex justify-between items-center space-x-10">
            <p className="text-lg text-white py-5">Manchester United F.C.</p>
            <button
              type="button"
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => setShowCreateBet(true)}
            >
              Create Bet
            </button>
          </div>

          <Image
            style={{ width: '400px', height: '400px' }}
            src="/man.png"
            alt="logo"
            width={400}
            height={400}
          />
          <p className="text-lg text-white py-5">
            The current probability of Manchester United F.C being
            <br /> the champion is 14.5%
            <br />
            The projected value is 99.90 Matic
          </p>
        </div>
        <div className="col-span-3 card overflow-hidden overflow-y-auto h-50 pt-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-hidden">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Wallets{' '}
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Tokens
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
                <td className="px-6 py-4 hidden group-hover:block">
                  <button
                    type="button"
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(true)}
                  >
                    Buy Token
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
                <td className="px-6 py-4 hidden group-hover:block">
                  <button
                    type="button"
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(true)}
                  >
                    Buy Token
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
                <td className="px-6 py-4 hidden group-hover:block">
                  <button
                    type="button"
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Buy Token
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
                <td className="px-6 py-4 hidden group-hover:block">
                  <button
                    type="button"
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Buy Token
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
                <td className="px-6 py-4 hidden group-hover:block">
                  <button
                    type="button"
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Buy Token
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
                <td className="px-6 py-4 hidden group-hover:block">
                  <button
                    type="button"
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Buy Token
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default NftDetails
