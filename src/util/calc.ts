interface inverI {
	scalX: number,
	scalY: number,
	left: number,
	top: number
}

// 获得一个默认值下的invert
function getDefaultInvert():inverI {
	return {
		left: 0,
		top: 0,
		scalX: 1,
		scalY: 1
	}
}

// 由上一个元素的位置以及下一次元素的位置计算出inver对象
export function calculateInvert(firstRect: DOMRectReadOnly,lastRect: DOMRectReadOnly):inverI{
	const invert:inverI = getDefaultInvert();
	invert.scalX = firstRect.width  / lastRect.width;
	invert.scalY = firstRect.height / lastRect.height;
	const width =  lastRect.width * (invert.scalX - 1) / 2;
	const height = lastRect.height * (invert.scalY - 1) / 2 ;
	invert.left = (firstRect.left - lastRect.left + width);
	invert.top = (firstRect.top - lastRect.top + height) ;
	return invert
}