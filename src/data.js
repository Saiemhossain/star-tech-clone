import com1 from '../src/assets/pc-1.webp';
import com2 from '../src/assets/pc-2.webp';
import com3 from '../src/assets/pc-3.webp';
import laptop1 from '../src/assets/laptop-1.webp';
import laptop2 from '../src/assets/laptop-2.webp';
import laptop3 from '../src/assets/laptop-3.webp';
import mbl1 from '../src/assets/mbl-1.webp';
import mbl2 from '../src/assets/mbl-2.webp';
import mbl3 from '../src/assets/symphony.webp';
import cam1 from '../src/assets/camera-1.webp';
import cam2 from '../src/assets/camera-2.webp';
import cam3 from '../src/assets/camera-3.webp';
import desktopFan from '../src/assets/desktop-fan.webp';
import standFan from '../src/assets/standFan.webp';
import airFresher from '../src/assets/air-fresher.webp';
import handWatch1 from '../src/assets/handWatch-1.webp';
import handWatch2 from '../src/assets/handWatch-2.webp';
import handWatch3 from '../src/assets/handWatch-3.webp';
import Earbuds1 from '../src/assets/Earbuds-1.webp';
import Earbuds2 from '../src/assets/Earbuds-2.webp';
import Earbuds3 from '../src/assets/Earbuds-3.webp';
import Tv1 from '../src/assets/tv1.webp';
import Tv2 from '../src/assets/tv-2.jpg';
import Tv3 from '../src/assets/Tv-3.webp'
import { Tv } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AIC Monitor',
    des: {
      model: '22B20JH2',
      Resolution: 'FHD (1920 x 1080)',
      Display: 'IPS, 100Hz, 1ms',
      Features: 'AdaptiveSync, 3-Sided Frameless',
    },
    price: {
      cash: 12000,
      monthly: 600,
    },
    image: com1,
    Category: 'Monitor',
  },
  {
    id: 2,
    name: 'MSI Monitor',
    des: {
      model: 'LG 22MK430H-B',
      Resolution: 'FHD (1920x1080)',
      Display: 'IPS, 60Hz, 5ms',
      Features: 'Free Sync, Anti-glare',
    },
    price: {
      cash: 12800,
      monthly: 480,
    },
    image: com2,
    Category: 'Monitor',
  },
  {
    id: 3,
    name: 'FHD Monitor',
    des: {
      model: 'GW2283',
      Resolution: ' Full HD (1920x1080)',
      Display: 'IPS, 60Hz, 5ms',
      Features: 'Eye Care, Flicker Free, Low Blue Light',
    },
    price: {
      cash: 15500,
      monthly: 480,
    },
    image: com3,
    Category: 'Monitor',
  },
  {
    id: 4,
    name: 'Acer Laptop',
    des: {
      model: ' Flairedge',
      Processor: 'Intel Celeron N4020C (4MB Smart Cache, Up to 2.8 GHz)',
      display: '15.6" FHD (1920x1080)',
    },
    price: {
      cash: 95000,
      monthly: 1000,
    },
    image: laptop1,
    Category: 'Laptop',
  },
  {
    id: 5,
    name: 'Apple Laptop',
    des: {
      model: ' Chuwi HeroBook Pro',
      Processor:
        'Intel Celeron Processor N4020 (4M Cache, 1.10 GHz up to 2.80 GHz)',
      display: '14.1 Inch(1920 x 1080) IPS Anti-Glare Display',
    },
    price: {
      cash: 98000,
      monthly: 1440,
    },
    image: laptop2,
    Category: 'Laptop',
  },
  {
    id: 6,
    name: 'Hp Laptop',
    des: {
      model: ' HeroBook Plus',
      Processor: 'Intel Celeron N4020 (4M Cache, 1.10GHz - 2.80GHz)',
      display: '15.6 Inch(1920 x 1080) IPS Anti-Glare Display',
    },
    price: {
      cash: 75000,
      monthly: 2000,
    },
    image: laptop3,
    Category: 'Laptop',
  },
  {
    id: 7,
    name: 'Shaowmi Phone',
    des: {
      model: 'Y29',
      Processor: 'Snapdragon 685 (6 nm), RAM: up to 8GB, Storage: up to 256GB',
      display: '6.68" HD+ (720×1608) IPS LCD, 120Hz, 1000nits (HBM)',
    },
    price: 17500,
    image: mbl1,
    Category: 'Phone',
  },
  {
    id: 8,
    name: 'Samsung Phone',
    des: {
      model: 'nubia Neo',
      Processor: 'Unisoc T820 (6 nm)',
      display: '6.6-inch FHD+ IPS LCD 120Hz Display',
    },
    price: 12500,
    image: mbl2,
    Category: 'Phone',
  },
  {
    id: 9,
    name: 'Walton Phone',
    des: {
      model: ' Y28',
      Processor: 'Mediatek Helio G85 (12 nm)',
      display: '6.68" HD+ (720*1608) IPS LCD, 90Hz, 760nits',
    },
    price: 12500,
    image: mbl3,
    Category: 'Phone',
  },
  {
    id: 10,
    name: 'Sports Action Water Proof Camera',
    des: {
      model: ' SJ4000 Air',
      maxstorage: '64GB',
      display: 'Up to QHD+ 3200 x 1800 / 30 fps Video',
    },
    price: 4500,
    image: cam1,
    Category: 'Camera',
  },
  {
    id: 11,
    name: 'CB77 4G Portable Body Camera',
    des: {
      model: ' Sk45000 Air',
      maxstorage: '124GB',
      display: 'Up to QHD+ 3200 x 1800 / 30 fps Video',
    },
    price: 6000,
    image: cam2,
    Category: 'Camera',
  },
  {
    id: 12,
    name: 'CB77 4G Portable Body Camera',
    des: {
      model: ' GTf800 Air',
      maxstorage: '64GB',
      display: 'Up to QHD+ 3200 x 1800 / 32 fps Video',
    },
    price: 6000,
    image: cam3,
    Category: 'Camera',
  },
  {
    id: 13,
    name: 'WiWU FS03 2 in 1 Table Clip Fan',
    des: {
      model: ' F33',
    },
    price: 1450,
    image: desktopFan,
    Category: 'Fan',
  },
  {
    id: 14,
    name: 'CB77 4G Portable Body Camera',
    des: {
      model: ' F73',
    },
    price: 1480,
    image: standFan,
    Category: 'Fan',
  },
  {
    id: 15,
    name: 'Baseus SUXUN-WF0S Breeze Fan Air Freshener For Vehicles',
    des: {
      model: ' F40',
    },
    price: {
      cash: 6000,
      monthly: 240,
    },
    image: airFresher,
    Category: 'Fan',
  },
  {
    id: 16,
    name: 'COLMI P81 Smart Watch',
    price: {
      cash: 1400,
      monthly: 440,
    },
    image: handWatch1,
    Category: 'Watch',
  },
  {
    id: 17,
    name: 'Haylou Watch S6 Smart Watch',
    des: {
      model: 'P81',
      display: '1.9 inch HD Display',
    },
    price: {
      cash: 1600,
      monthly: 440,
    },
    image: handWatch2,
    Category: 'Watch',
  },
  {
    id: 18,
    name: 'Riversong Motive 3C SW31 Smart Watch',
    des: {
      model: 'P80',
      display: '1.7 inch HD Display',
    },
    price: {
      cash: 1950,
      monthly: 440,
    },
    image: handWatch3,
    Category: 'Watch',
  },
  {
    id: 19,
    name: 'Awei T71 True Wireless Earbuds',
    price: {
      cash: 1040,
      monthly: 140,
    },
    image: Earbuds1,
    Category: 'Earbuds',
  },
  {
    id: 20,
    name: 'Hoco EQ24 Estrella Wireless Earbuds',
    price: {
      cash: 950,
      monthly: 120,
    },
    image: Earbuds2,
    Category: 'Earbuds',
  },
  {
    id: 21,
    name: 'Hoco EW77 TWS Bluetooth Wireless Earbuds',
    price: {
      cash: 840,
      monthly: 150,
    },
    image: Earbuds3,
    Category: 'Earbuds',
  },
  {
    id: 22,
    name: 'Smart SEL-32B24K 32" HD Basic LED TV',
    des: {
      model: ' H32D2S',
      Processor: 'HDMI x 2, USB x 1, Audio Ports',
      display: '128 inch HD(1366 x 768) LED Display',
    },
    price: 14700,
    image: Tv1,
    Category: 'Tv',
  },
  {
    id: 23,
    name: 'Haier H32D2M 32 Inch Miracast HD LED TV',
    des: {
      model: ' H31VTS',
      Processor: 'HDMI x 4, USB x 2, Audio Ports',
      display: '64 inch HD(1366 x 768) LED Display',
    },
    price: 16500,
    image: Tv2,
    Category: 'Tv',
  },
  {
    id: 24,
    name: 'Rangs RG32HX 32" HD LED Android Google TV',
    des: {
      model: ' H32D2M',
      Processor: 'HDMI x 3, USB x 1, Audio Ports',
      display: '32 inch HD(1366 x 768) LED Display',
    },
    price: 19000,
    image: Tv3,
    Category: 'Tv',
  },
];
export default products;