import  { useState } from 'react';

const Button = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState('');

  const connectWithMetaMask = async () => {
    if (window.ethereum) {
      try {
        setIsLoading(true); // Set loading state to true

        // Simulate a delay of 2 seconds before attempting the connection
        await new Promise(resolve => setTimeout(resolve, 2000));

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        console.log('Connected to MetaMask!', address);
        setConnectedAddress(address); // Set the connected address
        // Additional logic to handle the connection
      } catch (error) {
        console.error(error);
        // Handle error if the user rejects the connection request or an error occurs
      } finally {
        setIsLoading(false); // Set loading state back to false
      }
    } else {
      console.log('MetaMask extension not detected');
      // Inform the user that MetaMask extension is not detected
    }
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>} {/* Render the loader if isLoading is true */}
      {connectedAddress && <div>Connected Address: {connectedAddress}</div>} {/* Render the connected address if available */}
      <button onClick={connectWithMetaMask} disabled={isLoading}>
        Connect with MetaMask
      </button>
    </div>
  );
};

export default Button;
