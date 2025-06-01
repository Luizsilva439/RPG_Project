import { Dimensions, PixelRatio } from "react-native"

const { width, height } = Dimensions.get("window")

const px = (valuePx) => {
    return widthPercentage = (valuePx / figmaWidth) * 100
    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * parseFloat(widthPercentage)) / 100
    )
    return screenPixel
}

export const metrics = {
    px,
}