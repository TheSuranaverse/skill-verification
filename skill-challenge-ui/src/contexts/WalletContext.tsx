import React, { createContext, useContext, useState, useEffect } from 'react';
import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';

interface WalletContextType {
  connected: boolean;
  account: any;
  network: Network;
  aptosClient: Aptos;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptosClient = new Aptos(aptosConfig);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);

  // Check if wallet is already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (window.aptos) {
          const isConnected = await window.aptos.isConnected();
          if (isConnected) {
            const accountInfo = await window.aptos.account();
            setAccount(accountInfo);
            setConnected(true);
          }
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    };

    checkConnection();
  }, []);

  const connect = async () => {
    try {
      if (window.aptos) {
        const response = await window.aptos.connect();
        setAccount(response);
        setConnected(true);
        console.log('Connected successfully:', response);
      } else {
        console.error('Petra wallet not detected');
        alert('Please install Petra wallet extension');
      }
    } catch (error) {
      console.error('Connection failed:', error);
      // if (error.code === 4001) {
      //   console.log('User rejected the connection');
      // }
    }
  };

  const disconnect = async () => {
    try {
      if (window.aptos) {
        await window.aptos.disconnect();
        setAccount(null);
        setConnected(false);
        console.log('Disconnected successfully');
      }
    } catch (error) {
      console.error('Disconnection failed:', error);
    }
  };

  const value = {
    connected,
    account,
    network: Network.TESTNET,
    aptosClient,
    connect,
    disconnect,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

// Add type declaration for window.aptos
declare global {
  interface Window {
    aptos?: {
      connect: () => Promise<any>;
      disconnect: () => Promise<void>;
      isConnected: () => Promise<boolean>;
      account: () => Promise<any>;
      signAndSubmitTransaction: (transaction: any) => Promise<any>;
      signMessage: (message: any) => Promise<any>;
    };
  }
}