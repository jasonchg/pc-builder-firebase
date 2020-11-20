import React, { useState } from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@material-ui/core'
import { Cpu } from '../components/Cpu'

// hardcoded data
import {
  motherboards,
  gpus,
  processors,
  rams,
  psus,
  storages,
  coolers,
} from '../data.js'

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
  },
  leftContainer: {
    background: '#444',
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  rightContainer: {
    padding: 20,
    overflowY: 'scroll',
    maxHeight: '100vh',
  },
  selectionsContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  options: {
    display: 'flex',
    justify: 'space-around',
    flexWrap: 'wrap',
  },
  optionCard: {
    width: '150px',
    pointer: 'cursor',
    marginRight: 10,
    marginTop: 10,
  },
  resetButton: {
    marginBottom: 10,
  },
})

export const HomeScreen = () => {
  const classes = useStyles()
  const [processor, setProcessor] = useState('')
  const [psu, setPsu] = useState('')
  const [gpu, setGpu] = useState('')
  const [mobo, setMobo] = useState('')
  const [ramQty, setRamQty] = useState(0)
  const [storage, setStorage] = useState('')
  const [cooler, setCooler] = useState('')

  const specs = {
    mobo,
    processor,
    gpu,
    ramQty,
    psu,
    storage,
    cooler,
  }

  const clearAll = () => {
    setProcessor('')
    setPsu('')
    setGpu('')
    setMobo('')
    setRamQty(0)
    setStorage('')
    setCooler('')
  }

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid xs={7} className={classes.leftContainer}>
        <Cpu specs={specs} />
      </Grid>
      <Grid xs={5} className={classes.rightContainer}>
        <Typography variant='h2' component='h2'>
          Choose Your Specs
        </Typography>

        {/* For Motherboard */}
        <div className={classes.selectionsContainer}>
          <Button
            variant='contained'
            color='secondary'
            onClick={clearAll}
            className={classes.resetButton}
          >
            Reset
          </Button>
          <Typography variant='h4' component='h4'>
            Motherboard
          </Typography>

          <div className={classes.options}>
            {motherboards.map((board, i) => (
              <div
                key={i}
                className={classes.optionCard}
                onClick={() => setMobo(board.image)}
              >
                <Card id='option'>
                  <CardMedia
                    component='img'
                    alt=''
                    height='140'
                    image={board.image}
                    title={board.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h5'>
                      {board.name.toUpperCase()}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      RM{board.price}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {board.brand.charAt(0).toUpperCase() +
                        board.brand.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* For Processor */}
        <div className={classes.selectionsContainer}>
          <Typography variant='h4' component='h4'>
            Processor
          </Typography>

          <div className={classes.options}>
            {processors.map((processor, i) => (
              <div
                key={i}
                className={classes.optionCard}
                onClick={() => setProcessor(processor.image)}
              >
                <Card id='option'>
                  <CardMedia
                    component='img'
                    alt=''
                    height='140'
                    image={processor.image}
                    title={processor.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h5'>
                      {processor.name.toUpperCase()}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      TDP: {processor.tdp}w
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Socket: {processor.socket}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      RM{processor.price}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {processor.brand.charAt(0).toUpperCase() +
                        processor.brand.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* For GPUS */}
        <div className={classes.selectionsContainer}>
          <Typography variant='h4' component='h4'>
            Graphic Card
          </Typography>

          <div className={classes.options}>
            {gpus.map((gpu, i) => (
              <div
                key={i}
                className={classes.optionCard}
                onClick={() => setGpu(gpu.image)}
              >
                <Card id='option'>
                  <CardMedia
                    component='img'
                    alt=''
                    height='140'
                    image={gpu.image}
                    title={gpu.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h5'>
                      {gpu.name.toUpperCase()}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Size: {gpu.size}gbs
                    </Typography>

                    <Typography variant='body2' component='p'>
                      RM{gpu.price}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {gpu.brand.charAt(0).toUpperCase() + gpu.brand.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* For Rams */}
        <div className={classes.selectionsContainer}>
          <Typography variant='h4' component='h4'>
            Rams
          </Typography>

          <div className={classes.options}>
            {rams.map((ram, i) => (
              <div
                key={i}
                className={classes.optionCard}
                onClick={() => setRamQty(4)}
              >
                <Card id='option'>
                  <CardMedia
                    component='img'
                    alt=''
                    height='140'
                    image={ram.image}
                    title={ram.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h5'>
                      {ram.name.toUpperCase()}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Size: {ram.size}gbs
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Speed: {ram.speed}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      RM{ram.price}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {ram.brand.charAt(0).toUpperCase() + ram.brand.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* For Cooler */}
        <div className={classes.selectionsContainer}>
          <Typography variant='h4' component='h4'>
            Cpu Cooler
          </Typography>

          <div className={classes.options}>
            {coolers.map((cooler, i) => (
              <div
                key={i}
                className={classes.optionCard}
                onClick={() => setCooler(cooler.image)}
              >
                <Card id='option'>
                  <CardMedia
                    component='img'
                    alt=''
                    height='140'
                    image={cooler.sample}
                    title={cooler.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h5'>
                      {cooler.name.toUpperCase()}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      RM{cooler.price}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {cooler.brand.charAt(0).toUpperCase() +
                        cooler.brand.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* For PSU */}
        <div className={classes.selectionsContainer}>
          <Typography variant='h4' component='h4'>
            PSU
          </Typography>

          <div className={classes.options}>
            {psus.map((psu, i) => (
              <div
                key={i}
                className={classes.optionCard}
                onClick={() => setPsu(psu.image)}
              >
                <Card id='option'>
                  <CardMedia
                    component='img'
                    alt=''
                    height='140'
                    image={psu.image}
                    title={psu.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h5'>
                      {psu.name.toUpperCase()}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Power: {psu.watts} watts
                    </Typography>
                    <Typography variant='body2' component='p'>
                      RM{psu.price}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {psu.brand.charAt(0).toUpperCase() + psu.brand.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* For Storage */}
        <div className={classes.selectionsContainer}>
          <Typography variant='h4' component='h4'>
            Storage
          </Typography>

          <div className={classes.options}>
            {storages.map((storage, i) => (
              <div
                key={i}
                className={classes.optionCard}
                onClick={() => setStorage(storage.image)}
              >
                <Card id='option'>
                  <CardMedia
                    component='img'
                    alt=''
                    height='140'
                    image={storage.sample}
                    title={storage.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h5'>
                      {storage.name.toUpperCase()}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      Size: {storage.size} mb
                    </Typography>
                    <Typography variant='body2' component='p'>
                      RM{storage.price}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {storage.brand.charAt(0).toUpperCase() +
                        storage.brand.slice(1)}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
