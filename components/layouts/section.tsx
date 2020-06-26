import { Box, Container, Text, Heading } from "theme-ui"

type Props = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  titleLabel?: React.ReactNode
  background?: "muted" | "dark"
}

const SectionLayout: React.FC<Props> = ({
  children,
  title,
  subtitle,
  titleLabel,
  background
}) => {
  let bg = "background"
  let titleColor = "text"
  let subTitleColor = "gray"
  switch (background) {
    case "muted":
      bg = "muted"
      break
    case "dark":
      bg = "text"
      titleColor = "background"
      subTitleColor = "lightGray"
      break
    default:
      break
  }

  return (
    <Box sx={{ bg, color: titleColor }}>
      <Container variant="section">
        {titleLabel && (
          <Text variant="section.titleLabel" sx={{ color: titleColor }}>
            {titleLabel}
          </Text>
        )}
        {title && (
          <Heading variant="section.title" sx={{ color: titleColor }}>
            {title}
          </Heading>
        )}
        {subtitle && (
          <Heading variant="section.subtitle" sx={{ color: subTitleColor }}>
            {subtitle}
          </Heading>
        )}
        {children}
      </Container>
    </Box>
  )
}

export default SectionLayout
