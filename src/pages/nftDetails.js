import React, { useState } from 'react'
import Image from 'next/image'
import BuyToken from '../components/BuyToken'
import CreateBet from '../components/CreateBet'

function NftDetails({}) {
  const [showModal, setShowModal] = useState(0)
  const [showCreateBet, setShowCreateBet] = useState(false)
  const [selectedToken, setSelectedToken] = useState(false)
  const [total, setTotal] = useState(0)
  const [tokens, setTokens] = useState(0)
  const tokenPrice = 2
  const sellers = [
    {
      id: 1,
      wallet: '0xh...123',
      price: 0.1,
      available_tokens: 2000,
    },
    {
      id: 1,
      wallet: '0xh...123',
      price: 0.15,
      available_tokens: 100,
    },
  ]

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

      <div className="grid grid-cols-4 gap-20">
        <div className="col-span-2 gap-1 pl-2">
          <div className="flex justify-between items-center space-x-10">
            <p className="text-4xl font-normal leading-normal mt-0 mb-2 text-white  py-8">
              Manchester United F.C.
            </p>
            <button
              type="button"
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => setShowCreateBet(true)}
            >
              Create Bet
            </button>
          </div>

          <div className="grid grid-cols-2">
            <div className="justify items-center flex ">
              <Image
                style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                src="/man.png"
                alt="logo"
                width={400}
                height={400}
              />
            </div>
            <div className="justify items-end">
              <p className="text-md text-slate-500 leading-relaxed text-right">
                Token price: $2.00
              </p>
            </div>
          </div>

          <p className="text-lg text-white py-5 leading-relaxed pb-8">
            Manchester United F.C. is a strong team with the current probability
            of being the champion of 14.5 percent. This percentage represents
            its performance during this season.
            <br />
            The Manchester United F.C. token current value is 2.00 Matic per
            token.
          </p>

          <p className="text-md text-slate-500 leading-relaxed ">
            Token Performance
          </p>
          <Image
            style={{ width: '100%', height: '40%' }}
            src="/chart.png"
            alt="logo"
            width={900}
            height={900}
          />
        </div>
        <div className="col-span-2 card overflow-hidden overflow-y-auto h-50 pt-10">
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
              {sellers.length > 0 ? (
                sellers.map((token, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group"
                  >
                    <td className="px-6 py-4"> {token.wallet} </td>
                    <td className="px-6 py-4"> {token.price} Matic</td>
                    <td className="px-6 py-4">{token.available_tokens} </td>
                    <td className="px-6 py-4 hidden group-hover:block">
                      <button
                        type="button"
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => setShowModal(token.id)}
                      >
                        Buy Token
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>There are not currently tokens for sale at this time</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default NftDetails
