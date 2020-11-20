import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cpuCasingContainer: {
    padding: 20,
    position: 'relative',
  },
  cpuCasing: {
    width: '700px',
  },
  mobo: {
    position: 'absolute',
    left: '80px',
    top: '120px',
    width: '350px',
    zIndex: 1,
  },
  ram1: {
    position: 'absolute',
    right: '351px',
    top: '140px',
    width: '11px',
    zIndex: 2,
  },
  ram2: {
    position: 'absolute',
    right: '365px',
    top: '140px',
    width: '11px',
    zIndex: 2,
  },
  ram3: {
    position: 'absolute',
    right: '377px',
    top: '140px',
    width: '11px',
    zIndex: 2,
  },
  ram4: {
    position: 'absolute',
    right: '391px',
    top: '140px',
    width: '11px',
    zIndex: 2,
  },
  processor: {
    position: 'absolute',
    right: '420px',
    top: '177px',
    width: '120px',
    zIndex: 2,
  },
  psu: {
    position: 'absolute',
    left: '28px',
    bottom: '86px',
    width: '200px',
    zIndex: 2,
  },
  gpu: {
    position: 'absolute',
    left: '48px',
    bottom: '370px',
    width: '248px',
    zIndex: 2,
  },
  storage: {
    position: 'absolute',
    right: '59px',
    top: '80px',
    width: '248px',
    zIndex: 2,
  },
  cooler: {
    position: 'absolute',
    left: '34px',
    top: '130px',
    width: '350px',
    zIndex: 2,
  },

  flyIn: {
    animation: `$flyIn 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes flyIn': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-200px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(1px)',
    },
  },
}))

export const Cpu = ({ specs }) => {
  const classes = useStyles()

  const ramQty = (qty) => {
    switch (qty) {
      case 1:
        return (
          <img className={classes.ram1} src='/assets/images/rams.png' alt='' />
        )
      case 2:
        return (
          <di>
            <img
              className={classes.ram1}
              src='/assets/images/rams.png'
              alt=''
            />
            <img
              className={classes.ram2}
              src='/assets/images/rams.png'
              alt=''
            />
          </di>
        )

      case 3:
        return (
          <>
            <img
              className={classes.ram1}
              src='/assets/images/rams.png'
              alt=''
            />
            <img
              className={classes.ram2}
              src='/assets/images/rams.png'
              alt=''
            />
            <img
              className={classes.ram3}
              src='/assets/images/rams.png'
              alt=''
            />
          </>
        )
      case 4:
        return (
          <>
            <img
              className={classes.ram1}
              src='/assets/images/rams.png'
              alt=''
            />
            <img
              className={classes.ram2}
              src='/assets/images/rams.png'
              alt=''
            />
            <img
              className={classes.ram3}
              src='/assets/images/rams.png'
              alt=''
            />
            <img
              className={classes.ram4}
              src='/assets/images/rams.png'
              alt=''
            />
          </>
        )

      default:
        return null
    }
  }

  return (
    <div className={classes.cpuCasingContainer}>
      {/* Casing */}
      <img
        className={classes.cpuCasing}
        src='/assets/images/casing.png'
        alt=''
      />
      {/* Mobo */}
      <img
        className={`${classes.mobo} ${classes.flyIn}`}
        src={specs.mobo}
        alt=''
      />
      {/* Rams */}
      {ramQty(specs.ramQty)}
      {/* Processor */}
      <img
        className={`${classes.processor} ${classes.flyIn}`}
        src={specs.processor}
        alt=''
      />
      {/* PSU */}
      <img
        src={specs.psu}
        alt=''
        className={`${classes.psu} ${classes.flyIn}`}
      />
      {/* GPU */}
      <img
        src={specs.gpu}
        alt=''
        className={`${classes.gpu} ${classes.flyIn}`}
      />
      {/* Storage */}
      <img
        src={specs.storage}
        alt=''
        className={`${classes.storage} ${classes.flyIn}`}
      />
      {/* Cooler */}
      <img
        src={specs.cooler}
        alt=''
        className={`${classes.cooler} ${classes.flyIn}`}
      />
    </div>
  )
}
