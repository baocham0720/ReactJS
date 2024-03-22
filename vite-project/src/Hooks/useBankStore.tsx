import { create } from 'zustand';

type TBank = {
    balance: number;
    withdramMoney: (amount: number) => void,
    deposiMoney: (amount: number) => void,
};
//tạo một HOOK Store (Global State)
export const useBankStore =  create<TBank>((set)=>({
    balance: 0, //giá trị khỏi tạo của balance
    withdramMoney: (amount) =>
      set ((state) => ({balance: state.balance - amount})),
    deposiMoney: (amount) => 
      set((state) => ({ balance: state.balance + amount})) ,
  }));