import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese: { [key: string]: string; } = {
    Normal: 'ノーマル',
    Water: 'みず',
    Fire: 'ほのお',
    Electric: 'でんき',
    Grass: 'くさ',
    Ice: 'こおり',
    Flying: 'ひこう',
    Poison: 'どく',
    Bug: 'むし',
    Rock: 'いわ',
    Steel: 'はがね',
    Ground: 'じめん',
    Dragon: 'ドラゴン',
    Fighting: 'かくとう',
    Psychic: 'エスパー',
    Fairy: 'フェアリー',
    Dark: 'あく',
    Ghost: 'ゴースト',
  };

  transform(types: string[], ...args: unknown[]): unknown {
    return types.map(type => this.japanese[type] || type);
  }

}
