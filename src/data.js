const motherboards = [
  {
    _id: 1,
    name: 'b450',
    brand: 'ryzen',
    image: '/assets/images/msi_ryzen_b450.png',
    price: 400,
  },
]
const gpus = [
  {
    _id: 1,
    name: 'rtx 2060',
    size: 6,
    brand: 'gforce',
    image: '/assets/images/gpu.png',
    price: 400,
  },
]

const processors = [
  {
    _id: 1,
    name: 'amd ryzen 7 1700x',
    socket: 'am4',
    brand: 'amd',
    tdp: 95,
    price: 400,
    image: '/assets/images/processor.png',
  },
]

const rams = [
  {
    _id: 1,
    name: 'corsair vegeance lpx 4gb',
    size: 4,
    brand: 'corsair',
    speed: 3200,
    ddr: 4,
    price: 135,
    image: '/assets/images/corsair.jpg',
  },
]

const psus = [
  {
    _id: 1,
    name: 'corsair rm750',
    watts: 750,
    brand: 'corsair',
    price: 135,
    image: '/assets/images/psu.png',
  },
]

const storages = [
  {
    _id: 1,
    name: 'wd green 1tb',
    size: 1028,
    brand: 'western digital',
    price: 335,
    sample: '/assets/images/ssd.png',
    image: '/assets/images/storage.png',
  },
]

const coolers = [
  {
    _id: 1,
    name: 'corsair hydrol h75',
    brand: 'corsair',
    image: '/assets/images/cooler.png',
    sample: '/assets/images/hydroseries.jpg',
    price: 400,
  },
]

export { motherboards, gpus, processors, rams, psus, storages, coolers }
