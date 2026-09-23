// 毛坯房阶段先写死。成品由 `ran list --format json` 生成——
// 手写的目录活不过三次改名
export interface Shelf {
  key: string;
  name: string;
  note: string;
}

export const shelves: Shelf[] = [
  { key: 'ip', name: '基础 IP', note: '外设与总线。uart、gpio、spi、i2c、dma、plic，以及 amba、tilelink、wishbone 这些库。' },
  { key: 'core', name: '核', note: '自有的 hart，以及接进来的 picorv32、serv、ibex、cv32e40p、cva6。' },
  { key: 'kit', name: '套件', note: '拼好的整颗：soc-mcu、soc-linux、soc-smp、soc-switch。' },
  { key: 'sw', name: '软件与驱动', note: '驱动、示例程序、设备树。跟着硬件配置一起解出来。' },
];

// 首屏那段清单是真的 —— 这个世界里最有代表性的东西不是数字，是一份清单
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
