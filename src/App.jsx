import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [inputValue, setInputValue] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    const handleClear = () => {
        setAmount(0)
        setConvertedAmount(0)
        setInputValue(0)
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap items-center bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundColor: 'rgba(0,0,0,0.6)'
            }}
        >
            <div className="w-full flex justify-between items-center px-16">
                <div className="w-[35%] flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300">
                    <img
                        src="https://img.freepik.com/free-vector/modern-indian-rupee-composition_23-2147993244.jpg?t=st=1733849111~exp=1733852711~hmac=cf95b109eb4457fcd6ef2ac17da7c6d74d37ae5923977466d5b33682391a89d9&w=740"
                        alt="Currency Exchange "
                        className="rounded-xl w-full object-contain animate-floating filter hover:brightness-110 
                    hover:contrast-110 transition-all duration-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                    />
                </div>

                <div className="w-[50%] border border-gray-60 rounded-lg p-8 bg-white/30  transform hover:-translate-y-2 transition-all duration-300">
                    <h1 className="text-4xl font-bold text-black mb-4 animate-pulse">CurrenSwift</h1>
                    <p className="text-lg text-gray-800 mb-8 animate-fade-in-down">Fast and reliable, perfect for currency conversion.</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 hover:shadow-md hover:rotate-45 transition-all duration-300"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />

                        </div>
                        <div className="flex justify-between">
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold px-4 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </div>
                        <div className="mt-2">
                            <button
                                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                                type="button"
                                onClick={handleClear}
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App