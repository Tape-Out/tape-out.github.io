// 先写死。等工具那边齐了改由 `ran list --format json` 生成
export interface Shelf {
  key: string;
  name: string;
  note: string;
}

export const shelves: Shelf[] = [
  { key: 'ip', name: '基础 IP', note: '外设与总线。uart、gpio、spi、i2c、dma、plic；amba、tilelink、wishbone。' },
  { key: 'core', name: '核', note: '自研 rvcore（lacore、xxcore、aacore 待做），以及 picorv32、serv、hazard3、kianriscv、ibex、cv32e40p、cva6、ao486、open-la500、nop-plus、vortex、verigpu、miaow、tiny-gpu 等上游核。' },
  { key: 'kit', name: '套件', note: 'soc-mcu、soc-mpu、soc-smp、soc-switch。' },
  { key: 'sw', name: '软件与驱动', note: '驱动、示例程序、设备树，随配置一并解出。' },
];

export const manifest: string[] = [
  'name: gpio',
  'params:',
  '  numPins:  { values: [8, 16, 32], default: 32 }',
  'features:',
  '  irq:      { default: true }',
  'contract:',
  '  ctrl:     { shape: regif, aw: 8, dw: 32 }',
  'emit:',
  '  pins:     [{ name: pins, type: GpioPins }]',
];
