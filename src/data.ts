// 先写死。等工具那边齐了改由 `ran list --format json` 生成
export interface Shelf {
  key: string;
  name: string;
  note: string;
}

export const shelves: Shelf[] = [
  { key: 'ip', name: '基础 IP', note: '外设与总线。uart、gpio、spi、i2c、dma、plic；amba、tilelink、wishbone。' },
  { key: 'core', name: '核', note: 'hart，以及 picorv32、serv、ibex、cv32e40p、cva6。' },
  { key: 'kit', name: '套件', note: 'soc-mcu、soc-linux、soc-smp、soc-switch。' },
  { key: 'sw', name: '软件与驱动', note: '驱动、示例程序、设备树，随配置一并解出。' },
];

export const manifest: string[] = [
  'name: gpio',
  'params:',
  '  numPins: { values: [8, 16, 32], default: 32 }',
  'features:',
  '  irq:     { default: true }',
  'guards:',
  '  - when:   { irq: false }',
  '    narrow: { numPins: [8, 16] }',
  '    why:    没有中断时用不上那么多针',
];
