export const nameToPath = ({ name }: { name: string }): string => {

  return name.toLowerCase().replaceAll(' ', '-');

}