import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ModalAlert }  from './components/ModalAlert';
import TextField from '@mui/material/TextField';


export default function Wallet() {
  
  const [open, setOpen] = React.useState(false);
  const [isTransfering, setIsTransfering] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [destinationWallet, setDestinationWallet] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");


  const wallet1 = {
    _id: "123123123",
    balance: 5,
    currency: 'USD'
  };

  const addTransaction = () => {
    console.log('New transaction', amount, destinationWallet);
  }

  const card = (
    <>
      <CardContent>
        <Box sx={{
          width: 300,
          height: 50
        }}>          
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Main Account
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Wallet ID:
          </Typography>
          <Box display="flex"  justifyContent="space-between" >
            <Typography variant="subtitle2" >
              {wallet1._id}
            </Typography>
            <Typography variant="subtitle2">
              {`${wallet1.balance} ${wallet1.currency}`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          size="small"
          onClick={() => {
            setIsTransfering(false);
            setOpen(true);
          }}
        >
          Add money
        </Button>
        <Button
          variant='contained'
          size="small"
          onClick={() => {
            setIsTransfering(true);
            setOpen(true);
          }}
        >
          Transfer money
        </Button>
      </CardActions>
    </>
  );

  return(
    <>
     <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <ModalAlert
        open={open}
        setOpen={setOpen}
        title={
          isTransfering ? 'Transfer money to other wallet' : 'Add money to your wallet'
        }
        body={
          <>
            {isTransfering && (
              <Box >
              <TextField id="destination" label="Destination Wallet" variant="standard" type="text"
                value={destinationWallet}
                onChange={(e) => setDestinationWallet(e.target.value)}
                />
              </Box>
              )}

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="amount" label="Amount" variant="standard" type="number" placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
              </Box>
          </>
        }
        footer={
          <Button
            type='button'
            variant='contained'
            size="small"
            onClick={addTransaction}
          >
            {isTransfering ? "Transfer" : "Add"}
          </Button>}
        errorMessage={errorMessage}
      />
    </>
  );
}