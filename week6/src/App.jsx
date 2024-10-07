import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({ returns: 100 });
  }, []);

  useEffect(function () {
    setExchange2Data({ returns: 100 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 })
    }, 5000)
  }, []);

  const cryptoReturns = useMemo(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);
  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return (
    <div>
      hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App