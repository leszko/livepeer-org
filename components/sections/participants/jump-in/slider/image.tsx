import { Image } from "theme-ui"

export type SliderImageProps = {
  src: string
  alt?: string
  className?: string
}

const SliderImage = ({ src, alt, className }: SliderImageProps) => (
  <Image
    className={className}
    sx={{ position: "relative", overflow: "hidden", borderRadius: "md" }}
    src={src}
    alt={alt}
  />
)

export default SliderImage
