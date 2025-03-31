export function capitalize<T extends string>(text: T) {
  return (text[0].toUpperCase() + text.slice(1)) as Capitalize<typeof text>;
}
