import { Columns, ImageDimension } from '../interfaces';

export function getMinColumn(col1: number, col2: number, col3: number): number {
  if (col1 <= col2 && col1 <= col3) {
    return 1;
  } else if (col2 < col1 && col2 <= col3) {
    return 2;
  } else {
    return 3;
  }
}

export function configureLayout(
  links: [],
  imgSize1: ImageDimension,
  imgSize2: ImageDimension
): Columns {
  let short = true;
  let col1 = 0;
  let col2 = 0;
  let col3 = 0;
  const columns = {
    one: [],
    two: [],
    three: []
  } as Columns;
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const shortestCol: number = getMinColumn(col1, col2, col3);
    console.log(shortestCol);
    if (shortestCol === 1) {
      columns.one.push(link);
      col1 += imgSize1.height;
    } else if (shortestCol === 2) {
      columns.two.push(link);
      col2 += imgSize2.height;
    } else {
      columns.three.push(link);
      col3 += short ? imgSize1.height : imgSize2.height;
      short = !short;
    }
  }
  return columns;
}
